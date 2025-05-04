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
import { NewsletterForm } from "@/components/newsletter-form"

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
            <a href={process.env.NEXT_PUBLIC_APP_URL} rel="noopener noreferrer">
              <img src="/logo.png" alt="Lexzen Logo" className="size-10 w-full" />
            </a>
          </div>
          <nav className="hidden md:flex items-center gap-6 md:gap-12">
            {["services", "about", "contact"].map((item) => (
              <Link
                key={item}
                href={`#${item}`}
                className="text-md font-medium hover:text-blue-gray transition-colors duration-200"
              >
                {t(`nav.${item}`)}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <LanguageSelector />
            <Button className="bg-blue-gray hover:bg-legal-accent-dark hidden sm:inline-flex">
              {t("nav.bookCall")}
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-8 md:py-24 bg-state-gray">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4 lg:space-y-6">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">{t("hero.title")}</h1>
                <p className="max-w-[600px] text-gray-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                  {t("hero.subtitle")}
                </p>
                <div className="flex flex-col gap-3 sm:flex-row sm:gap-2">
                  <Button className="bg-legal-accent-dark hover:border hover:border-white w-full sm:w-auto" asChild>
                    <a href="#booking">{t("hero.scheduleFree")}</a>
                  </Button>
                  <Button
                    variant="outline"
                    className="border-blue-gray text-blue-gray hover:text-legal-accent hover:bg-blue-gray/10 hover:border-white hover:text-white w-full sm:w-auto"
                    asChild
                  >
                    <a href="#services">{t("hero.viewServices")}</a>
                  </Button>
                </div>
              </div>
              <div className="mx-auto lg:ml-auto">
                <div className="aspect-video overflow-hidden rounded-xl bg-gray-100 object-cover">
                  <img
                    src="/hero.jpg"
                    alt="Lexzen online legal advisory team providing expert guidance on privacy and data protection for digital businesses"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <ServicesSection />

        {/* About Section */}
        <AboutSection />

        {/* Booking Calendar */}
        <BookingCalendar />

        {/* Contact Section  */}
        <ContactSection />

        {/* Testimonials Section */}
        <section className="w-full py-8 md:py-24 bg-neutral-50">
          <div className="container px-4 md:px-6">
            <AnimatedSection direction="up" elementType="heading">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-blue-gray/10 px-3 py-1 text-sm text-blue-gray">
                    {t("testimonials.title")}
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{t("testimonials.title")}</h2>
                  <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    {t("testimonials.subtitle")}
                  </p>
                </div>
              </div>
            </AnimatedSection>
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-12">
              <div className="flex flex-col justify-between space-y-4 rounded-lg border p-6 shadow-sm">
                <p className="text-gray-500 italic">{t("testimonials.testimonial1")}</p>
                <div className="flex items-center gap-4">
                  <div className="size-24 w-fit" aria-hidden="true">
                    <img
                      src="/avatar3.jpg"
                      alt="Lexzen online legal advisory team providing expert guidance on privacy and data protection for digital businesses"
                      className="w-full h-full object-cover rounded-full"
                      loading="lazy"
                    />
                  </div>
                  <div className="w-full">
                    <p className="font-medium">{t("testimonials.client1Name")}</p>
                    <p className="text-sm text-gray-500">{t("testimonials.client1Title")}</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between space-y-4 rounded-lg border p-6 shadow-sm">
                <p className="text-gray-500 italic">{t("testimonials.testimonial2")}</p>
                <div className="flex items-center gap-4">
                  <div className="size-24 w-fit" aria-hidden="true">
                    <img
                      src="/avatar2.jpg"
                      alt="Lexzen online legal advisory team providing expert guidance on privacy and data protection for digital businesses"
                      className="w-full h-full object-cover rounded-full"
                      loading="lazy"
                    />
                  </div>
                  <div className="w-full">
                    <p className="font-medium">{t("testimonials.client2Name")}</p>
                    <p className="text-sm text-gray-500">{t("testimonials.client2Title")}</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between space-y-4 rounded-lg border p-6 shadow-sm">
                <p className="text-gray-500 italic">{t("testimonials.testimonial3")}</p>
                <div className="flex items-center gap-4">
                  <div className="size-24 w-fit" aria-hidden="true">
                    <img
                      src="/avatar1.jpg"
                      alt="Lexzen online legal advisory team providing expert guidance on privacy and data protection for digital businesses"
                      className="w-full h-full object-cover rounded-full"
                      loading="lazy"
                    />
                  </div>
                  <div className="w-full">
                    <p className="font-medium">{t("testimonials.client3Name")}</p>
                    <p className="text-sm text-gray-500">{t("testimonials.client3Title")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section & Newsletter */}
        <section className="w-full py-8 md:py-24 bg-blue-gray/10 relative overflow-hidden border border-blue-gray/20">


          <div className="container flex justify-between items-start px-4 md:px-6 relative z-10">
            <AnimatedSection direction="up" elementType="heading" className="flex-1 border-r border-gray-300">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-600">{t("cta.title")}</h2>
                  <p className="max-w-[900px] text-gray-100 py-2 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    {t("cta.subtitle")}
                  </p>
                </div>
                <div className="flex flex-col gap-2 md:min-[400px]:flex-row">
                  <Button className="bg-legal-accent-dark text-white hover:bg-legal-accent hover:text-gray-100" asChild>
                    <a href="#booking">{t("cta.scheduleConsultation")}</a>
                  </Button>
                  <Button className="border-gray-600 text-gray-600 hover:bg-blue-gray hover:text-white border bg-white/10" asChild>
                    <a href="#contact">{t("cta.contactUs")}</a>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
            <div className="h-full w-[1px] bg-gray-300 mx-6 hidden md:block"></div>
            <AnimatedSection direction="up" elementType="heading" className="flex-1">
              <div className="space-y-4 max-w-[600px] mx-auto">
                <div className="text-center space-y-2">
                  <h3 className="font-semibold text-gray-600 text-3xl md:text-4xl">{t("footer.newsletterHeading")}</h3>
                </div>
                <NewsletterForm />
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
