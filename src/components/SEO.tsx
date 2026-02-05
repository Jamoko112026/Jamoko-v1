import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export default function SEO({
  title = "JaMoKo – Ruhige Mini-Websites für lokale Betriebe",
  description = "Ruhige Mini-Websites für lokale Betriebe. Klar. Persönlich. Wirksam. Digitale Präsenz ohne Stress.",
  image = "/og/jamoko-og.webp",
  url = "https://jamoko.de"
}: SEOProps) {
  return (
    <Helmet>

      {/* BASIC META */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* OPEN GRAPH */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />

      {/* TWITTER */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

    </Helmet>
  );
}
