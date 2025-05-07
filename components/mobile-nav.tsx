"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function MobileNav() {
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)

  const handleLinkClick = () => {
    setOpen(false)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden hover:bg-blue-gray/10 transition-colors duration-300">
          <Menu className="size-8" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-full sm:w-[350px]">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between mb-8">
            <a href={process.env.NEXT_PUBLIC_APP_URL} rel="noopener noreferrer">
              <img src="/logo.png" alt="Lexzen Logo" className="block mt-1 size-32 h-full" />
            </a>
          </div>
          <nav className="flex flex-col gap-8">
            {[
              { href: "#services", label: t("nav.services"), delay: "animation-delay-100" },
              { href: "#about", label: t("nav.about"), delay: "animation-delay-200" },
              { href: "#booking", label: t("nav.bookCall"), delay: "animation-delay-300" },
              { href: "#contact", label: t("nav.contact"), delay: "animation-delay-400" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-lg font-medium hover:text-blue-gray transition-colors animate-slide-right ${item.delay} py-2`}
                onClick={handleLinkClick}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto pt-6 animate-slide-up animation-delay-500">
            <Button
              className="w-full bg-blue-gray hover:bg-legal-accent-dark transition-transform duration-300 hover:scale-105 flex items-center justify-center gap-2"
              asChild
            >
              <a
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  `${t(`whatsappMessage.hello`)}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                {t("nav.sendWhatsapp")}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-5 ml-1"
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.145 1.602 5.938L0 24l6.188-1.602A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm6.803 17.197c-.283.79-1.64 1.515-2.27 1.61-.58.087-1.28.123-2.06-.13-.48-.152-1.1-.36-1.9-.7-3.34-1.44-5.5-4.97-5.67-5.2-.17-.23-1.35-1.8-1.35-3.43 0-1.63.85-2.44 1.15-2.78.3-.34.65-.43.87-.43.22 0 .44.002.63.01.2.01.47-.076.73.56.28.66.96 2.28 1.04 2.45.08.17.13.38.03.6-.1.22-.15.37-.3.57-.15.2-.31.44-.45.59-.15.15-.3.31-.13.6.17.3.76 1.25 1.63 2.03 1.12.99 2.07 1.3 2.37 1.45.3.15.47.13.63-.08.17-.22.73-.85.93-1.14.2-.3.4-.25.67-.15.27.1 1.7.8 2 1 .3.2.5.3.57.47.07.17.07.98-.22 1.77z" />
                </svg>
              </a>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
