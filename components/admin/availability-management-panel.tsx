"use client"

import { useState, useEffect } from "react"
import { getAvailability, updateAvailability as saveAvailability } from '@/services/availability'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { addDays, format, isSameDay, startOfWeek, addWeeks, subWeeks, isWeekend } from "date-fns"
import { ChevronLeft, ChevronRight, Plus, Trash2, Save, Clock } from "lucide-react"
import { formatDateToYYYYMMDD } from "@/utils/date"
import { supabase } from "@/lib/supabase"


// Generate time slots for a day (9:00 AM to 6:00 PM in 15-minute intervals)
const generateTimeSlots = () => {
  const slots = []
  const startHour = 9
  const endHour = 18

  for (let hour = startHour; hour < endHour; hour++) {
    for (let minute = 0; minute < 60; minute += 15) {
      const time = `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`
      slots.push(time)
    }
  }

  return slots
}

// Mock data for available time slots
const generateInitialAvailability = () => {
  const today = new Date()
  const startDate = startOfWeek(today, { weekStartsOn: 1 }) // Start from Monday
  const availability = []

  // Generate availability for the next 4 weeks
  for (let week = 0; week < 4; week++) {
    for (let day = 0; day < 5; day++) {
      // Monday to Friday
      const date = addDays(addWeeks(startDate, week), day)

      // Generate random availability for demo purposes
      const daySlots = []
      const allTimeSlots = generateTimeSlots()

      // Randomly select ~70% of slots as available
      allTimeSlots.forEach((time) => {
        if (Math.random() > 0.3) {
          daySlots.push(time)
        }
      })

      availability.push({
        date,
        slots: daySlots,
      })
    }
  }

  return availability
}

type AvailabilitySlot = {
  date: Date
  slots: string[]
}

