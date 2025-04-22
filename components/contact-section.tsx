"use client"

import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { ContactForm } from "./contact-form"
import { AnimatedSection } from "./animated-section"
import { Card, CardContent } from "@/components/ui/card"

export function ContactSection() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <AnimatedSection direction="up" elementType="heading">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-beige-light/10 px-3 py-1 text-sm text-blue-gray">
                {t("nav.contact")}
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{t("contactForm.title")}</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {t("contactForm.subtitle")}
              </p>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Form */}
          <div className="order-2 lg:order-1">
            <Card>
              <CardContent className="p-6">
                <ContactForm />
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="order-1 lg:order-2">
            <div className="space-y-8">
              {/* Map or Office Image */}
              <div className="relative h-[300px] overflow-hidden rounded-xl bg-gray-100">
                <img
                  src="/placeholder.svg?height=600&width=800"
                  alt="Lexzen office location map"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <div className="text-white font-medium">Lexzen Legal Services</div>
                </div>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold">{t("footer.contactHeading")}</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 group">
                    <div className="rounded-full bg-beige-light/10 p-3 mt-1 group-hover:bg-beige-light/20 transition-colors">
                      <MapPin className="h-6 w-6 text-blue-gray" />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">Address</h4>
                      <p className="text-gray-600 text-base">{t("footer.address")}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="rounded-full bg-beige-light/10 p-3 mt-1 group-hover:bg-beige-light/20 transition-colors">
                      <Phone className="h-6 w-6 text-blue-gray" />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">Phone</h4>
                      <p className="text-gray-600 text-base">{t("footer.phone")}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="rounded-full bg-beige-light/10 p-3 mt-1 group-hover:bg-beige-light/20 transition-colors">
                      <Mail className="h-6 w-6 text-blue-gray" />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">Email</h4>
                      <p className="text-gray-600 text-base">{t("footer.email")}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="rounded-full bg-beige-light/10 p-3 mt-1 group-hover:bg-beige-light/20 transition-colors">
                      <Clock className="h-6 w-6 text-blue-gray" />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">Business Hours</h4>
                      <p className="text-gray-600 text-base">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-gray-600 text-base">Saturday - Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
