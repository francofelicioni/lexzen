"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Scale, Lock } from "lucide-react"

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const [password, setPassword] = useState("")
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()

  // Check if user is already authenticated
  useEffect(() => {
    const authStatus = sessionStorage.getItem("adminAuthenticated")
    if (authStatus === "true") {
      setIsAuthenticated(true)
    }
  }, [])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    setTimeout(() => {
      if (password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
        sessionStorage.setItem("adminAuthenticated", "true")
        setIsAuthenticated(true)
      } else {
        setError("Invalid password. Please try again.")
      }
      setIsLoading(false)
    }, 1000)
  }

  const handleLogout = () => {
    sessionStorage.removeItem("adminAuthenticated")
    setIsAuthenticated(false)
    router.push("/admin")
  }

  if (!isAuthenticated) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1">
            <div className="flex items-center justify-center mb-6">
              <Scale className="size-10 text-blue-gray mr-2" />
              <span className="text-2xl font-bold">Lexzen Admin</span>
            </div>
            <CardTitle className="text-xl text-center">Admin Login</CardTitle>
            <CardDescription className="text-center">
              Enter your password to access the booking management dashboard
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleLogin}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="relative">
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter admin password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pr-10"
                    required
                  />
                  <Lock className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                </div>
                {error && <p className="text-sm text-red-500">{error}</p>}
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full bg-blue-gray hover:bg-teal-700" disabled={isLoading}>
                {isLoading ? "Authenticating..." : "Login to Dashboard"}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    )
  }

  return (
    <div>
      <div className="fixed top-2.5 right-4 z-50">
        <Button variant="outline" size="sm" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      {children}
    </div>
  )
}
