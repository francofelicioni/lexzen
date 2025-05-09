"use client"

import { Button } from "@/components/ui/button"
import { ChevronUp } from "lucide-react"
import { useEffect, useState } from "react"

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  // Set the top coordinate to 0
  // Make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  return (
    <div className="fixed bottom-20 right-3 z-100">
      {isVisible && (
        <Button
          onClick={scrollToTop}
          className="rounded-full p-3 bg-blue-gray hover:bg-legal-accent-dark shadow-lg transition-all duration-300 hover:scale-110 opacity-80 hover:opacity-100"
          aria-label="Scroll to top"
        >
          <ChevronUp className="size-5" />
        </Button>
      )}
    </div>
  )
}
