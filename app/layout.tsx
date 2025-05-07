import type React from "react"
import type { Metadata } from "next"
import { Inter, Merriweather } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/contexts/language-context"
import { SafeHydratedThemeProvider } from "@/components/theme-provider-safe"
import { Toaster } from "react-hot-toast"

// Load Inter font with multiple weights
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"],
})

// Load Merriweather font
const merriweather = Merriweather({
  subsets: ["latin"],
  variable: "--font-merriweather",
  display: "swap",
  weight: ["400", "700", "900"],
})

export const metadata: Metadata = {
  title: "Lexzen - Asesoría Legal Online | Consulta Gratuita de 15 Minutos",
  description:
    "Servicios especializados de asesoría legal online para negocios digitales y residencia en la UE. Orientación experta en privacidad y protección de datos, digitalización legal y cumplimiento normativo. Agenda una consulta legal gratuita hoy.",
  keywords:
    "asesoría legal online, privacidad y protección de datos, digitalización legal, consulta legal gratuita, residencia en la UE, cumplimiento GDPR, derecho de negocios digitales, servicios legales tecnológicos",
  authors: [{ name: "Servicios Legales Lexzen" }],
  creator: "Equipo Legal Lexzen",
  publisher: "Lexzen",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://lexzen.com",
    title: "Lexzen - Asesoría Legal Online para Negocios Digitales",
    description:
      "Servicios especializados de asesoría legal online para negocios digitales y residencia en la UE. Orientación experta en privacidad y protección de datos.",
    siteName: "Servicios Legales Lexzen",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Servicios Legales Lexzen",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/favicon.ico" />
        <script
          src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
          async
          defer
        />
      </head>
      <body className={`${inter.variable} ${merriweather.variable} font-body`}>
        <SafeHydratedThemeProvider>
          <LanguageProvider>
            <Toaster position="top-right" />
            {children}
          </LanguageProvider>
        </SafeHydratedThemeProvider>
      </body>
    </html>
  )
}
