'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

export function FacebookPixelTracker() {
  const pathname = usePathname()
  const lastPathname = useRef<string>('')
  const hasTrackedInitial = useRef<boolean>(false)
  const isTracking = useRef<boolean>(false)

  // Debug logging for development
  useEffect(() => {
    console.log('🔍 FacebookPixelTracker mounted, pathname:', pathname)
    return () => {
      console.log('🔍 FacebookPixelTracker unmounted')
    }
  }, [])

  useEffect(() => {
    // Track initial page view only once
    if (!hasTrackedInitial.current && !isTracking.current) {
      const trackInitialPageView = () => {
        if (typeof window.fbq === 'function' && !isTracking.current) {
          isTracking.current = true
          console.log('🔥 Sending initial PageView')
          window.fbq('track', 'PageView')
          hasTrackedInitial.current = true
          // Reset tracking flag after a short delay to allow for route changes
          setTimeout(() => {
            isTracking.current = false
          }, 100)
        }
      }

      // Try to track immediately if fbq is ready
      if (typeof window.fbq === 'function') {
        trackInitialPageView()
      } else {
        console.log('⏳ Waiting for fbq to be ready...')
        // Wait for fbq to be ready with a reasonable timeout
        const interval = setInterval(() => {
          if (typeof window.fbq === 'function') {
            trackInitialPageView()
            clearInterval(interval)
          }
        }, 100)

        // Clean up after 5 seconds to prevent infinite waiting
        setTimeout(() => clearInterval(interval), 5000)
      }
    }
  }, [])

  // Track route changes
  useEffect(() => {
    // Skip if this is the initial render, pathname hasn't changed, or we're currently tracking
    if (!hasTrackedInitial.current || pathname === lastPathname.current || isTracking.current) {
      console.log('⏭️ Skipping PageView tracking:', {
        hasTrackedInitial: hasTrackedInitial.current,
        pathnameChanged: pathname !== lastPathname.current,
        isTracking: isTracking.current,
        currentPathname: pathname,
        lastPathname: lastPathname.current
      })
      return
    }

    // Update the last pathname
    lastPathname.current = pathname

    // Track page view for route change
    if (typeof window.fbq === 'function') {
      isTracking.current = true
      console.log(`🔥 Sending PageView for route: ${pathname}`)
      window.fbq('track', 'PageView')
      // Reset tracking flag after a short delay
      setTimeout(() => {
        isTracking.current = false
      }, 100)
    } else {
      console.warn('⚠️ fbq not available for route change PageView tracking')
    }
  }, [pathname])

  return null
}
