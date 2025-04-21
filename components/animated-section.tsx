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
}

export function AnimatedSection({
  children,
  direction = "up",
  delay = 0,
  className = "",
  threshold = 0.1,
  rootMargin = "0px",
  once = true,
}: AnimatedSectionProps) {
  const { ref, animationClasses, transitionClasses } = useScrollAnimation({
    direction,
    delay,
    threshold,
    rootMargin,
    once,
  })

  return (
    <div ref={ref} className={cn(className, animationClasses, transitionClasses)}>
      {children}
    </div>
  )
}
