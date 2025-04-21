"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"
import { format, isWithinInterval, startOfDay, endOfDay, addDays } from "date-fns"
import { Download, CalendarIcon, Filter, User, Mail, Clock } from "lucide-react"

// Mock data for confirmed bookings
const confirmedBookings = [
  {
    id: "101",
    name: "Emma Wilson",
    email: "emma.wilson@example.com",
    date: new Date(2025, 4, 15, 9, 0),
    status: "upcoming",
    topic: "GDPR compliance for e-commerce website",
  },
  {
    id: "102",
    name: "Michael Brown",
    email: "michael.brown@example.com",
    date: new Date(2025, 4, 15, 11, 30),
    status: "upcoming",
    topic: "Contract review for software development agreement",
  },
  {
    id: "103",
    name: "Sophia Chen",
    email: "sophia.chen@example.com",
    date: new Date(2025, 4, 16, 14, 0),
    status: "upcoming",
    topic: "EU residency application for family members",
  },
  {
    id: "104",
    name: "James Taylor",
    email: "james.taylor@example.com",
    date: new Date(2025, 4, 17, 10, 15),
    status: "upcoming",
    topic: "Legal structure for new digital business",
  },
  {
    id: "105",
    name: "Isabella Martinez",
    email: "isabella.martinez@example.com",
    date: new Date(2025, 4, 18, 15, 45),
    status: "upcoming",
    topic: "Privacy policy review for mobile application",
  },
  {
    id: "106",
    name: "Lucas Johnson",
    email: "lucas.johnson@example.com",
    date: new Date(2025, 4, 19, 13, 30),
    status: "upcoming",
    topic: "Intellectual property protection for digital content",
  },
  {
    id: "107",
    name: "Olivia Davis",
    email: "olivia.davis@example.com",
    date: new Date(2025, 4, 22, 9, 45),
    status: "upcoming",
    topic: "Terms of service for SaaS platform",
  },
  {
    id: "108",
    name: "Noah Garcia",
    email: "noah.garcia@example.com",
    date: new Date(2025, 4, 23, 16, 0),
    status: "upcoming",
    topic: "Data processing agreement review",
  },
]

type Booking = {
  id: string
  name: string
  email: string
  date: Date
  status: "upcoming" | "completed" | "cancelled"
  topic: string
}

export function BookingOverviewPanel() {
  const [dateRange, setDateRange] = useState<{
    from: Date | undefined
    to: Date | undefined
  }>({
    from: new Date(),
    to: addDays(new Date(), 30),
  })

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
                        {booking.status === "upcoming" && (
                          <Badge variant="outline" className="bg-blue-50 text-blue-700">
                            Upcoming
                          </Badge>
                        )}
                        {booking.status === "completed" && (
                          <Badge variant="outline" className="bg-green-50 text-green-700">
                            Completed
                          </Badge>
                        )}
                        {booking.status === "cancelled" && (
                          <Badge variant="outline" className="bg-red-50 text-red-700">
                            Cancelled
                          </Badge>
                        )}
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
