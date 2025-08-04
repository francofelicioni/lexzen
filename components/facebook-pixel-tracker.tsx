'use client'

import { useEffect } from 'react'

export function FacebookPixelTracker() {
  useEffect(() => {
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'PageView')
    } else {
      console.warn("Facebook Pixel not defined")
    }
  }, [])

  return null
}