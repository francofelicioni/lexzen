'use client'

import { useEffect } from 'react'

export function FacebookPixelTracker() {
  useEffect(() => {
    const interval = setInterval(() => {
      if (typeof window.fbq === 'function') {
        console.log('🔥 Sending PageView from interval')
        window.fbq('track', 'PageView')
        clearInterval(interval)
      } else {
        console.warn('⏳ fbq not ready...')
      }
    }, 300)

    // Clean up in case it never resolves
    setTimeout(() => clearInterval(interval), 5000)
  }, [])

  return null
}
