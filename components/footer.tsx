"use client"

import Link from "next/link"
import { Scale, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { NewsletterForm } from "./newsletter-form"
import { useMobile } from "@/hooks/use-mobile"

export function Footer() {
  const { t } = useLanguage()
  const isMobile = useMobile()

  return (
    <footer className="bg-gray-50 border-t">
      <div className="container px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5 lg:gap-12">
          {/* Company Info - No animations */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Scale className="h-6 w-6 text-blue-gray" />
              <span className="text-xl font-bold">Lexzen</span>
            </div>
            <p className="text-gray-500 mb-6 max-w-md">
              Specialized legal advisory for digital businesses and EU residency. Expert guidance tailored to your
              needs.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-blue-gray mt-0.5 shrink-0" />
                <span className="text-gray-600">{t("footer.address")}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-blue-gray shrink-0" />
                <span className="text-gray-600">{t("footer.phone")}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-blue-gray shrink-0" />
                <span className="text-gray-600">{t("footer.email")}</span>
              </div>
            </div>
          </div>

          {/* Company Links - No animations */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">{t("footer.companyHeading")}</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#about" className="text-gray-600 hover:text-blue-gray block py-1">
                  {t("footer.aboutUs")}
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-600 hover:text-blue-gray block py-1">
                  {t("footer.services")}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-gray block py-1">
                  {t("footer.careers")}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-gray block py-1">
                  {t("footer.blog")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links - No animations */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">{t("footer.legalHeading")}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-gray">
                  {t("footer.privacyPolicy")}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-gray">
                  {t("footer.termsOfService")}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-gray">
                  {t("footer.legalNotice")}
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-600 hover:text-blue-gray">
                  {t("footer.contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter - No animations */}
          <div className="px-2">
            <h3 className="font-semibold text-gray-900 mb-3 text-lg">{t("footer.newsletterHeading")}</h3>
            <p className="text-gray-600 text-sm mb-4">{t("footer.newsletterSubheading")}</p>
            <NewsletterForm />
          </div>
        </div>

        {/* Social Media & Copyright - No animations */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className={`flex ${isMobile ? "flex-col space-y-4" : "flex-row justify-between"} items-center gap-4`}>
            <div className="text-sm text-gray-500">{t("footer.rights")}</div>

            <div className="flex items-center gap-4">
              <h3 className="text-sm font-medium text-gray-700 mr-2">{t("footer.socialHeading")}</h3>
              <Link href="#" className="text-gray-500 hover:text-blue-gray">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-blue-gray">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-blue-gray">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-blue-gray">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
