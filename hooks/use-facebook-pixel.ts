'use client'

import { useCallback, useRef } from 'react'
import { 
  isFbqReady, 
  trackViewContent, 
  trackStartBooking, 
  trackCompleteRegistration,
  trackQualifiedLead
} from '@/lib/facebookPixel'

// Global flag to ensure StartBooking fires only once per session
let hasTrackedStartBookingGlobal = false

export function useFacebookPixel() {
  const trackPageView = useCallback(() => {
    if (isFbqReady()) {
      try {
        window.fbq('track', 'PageView')
        console.log('🔥 PageView tracked via hook')
        return true
      } catch (error) {
        console.error('Error tracking PageView via hook:', error)
        return false
      }
    } else {
      console.warn('fbq not available for PageView tracking via hook')
      return false
    }
  }, [])

  const trackCustomEvent = useCallback((eventName: string, parameters?: Record<string, any>) => {
    if (isFbqReady()) {
      try {
        if (parameters) {
          window.fbq('track', eventName, parameters)
        } else {
          window.fbq('track', eventName)
        }
        console.log(`🔥 Custom event tracked: ${eventName}`, parameters)
        return true
      } catch (error) {
        console.error(`Error tracking custom event ${eventName}:`, error)
        return false
      }
    } else {
      console.warn('fbq not available for custom event tracking')
      return false
    }
  }, [])

  // Normalized event tracking functions
  const trackViewContentEvent = useCallback((contentName: string, contentCategory: string, value?: number, source?: string) => {
    return trackViewContent(contentName, contentCategory, value, source)
  }, [])

  const trackStartBookingEvent = useCallback((value?: number) => {
    // Only track StartBooking once per session
    if (hasTrackedStartBookingGlobal) {
      console.log('🔥 StartBooking already tracked in this session, skipping')
      return null
    }
    
    hasTrackedStartBookingGlobal = true
    console.log('🔥 Tracking StartBooking for the first time in this session')
    return trackStartBooking(value)
  }, [])

  const trackCompleteRegistrationEvent = useCallback((value?: number) => {
    return trackCompleteRegistration(value)
  }, [])



  const trackQualifiedLeadEvent = useCallback((eventId: string) => {
    return trackQualifiedLead(eventId)
  }, [])

  return {
    trackPageView,
    trackCustomEvent,
    trackViewContentEvent,
    trackStartBookingEvent,
    trackCompleteRegistrationEvent,
    trackQualifiedLeadEvent,
    isReady: isFbqReady()
  }
}