export function AvailabilityManagementPanel() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date())
  const [availability, setAvailability] = useState<AvailabilitySlot[]>([])
  const [weekStart, setWeekStart] = useState<Date>(startOfWeek(new Date(), { weekStartsOn: 1 }))
  const [selectedTimeSlots, setSelectedTimeSlots] = useState<string[]>([])
  const [bulkEditMode, setBulkEditMode] = useState(false)
  const [bulkSelectedDays, setBulkSelectedDays] = useState<number[]>([])

  const timeSlots = generateTimeSlots()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadAvailability() {
      const start = startOfWeek(new Date(), { weekStartsOn: 1 })
      const end = addWeeks(start, 4)

      try {
        const { data, error } = await supabase
          .from('availability')
          .select('*')
          .gte('date', start.toISOString())
          .lte('date', end.toISOString())

        if (error) {
          console.error('Failed to load availability:', error)
          return
        }

        const mapped = data.map((item: any) => ({
          date: new Date(item.date),
          slots: Array.isArray(item.slots)
            ? item.slots
            : typeof item.slots === "string"
              ? JSON.parse(item.slots)
              : [],
        }))        

        setAvailability(mapped)
      } catch (error) {
        console.error('Failed to load availability:', error)
      } finally {
        setLoading(false)
      }
    }

    loadAvailability()
  }, [])

  const [appointmentsForSelectedDate, setAppointmentsForSelectedDate] = useState<string[]>([])

  useEffect(() => {
    async function loadAppointmentsForDate() {
      if (!selectedDate) return

      const formattedDate = format(selectedDate, "yyyy-MM-dd")
      try {
        const { data, error } = await supabase
          .from("appointments")
          .select("time")
          .eq("date", formattedDate)

        if (error) {
          console.error("Error fetching appointments:", error)
          setAppointmentsForSelectedDate([])
        } else {
          const bookedTimes = data.map((appt) => {
            const [hour, minute] = new Date(appt.time).toISOString().split('T')[1].split(':')
            return `${hour}:${minute}`
          })
          setAppointmentsForSelectedDate(bookedTimes)
        }
      } catch (err) {
        console.error(err)
      }
    }

    loadAppointmentsForDate()
  }, [selectedDate])


  // Get availability for the selected date
  const getDateAvailability = (date: Date) => {
    const slot = availability.find((a) => isSameDay(a.date, date))
    return slot ? slot.slots : []
  }

  // Get days of the current week
  const weekDays = Array.from({ length: 7 }, (_, i) => addDays(weekStart, i))

  // Handle time slot toggle
  const toggleTimeSlot = (time: string) => {
    const currentAvailability = getDateAvailability(selectedDate)

    if (currentAvailability.includes(time)) {
      // Remove the time slot
      updateAvailability(
        selectedDate,
        currentAvailability.filter((t) => t !== time),
      )
    } else {
      // Add the time slot
      updateAvailability(selectedDate, [...currentAvailability, time].sort())
    }
  }

  // slotsDisponibles = slotsEnAvailability - slotsReservados
  const realAvailableSlots = getDateAvailability(selectedDate)?.filter((slot) => !appointmentsForSelectedDate.includes(slot)) || []

  // Update availability for a specific date
  const updateAvailability = (date: Date, slots: string[]) => {
    const existingIndex = availability.findIndex((a) => isSameDay(a.date, date))

    const newAvailability = [...availability]
    if (existingIndex >= 0) {
      newAvailability[existingIndex] = { date, slots }
    } else {
      newAvailability.push({ date, slots })
    }
    setAvailability(newAvailability)

    const formattedDate = formatDateToYYYYMMDD(date)

    // Save to Supabase
    saveAvailability(date, slots).catch((error) => {
      console.error('Failed to save availability:', error)
    })
  }

  // Handle bulk selection of time slots
  const toggleBulkTimeSlot = (time: string) => {
    if (selectedTimeSlots.includes(time)) {
      setSelectedTimeSlots(selectedTimeSlots.filter((t) => t !== time))
    } else {
      setSelectedTimeSlots([...selectedTimeSlots, time])
    }
  }

  // Toggle day selection for bulk edit
  const toggleBulkDay = (dayIndex: number) => {
    if (bulkSelectedDays.includes(dayIndex)) {
      setBulkSelectedDays(bulkSelectedDays.filter((d) => d !== dayIndex))
    } else {
      setBulkSelectedDays([...bulkSelectedDays, dayIndex])
    }
  }

  // Apply bulk edit
  const applyBulkEdit = () => {
    bulkSelectedDays.forEach((dayIndex) => {
      const date = addDays(weekStart, dayIndex)
      updateAvailability(date, [...selectedTimeSlots])
    })

    // Reset bulk edit mode
    setBulkEditMode(false)
    setBulkSelectedDays([])
    setSelectedTimeSlots([])
  }

  // Navigate to previous week
  const goToPreviousWeek = () => {
    setWeekStart(subWeeks(weekStart, 1))
  }

  // Navigate to next week
  const goToNextWeek = () => {
    setWeekStart(addWeeks(weekStart, 1))
  }

  // Clear all time slots for the selected date
  const clearDateAvailability = () => {
    updateAvailability(selectedDate, [])
  }

  // Set all time slots as available for the selected date
  const setAllAvailable = () => {
    updateAvailability(selectedDate, [...timeSlots])
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Availability Management</CardTitle>
        <CardDescription>Manage your available time slots for booking consultations</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-[300px_1fr]">
          {/* Calendar for date selection */}
          <div className="space-y-4">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={(date) => date && setSelectedDate(date)}
              className="border rounded-md"
              disabled={(date) => isWeekend(date)}
            />

            <div className="space-y-2">
              <h3 className="font-medium">Quick Actions</h3>
              <div className="flex flex-col gap-2">
                <Button variant="outline" size="sm" className="justify-start" onClick={setAllAvailable}>
                  <Plus className="mr-2 h-4 w-4" />
                  Set All Available
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
                  onClick={clearDateAvailability}
                >
                  <Trash2 className="mr-2 h-4 w-4" />
                  Clear All Time Slots
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="justify-start"
                  onClick={() => setBulkEditMode(!bulkEditMode)}
                >
                  {bulkEditMode ? (
                    <>
                      <Clock className="mr-2 h-4 w-4" />
                      Cancel Bulk Edit
                    </>
                  ) : (
                    <>
                      <Clock className="mr-2 h-4 w-4" />
                      Bulk Edit Time Slots
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>

          {/* Time slots management */}
          <div className="space-y-6">
            {bulkEditMode ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">Bulk Edit Time Slots</h3>
                  <Button
                    variant="default"
                    size="sm"
                    className="bg-teal-600 hover:bg-teal-700"
                    onClick={applyBulkEdit}
                    disabled={bulkSelectedDays.length === 0 || selectedTimeSlots.length === 0}
                  >
                    <Save className="mr-2 h-4 w-4" />
                    Apply to Selected Days
                  </Button>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="mb-2 font-medium">1. Select Days</h4>
                    <div className="flex flex-wrap gap-2">
                      {weekDays.map((day, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Checkbox
                            id={`day-${index}`}
                            checked={bulkSelectedDays.includes(index)}
                            onCheckedChange={() => toggleBulkDay(index)}
                            disabled={isWeekend(day)}
                          />
                          <Label htmlFor={`day-${index}`} className={isWeekend(day) ? "text-gray-400" : ""}>
                            {format(day, "EEE dd/MM")}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-2 font-medium">2. Select Time Slots</h4>
                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                      {timeSlots.map((time) => (
                        <div key={time} className="flex items-center space-x-2">
                          <Checkbox
                            id={`bulk-time-${time}`}
                            checked={selectedTimeSlots.includes(time)}
                            onCheckedChange={() => toggleBulkTimeSlot(time)}
                          />
                          <Label htmlFor={`bulk-time-${time}`}>{time}</Label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">{format(selectedDate, "EEEE, MMMM d, yyyy")}</h3>
                  <div className="text-sm text-gray-500">
                    {realAvailableSlots.length} time slots available
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                  {timeSlots.map((time) => {
                    const isAvailable = getDateAvailability(selectedDate).includes(time) && !appointmentsForSelectedDate.includes(time)
                    return (
                      <div
                        key={time}
                        className={`flex items-center justify-center rounded-md border p-2 cursor-pointer transition-colors ${isAvailable
                          ? "bg-green-50 border-green-200 text-green-700 hover:bg-green-100"
                          : "bg-gray-50 border-gray-200 text-gray-500 hover:bg-gray-100"
                          }`}
                        onClick={() => toggleTimeSlot(time)}
                      >
                        {time}
                      </div>
                    )
                  })}
                </div>
              </>
            )}

            <div className="mt-6 border-t pt-6">
              <h3 className="mb-4 text-lg font-medium">Weekly Schedule</h3>

              <div className="flex items-center justify-between mb-4">
                <Button variant="outline" size="sm" onClick={goToPreviousWeek}>
                  <ChevronLeft className="h-4 w-4" />
                  Previous Week
                </Button>
                <div className="font-medium">
                  {format(weekStart, "MMM d")} - {format(addDays(weekStart, 6), "MMM d, yyyy")}
                </div>
                <Button variant="outline" size="sm" onClick={goToNextWeek}>
                  Next Week
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>

              <div className="grid grid-cols-7 gap-2">
                {weekDays.map((day, index) => (
                  <div
                    key={index}
                    className={`rounded-md border p-2 text-center ${isWeekend(day)
                      ? "bg-gray-100 text-gray-400"
                      : isSameDay(day, selectedDate)
                        ? "bg-teal-50 border-teal-200"
                        : ""
                      }`}
                    onClick={() => !isWeekend(day) && setSelectedDate(day)}
                  >
                    <div className="font-medium">{format(day, "EEE")}</div>
                    <div className="text-sm">{format(day, "MMM d")}</div>
                    <div className="mt-1 text-xs">
                      {isWeekend(day) ? (
                        <span className="text-gray-400">Unavailable</span>
                      ) : (
                        <span className="text-green-600">{getDateAvailability(day).length} slots</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
