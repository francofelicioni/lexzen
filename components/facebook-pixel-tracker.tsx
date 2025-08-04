"use client"

import { useEffect } from "react"
import { pageview } from "@/lib/facebookPixel"

export function FacebookPixelTracker() {
  useEffect(() => {
    pageview()
  }, [])

  return null
} 