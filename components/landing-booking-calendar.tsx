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
import { toast } from "react-hot-toast"

export function LandingBookingCalendar() {
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
    <div id="bookingCalendar" className="w-full max-w-4xl mx-auto">
      <Card className="border-2 border-blue-gray/20 shadow-xl" ref={formRef}>
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-blue-gray">
            {t("booking.bookYourConsultation")}
          </CardTitle>
          <CardDescription className="text-lg">
            {step === 1 && t("booking.selectDate")}
            {step === 2 && t("booking.chooseTime")}
            {step === 3 && t("booking.completeDetails")}
          </CardDescription>
        </CardHeader>

        <CardContent className="p-6">
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
              <div className="flex items-center gap-2 mb-6 p-4 bg-blue-gray/10 rounded-lg">
                <CalendarIcon className="h-6 w-6 text-blue-gray shrink-0" />
                <span className="font-semibold text-lg">
                  {format(date, "EEEE, MMMM d, yyyy", { locale: dateLocale })}
                </span>
              </div>

              <div className="text-sm text-gray-600 mb-6 text-center">
                {t("booking.timeZoneNote")}
              </div>

              {loadingSlots ? (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">{t("booking.loadingSlots")}</p>
                </div>
              ) : availableSlots.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
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
                          className={`flex items-center justify-center gap-2 py-6 text-lg font-medium ${
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
                          <Clock className="h-5 w-5 shrink-0" />
                          {timeString}
                        </Button>
                      )
                    })}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg mb-4">{t("booking.noSlots")}</p>
                  <Button
                    variant="outline"
                    onClick={() => setStep(1)}
                  >
                    <ChevronLeft className="h-4 w-4 mr-2" />
                    {t("booking.chooseAnother")}
                  </Button>
                </div>
              )}
            </div>
          )}

          {step === 3 && date && timeSlot && (
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex items-center gap-3 mb-8 p-4 bg-blue-gray/10 rounded-lg">
                <CalendarIcon className="h-6 w-6 text-blue-gray shrink-0" />
                <div>
                  <div className="font-semibold text-lg">
                    {format(date, "EEEE, MMMM d, yyyy", { locale: dateLocale })}
                  </div>
                  <div className="text-gray-600">
                    {format(timeSlot, "HH:mm")} - {format(addMinutes(timeSlot, 15), "HH:mm")} (CET/CEST)
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="grid gap-3">
                  <Label htmlFor="name" className="text-lg font-medium">
                    {t("booking.fullName")}
                  </Label>
                  <Input
                    id="name"
                    {...register("name")}
                    placeholder={t("booking.fullNamePlaceholder")}
                    className="h-14 text-lg"
                  />
                  {errors.name && (
                    <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div className="grid gap-3">
                  <Label htmlFor="email" className="text-lg font-medium">
                    {t("booking.email")}
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email")}
                    placeholder={t("booking.emailPlaceholder")}
                    className="h-14 text-lg"
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div className="grid gap-3">
                  <Label htmlFor="phone" className="text-lg font-medium">
                    {t("booking.phone")}
                  </Label>
                  <Input
                    id="phone"
                    {...register("phone")}
                    placeholder={t("booking.phonePlaceholder")}
                    className="h-14 text-lg"
                  />
                  {errors.phone && (
                    <p className="text-sm text-red-500 mt-1">{errors.phone.message}</p>
                  )}
                </div>

                <div className="grid gap-3">
                  <Label htmlFor="topic" className="text-lg font-medium">
                    {t("booking.topic")}
                  </Label>
                  <Textarea
                    id="topic"
                    {...register("topic")}
                    placeholder={t("booking.topicPlaceholder")}
                    className="min-h-[140px] text-lg p-4"
                  />
                  {errors.topic && (
                    <p className="text-sm text-red-500 mt-1">{errors.topic.message}</p>
                  )}
                </div>
              </div>
            </form>
          )}
        </CardContent>

        <CardFooter className="flex justify-between p-6">
          {step > 1 && !isMobile && (
            <Button variant="outline" onClick={() => setStep(step - 1)}>
              {t("booking.back")}
            </Button>
          )}

          {step === 1 && (
            <Button
              disabled={!date}
              className={`${!isMobile ? "ml-auto" : "w-full"} bg-blue-gray hover:bg-legal-accent-dark text-white px-8 py-4 text-lg font-semibold`}
              onClick={() => date && setStep(2)}
            >
              {t("booking.continue")}
            </Button>
          )}

          {step === 2 && (
            <Button
              disabled={!timeSlot}
              className={`${!isMobile ? "ml-auto" : "w-full"} bg-blue-gray hover:bg-legal-accent-dark text-white px-8 py-4 text-lg font-semibold`}
              onClick={() => timeSlot && setStep(3)}
            >
              {t("booking.continue")}
            </Button>
          )}

          {step === 3 && (
            <Button
              type="submit"
              disabled={!isValid || isSubmitting}
              className={`${!isMobile ? "ml-auto" : "w-full"} bg-blue-gray hover:bg-legal-accent-dark text-white px-8 py-4 text-lg font-semibold`}
              onClick={handleSubmit(onSubmit)}
            >
              {isSubmitting ? t("booking.submitting") : t("booking.bookConsultation")}
            </Button>
          )}
        </CardFooter>
      </Card>

      {/* Confirmation Dialog */}
      <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl">{t("booking.consultationBooked")}</DialogTitle>
            <DialogDescription className="text-lg">
              {t("booking.consultationScheduled")}
            </DialogDescription>
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
    </div>
  )
} 