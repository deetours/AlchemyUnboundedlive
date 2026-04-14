export function StructuredData() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://alchemyunbounded.com/#person",
        name: "Harish Narayan",
        description: "Transformation Coach & Somatic Practitioner",
        url: "https://alchemyunbounded.com/about",
        image: {
          "@type": "ImageObject",
          url: "https://alchemyunbounded.com/harish-portrait.jpg",
          width: 800,
          height: 600,
        },
        sameAs: [
          "https://www.linkedin.com/in/harish-narayan",
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://alchemyunbounded.com/#business",
        name: "Alchemy Unbounded",
        description: "Deep transformation coaching for creators, professionals, and seekers",
        url: "https://alchemyunbounded.com",
        founder: {
          "@id": "https://alchemyunbounded.com/#person",
        },
        foundingDate: "2020",
        areaServed: {
          "@type": "GeoShape",
          box: "-180 -90 180 90",
        },
        availableService: [
          {
            "@type": "Service",
            name: "Transformational Life Coaching",
            description: "1:1 coaching for identity shifts, transitions, and emotional complexity",
            url: "https://alchemyunbounded.com/offerings/life-coaching",
          },
          {
            "@type": "Service",
            name: "Creativity Coaching",
            description: "Coaching for authentic creative expression and sustainable visibility",
            url: "https://alchemyunbounded.com/offerings/creativity-coaching",
          },
          {
            "@type": "Service",
            name: "Movement Arts Training",
            description: "Embodiment, nervous system strength, and physical intelligence",
            url: "https://alchemyunbounded.com/offerings/movement-arts",
          },
        ],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "Customer Support",
          email: "contact@alchemyunbounded.com",
          availableLanguage: "en",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://alchemyunbounded.com/#website",
        url: "https://alchemyunbounded.com",
        name: "Alchemy Unbounded",
        description: "Deep transformation coaching for creating authentic, aligned lives",
        publisher: {
          "@id": "https://alchemyunbounded.com/#business",
        },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://alchemyunbounded.com?q={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  )
}
