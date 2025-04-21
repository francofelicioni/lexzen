"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { type Language, translations } from "@/lib/translations"

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")
  const [isClient, setIsClient] = useState(false)

  // Set isClient to true when component mounts
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Detect user's language preference on client side
  useEffect(() => {
    if (!isClient) return

    // Try to get language from localStorage first
    const savedLanguage = localStorage.getItem("preferredLanguage") as Language | null

    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "es")) {
      setLanguage(savedLanguage)
      return
    }

    // If no saved preference, try to detect from browser
    const browserLanguage = navigator.language.split("-")[0]
    if (browserLanguage === "es") {
      setLanguage("es")
    } else {
      // Default to English for all other languages
      setLanguage("en")
    }

    // Note: In a real implementation, you would also use geolocation API or
    // server-side detection based on IP address for more accurate detection
  }, [isClient])

  // Save language preference when it changes
  useEffect(() => {
    if (isClient) {
      localStorage.setItem("preferredLanguage", language)
    }
  }, [language, isClient])

  // Translation function
  const t = (key: string) => {
    // Split the key by dots to access nested properties
    const keys = key.split(".")
    let value: any = translations[language]

    // Navigate through the nested properties
    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k]
      } else {
        console.warn(`Translation key not found: ${key}`)
        return key
      }
    }

    return value
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
