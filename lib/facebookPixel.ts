declare global {
  interface Window {
    fbq: any
  }
}

// Generate a unique event ID for tracking
const generateEventId = (): string => {
  return `evt_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
}

export const pageview = () => {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    try {
      window.fbq('track', 'PageView')
      console.log('🔥 PageView tracked via utility function')
    } catch (error) {
      console.error('Error tracking PageView:', error)
    }
  } else {
    console.warn('fbq not available for PageView tracking')
  }
}

// Normalized ViewContent event - fires when page opens
export const trackViewContent = (contentName: string, contentCategory: string, value?: number) => {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    try {
      const eventId = generateEventId()
      const params = {
        content_name: contentName,
        content_category: contentCategory,
        currency: 'EUR',
        event_id: eventId,
        ...(value !== undefined && { value })
      }
      
      window.fbq('track', 'ViewContent', params)
      console.log('🔥 ViewContent tracked:', params)
      return eventId
    } catch (error) {
      console.error('Error tracking ViewContent:', error)
      return null
    }
  } else {
    console.warn('fbq not available for ViewContent tracking')
    return null
  }
}

// Normalized StartBooking event - fires when user starts booking (first CTA click)
export const trackStartBooking = (contentName: string, contentCategory: string, value?: number) => {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    try {
      const eventId = generateEventId()
      const params = {
        content_name: contentName,
        content_category: contentCategory,
        currency: 'EUR',
        event_id: eventId,
        ...(value !== undefined && { value })
      }
      
      window.fbq('track', 'StartBooking', params)
      console.log('🔥 StartBooking tracked:', params)
      return eventId
    } catch (error) {
      console.error('Error tracking StartBooking:', error)
      return null
    }
  } else {
    console.warn('fbq not available for StartBooking tracking')
    return null
  }
}

// Normalized CompleteRegistration event - fires after successful booking storage
export const trackCompleteRegistration = (contentName: string, contentCategory: string, value?: number) => {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    try {
      const eventId = generateEventId()
      const params = {
        content_name: contentName,
        content_category: contentCategory,
        currency: 'EUR',
        event_id: eventId,
        ...(value !== undefined && { value })
      }
      
      window.fbq('track', 'CompleteRegistration', params)
      console.log('🔥 CompleteRegistration tracked:', params)
      return eventId
    } catch (error) {
      console.error('Error tracking CompleteRegistration:', error)
      return null
    }
  } else {
    console.warn('fbq not available for CompleteRegistration tracking')
    return null
  }
}

export const isFbqReady = (): boolean => {
  return typeof window !== 'undefined' && typeof window.fbq === 'function'
}
  