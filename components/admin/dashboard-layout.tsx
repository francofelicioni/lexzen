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
          <div className="flex items-center gap-2 w-full mx-auto mt-2">
            <img src="/logo.png" alt="Lexzen Logo" className="block size-32 h-full" />
            <span>|</span>
            <span className="text-lg md:text-xl font-medium mt-1">Admin Dashboard</span>
          </div>
        </div>
      </header>

      <main className="container py-6">
        <Tabs defaultValue="requests" value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList className="flex w-full overflow-x-auto overflow-y-hidden md:space-x-8">
            <TabsTrigger value="requests" className="flex-shrink-0 px-4">
              Booking Requests
            </TabsTrigger>
            <TabsTrigger value="availability" className="flex-shrink-0 px-4">
              Availability Management
            </TabsTrigger>
            <TabsTrigger value="overview" className="flex-shrink-0 px-4">
              Booking Overview
            </TabsTrigger>
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
