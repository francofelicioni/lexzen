export function LegalServiceStructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LegalService",
          name: "Lexzen Online Legal Advisory",
          description:
            "Specialized online legal advisory services for digital businesses and EU residency. Expert guidance in privacy and data protection, legal digitalization, and compliance.",
          url: "https://lexzen.com",
          logo: "https://lexzen.com/logo.png",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Calle Gran Vía 28",
            addressLocality: "Madrid",
            addressRegion: "Madrid",
            postalCode: "28013",
            addressCountry: "ES",
          },
          telephone: "+34912456789",
          email: "info@lexzen.com",
          openingHours: "Mo,Tu,We,Th,Fr 09:00-18:00",
          priceRange: "€€",
          serviceType: [
            "Online Legal Advisory",
            "Privacy and Data Protection",
            "Legal Digitalization",
            "EU Residency Services",
          ],
          sameAs: [
            "https://www.facebook.com/lexzen",
            "https://www.twitter.com/lexzen",
            "https://www.linkedin.com/company/lexzen",
            "https://www.instagram.com/lexzen",
          ],
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Legal Services",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Free Legal Consultation",
                  description: "20-minute free legal consultation to discuss your digital business needs",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Privacy and Data Protection",
                  description: "Comprehensive privacy and data protection services for digital businesses",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Legal Digitalization",
                  description: "Legal digitalization services to modernize your business operations",
                },
              },
            ],
          },
        }),
      }}
    />
  )
}

export function LocalBusinessStructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Lexzen Legal Services",
          image: "https://lexzen.com/office-image.jpg",
          "@id": "https://lexzen.com",
          url: "https://lexzen.com",
          telephone: "+34912456789",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Calle Gran Vía 28",
            addressLocality: "Madrid",
            postalCode: "28013",
            addressCountry: "ES",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 40.42,
            longitude: -3.7033,
          },
          openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "18:00",
          },
          sameAs: [
            "https://www.facebook.com/lexzen",
            "https://www.twitter.com/lexzen",
            "https://www.linkedin.com/company/lexzen",
            "https://www.instagram.com/lexzen",
          ],
        }),
      }}
    />
  )
}
