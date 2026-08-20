import type { Metadata, Viewport } from "next";
import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import { ScrollReveal } from "@/components/landing/ScrollReveal";
import { StructuredData, siteJsonLd } from "./structured-data";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://jamoko.de"),
  title: {
    default: "JaMoKo – Websites für Handwerksbetriebe",
    template: "%s · JaMoKo",
  },
  description:
    "Klare Websites für Handwerksbetriebe und lokale Unternehmen – persönlich begleitet von der Struktur bis zur Veröffentlichung.",
  openGraph: {
    title: "JaMoKo – Websites für Handwerksbetriebe",
    description:
      "Klare Websites für Handwerksbetriebe und lokale Unternehmen – persönlich begleitet von der Struktur bis zur Veröffentlichung.",
    url: "https://jamoko.de",
    siteName: "JaMoKo",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "JaMoKo – Websites für Handwerksbetriebe",
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
  themeColor: "#001821",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>
        <StructuredData data={siteJsonLd} />
        <ScrollReveal />
        <a
          href="#inhalt"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-[#E5C58B] focus:px-4 focus:py-3 focus:text-sm focus:font-medium focus:text-[#001821]"
        >
          Zum Inhalt springen
        </a>
        <div className="jmk-enhanced relative flex min-h-screen flex-col overflow-x-hidden bg-[#001821] text-jamoko-text">
          <div className="pointer-events-none fixed inset-0 z-0">
            <div className="absolute -top-40 left-[-10%] h-[70vh] w-[70vw] bg-[radial-gradient(circle,rgba(229,197,139,0.10),transparent_60%)]" />
            <div className="absolute right-[-10%] top-[30%] h-[60vh] w-[60vw] bg-[radial-gradient(circle,rgba(26,199,164,0.08),transparent_60%)]" />
          </div>
          <div className="relative z-20">
            <Header />
          </div>
          <main id="inhalt" className="relative z-10 flex-1 pt-24">
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
