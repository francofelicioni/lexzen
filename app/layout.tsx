import type React from "react"
import type { Metadata } from "next"
import { Inter, Merriweather } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/contexts/language-context"
import { SafeHydratedThemeProvider } from "@/components/theme-provider-safe"
import { Toaster } from "react-hot-toast"
import Script from "next/script"
import { FacebookPixelTracker } from "@/components/facebook-pixel-tracker"


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"],
})

const merriweather = Merriweather({
  subsets: ["latin"],
  variable: "--font-merriweather",
  display: "swap",
  weight: ["400", "700", "900"],
})

export const metadata: Metadata = {
  title: "Lexzen - Asesoría Legal Online | Consulta Gratuita de 15 Minutos",
  description:
    "Servicios especializados de asesoría legal online para residencia en la UE, emprendedores y negocios digitales. Orientación experta en privacidad y protección de datos, digitalización legal y cumplimiento normativo. Agenda una consulta legal gratuita hoy.",
  keywords:
    "asesoría legal online, privacidad y protección de datos, digitalización legal, consulta legal gratuita, residencia en la UE, cumplimiento GDPR, derecho de negocios digitales, servicios legales tecnológicos",
  authors: [{ name: "Servicios Legales Lexzen" }],
  creator: "Equipo Legal Lexzen",
  publisher: "Lexzen",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://lexzen.com",
    title: "Lexzen - Asesoría Legal Online | Consulta Gratuita de 15 Minutos",
    description:
      "Servicios especializados de asesoría legal online para residencia en la UE, emprendedores y negocios digitales. Orientación experta en privacidad y protección de datos.",
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
  icons: {
    icon: "favicon.ico",
    shortcut: "/favicon.ico",
    apple: "apple-touch-icon.png",
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
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
          strategy="afterInteractive"
        />
        <Script
          id="fb-pixel-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
              __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '750503187706732');
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${merriweather.variable} font-body`}>
        <SafeHydratedThemeProvider>
          <LanguageProvider>
            <Toaster position="top-right" />
            {children}
            <FacebookPixelTracker />
          </LanguageProvider>
        </SafeHydratedThemeProvider>
      </body>
    </html>
  )
}
