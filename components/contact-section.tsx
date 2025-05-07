"use client"

import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { ContactForm } from "./contact-form"
import { AnimatedSection } from "./animated-section"
import { Card, CardContent } from "@/components/ui/card"
import { NewsletterForm } from "./newsletter-form"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="w-full py-8 md:py-24">
      <div className="container px-4 md:px-6">
        <AnimatedSection direction="up" elementType="heading">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-blue-gray/10 px-3 py-1 text-sm text-blue-gray">
                {t("nav.contact")}
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{t("contactForm.title")}</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {t("contactForm.subtitle")}
              </p>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid gap-8 lg:grid-cols-2 items-center">
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
            <div className="space-y-8 rounded-lg bg-white shadow-md p-6 lg:p-8">
                <img
                  src="/office.jpg"
                  alt="Lexzen office location map"
                  className="lg:h-full object-fit cover rounded-xl w-full h-64 lg:h-96"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                </div>
              {/* Contact Details */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold">{t("footer.contactHeading")}</h3>
                <div className="grid gap-6 grid-cols-1">
                  {/* Email */}
                  <div className="flex items-center gap-2 lg:gap-4 group">
                    <div className="rounded-full bg-blue-gray/10 p-3 mt-1 group-hover:bg-blue-gray/20 transition-colors">
                      <Mail className="size-6 text-blue-gray" />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">Email</h4>
                      <p className="text-gray-600 text-base">
                        <a href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`} className="hover:text-blue-600 hover:underline">
                          {process.env.NEXT_PUBLIC_CONTACT_EMAIL}
                        </a>
                      </p>
                    </div>
                  </div>
                  {/* WhatsApp */}
                  <div className="flex items-center gap-2 lg:gap-4 group">
                    <div className="rounded-full bg-blue-gray/10 p-3 mt-1 group-hover:bg-blue-gray/20 transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-6 text-blue-gray"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M16.988 14.012c-.3-.15-1.775-.875-2.05-.975-.275-.1-.475-.15-.675.15-.2.3-.775.975-.95 1.175-.175.2-.35.225-.65.075-.3-.15-1.275-.475-2.425-1.525-.9-.8-1.5-1.775-1.675-2.075-.175-.3-.018-.45.132-.6.125-.125.275-.325.425-.5.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.225-.25-.6-.5-.525-.675-.525h-.575c-.2 0-.525.075-.8.375-.275.3-1.05 1.025-1.05 2.5s1.075 2.875 1.225 3.075c.15.2 2.125 3.25 5.15 4.55.725.3 1.3.475 1.75.6.735.235 1.4.2 1.925.125.585-.085 1.775-.725 2.025-1.425.25-.7.25-1.3.175-1.425-.075-.125-.275-.2-.575-.35z" />
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.477 2 12c0 1.946.516 3.77 1.414 5.354L2 22l4.646-1.414A9.956 9.956 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm-8.5 10c0-4.687 3.813-8.5 8.5-8.5s8.5 3.813 8.5 8.5-3.813 8.5-8.5 8.5c-1.61 0-3.12-.45-4.418-1.23l-.3-.18-2.632.8.8-2.632-.18-.3A8.455 8.455 0 0 1 3.5 12z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">WhatsApp</h4>
                      <p className="text-gray-600 text-base">
                        <a
                          href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent(
                            `${t(`whatsappMessage.hello`)}`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-blue-600 hover:underline"
                        >
                          {process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}
                        </a>
                      </p>
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
