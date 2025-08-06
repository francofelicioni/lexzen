export function LegalServiceStructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LegalService",
          name: "Lexzen Asesoría Legal",
          description:
            "Servicios especializados de asesoría legal | Residencia en la UE y asesoría legal para emprendedores. Orientación experta en privacidad y protección de datos, digitalización legal y cumplimiento normativo.",
          url: "https://lexzen.com",
          logo: "https://lexzen.com/lexzen.jpg",
          address: {
            addressCountry: "ES",
          },
          telephone: "+34614481326",
          email: "info@lexzen.com",
          serviceType: [
            "Asesoría Legal Online",
            "Privacidad y Protección de Datos",
            "Digitalización Legal",
            "Servicios de Residencia en la UE",
          ],
          // sameAs: [
          //   "https://www.facebook.com/lexzen",
          //   "https://www.twitter.com/lexzen",
          //   "https://www.linkedin.com/company/lexzen",
          //   "https://www.instagram.com/lexzen",
          // ],
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Servicios Legales",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Consulta Legal Gratuita",
                  description: "Consulta legal gratuita de 15 minutos para hablar sobre tu caso específico y asesorarte sobre los siguientes pasos.",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Asesoría Legal Online",
                  description: "Asesoría legal online para residentes en la UE, emprendedores y negocios digitales.",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Residencia en la UE",
                  description: "Servicios de asesoría para obtener residencia en la UE.",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Privacidad y Protección de Datos",
                  description: "Servicios integrales de privacidad y protección de datos para negocios digitales",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Digitalización Legal",
                  description: "Servicios de digitalización legal para modernizar las operaciones de tu negocio",
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
          name: "Servicios Legales Lexzen",
          image: "https://lexzen.com/office-image.jpg",
          "@id": "https://lexzen.com",
          url: "https://lexzen.com",
          telephone: "+34614481326",
          address: {
            // "@type": "PostalAddress",
            // streetAddress: "",
            // addressLocality: "",
            // postalCode: "",
            addressCountry: "ES",
          },
          // geo: {
          //   "@type": "GeoCoordinates",
          //   latitude: 40.42,
          //   longitude: -3.7033,
          // },
          // openingHoursSpecification: {
          //   "@type": "OpeningHoursSpecification",
          //   dayOfWeek: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"],
          //   opens: "09:00",
          //   closes: "18:00",
          // },
          // sameAs: [
          //   "https://www.facebook.com/lexzen",
          //   "https://www.twitter.com/lexzen",
          //   "https://www.linkedin.com/company/lexzen",
          //   "https://www.instagram.com/lexzen",
          // ],
        }),
      }}
    />
  )
}
