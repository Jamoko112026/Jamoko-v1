import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  noIndex?: boolean;
}

export default function SEO({
  title = "JaMoKo – Ruhige Mini-Websites für lokale Betriebe",
  description = "Ruhige Mini-Websites für lokale Betriebe. Klar. Persönlich. Wirksam. Digitale Präsenz ohne Stress.",
  image = "/og-image.png",
  url = "https://jamoko.de",
  noIndex = false,
}: SEOProps) {
  const imageUrl = image.startsWith("http")
    ? image
    : `https://jamoko.de${image.startsWith("/") ? image : `/${image}`}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="robots"
        content={noIndex ? "noindex, nofollow" : "index, follow"}
      />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:locale" content="de_DE" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={url} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  );
}
