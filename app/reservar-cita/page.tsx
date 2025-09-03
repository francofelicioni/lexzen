"use client"

import { useLanguage } from "@/contexts/language-context"
import { useFacebookPixel } from "@/hooks/use-facebook-pixel"
import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowDownRight, Clock, Shield, Users, ArrowRight } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { LandingBookingCalendar } from "@/components/landing-booking-calendar"

export default function ReservarCitaPage() {
  const { t } = useLanguage()
  const { trackViewContentEvent } = useFacebookPixel()
  const bookingRef = useRef<HTMLDivElement>(null)

  const scrollToBooking = () => {
    bookingRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  useEffect(() => {
    // Meta Pixel ViewContent event - fires when user lands on the booking page
    trackViewContentEvent(
      'Booking Landing Page',
      'Legal Consultation'
    )

    // Auto-scroll to booking section after a short delay for better conversion
    // const timer = setTimeout(() => {
    //   scrollToBooking()
    // }, 1000)
    // return () => clearTimeout(timer)
  }, [trackViewContentEvent])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-gray/5 to-teal-50/30">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container px-4 md:px-6 py-12 md:py-20">
          <div className="flex flex-col items-center text-center space-y-8">
            <AnimatedSection direction="up" elementType="heading">
              <div className="space-y-4">
                <div className="inline-block rounded-full bg-blue-gray/10 px-4 py-2 text-sm font-medium text-blue-gray">
                  {t("landing.consultationAvailable")}
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                  {t("landing.heroTitle")}
                </h1>
                <p className="max-w-[800px] mx-auto text-xl text-gray-600 md:text-2xl">
                  {t("landing.heroSubtitle")}
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" elementType="any">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-blue-gray hover:bg-legal-accent-dark text-white px-8 py-4 text-lg font-semibold"
                  onClick={scrollToBooking}
                >
                  {t("landing.bookNow")}
                  <ArrowDownRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="px-8 py-4 text-lg font-semibold"
                  onClick={() => {
                    document.getElementById("benefits")?.scrollIntoView({ behavior: "smooth", block: "start" })
                  }}
                >
                  {t("landing.learnMore")}
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <AnimatedSection direction="up" elementType="heading">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
                {t("landing.whyChooseUs")}
              </h2>
              <p className="max-w-[600px] mx-auto text-gray-600 text-lg">
                {t("landing.whyChooseUsDesc")}
              </p>
            </AnimatedSection>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <AnimatedSection direction="up" elementType="any">
              <Card className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-blue-gray/10 rounded-full flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-blue-gray" />
                  </div>
                  <CardTitle className="text-xl">{t("landing.benefit1Title")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {t("landing.benefit1Desc")}
                  </CardDescription>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection direction="up" elementType="any">
              <Card className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-blue-gray/10 rounded-full flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-blue-gray" />
                  </div>
                  <CardTitle className="text-xl">{t("landing.benefit2Title")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {t("landing.benefit2Desc")}
                  </CardDescription>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection direction="up" elementType="any">
              <Card className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-blue-gray/10 rounded-full flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-blue-gray" />
                  </div>
                  <CardTitle className="text-xl">{t("landing.benefit3Title")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {t("landing.benefit3Desc")}
                  </CardDescription>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-blue-gray/5">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-8">
            <AnimatedSection direction="up" elementType="heading">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
                {t("landing.readyToStart")}
              </h2>
              <p className="max-w-[600px] mx-auto text-gray-600 text-lg">
                {t("landing.readyToStartDesc")}
              </p>
            </AnimatedSection>

            <AnimatedSection direction="up" elementType="any">
              <Button 
                size="lg" 
                className="bg-blue-gray hover:bg-legal-accent-dark text-white px-12 py-6 text-xl font-semibold"
                onClick={scrollToBooking}
              >
                {t("landing.bookFreeConsultation")}
                <ArrowDownRight className="ml-2 h-6 w-6" />
              </Button>
            </AnimatedSection>

            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-green-500" />
                <span>{t("landing.guarantee1")}</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-green-500" />
                <span>{t("landing.guarantee2")}</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-green-500" />
                <span>{t("landing.guarantee3")}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section ref={bookingRef} className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <AnimatedSection direction="up" elementType="heading">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
                {t("landing.bookYourSession")}
              </h2>
              <p className="max-w-[600px] mx-auto text-gray-600 text-lg">
                {t("landing.bookYourSessionDesc")}
              </p>
            </AnimatedSection>
          </div>
          
          <LandingBookingCalendar />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-gray to-legal-accent-dark text-white">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              {t("landing.finalCTA")}
            </h2>
            <p className="max-w-[600px] mx-auto text-xl opacity-90">
              {t("landing.finalCTADesc")}
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              className="px-12 py-6 text-xl font-semibold"
              onClick={scrollToBooking}
            >
              {t("landing.bookNow")}
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
} 