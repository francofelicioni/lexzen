'use client'

import { useEffect } from 'react'

export function FacebookPixelTracker() {
  useEffect(() => {
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'PageView')
    }
  }, [])

  return null
}