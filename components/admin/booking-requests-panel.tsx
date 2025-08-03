"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { StatusBadge } from "@/components/ui/status-badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { forceStatusUpdate, getAppointments, updateAppointmentStatus } from "@/services/appointments"
import { format } from "date-fns"
import { Calendar, Check, Clock, Mail, Search, X } from "lucide-react"
import { useEffect, useState } from "react"
import { Button } from "../ui/button"
import { isValid, parseISO } from "date-fns"
import { isValidDate } from "@/utils/date"

type BookingRequest = {
  id: string
  name: string
  email: string
  phone: string | null
  created_at: string
  time: string
  date: string
  status: "pending" | "accepted" | "rejected"
  topic: string
}

export function BookingRequestsPanel() {
  const [bookingRequests, setBookingRequests] = useState<BookingRequest[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [filter, setFilter] = useState<"all" | "pending" | "accepted" | "rejected">("all")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAppointments()
        setBookingRequests(data)
      } catch (error) {
        console.error("Error fetching appointments:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const handleStatusChange = async (id: string, newStatus: BookingRequest["status"]) => {
    try {
      // await updateAppointmentStatus(id, newStatus)

      await forceStatusUpdate()
      setBookingRequests(prev =>
        prev.map((request) =>
          request.id === id ? { ...request, status: newStatus } : request
        )
      )
    } catch (err) {
      console.error("Error updating status:", err)
    }
  }

  const filteredRequests = bookingRequests.filter((request) => {
    const matchesSearch =
      request.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      request.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      request.topic.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesFilter = filter === "all" || request.status === filter
    return matchesSearch && matchesFilter
  })

  const pendingCount = bookingRequests.filter((r) => r.status === "pending").length
  const acceptedCount = bookingRequests.filter((r) => r.status === "accepted").length
  const rejectedCount = bookingRequests.filter((r) => r.status === "rejected").length

  return (
    <Card>
      <CardHeader>
        <CardTitle>Booking Requests</CardTitle>
        <CardDescription>Manage incoming booking requests for legal consultations</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="bg-yellow-50 text-yellow-700">
              <Clock className="mr-1 size-3" /> Pending: {pendingCount}
            </Badge>
            <Badge variant="outline" className="bg-green-50 text-green-700">
              <Check className="mr-1 size-3" /> Accepted: {acceptedCount}
            </Badge>
            <Badge variant="outline" className="bg-red-50 text-red-700">
              <X className="mr-1 size-3" /> Rejected: {rejectedCount}
            </Badge>
          </div>
          <div className="flex gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                type="search"
                placeholder="Search..."
                className="pl-8 w-full text-sm sm:w-[250px]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <select
              className="rounded-md border px-3 py-2 text-sm"
              value={filter}
              onChange={(e) => setFilter(e.target.value as any)}
            >
              <option value="all">All</option>
              <option value="pending">Pending</option>
              <option value="accepted">Accepted</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>
        </div>

        {/* Table View */}
        <div className="rounded-md border">
          <Table className="hidden sm:table">
            <TableHeader>
              <TableRow>
                <TableHead>Client</TableHead>
                <TableHead>Date & Time</TableHead>
                <TableHead>Topic</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredRequests.length > 0 ? (
                filteredRequests.map((req) => (
                  <TableRow key={req.id}>
                    <TableCell>
                      <div className="font-medium">{req.name}</div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Mail className="mr-1 h-3 w-3" />
                        {req.email}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="mr-1 h-3 w-3" />
                        <span>
                          {req.date && req.time ? (() => {
                            const dateTime = new Date(`${req.date}T${req.time}`)
                            return isValidDate(dateTime) ? format(dateTime, "h:mm a") : "Invalid time"
                          })() : "No time set"}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="max-w-[200px] truncate" title={req.topic}>
                      {req.topic}
                    </TableCell>
                    <TableCell>
                      <StatusBadge status={req.status} />
                    </TableCell>
                    <TableCell>
                      <select
                        className="rounded-md border px-2 py-1 text-sm"
                        value={req.status}
                        onChange={(e) => handleStatusChange(req.id, e.target.value as BookingRequest["status"])}
                      >
                        <option value="pending" className="text-yellow-700">Pending</option>
                        <option value="accepted" className="text-green-700">Accept</option>
                        <option value="rejected" className="text-red-700">Decline</option>
                      </select>
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

          {/* Mobile View */}
          <div className="sm:hidden">
            {filteredRequests.length > 0 ? (
              filteredRequests.map((req) => (
                <div key={req.id} className="mb-4 rounded-md border p-4 space-y-3 shadow-sm">
                  {/* Client Info */}
                  <div className="space-y-1">
                    <div className="text-sm font-medium text-gray-700">Client</div>
                    <div className="text-sm text-gray-900">{req.name}</div>
                    <div className="text-sm text-gray-500">{req.email}</div>
                  </div>

                  {/* Date & Time */}
                  <div className="space-y-1">
                    <div className="text-sm font-medium text-gray-700">Date & Time</div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar className="h-4 w-4 text-gray-500" />
                      {req.date ? format(new Date(req.date), "MMM d, yyyy") : "No date set"}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="h-4 w-4 text-gray-500" />
                      {req.date && req.time ? (() => {
                        const dateTime = new Date(`${req.date}T${req.time}`)
                        return isValidDate(dateTime) ? format(dateTime, "h:mm a") : "Invalid time"
                      })() : "No time set"}
                    </div>
                  </div>

                  {/* Topic */}
                  <div>
                    <div className="text-sm font-medium text-gray-700">Topic</div>
                    <div className="text-sm text-gray-600">{req.topic}</div>
                  </div>

                  {/* Status */}
                  <div>
                    <div className="text-sm font-medium text-gray-700">Status</div>
                    <StatusBadge status={req.status} />
                  </div>

                  {/* Status Control */}
                  <div>
                    <select
                      className="mt-1 w-full rounded-md border px-3 py-2 text-sm"
                      value={req.status}
                      onChange={(e) => handleStatusChange(req.id, e.target.value as BookingRequest["status"])}
                    >
                      <option value="pending" className="text-yellow-700">Pending</option>
                      <option value="accepted" className="text-green-700">Accept</option>
                      <option value="rejected" className="text-red-700">Decline</option>
                    </select>
                  </div>
                </div>
              ))
            ) : (
              <div className="h-24 text-center text-gray-500">No booking requests found.</div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}