"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useLanguage } from "@/contexts/language-context"
import { AlertCircle, CheckCircle } from "lucide-react"

export function NewsletterForm() {
  const { t } = useLanguage()
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email || !email.includes("@")) {
      return
    }

    setStatus("loading")

    // Simulate API call
    setTimeout(() => {
      // In a real application, you would send this to your API
      console.log("Newsletter subscription:", email)
      setStatus("success")
      setEmail("")

      // Reset status after 3 seconds
      setTimeout(() => {
        setStatus("idle")
      }, 3000)
    }, 1000)
  }

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="relative">
          <Input
            type="email"
            placeholder={t("footer.emailPlaceholder")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="pr-24 transition-all duration-300 focus:border-blue-gray focus:ring-blue-gray h-12 text-base"
            disabled={status === "loading" || status === "success"}
          />
          <Button
            type="submit"
            size="sm"
            className="absolute right-1 top-1 h-10 px-4 bg-blue-gray hover:bg-legal-accent-dark transition-all duration-300 hover:scale-105 text-base"
            disabled={status === "loading" || status === "success"}
          >
            {status === "loading" ? (
              <span className="flex items-center gap-1">
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              </span>
            ) : (
              t("footer.subscribe")
            )}
          </Button>
        </div>

        {status === "success" && (
          <div className="flex items-center gap-1 text-sm text-green-600 animate-fade-in">
            <CheckCircle className="h-4 w-4" />
            <span>{t("footer.subscribeSuccess")}</span>
          </div>
        )}

        {status === "error" && (
          <div className="flex items-center gap-1 text-sm text-red-600 animate-fade-in">
            <AlertCircle className="h-4 w-4" />
            <span>{t("footer.subscribeError")}</span>
          </div>
        )}
      </form>

      <p className="text-sm text-gray-500">{t("footer.privacyConsent")}</p>
    </div>
  )
}
