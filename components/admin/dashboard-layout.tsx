"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookingRequestsPanel } from "@/components/admin/booking-requests-panel"
import { AvailabilityManagementPanel } from "@/components/admin/availability-management-panel"
import { BookingOverviewPanel } from "@/components/admin/booking-overview-panel"
import { Scale } from "lucide-react"

export function DashboardLayout() {
  const [activeTab, setActiveTab] = useState("requests")

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="sticky top-0 z-40 border-b bg-white">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Scale className="h-6 w-6 text-teal-600" />
            <span className="text-xl font-bold">Lexzen Admin Dashboard</span>
          </div>
        </div>
      </header>

      <main className="container py-6">
        <Tabs defaultValue="requests" value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="requests">Booking Requests</TabsTrigger>
            <TabsTrigger value="availability">Availability Management</TabsTrigger>
            <TabsTrigger value="overview">Booking Overview</TabsTrigger>
          </TabsList>
          <TabsContent value="requests" className="space-y-4">
            <BookingRequestsPanel />
          </TabsContent>
          <TabsContent value="availability" className="space-y-4">
            <AvailabilityManagementPanel />
          </TabsContent>
          <TabsContent value="overview" className="space-y-4">
            <BookingOverviewPanel />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
