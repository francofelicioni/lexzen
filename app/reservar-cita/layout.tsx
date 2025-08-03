import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/contexts/language-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Residencia por Arraigo - Nuevo Reglamento | Consulta Gratuita | Lexzen",
  description: "Asesoramiento experto para residencia por arraigo según el nuevo reglamento de extranjería. Consulta gratuita de 15 minutos. Abogados especializados en inmigración.",
  keywords: "residencia por arraigo, nuevo reglamento extranjería, consulta inmigración gratuita, abogados inmigración, residencia legal España",
  openGraph: {
    title: "Residencia por Arraigo - Nuevo Reglamento | Consulta Gratuita",
    description: "Asesoramiento experto para residencia por arraigo según el nuevo reglamento de extranjería. Consulta gratuita de 15 minutos.",
    type: "website",
    locale: "es_ES",
  },
}

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
} 