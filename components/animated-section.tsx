"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface AnimatedSectionProps {
  children: ReactNode
  direction?: "up" | "down" | "left" | "right" | "none"
  delay?: number
  className?: string
  threshold?: number
  rootMargin?: string
  once?: boolean
  elementType?: "heading" | "any"
}

export function AnimatedSection({
  children,
  direction = "up",
  delay = 0,
  className = "",
  threshold = 0.1,
  rootMargin = "0px",
  once = true,
  elementType = "any",
}: AnimatedSectionProps) {
  const { ref, animationClasses, transitionClasses } = useScrollAnimation({
    direction,
    delay,
    threshold,
    rootMargin,
    once,
    elementType,
  })

  return (
    <div ref={ref} className={cn(className, animationClasses, transitionClasses)}>
      {children}
    </div>
  )
}
