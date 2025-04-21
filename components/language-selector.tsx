"use client"

import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { Globe, ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function LanguageSelector() {
  const { language, setLanguage, t } = useLanguage()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="h-9 rounded-full px-3 flex items-center gap-1 hover:bg-teal-50 hover:text-teal-600 transition-colors"
        >
          <Globe className="h-4 w-4 mr-1" />
          <span className="font-medium">{language.toUpperCase()}</span>
          <ChevronDown className="h-3 w-3 opacity-70" />
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[140px]">
        <DropdownMenuItem
          onClick={() => setLanguage("en")}
          className={`flex items-center gap-2 ${language === "en" ? "bg-accent" : ""}`}
        >
          <span className="text-base">🇺🇸</span> {t("language.en")}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setLanguage("es")}
          className={`flex items-center gap-2 ${language === "es" ? "bg-accent" : ""}`}
        >
          <span className="text-base">🇪🇸</span> {t("language.es")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
