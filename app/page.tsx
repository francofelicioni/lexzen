"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Scale } from "lucide-react"
import { ServicesSection } from "@/components/services-section"
import { BookingCalendar } from "@/components/booking-calendar"
import { AboutSection } from "@/components/about-section"
import { LanguageSelector } from "@/components/language-selector"
import { MobileNav } from "@/components/mobile-nav"
import { useLanguage } from "@/contexts/language-context"
import { Footer } from "@/components/footer"
import { LegalServiceStructuredData, LocalBusinessStructuredData } from "@/components/structured-data"
import { AnimatedSection } from "@/components/animated-section"
import { ScrollToTop } from "@/components/scroll-to-top"
import { ContactSection } from "@/components/contact-section"
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
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <MobileNav />
            <Scale className={`h-6 w-6 text-teal-600 ${isLoaded ? "animate-fade-in" : "opacity-0"}`} />
            <span className={`text-xl font-bold ${isLoaded ? "animate-fade-in animation-delay-100" : "opacity-0"}`}>
              Lexzen
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            {["services", "about", "bookCall", "contact"].map((item, index) => (
              <Link
                key={item}
                href={`#${item === "bookCall" ? "booking" : item}`}
                className={`text-sm font-medium hover:text-teal-600 transition-colors ${
                  isLoaded ? `animate-fade-in animation-delay-${(index + 1) * 100}` : "opacity-0"
                }`}
              >
                {t(`nav.${item}`)}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <div className={isLoaded ? "animate-fade-in animation-delay-500" : "opacity-0"}>
              <LanguageSelector />
            </div>
            <Button
              className={`bg-teal-600 hover:bg-teal-700 hidden sm:inline-flex hover-lift ${
                isLoaded ? "animate-fade-in animation-delay-700" : "opacity-0"
              }`}
            >
              {t("nav.getStarted")}
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-neutral-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <AnimatedSection direction="up" delay={100}>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("hero.title")}</h1>
                </AnimatedSection>
                <AnimatedSection direction="up" delay={300}>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    {t("hero.subtitle")}
                  </p>
                </AnimatedSection>
                <AnimatedSection direction="up" delay={500}>
                  <div className="flex flex-col gap-3 sm:flex-row sm:gap-2">
                    <Button className="bg-teal-600 hover:bg-teal-700 hover-lift w-full sm:w-auto" asChild>
                      <a href="#booking">{t("hero.scheduleFree")}</a>
                    </Button>
                    <Button
                      variant="outline"
                      className="border-teal-600 text-teal-600 hover:bg-teal-50 hover-lift w-full sm:w-auto"
                      asChild
                    >
                      <a href="#services">{t("hero.viewServices")}</a>
                    </Button>
                  </div>
                </AnimatedSection>
              </div>
              <AnimatedSection direction="left" delay={300} className="mx-auto lg:ml-auto">
                <div className="aspect-video overflow-hidden rounded-xl bg-gray-100 object-cover animate-float">
                  <img
                    src="/placeholder.svg?height=720&width=1280"
                    alt="Lexzen online legal advisory team providing expert guidance on privacy and data protection for digital businesses"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <ServicesSection />

        {/* About Section */}
        <AboutSection />

        {/* Booking Calendar */}
        <BookingCalendar />

        {/* Contact Section - New! */}
        <ContactSection />

        {/* Testimonials Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-neutral-50">
          <div className="container px-4 md:px-6">
            <AnimatedSection direction="up">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-700">
                    {t("testimonials.title")}
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{t("testimonials.title")}</h2>
                  <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    {t("testimonials.subtitle")}
                  </p>
                </div>
              </div>
            </AnimatedSection>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12 mt-12">
              <AnimatedSection direction="right" delay={200}>
                <div className="flex flex-col justify-between space-y-4 rounded-lg border p-6 shadow-sm hover-lift">
                  <p className="text-gray-500 italic">{t("testimonials.testimonial1")}</p>
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-gray-100 h-12 w-12" aria-hidden="true"></div>
                    <div>
                      <p className="font-medium">{t("testimonials.client1Name")}</p>
                      <p className="text-sm text-gray-500">{t("testimonials.client1Title")}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection direction="left" delay={400}>
                <div className="flex flex-col justify-between space-y-4 rounded-lg border p-6 shadow-sm hover-lift">
                  <p className="text-gray-500 italic">{t("testimonials.testimonial2")}</p>
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-gray-100 h-12 w-12" aria-hidden="true"></div>
                    <div>
                      <p className="font-medium">{t("testimonials.client2Name")}</p>
                      <p className="text-sm text-gray-500">{t("testimonials.client2Title")}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-teal-600 relative overflow-hidden">
          {/* Background animation elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-10 left-10 w-64 h-64 bg-teal-500 rounded-full opacity-20 animate-float"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-500 rounded-full opacity-20 animate-float animation-delay-1000"></div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <AnimatedSection direction="up">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">{t("cta.title")}</h2>
                  <p className="max-w-[900px] text-teal-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    {t("cta.subtitle")}
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-white text-teal-600 hover:bg-teal-50 hover-lift" asChild>
                    <a href="#booking">{t("cta.scheduleConsultation")}</a>
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-teal-700 hover-lift" asChild>
                    <a href="#contact">{t("cta.contactUs")}</a>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
