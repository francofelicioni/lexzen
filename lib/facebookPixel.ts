declare global {
  interface Window {
    fbq: any
  }
}

export const pageview = () => {
    if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
      window.fbq('track', 'PageView')
    }
  }
  