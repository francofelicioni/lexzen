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
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-full sm:w-[350px]">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between mb-8">
            <span className="text-xl font-bold animate-fade-in">Lexzen</span>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setOpen(false)}
              className="transition-transform duration-300 hover:rotate-90 p-2 h-10 w-10"
            >
              <span className="sr-only">Close menu</span>
            </Button>
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
              className="w-full bg-blue-gray hover:bg-legal-accent-dark transition-transform duration-300 hover:scale-105"
              onClick={handleLinkClick}
            >
              {t("nav.getStarted")}
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
