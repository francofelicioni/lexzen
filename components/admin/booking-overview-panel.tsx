"use client"

import { useState, useEffect, useMemo } from "react"
import { getAppointments } from "@/services/appointments"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"
import { StatusBadge } from "@/components/ui/status-badge"
import { format, isWithinInterval, startOfDay, endOfDay, addDays } from "date-fns"
import { Download, CalendarIcon, Filter, User, Mail, Clock } from "lucide-react"
import { parseDateTime } from "@/utils/date"

type Booking = {
  id: string
  name: string
  email: string
  date: string
  time: string
  status: "pending" | "accepted" | "rejected"
  topic: string
}

export function BookingOverviewPanel() {
  const [confirmedBookings, setConfirmedBookings] = useState<Booking[]>([])
  const [dateRange, setDateRange] = useState<{ from: Date | undefined; to: Date | undefined }>({
    from: undefined,
    to: undefined,
  })

  useEffect(() => {
    setDateRange({
      from: new Date(),
      to: addDays(new Date(), 30),
    })
  }, [])

  useEffect(() => {
    let isMounted = true
    async function fetchData() {
      const data = await getAppointments()
      if (isMounted) setConfirmedBookings(data)
    }
    fetchData()
    return () => { isMounted = false }
  }, [])

  // Filter bookings based on date range
  const filteredBookings = useMemo(() => {
    if (!dateRange.from || !dateRange.to) return confirmedBookings
    return confirmedBookings.filter((booking) =>
      isWithinInterval(parseDateTime(booking.date, booking.time), {
        start: startOfDay(dateRange.from ?? new Date()),
        end: endOfDay(dateRange.to ?? new Date()),
      })
    )
  }, [confirmedBookings, dateRange])

  // Group bookings by date for the summary
  const bookingsByDate = filteredBookings.reduce((acc, booking) => {
    const dateStr = format(booking.date, "yyyy-MM-dd")
    if (!acc[dateStr]) {
      acc[dateStr] = []
    }
    acc[dateStr].push(booking)
    return acc
  }, {} as Record<string, Booking[]>)

  const sortedDates = Object.keys(bookingsByDate).sort()

  const exportCSV = () => {
    const headers = ["ID", "Name", "Email", "Date", "Time", "Status", "Topic"]
    const data = filteredBookings.map((booking) => [
      booking.id,
      booking.name,
      booking.email,
      booking.date,
      format(new Date(`${booking.date}T${booking.time}`), "HH:mm"),
      booking.status,
      booking.topic,
    ])
    const csvContent = [headers.join(","), ...data.map((row) => row.join(","))].join("\n")
    const now = new Date()
    const fileName = `bookings-export-${format(now, "yyyy-MM-dd")}.csv`
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.setAttribute("href", url)
    link.setAttribute("download", fileName)
    link.style.visibility = "hidden"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Booking Overview</CardTitle>
        <CardDescription>View and manage all confirmed bookings</CardDescription>
      </CardHeader>
      <CardContent className="p-4 sm:p-6">
        <div className="flex flex-col gap-6 md:grid md:grid-cols-[300px_1fr]">
          {/* Filters and Summary */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="font-medium flex items-center">
                <Filter className="mr-2 h-4 w-4" />
                Date Range Filter
              </h3>
              <Calendar
                mode="range"
                selected={dateRange}
                onSelect={setDateRange}
                className="border rounded-md"
              />
            </div>

            <div className="space-y-2">
              <h3 className="font-medium">Booking Summary</h3>
              <Card>
                <CardContent className="p-4 sm:p-6">
                  <div className="text-2xl sm:text-3xl font-bold">
                    {filteredBookings.length}
                  </div>
                  <div className="text-sm text-gray-500">Total Bookings</div>

                  <div className="mt-4 space-y-2">
                    {sortedDates.length > 0 ? (
                      sortedDates.map((dateStr) => {
                        const date = new Date(dateStr)
                        const bookings = bookingsByDate[dateStr]
                        return (
                          <div
                            key={dateStr}
                            className="flex justify-between items-center text-sm"
                          >
                            <div className="font-medium">
                              {format(date, "EEE, MMM d")}
                            </div>
                            <Badge variant="outline" className="bg-teal-50 text-teal-700">
                              {bookings.length} bookings
                            </Badge>
                          </div>
                        )
                      })
                    ) : (
                      <div role="status" className="text-sm text-gray-500">
                        No bookings in selected date range
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            <Button
              variant="outline"
              className="w-full mt-4"
              onClick={exportCSV}
              disabled={filteredBookings.length === 0}
              aria-label="Export bookings as CSV"
            >
              <Download className="mr-2 h-4 w-4" />
              Export as CSV
            </Button>
          </div>

          {/* Bookings Table */}
          <div className="rounded-md border overflow-x-auto">
            {/* Desktop Table */}
            <div className="hidden md:block">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Client</TableHead>
                    <TableHead>Date & Time</TableHead>
                    <TableHead>Topic</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredBookings.length > 0 ? (
                    filteredBookings.map((booking) => (
                      <TableRow key={booking.id}>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <div className="rounded-full bg-gray-100 p-1">
                              <User className="h-4 w-4 text-gray-500" />
                            </div>
                            <div>
                              <div className="font-medium">{booking.name}</div>
                              <div className="flex items-center text-sm text-gray-500">
                                <Mail className="mr-1 h-3 w-3" />
                                {booking.email}
                              </div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <CalendarIcon className="mr-1 h-4 w-4 text-gray-500" />
                            <span>{format(booking.date, "MMM d, yyyy")}</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-500">
                            <Clock className="mr-1 h-3 w-3" />
                            <span>{format(new Date(`${booking.date}T${booking.time}`), "h:mm a")}</span>
                          </div>
                        </TableCell>
                        <TableCell className="truncate sm:max-w-[300px]" title={booking.topic}>
                          {booking.topic}
                        </TableCell>
                        <TableCell>
                          <StatusBadge status={booking.status} />
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={4} className="h-24 text-center">
                        No bookings found for the selected date range.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>

            {/* Mobile Cards */}
            <div className="block md:hidden space-y-4">
              {filteredBookings.length > 0 ? (
                filteredBookings.map((booking) => (
                  <div key={booking.id} className="border rounded-md p-4 space-y-2 shadow-sm">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-gray-500" />
                      <div>
                        <div className="font-medium">{booking.name}</div>
                        <div className="text-sm text-gray-500 flex items-center">
                          <Mail className="mr-1 h-3 w-3" />
                          {booking.email}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <CalendarIcon className="h-4 w-4" />
                      <span>{format(booking.date, "MMM d, yyyy")}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span>{format(new Date(`${booking.date}T${booking.time}`), "h:mm a")}</span>
                    </div>
                    <div className="text-sm text-gray-800">
                      <span className="font-medium">Topic:</span> {booking.topic}
                    </div>
                    <div>
                      <StatusBadge status={booking.status} />
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center text-gray-500 py-6">
                  No bookings found for the selected date range.
                </div>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
