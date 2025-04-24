"use client"

import { useState, useEffect } from "react"
import { getAppointments } from "@/services/appointments"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"
import { StatusBadge } from "@/components/ui/status-badge"
import { format, isWithinInterval, startOfDay, endOfDay, addDays } from "date-fns"
import { Download, CalendarIcon, Filter, User, Mail, Clock } from "lucide-react"

type Booking = {
  id: string
  name: string
  email: string
  date: Date
  status: "pending" | "accepted" | "rejected"
  topic: string
}

export function BookingOverviewPanel() {
  const [confirmedBookings, setConfirmedBookings] = useState<Booking[]>([])

  const [dateRange, setDateRange] = useState<{
    from: Date | undefined
    to: Date | undefined
  }>({
    from: new Date(),
    to: addDays(new Date(), 30),
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAppointments()
        setConfirmedBookings(data)
      } catch (error) {
        console.error("Error loading bookings:", error)
      }
    }

    fetchData()
  }, [])


  // Filter bookings based on date range
  const filteredBookings = confirmedBookings.filter((booking) => {
    if (!dateRange.from || !dateRange.to) return true

    return isWithinInterval(booking.date, {
      start: startOfDay(dateRange.from),
      end: endOfDay(dateRange.to),
    })
  })

  // Group bookings by date for the summary
  const bookingsByDate = filteredBookings.reduce(
    (acc, booking) => {
      const dateStr = format(booking.date, "yyyy-MM-dd")
      if (!acc[dateStr]) {
        acc[dateStr] = []
      }
      acc[dateStr].push(booking)
      return acc
    },
    {} as Record<string, Booking[]>,
  )

  // Sort dates for the summary
  const sortedDates = Object.keys(bookingsByDate).sort()

  // Export bookings as CSV
  const exportCSV = () => {
    // Headers for the CSV
    const headers = ["ID", "Name", "Email", "Date", "Time", "Status", "Topic"]

    // Format the data
    const data = filteredBookings.map((booking) => [
      booking.id,
      booking.name,
      booking.email,
      format(booking.date, "yyyy-MM-dd"),
      format(booking.date, "HH:mm"),
      booking.status,
      booking.topic,
    ])

    // Combine headers and data
    const csvContent = [headers.join(","), ...data.map((row) => row.join(","))].join("\n")

    // Create a blob and download
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.setAttribute("href", url)
    link.setAttribute("download", `bookings-export-${format(new Date(), "yyyy-MM-dd")}.csv`)
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
      <CardContent>
        <div className="grid gap-6 md:grid-cols-[300px_1fr]">
          {/* Filters and Summary */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="font-medium flex items-center">
                <Filter className="mr-2 h-4 w-4" />
                Date Range Filter
              </h3>
              <Calendar mode="range" selected={dateRange} onSelect={setDateRange} className="border rounded-md" />
            </div>

            <div className="space-y-2">
              <h3 className="font-medium">Booking Summary</h3>
              <Card>
                <CardContent className="p-4">
                  <div className="text-2xl font-bold">{filteredBookings.length}</div>
                  <div className="text-sm text-gray-500">Total Bookings</div>

                  <div className="mt-4 space-y-2">
                    {sortedDates.length > 0 ? (
                      sortedDates.map((dateStr) => {
                        const date = new Date(dateStr)
                        const bookings = bookingsByDate[dateStr]
                        return (
                          <div key={dateStr} className="flex justify-between items-center text-sm">
                            <div className="font-medium">{format(date, "EEE, MMM d")}</div>
                            <Badge variant="outline" className="bg-teal-50 text-teal-700">
                              {bookings.length} bookings
                            </Badge>
                          </div>
                        )
                      })
                    ) : (
                      <div className="text-sm text-gray-500">No bookings in selected date range</div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            <Button variant="outline" className="w-full" onClick={exportCSV} disabled={filteredBookings.length === 0}>
              <Download className="mr-2 h-4 w-4" />
              Export as CSV
            </Button>
          </div>

          {/* Bookings Table */}
          <div className="rounded-md border">
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
                          <span>{format(booking.date, "h:mm a")}</span>
                        </div>
                      </TableCell>
                      <TableCell className="max-w-[300px] truncate" title={booking.topic}>
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
        </div>
      </CardContent>
    </Card>
  )
}
