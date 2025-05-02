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
  title: "Lexzen - Online Legal Advisory for Digital Businesses | Free Consultation",
  description:
    "Specialized online legal advisory services for digital businesses and EU residency. Expert guidance in privacy and data protection, legal digitalization, and compliance. Schedule a free legal consultation today.",
  keywords:
    "online legal advisory, privacy and data protection, legal digitalization, free legal consultation, EU residency, GDPR compliance, digital business law, legal tech services",
  authors: [{ name: "Lexzen Legal Services" }],
  creator: "Lexzen Legal Team",
  publisher: "Lexzen",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lexzen.com",
    title: "Lexzen - Online Legal Advisory for Digital Businesses",
    description:
      "Specialized online legal advisory services for digital businesses and EU residency. Expert guidance in privacy and data protection.",
    siteName: "Lexzen Legal Services",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lexzen - Online Legal Advisory Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lexzen - Online Legal Advisory for Digital Businesses",
    description:
      "Specialized online legal advisory services for digital businesses and EU residency. Expert guidance in privacy and data protection.",
    images: ["/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
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
