'use client'

import { useCallback } from 'react'
import { 
  isFbqReady, 
  trackViewContent, 
  trackStartBooking, 
  trackCompleteRegistration 
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
  const trackViewContentEvent = useCallback((contentName: string, contentCategory: string, value?: number) => {
    return trackViewContent(contentName, contentCategory, value)
  }, [])

  const trackStartBookingEvent = useCallback((contentName: string, contentCategory: string, value?: number) => {
    return trackStartBooking(contentName, contentCategory, value)
  }, [])

  const trackCompleteRegistrationEvent = useCallback((contentName: string, contentCategory: string, value?: number) => {
    return trackCompleteRegistration(contentName, contentCategory, value)
  }, [])

  return {
    trackPageView,
    trackCustomEvent,
    trackViewContentEvent,
    trackStartBookingEvent,
    trackCompleteRegistrationEvent,
    isReady: isFbqReady()
  }
}
