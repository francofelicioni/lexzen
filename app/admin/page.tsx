"use client"

import { AuthGuard } from "@/components/admin/auth-guard"
import { DashboardLayout } from "@/components/admin/dashboard-layout"

export default function AdminPage() {
  return (
    <AuthGuard>
      <DashboardLayout />
    </AuthGuard>
  )
}
