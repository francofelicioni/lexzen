"use client"

import { AboutSection } from "@/components/about-section"
import { BookingCalendar } from "@/components/booking-calendar"
import { ContactSection } from "@/components/contact-section"
import { CtaAndNewsletter } from "@/components/cta-newsletter-section"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ScrollToTop } from "@/components/scroll-to-top"
import { ServicesSection } from "@/components/services-section"
import { LegalServiceStructuredData, LocalBusinessStructuredData } from "@/components/structured-data"
import { TestimonialsSection } from "@/components/testimonials-section"
import { useLanguage } from "@/contexts/language-context"
import { useEffect, useState } from "react"

export default function Home() {
  const { t } = useLanguage()
  const [isLoaded, setIsLoaded] = useState(false)

  // Set isLoaded to true after component mounts for initial animations
  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      {/* Structured Data for SEO */}
      <LegalServiceStructuredData />
      <LocalBusinessStructuredData />

      {/* Scroll to Top Button */}
      <ScrollToTop />

      {/* Header */}
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />

        {/* Services Section */}
        <ServicesSection />

        {/* About Section */}
        <AboutSection />

        {/* Booking Calendar */}
        <BookingCalendar />

        {/* Contact Section  */}
        <ContactSection />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* CTA Section & Newsletter */}
        <CtaAndNewsletter />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
