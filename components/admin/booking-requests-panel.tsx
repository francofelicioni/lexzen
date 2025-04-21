"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Check, X, Search, Clock, Calendar, Mail } from "lucide-react"
import { format } from "date-fns"

// Mock data for booking requests
const initialBookingRequests = [
  {
    id: "1",
    name: "John Smith",
    email: "john.smith@example.com",
    date: new Date(2025, 4, 15, 10, 0),
    status: "pending",
    topic: "Legal consultation about business incorporation",
  },
  {
    id: "2",
    name: "Maria Garcia",
    email: "maria.garcia@example.com",
    date: new Date(2025, 4, 15, 14, 30),
    status: "pending",
    topic: "EU residency application assistance",
  },
  {
    id: "3",
    name: "David Lee",
    email: "david.lee@example.com",
    date: new Date(2025, 4, 16, 11, 15),
    status: "pending",
    topic: "Contract review for digital business",
  },
  {
    id: "4",
    name: "Sophie Martin",
    email: "sophie.martin@example.com",
    date: new Date(2025, 4, 16, 16, 0),
    status: "pending",
    topic: "GDPR compliance consultation",
  },
  {
    id: "5",
    name: "Carlos Rodriguez",
    email: "carlos.rodriguez@example.com",
    date: new Date(2025, 4, 17, 9, 30),
    status: "pending",
    topic: "Family reunification legal advice",
  },
]

type BookingRequest = {
  id: string
  name: string
  email: string
  date: Date
  status: "pending" | "accepted" | "declined"
  topic: string
}

export function BookingRequestsPanel() {
  const [bookingRequests, setBookingRequests] = useState<BookingRequest[]>(initialBookingRequests)
  const [searchQuery, setSearchQuery] = useState("")
  const [filter, setFilter] = useState<"all" | "pending" | "accepted" | "declined">("all")

  const handleAccept = (id: string) => {
    setBookingRequests(
      bookingRequests.map((request) => (request.id === id ? { ...request, status: "accepted" } : request)),
    )
  }

  const handleDecline = (id: string) => {
    setBookingRequests(
      bookingRequests.map((request) => (request.id === id ? { ...request, status: "declined" } : request)),
    )
  }

  const filteredRequests = bookingRequests.filter((request) => {
    const matchesSearch =
      request.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      request.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      request.topic.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesFilter = filter === "all" || request.status === filter

    return matchesSearch && matchesFilter
  })

  const pendingCount = bookingRequests.filter((request) => request.status === "pending").length
  const acceptedCount = bookingRequests.filter((request) => request.status === "accepted").length
  const declinedCount = bookingRequests.filter((request) => request.status === "declined").length

  return (
    <Card>
      <CardHeader>
        <CardTitle>Booking Requests</CardTitle>
        <CardDescription>Manage incoming booking requests for legal consultations</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="bg-yellow-50 text-yellow-700 hover:bg-yellow-50">
              <Clock className="mr-1 h-3 w-3" /> Pending: {pendingCount}
            </Badge>
            <Badge variant="outline" className="bg-green-50 text-green-700 hover:bg-green-50">
              <Check className="mr-1 h-3 w-3" /> Accepted: {acceptedCount}
            </Badge>
            <Badge variant="outline" className="bg-red-50 text-red-700 hover:bg-red-50">
              <X className="mr-1 h-3 w-3" /> Declined: {declinedCount}
            </Badge>
          </div>
          <div className="flex gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                type="search"
                placeholder="Search requests..."
                className="pl-8 w-full sm:w-[250px]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <select
              className="rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              value={filter}
              onChange={(e) => setFilter(e.target.value as any)}
            >
              <option value="all">All Statuses</option>
              <option value="pending">Pending</option>
              <option value="accepted">Accepted</option>
              <option value="declined">Declined</option>
            </select>
          </div>
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Client</TableHead>
                <TableHead>Date & Time</TableHead>
                <TableHead>Topic</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredRequests.length > 0 ? (
                filteredRequests.map((request) => (
                  <TableRow key={request.id}>
                    <TableCell>
                      <div className="font-medium">{request.name}</div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Mail className="mr-1 h-3 w-3" />
                        {request.email}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <Calendar className="mr-1 h-4 w-4 text-gray-500" />
                        <span>{format(request.date, "MMM d, yyyy")}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="mr-1 h-3 w-3" />
                        <span>{format(request.date, "h:mm a")}</span>
                      </div>
                    </TableCell>
                    <TableCell className="max-w-[200px] truncate" title={request.topic}>
                      {request.topic}
                    </TableCell>
                    <TableCell>
                      {request.status === "pending" && (
                        <Badge variant="outline" className="bg-yellow-50 text-yellow-700">
                          Pending
                        </Badge>
                      )}
                      {request.status === "accepted" && (
                        <Badge variant="outline" className="bg-green-50 text-green-700">
                          Accepted
                        </Badge>
                      )}
                      {request.status === "declined" && (
                        <Badge variant="outline" className="bg-red-50 text-red-700">
                          Declined
                        </Badge>
                      )}
                    </TableCell>
                    <TableCell className="text-right">
                      {request.status === "pending" && (
                        <div className="flex justify-end gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            className="h-8 border-green-500 text-green-600 hover:bg-green-50 hover:text-green-700"
                            onClick={() => handleAccept(request.id)}
                          >
                            <Check className="mr-1 h-4 w-4" />
                            Accept
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="h-8 border-red-500 text-red-600 hover:bg-red-50 hover:text-red-700"
                            onClick={() => handleDecline(request.id)}
                          >
                            <X className="mr-1 h-4 w-4" />
                            Decline
                          </Button>
                        </div>
                      )}
                      {request.status !== "pending" && (
                        <div className="text-sm text-gray-500">
                          {request.status === "accepted" ? "Booking confirmed" : "Booking declined"}
                        </div>
                      )}
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} className="h-24 text-center">
                    No booking requests found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
