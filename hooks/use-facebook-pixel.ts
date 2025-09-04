'use client'

import { useCallback } from 'react'
import { 
  isFbqReady, 
  trackViewContent, 
  trackStartBooking, 
  trackCompleteRegistration,
  trackLead,
  trackQualifiedLead
} from '@/lib/facebookPixel'

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
    return trackStartBooking(value)
  }, [])

  const trackCompleteRegistrationEvent = useCallback((value?: number) => {
    return trackCompleteRegistration(value)
  }, [])

  const trackLeadEvent = useCallback((value?: number, source?: string) => {
    return trackLead(value, source)
  }, [])

  const trackQualifiedLeadEvent = useCallback((contentName: string, contentCategory: string, value?: number) => {
    return trackQualifiedLead(contentName, contentCategory, value)
  }, [])

  return {
    trackPageView,
    trackCustomEvent,
    trackViewContentEvent,
    trackStartBookingEvent,
    trackCompleteRegistrationEvent,
    trackLeadEvent,
    trackQualifiedLeadEvent,
    isReady: isFbqReady()
  }
}
