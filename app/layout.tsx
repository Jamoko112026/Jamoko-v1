import type { Metadata, Viewport } from "next";
import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import { StructuredData, siteJsonLd } from "./structured-data";
import "./globals.css";
import "./brand-v3.css";
import "./theme.css";
import { themeInitScript } from "@/components/landing/theme";

export const metadata: Metadata = {
  metadataBase: new URL("https://jamoko.de"),
  manifest: "/site.webmanifest",
  title: {
    default: "JaMoKo – Websites & Digitalbegleitung",
    template: "%s · JaMoKo",
  },
  description:
    "Websites, digitale Sichtbarkeit und Digitalbegleitung für lokale Unternehmen. Wir hören zu, ordnen und finden Lösungen, die zu deinem Alltag passen.",
  openGraph: {
    title: "JaMoKo – Websites & Digitalbegleitung",
    description:
      "Websites, digitale Sichtbarkeit und Digitalbegleitung für lokale Unternehmen. Wir hören zu, ordnen und finden Lösungen, die zu deinem Alltag passen.",
    url: "https://jamoko.de",
    siteName: "JaMoKo",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "JaMoKo – Websites & Digitalbegleitung",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://jamoko.de",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8f7f3" },
    { media: "(prefers-color-scheme: dark)", color: "#001821" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeInitScript }} /></head>
      <body>
        <StructuredData data={siteJsonLd} />
        <a
          href="#inhalt"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-[#E5C58B] focus:px-4 focus:py-3 focus:text-sm focus:font-medium focus:text-[#001821]"
        >
          Zum Inhalt springen
        </a>
        <div className="brand-shell relative flex min-h-screen flex-col overflow-x-hidden bg-calm-navy text-jamoko-text">
          <div className="relative z-20">
            <Header />
          </div>
          <main id="inhalt" className="relative z-10 flex-1 pt-[65px] md:pt-[89px]">
            {children}
          </main>
          <div className="relative z-10">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
