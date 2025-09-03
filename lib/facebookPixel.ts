declare global {
  interface Window {
    fbq: any
  }
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

export const isFbqReady = (): boolean => {
  return typeof window !== 'undefined' && typeof window.fbq === 'function'
}
  