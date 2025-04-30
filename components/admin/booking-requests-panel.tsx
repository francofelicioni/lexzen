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
      alert("Failed to update status")
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
              <Clock className="mr-1 h-3 w-3" /> Pending: {pendingCount}
            </Badge>
            <Badge variant="outline" className="bg-green-50 text-green-700">
              <Check className="mr-1 h-3 w-3" /> Accepted: {acceptedCount}
            </Badge>
            <Badge variant="outline" className="bg-red-50 text-red-700">
              <X className="mr-1 h-3 w-3" /> Rejected: {rejectedCount}
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

        <div className="rounded-md border">
          <Table>
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
                      <div className="flex items-center">
                        <Calendar className="mr-1 h-4 w-4 text-gray-500" />
                        <span>{format(req.date, "MMM d, yyyy")}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="mr-1 h-3 w-3" />
                        <span>{format(new Date(`${req.date}T${req.time}`), "h:mm a")}</span>
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
                        <option value="pending" className="text-yellow-700" >Pending</option>
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
        </div>
      </CardContent>
    </Card>
  )
}