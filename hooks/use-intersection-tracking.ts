'use client'

import { useEffect, useRef, useCallback } from 'react'
import { usePathname } from 'next/navigation'

interface UseIntersectionTrackingOptions {
  onIntersect: () => void
  threshold?: number
  rootMargin?: string
  once?: boolean
}

export function useIntersectionTracking<T extends HTMLElement = HTMLElement>({
  onIntersect,
  threshold = 0.1,
  rootMargin = '0px',
  once = true
}: UseIntersectionTrackingOptions) {
  const elementRef = useRef<T>(null)
  const hasTracked = useRef(false)
  const pathname = usePathname()

  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    const [entry] = entries
    if (entry.isIntersecting && (!once || !hasTracked.current)) {
      onIntersect()
      if (once) {
        hasTracked.current = true
      }
    }
  }, [onIntersect, once])

  useEffect(() => {
    // Reset tracking state when pathname changes
    hasTracked.current = false
  }, [pathname])

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(handleIntersection, {
      threshold,
      rootMargin
    })

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [handleIntersection, threshold, rootMargin])

  return elementRef
}
