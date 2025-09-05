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

// Normalized ViewContent event - fires when booking widget becomes visible
export const trackViewContent = (contentName: string, contentCategory: string, value?: number, source?: string) => {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    try {
      const eventId = generateEventId()
      const params = {
        content_name: contentName,
        content_category: contentCategory,
        currency: 'EUR',
        event_id: eventId,
        ...(source && { source }),
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

// Normalized StartBooking event - fires on first meaningful interaction in booking flow
export const trackStartBooking = (value?: number) => {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    try {
      const eventId = generateEventId()
      const params = {
        content_name: 'Free 15-min Consultation',
        content_category: 'Legal Consultation',
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

// Normalized CompleteRegistration event - fires after Supabase appointments insert succeeds
export const trackCompleteRegistration = (value?: number) => {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    try {
      const eventId = generateEventId()
      const params = {
        content_name: 'Free 15-min Consultation',
        content_category: 'Legal Consultation',
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



// QualifiedLead event - fires with given event_id (reuses existing event ID)
export const trackQualifiedLead = (eventId: string) => {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    try {
      const params = {
        lead_quality: 'qualified',
        currency: 'EUR',
        event_id: eventId
      }
      
      window.fbq('track', 'QualifiedLead', params)
      console.log('🔥 QualifiedLead tracked:', params)
      return eventId
    } catch (error) {
      console.error('Error tracking QualifiedLead:', error)
      return null
    }
  } else {
    console.warn('fbq not available for QualifiedLead tracking')
    return null
  }
}

export const isFbqReady = (): boolean => {
  return typeof window !== 'undefined' && typeof window.fbq === 'function'
}
  