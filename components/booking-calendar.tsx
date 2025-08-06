"use client"

import { useEffect, useRef, useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { appointmentService } from '@/services/appointments'
import { getAvailabilityForDate, removeSlotFromAvailability } from '@/services/availability'
import { bookingSchema, BookingFormData } from "@/schemas/booking"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Clock, CalendarIcon, CheckCircle, ChevronLeft } from "lucide-react"
import { format, addDays, isWeekend, isBefore, addMinutes, formatDate } from "date-fns"
import { es } from "date-fns/locale"
import { useLanguage } from "@/contexts/language-context"
import { useMobile } from "@/hooks/use-mobile"
import { AnimatedSection } from "@/components/animated-section"
import { toast } from "react-hot-toast"

export function BookingCalendar() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    topic: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const { t, language } = useLanguage()
  const isMobile = useMobile()
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [availableSlots, setAvailableSlots] = useState<string[]>([])
  const [timeSlot, setTimeSlot] = useState<Date | undefined>(undefined)
  const [step, setStep] = useState(1)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [loadingSlots, setLoadingSlots] = useState(false)
  const [confirmedEmail, setConfirmedEmail] = useState("")
  const formRef = useRef<HTMLDivElement>(null)

  const dateLocale = language === "es" ? es : undefined

  useEffect(() => {
    if (isMobile && step > 1 && formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }, [step, isMobile])

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    reset,
    watch,
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    mode: "onChange",
  })

  const disabledDays = (date: Date) => isWeekend(date) || isBefore(date, new Date().setHours(0, 0, 0, 0))

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleDateSelect = async (selectedDate: Date | undefined) => {
    setDate(selectedDate)
    setTimeSlot(undefined)
    if (selectedDate) {
      setStep(2)
      setLoadingSlots(true)
      try {
        const slots = await getAvailabilityForDate(selectedDate)
        setAvailableSlots(slots)
      } catch (error) {
        console.error('Failed to fetch availability:', error)
        setAvailableSlots([])
      } finally {
        setLoadingSlots(false)
      }
    }
  }

  const handleTimeSelect = (slot: Date) => {
    setTimeSlot(slot)
    setStep(3)
  }

  const onSubmit = async (data: BookingFormData) => {
    if (!date || !timeSlot) return

    const appointmentDate = formatDate(date, "yyyy-MM-dd")
    const localHours = timeSlot.getHours().toString().padStart(2, '0')
    const localMinutes = timeSlot.getMinutes().toString().padStart(2, '0')
    const appointmentTime = `${localHours}:${localMinutes}`

    try {
      const isAvailable = await appointmentService.checkAvailability(appointmentDate, appointmentTime)
      if (!isAvailable) {
        toast.error(t("booking.slotTaken"))
        setStep(2)
        return
      }

      await appointmentService.createAppointment({
        full_name: data.name,
        email: data.email,
        phone: data.phone,
        topic: data.topic ?? null,
        date: appointmentDate,
        time: appointmentTime,
      })

      await fetch("/api/send-confirmation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          topic: data.topic,
          date: appointmentDate,
          time: appointmentTime,
          lang: language,
        }),
      })

      await removeSlotFromAvailability(appointmentDate, appointmentTime)

      setFormData({
        name: data.name,
        email: data.email,
        phone: data.phone,
        topic: data.topic || "",
      })

      setConfirmedEmail(data.email)
      setShowConfirmation(true)
      reset()
    } catch (error) {
      console.error("Error creating appointment:", error)
    }
  }

  const handleConfirmationClose = () => {
    setShowConfirmation(false)
    setDate(undefined)
    setTimeSlot(undefined)
    setStep(1)
    reset()
  }

  return (
    <section id="booking" className="w-full py-8 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <AnimatedSection direction="up" elementType="heading">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-blue-gray/10 px-3 py-1 text-sm text-blue-gray">
                {t("nav.bookCall")}
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{t("booking.title")}</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {t("booking.subtitle")}
              </p>
            </div>
          </AnimatedSection>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Calendar */}
          <Card className={`border-teal-100 ${isMobile && step > 1 ? "hidden" : ""}`}>
            <CardHeader>
              <CardTitle>{t("booking.howItWorks")}</CardTitle>
              <CardDescription>{t("booking.howItWorksDesc")}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-gray/10 text-blue-gray">
                  1
                </div>
                <div>
                  <h3 className="font-medium">{t("booking.step1")}</h3>
                  <p className="text-sm text-gray-500">{t("booking.step1Desc")}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-gray/10 text-blue-gray">
                  2
                </div>
                <div>
                  <h3 className="font-medium">{t("booking.step2")}</h3>
                  <p className="text-sm text-gray-500">{t("booking.step2Desc")}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-gray/10 text-blue-gray">
                  3
                </div>
                <div>
                  <h3 className="font-medium">{t("booking.step3")}</h3>
                  <p className="text-sm text-gray-500">{t("booking.step3Desc")}</p>
                </div>
              </div>
              <div className="mt-6 rounded-lg bg-blue-gray/10 p-4 text-sm">
                <p className="font-medium text-blue-gray">{t("booking.consultationIncludes")}</p>
                <ul className="mt-2 space-y-1 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-gray mt-0.5 shrink-0" />
                    <span>{t("booking.consultationItem1")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-gray mt-0.5 shrink-0" />
                    <span>{t("booking.consultationItem2")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-gray mt-0.5 shrink-0" />
                    <span>{t("booking.consultationItem3")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-gray mt-0.5 shrink-0" />
                    <span>{t("booking.consultationItem4")}</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Booking */}
          <Card className={`${isMobile && step > 1 ? "col-span-full" : ""}`} id="bookingCalendar" ref={formRef}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>{t("booking.bookYourConsultation")}</CardTitle>
                {isMobile && step > 1 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setStep(step - 1)
                      if (formRef.current) {
                        setTimeout(() => {
                          formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
                        }, 100)
                      }
                    }}
                  >
                    <ChevronLeft className="h-4 w-4 mr-1" />
                    {t("booking.back")}
                  </Button>
                )}
              </div>
              <CardDescription>
                {step === 1 && t("booking.selectDate")}
                {step === 2 && t("booking.chooseTime")}
                {step === 3 && t("booking.completeDetails")}
              </CardDescription>
            </CardHeader>

            <CardContent>
              {step === 1 && (
                <div className="flex justify-center">
                  {mounted && (
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={handleDateSelect}
                      disabled={disabledDays}
                      locale={dateLocale}
                      fromDate={new Date()}
                      toDate={addDays(new Date(), 30)}
                      className="rounded-md border"
                    />
                  )}
                </div>
              )}

              {step === 2 && date && (
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <CalendarIcon className="h-5 w-5 text-blue-gray shrink-0" />
                    <span className="font-medium">{format(date, "EEEE, MMMM d, yyyy", { locale: dateLocale })}</span>
                  </div>

                  <div className="text-sm text-gray-500 mb-4">{t("booking.timeZoneNote")}</div>

                  {loadingSlots ? (
                    <div className="text-center py-8">
                      <p className="text-gray-500">{t("booking.loadingSlots")}</p>
                    </div>
                  ) : availableSlots.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                      {availableSlots
                        .sort((a, b) => a.localeCompare(b))
                        .map((timeString, index) => {
                          const slotTime = new Date(date)
                          const [hours, minutes] = timeString.split(":").map(Number)
                          slotTime.setHours(hours, minutes, 0, 0)
                          return (
                            <Button
                              key={index}
                              variant="outline"
                              className={`flex items-center justify-center gap-2 py-5 ${
                                slotTime instanceof Date &&
                                timeSlot instanceof Date &&
                                !isNaN(slotTime.getTime()) &&
                                !isNaN(timeSlot.getTime()) &&
                                slotTime.toISOString() === timeSlot.toISOString()
                                  ? "border-teal-600 bg-teal-50 text-teal-700"
                                  : ""
                              }`}
                              onClick={() => handleTimeSelect(slotTime)}
                            >
                              <Clock className="h-4 w-4 shrink-0" />
                              {timeString}
                            </Button>
                          );                          
                        })}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-gray-500">{t("booking.noSlots")}</p>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          setStep(step - 1)
                          if (formRef.current) {
                            setTimeout(() => {
                              formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
                            }, 100)
                          }
                        }}
                      >
                        <ChevronLeft className="h-4 w-4 mr-1" />
                        {t("booking.chooseAnother")}
                      </Button>

                    </div>
                  )}
                </div>
              )}

              {step === 3 && date && timeSlot && (
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="flex items-center gap-2 mb-6 p-3 bg-blue-gray/10 rounded-md">
                    <CalendarIcon className="h-5 w-5 text-blue-gray shrink-0" />
                    <div>
                      <div className="font-medium">
                        {format(date, "EEEE, MMMM d, yyyy", { locale: dateLocale })}
                      </div>
                      <div className="text-sm text-gray-600">
                        {format(timeSlot, "HH:mm")} - {format(addMinutes(timeSlot, 15), "HH:mm")} (CET/CEST)
                      </div>
                    </div>
                  </div>

                  <div className="space-y-5">
                    <div className="grid gap-3">
                      <Label htmlFor="name" className="text-base">
                        {t("booking.fullName")}
                      </Label>
                      <Input
                        id="name"
                        {...register("name")}
                        placeholder={t("booking.fullNamePlaceholder")}
                        className="h-12 text-base"
                      />
                      {errors.name && (
                        <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
                      )}
                    </div>

                    <div className="grid gap-3">
                      <Label htmlFor="email" className="text-base">
                        {t("booking.email")}
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        {...register("email")}
                        placeholder={t("booking.emailPlaceholder")}
                        className="h-12 text-base"
                      />
                      {errors.email && (
                        <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
                      )}
                    </div>

                    <div className="grid gap-3">
                      <Label htmlFor="phone" className="text-base">
                        {t("booking.phone")}
                      </Label>
                      <Input
                        id="phone"
                        {...register("phone")}
                        placeholder={t("booking.phonePlaceholder")}
                        className="h-12 text-base"
                      />
                      {errors.phone && (
                        <p className="text-sm text-red-500 mt-1">{errors.phone.message}</p>
                      )}
                    </div>

                    <div className="grid gap-3">
                      <Label htmlFor="topic" className="text-base">
                        {t("booking.topic")}
                      </Label>
                      <Textarea
                        id="topic"
                        {...register("topic")}
                        placeholder={t("booking.topicPlaceholder")}
                        className="min-h-[120px] text-base p-4"
                      />
                      {errors.topic && (
                        <p className="text-sm text-red-500 mt-1">{errors.topic.message}</p>
                      )}
                    </div>
                  </div>
                </form>
              )}

            </CardContent>

            <CardFooter className="flex justify-between">
              {step > 1 && !isMobile && (
                <Button variant="outline" onClick={() => setStep(step - 1)}>
                  {t("booking.back")}
                </Button>
              )}

              {step === 1 && (
                <Button
                  disabled={!date}
                  className={`${!isMobile ? "ml-auto" : "w-full"} bg-blue-gray hover:bg-legal-accent-dark`}
                  onClick={() => date && setStep(2)}
                >
                  {t("booking.continue")}
                </Button>
              )}

              {step === 2 && (
                <Button
                  disabled={!timeSlot}
                  className={`${!isMobile ? "ml-auto" : "w-full"} bg-blue-gray hover:bg-legal-accent-dark`}
                  onClick={() => timeSlot && setStep(3)}
                >
                  {t("booking.continue")}
                </Button>
              )}

              {step === 3 && (
                <Button
                  type="submit"
                  disabled={!isValid || isSubmitting}
                  className={`${!isMobile ? "ml-auto" : "w-full"} bg-blue-gray hover:bg-legal-accent-dark`}
                  onClick={handleSubmit(onSubmit)}
                >
                  {loadingSlots ? t("booking.submitting") : t("booking.bookConsultation")}
                </Button>
              )}
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* Confirmation Dialog */}
      <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{t("booking.consultationBooked")}</DialogTitle>
            <DialogDescription>{t("booking.consultationScheduled")}</DialogDescription>
          </DialogHeader>

          {date && timeSlot && (
            <div className="p-4 bg-blue-gray/10 rounded-md space-y-3">
              <div className="flex items-center gap-2">
                <CalendarIcon className="h-5 w-5 text-blue-gray shrink-0" />
                <div className="font-medium">{format(date, "EEEE, MMMM d, yyyy", { locale: dateLocale })}</div>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-blue-gray shrink-0" />
                <div className="font-medium">
                  {format(timeSlot, "HH:mm")} - {format(addMinutes(timeSlot, 15), "HH:mm")} (CET/CEST)
                </div>
              </div>
            </div>
          )}

          <div className="text-sm text-gray-500 space-y-2">
            <p>
              {t("booking.confirmationSent")} <span className="font-medium">{confirmedEmail}</span>.
            </p>
            <p>{t("booking.teamContact")}</p>
          </div>

          <DialogFooter>
            <Button className="w-full bg-blue-gray hover:bg-legal-accent-dark" onClick={handleConfirmationClose}>
              {t("booking.done")}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  )
}
