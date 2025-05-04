"use client"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { supabase } from "@/lib/supabase"
import { updateAvailability as saveAvailability } from '@/services/availability'
import { addDays, addWeeks, format, isSameDay, isWeekend, startOfWeek, subWeeks } from "date-fns"
import { ChevronLeft, ChevronRight, Clock, Plus, Save, Trash2 } from "lucide-react"
import { useEffect, useState } from "react"


// Generate time slots for a day (9:00 AM to 6:00 PM in 15-minute intervals)
const generateTimeSlots = () => {
  const slots: string[] = []

  const addRange = (startHour: number, endHour: number, interval: number) => {
    for (let hour = startHour; hour < endHour; hour++) {
      for (let minute = 0; minute < 60; minute += interval) {
        slots.push(`${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`)
      }
    }
  }

  // Morning: 10:00 a 14:00
  // addRange(10, 14, 30)

  // Afternoon: 16:00 a 20:00
  addRange(16, 20, 15)

  return slots
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

  const loadAvailability = async () => {
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

      const mapped = data.map((item: any) => {
        const [year, month, day] = item.date.split('-').map(Number)
        const parsedDate = new Date(Date.UTC(year, month - 1, day))
        const localDate = new Date(parsedDate.getUTCFullYear(), parsedDate.getUTCMonth(), parsedDate.getUTCDate())

        return {
          date: localDate,
          slots: Array.isArray(item.slots)
            ? item.slots
            : typeof item.slots === 'string'
              ? JSON.parse(item.slots)
              : [],
        }
      })

      setAvailability(mapped)
    } catch (error) {
      console.error('Failed to load availability:', error)
    }
  }

  useEffect(() => {
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
          const bookedTimes = data.map((appt) => appt.time)

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
  const updateAvailability = async (date: Date, slots: string[]) => {
    const existingIndex = availability.findIndex((a) => isSameDay(a.date, date))

    const newAvailability = [...availability]
    if (existingIndex >= 0) {
      newAvailability[existingIndex] = { date, slots }
    } else {
      newAvailability.push({ date, slots })
    }
    setAvailability(newAvailability)

    return saveAvailability(date, slots)
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
  const applyBulkEdit = async () => {
    const promises = bulkSelectedDays.map((dayIndex) => {
      const date = addDays(weekStart, dayIndex)
      return updateAvailability(date, [...selectedTimeSlots])
    })
  
    await Promise.all(promises)
  
    await loadAvailability()
  
    if (bulkSelectedDays.length > 0) {
      const firstDay = addDays(weekStart, bulkSelectedDays[0])
      setSelectedDate(firstDay)
    }

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
              <h3 className="mb-4 text-lg font-medium text-center md:text-left">Weekly Schedule</h3>

              <div className="flex flex-col md:flex-row items-center justify-between mb-4">
                <Button variant="outline" size="sm" onClick={goToPreviousWeek}>
                  <ChevronLeft className="size-4" />
                  Previous Week
                </Button>
                <div className="font-medium text-sm my-4">
                  {format(weekStart, "MMM d")} - {format(addDays(weekStart, 6), "MMM d, yyyy")}
                </div>
                <Button variant="outline" size="sm" onClick={goToNextWeek}>
                  Next Week
                  <ChevronRight className="size-4" />
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-7 gap-2">
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
