"use client";

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Coffee & Donut TV",
    "url": "https://www.coffeedonuttv.com",
    "logo": "https://ext.same-assets.com/2445618519/4009277168.png",
    "description": "Premium IPTV streaming service with 9,500+ live channels and 125,000+ movies & series",
    "email": "CoffeeDonutTV@gmail.com",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-226-894-3166",
      "contactType": "Customer Service",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://www.instagram.com/coffeedonuttv",
      "https://tiktok.com/@coffee.donut.tv"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Coffee & Donut TV",
    "url": "https://www.coffeedonuttv.com",
    "description": "Premium IPTV streaming service with 9,500+ live channels, 125,000+ movies & series",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.coffeedonuttv.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "IPTV Streaming Service",
    "provider": {
      "@type": "Organization",
      "name": "Coffee & Donut TV"
    },
    "areaServed": "Worldwide",
    "description": "Premium IPTV streaming service offering 9,500+ live channels, 125,000+ movies and series in 4K quality",
    "offers": [
      {
        "@type": "Offer",
        "name": "1 Month Pass",
        "price": "6",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "name": "3 Month Pass",
        "price": "18",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "name": "6 Month Pass",
        "price": "36",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "name": "12 Month Pass",
        "price": "72",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}
