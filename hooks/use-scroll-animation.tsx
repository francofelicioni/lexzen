"use client"

import { useEffect, useRef, useState } from "react"

type AnimationDirection = "up" | "down" | "left" | "right" | "none"

interface ScrollAnimationOptions {
  threshold?: number
  direction?: AnimationDirection
  delay?: number
  rootMargin?: string
  once?: boolean
}

export function useScrollAnimation({
  threshold = 0.1,
  direction = "up",
  delay = 0,
  rootMargin = "0px",
  once = true,
  elementType = "any", // Add this parameter to control what elements get animated
}: ScrollAnimationOptions & { elementType?: "heading" | "any" } = {}) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if we're in a browser environment
    if (typeof window === "undefined") return

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) {
      setIsVisible(true)
      return
    }

    const currentRef = ref.current
    if (!currentRef) return

    // If elementType is "heading", check if the element is a heading
    if (elementType === "heading") {
      const isHeading =
        currentRef.tagName === "H1" ||
        currentRef.tagName === "H2" ||
        currentRef.tagName === "H3" ||
        currentRef.querySelector("h1, h2, h3") !== null

      // If it's not a heading, make it visible immediately without animation
      if (!isHeading) {
        setIsVisible(true)
        return
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Delay the animation if specified
            if (delay) {
              setTimeout(() => {
                setIsVisible(true)
              }, delay)
            } else {
              setIsVisible(true)
            }

            // Unobserve after animation if once is true
            if (once && entry.isIntersecting) {
              observer.unobserve(currentRef)
            }
          } else if (!once) {
            setIsVisible(false)
          }
        })
      },
      {
        threshold,
        rootMargin,
      },
    )

    observer.observe(currentRef)

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold, delay, rootMargin, once, elementType])

  // Generate the appropriate animation classes based on direction
  const getAnimationClasses = () => {
    if (!isVisible) {
      switch (direction) {
        case "up":
          return "opacity-0 translate-y-10"
        case "down":
          return "opacity-0 -translate-y-10"
        case "left":
          return "opacity-0 translate-x-10"
        case "right":
          return "opacity-0 -translate-x-10"
        case "none":
          return "opacity-0"
        default:
          return "opacity-0"
      }
    }
    return "opacity-100 translate-y-0 translate-x-0"
  }

  const animationClasses = getAnimationClasses()
  const transitionClasses = `transition-all duration-700 ease-out ${delay ? `delay-${delay}` : ""}`

  return { ref, isVisible, animationClasses, transitionClasses }
}
