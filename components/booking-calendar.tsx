"use client"

import type React from "react"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Clock, CalendarIcon, CheckCircle, ChevronLeft } from "lucide-react"
import { format, addDays, isWeekend, isBefore, addMinutes } from "date-fns"
import { es } from "date-fns/locale"
import { useLanguage } from "@/contexts/language-context"
import { useMobile } from "@/hooks/use-mobile"
import { AnimatedSection } from "@/components/animated-section"
import { appointmentService } from '@/services/appointments'

// Available time slots (9:00 AM to 5:00 PM, 20-minute intervals)
const generateTimeSlots = (date: Date) => {
  const slots = []
  const startHour = 9
  const endHour = 17
  const intervalMinutes = 20

  for (let hour = startHour; hour < endHour; hour++) {
    for (let minute = 0; minute < 60; minute += intervalMinutes) {
      if (hour === endHour - 1 && minute > 40) continue // Don't go past end time

      const slotTime = new Date(date)
      slotTime.setHours(hour, minute, 0, 0)

      // Skip slots in the past for today
      if (isBefore(slotTime, new Date()) && date.toDateString() === new Date().toDateString()) {
        continue
      }

      slots.push(slotTime)
    }
  }

  return slots
}

// Simulate some slots being unavailable (in a real app, this would come from an API)
const isSlotAvailable = (slot: Date) => {
  // Make some random slots unavailable for demo purposes
  const hourMinute = slot.getHours() * 100 + slot.getMinutes()
  const dateNum = slot.getDate()

  // Make specific times unavailable based on date to simulate a realistic calendar
  return !(
    (hourMinute === 900 && dateNum % 2 === 0) ||
    (hourMinute === 1100 && dateNum % 3 === 0) ||
    (hourMinute === 1400 && dateNum % 2 === 1) ||
    (hourMinute === 1600 && dateNum % 4 === 0)
  )
}

export function BookingCalendar() {
  const { t, language } = useLanguage()
  const isMobile = useMobile()
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [timeSlot, setTimeSlot] = useState<Date | undefined>(undefined)
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    topic: "",
  })
  const [showConfirmation, setShowConfirmation] = useState(false)

  // Filter out weekends and past dates
  const disabledDays = (date: Date) => {
    return isWeekend(date) || isBefore(date, new Date().setHours(0, 0, 0, 0))
  }

  const handleDateSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate)
    setTimeSlot(undefined) // Reset time slot when date changes
    if (selectedDate) setStep(2)
  }

  const handleTimeSelect = (slot: Date) => {
    setTimeSlot(slot)
    setStep(3)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Submitting form...')
    if (!date || !timeSlot) {
      console.log('date or timeSlot is undefined');
      return
    }

    try {
      console.log('Creating appointment...')
      await appointmentService.createAppointment({
        full_name: formData.name,
        email: formData.email,
        phone: formData.phone,
        topic: formData.topic,
        date: date.toISOString().split('T')[0],
        time: timeSlot.toISOString(),
      })

      setShowConfirmation(true)
    } catch (error) {
      console.error("Error creating appointment:", error)
    }
  }

  const handleConfirmationClose = () => {
    // Reset the form
    setShowConfirmation(false)
    setDate(undefined)
    setTimeSlot(undefined)
    setStep(1)
    setFormData({
      name: "",
      email: "",
      phone: "",
      topic: "",
    })
  }

  const timeSlots = date ? generateTimeSlots(date) : []
  const availableTimeSlots = timeSlots.filter(isSlotAvailable)

  // Use the appropriate locale for date formatting based on selected language
  const dateLocale = language === "es" ? es : undefined

  return (
    <section id="booking" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        {/* Update section title to use elementType="heading" */}
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
          {/* How it works card - hide on mobile when on steps 2-3 to focus on booking process */}
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

          <Card className={`${isMobile && step > 1 ? "col-span-full" : ""}`}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>{t("booking.bookYourConsultation")}</CardTitle>
                {isMobile && step > 1 && (
                  <Button variant="ghost" size="sm" onClick={() => setStep(step - 1)}>
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
                </div>
              )}

              {step === 2 && date && (
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <CalendarIcon className="h-5 w-5 text-blue-gray shrink-0" />
                    <span className="font-medium">{format(date, "EEEE, MMMM d, yyyy", { locale: dateLocale })}</span>
                  </div>

                  <div className="text-sm text-gray-500 mb-4">{t("booking.timeZoneNote")}</div>

                  {availableTimeSlots.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                      {availableTimeSlots.map((slot, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          className={`flex items-center justify-center gap-2 py-5 ${timeSlot && timeSlot.getTime() === slot.getTime()
                              ? "border-teal-600 bg-teal-50 text-teal-700"
                              : ""
                            }`}
                          onClick={() => handleTimeSelect(slot)}
                        >
                          <Clock className="h-4 w-4 shrink-0" />
                          {format(slot, "HH:mm")}
                        </Button>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-gray-500">{t("booking.noSlots")}</p>
                      <Button variant="outline" className="mt-4" onClick={() => setStep(1)}>
                        {t("booking.chooseAnother")}
                      </Button>
                    </div>
                  )}
                </div>
              )}

              {step === 3 && date && timeSlot && (
                <form onSubmit={handleSubmit}>
                  <div className="flex items-center gap-2 mb-6 p-3 bg-blue-gray/10 rounded-md">
                    <CalendarIcon className="h-5 w-5 text-blue-gray shrink-0" />
                    <div>
                      <div className="font-medium">{format(date, "EEEE, MMMM d, yyyy", { locale: dateLocale })}</div>
                      <div className="text-sm text-gray-600">
                        {format(timeSlot, "HH:mm")} - {format(addMinutes(timeSlot, 20), "HH:mm")} (CET/CEST)
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
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder={t("booking.fullNamePlaceholder")}
                        required
                        className="h-12 text-base"
                      />
                    </div>

                    <div className="grid gap-3">
                      <Label htmlFor="email" className="text-base">
                        {t("booking.email")}
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder={t("booking.emailPlaceholder")}
                        required
                        className="h-12 text-base"
                      />
                    </div>

                    <div className="grid gap-3">
                      <Label htmlFor="phone" className="text-base">
                        {t("booking.phone")}
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder={t("booking.phonePlaceholder")}
                        required
                        className="h-12 text-base"
                      />
                    </div>

                    <div className="grid gap-3">
                      <Label htmlFor="topic" className="text-base">
                        {t("booking.topic")}
                      </Label>
                      <Textarea
                        id="topic"
                        name="topic"
                        value={formData.topic}
                        onChange={handleInputChange}
                        placeholder={t("booking.topicPlaceholder")}
                        className="min-h-[120px] text-base p-4"
                      />
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
                  disabled={!formData.name || !formData.email || !formData.phone}
                  className={`${!isMobile ? "ml-auto" : "w-full"} bg-blue-gray hover:bg-legal-accent-dark`}
                  onClick={handleSubmit}
                >
                  {t("booking.bookConsultation")}
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
                  {format(timeSlot, "HH:mm")} - {format(addMinutes(timeSlot, 20), "HH:mm")} (CET/CEST)
                </div>
              </div>
            </div>
          )}

          <div className="text-sm text-gray-500 space-y-2">
            <p>
              {t("booking.confirmationSent")} <span className="font-medium">{formData.email}</span>.
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
