"use client"

import type React from "react"

import { useState, useEffect } from "react"

interface AvailabilitySlot {
  id: string
  date: string
  timeSlot: string
  isBooked: boolean
}

export default function BookingPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [selectedDate, setSelectedDate] = useState<string>("")
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>("")
  const [availableDates, setAvailableDates] = useState<string[]>([])
  const [availableTimeSlots, setAvailableTimeSlots] = useState<AvailabilitySlot[]>([])
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Fetch available dates (unique dates from availability)
  useEffect(() => {
    async function fetchAvailableDates() {
      try {
        const response = await fetch("/api/availability")

        if (!response.ok) {
          throw new Error("Failed to fetch available dates")
        }

        const data: AvailabilitySlot[] = await response.json()

        // Extract unique dates
        const uniqueDates = Array.from(
          new Set(data.map((slot) => new Date(slot.date).toISOString().split("T")[0])),
        ).sort()

        setAvailableDates(uniqueDates)
      } catch (err) {
        setError("Error fetching available dates")
        console.error(err)
      }
    }

    fetchAvailableDates()
  }, [])

  // Fetch available time slots for selected date
  useEffect(() => {
    if (!selectedDate) return

    async function fetchTimeSlots() {
      try {
        const response = await fetch(`/api/availability?date=${selectedDate}`)

        if (!response.ok) {
          throw new Error("Failed to fetch time slots")
        }

        const data: AvailabilitySlot[] = await response.json()
        setAvailableTimeSlots(data)
      } catch (err) {
        setError("Error fetching time slots")
        console.error(err)
      }
    }

    fetchTimeSlots()
  }, [selectedDate])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const response = await fetch("/api/bookings/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          date: selectedDate,
          timeSlot: selectedTimeSlot,
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || "Failed to create booking")
      }

      setSuccess(true)
      // Reset form
      setName("")
      setEmail("")
      setSelectedDate("")
      setSelectedTimeSlot("")
    } catch (err: any) {
      setError(err.message || "Error creating booking")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto p-4 max-w-md">
      <h1 className="text-2xl font-bold mb-6">Book an Appointment</h1>

      {success ? (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          <p>Booking successful! We'll contact you soon to confirm your appointment.</p>
          <button
            onClick={() => setSuccess(false)}
            className="mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Book Another Appointment
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">{error}</div>}

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>

          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">
              Date
            </label>
            <select
              id="date"
              value={selectedDate}
              onChange={(e) => {
                setSelectedDate(e.target.value)
                setSelectedTimeSlot("")
              }}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            >
              <option value="">Select a date</option>
              {availableDates.map((date) => (
                <option key={date} value={date}>
                  {new Date(date).toLocaleDateString()}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="timeSlot" className="block text-sm font-medium text-gray-700">
              Time
            </label>
            <select
              id="timeSlot"
              value={selectedTimeSlot}
              onChange={(e) => setSelectedTimeSlot(e.target.value)}
              required
              disabled={!selectedDate}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            >
              <option value="">Select a time</option>
              {availableTimeSlots.map((slot) => (
                <option key={slot.id} value={slot.timeSlot}>
                  {slot.timeSlot}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 disabled:bg-blue-300"
          >
            {loading ? "Booking..." : "Book Appointment"}
          </button>
        </form>
      )}
    </div>
  )
}
