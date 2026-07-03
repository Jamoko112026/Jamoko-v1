const siteUrl = "https://jamoko.de";
const organizationId = `${siteUrl}/#organization`;
const websiteId = `${siteUrl}/#website`;
const serviceId = `${siteUrl}/#mini-website-service`;

const siteDescription =
  "JaMoKo erstellt ruhige, schnelle Mini-Websites für Handwerker, Dienstleister und lokale Unternehmen.";

const areaServed = [
  {
    "@type": "City",
    name: "Hamburg",
  },
  {
    "@type": "Country",
    name: "Deutschland",
  },
];

const audience = [
  {
    "@type": "Audience",
    name: "Handwerker",
  },
  {
    "@type": "Audience",
    name: "Dienstleister",
  },
  {
    "@type": "Audience",
    name: "Lokale Unternehmen",
  },
];

export const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": organizationId,
      name: "JaMoKo",
      url: siteUrl,
      logo: `${siteUrl}/favicon-512.png`,
      image: `${siteUrl}/og-image.png`,
      email: "moin@jamoko.de",
      description: siteDescription,
      slogan: "Erst Mensch, dann Marke, dann Mechanik.",
      founder: {
        "@type": "Person",
        name: "Mo",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Hamburg",
        addressCountry: "DE",
      },
      areaServed,
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Kundenanfragen",
        email: "moin@jamoko.de",
        areaServed: "DE",
        availableLanguage: "de-DE",
      },
      knowsAbout: [
        "Mini-Websites",
        "Webdesign für lokale Betriebe",
        "Mobile Optimierung",
        "Verständliche Website-Texte",
      ],
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      name: "JaMoKo",
      url: siteUrl,
      description: siteDescription,
      inLanguage: "de-DE",
      publisher: {
        "@id": organizationId,
      },
    },
  ],
};

export const homePageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: "JaMoKo – Ruhige Websites für lokale Unternehmen",
      description:
        "Ruhige, schnelle Mini-Websites für lokale Betriebe. Klar, persönlich und ohne unnötige Technik.",
      inLanguage: "de-DE",
      isPartOf: {
        "@id": websiteId,
      },
      about: {
        "@id": organizationId,
      },
      mainEntity: {
        "@id": serviceId,
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${siteUrl}/og-image.png`,
      },
    },
    {
      "@type": "Service",
      "@id": serviceId,
      name: "Mini-Websites für lokale Betriebe",
      serviceType: "Website-Erstellung",
      provider: {
        "@id": organizationId,
      },
      areaServed,
      audience,
      description:
        "JaMoKo erstellt klare Mini-Websites für Handwerker, Dienstleister und lokale Unternehmen.",
      offers: {
        "@type": "Offer",
        name: "Kostenloses Erstgespräch",
        url: `${siteUrl}/kontakt`,
        price: "0",
        priceCurrency: "EUR",
      },
    },
  ],
};

export const contactPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${siteUrl}/kontakt#webpage`,
  url: `${siteUrl}/kontakt`,
  name: "Kontakt",
  description:
    "Nimm direkt Kontakt mit JaMoKo auf. Ruhige Mini-Websites für lokale Unternehmen aus Hamburg.",
  inLanguage: "de-DE",
  isPartOf: {
    "@id": websiteId,
  },
  about: {
    "@id": organizationId,
  },
  mainEntity: {
    "@type": "ContactPoint",
    contactType: "Kundenanfragen",
    email: "moin@jamoko.de",
    areaServed: "DE",
    availableLanguage: "de-DE",
  },
};

export function StructuredData({ data }: { data: unknown }) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
