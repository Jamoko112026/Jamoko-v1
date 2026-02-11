// src/pages/Home.tsx

import GlowBackground from "../components/backgrounds/GlowBackground";

// SEO
import SEO from "@/components/SEO";

// Visual Accents
import PlanetArcGlowMini from "../components/PlanetArcGlowMini";
import PlanetArcGlowVertical from "../components/PlanetArcGlowVertical";

// HERO
import HeroLuminousBalance from "../sections/hero/HeroLuminousBalance";

// CONTENT
import BrandEssence from "../components/sections/BrandEssence";
import MiniSiteOffer from "../sections/services/MiniSite/Offer";
import MiniSitePreview from "../sections/services/MiniSite/Preview";
import MiniSitePricing from "../sections/services/MiniSite/Pricing";
import Klarheitssystem from "../sections/Klarheitssystem";
import Positionierung from "../sections/value/Positionierung";
import WhyVisibility from "../sections/value/WhyVisibility";
import ContactSection from "../sections/end/ContactSection";

export default function Home() {
  return (
    <>
      {/* ======================
          SEO META
      ====================== */}
      <SEO
        title="JaMoKo – Ruhige Mini-Websites für lokale Betriebe"
        description="Mini-Websites für Handwerk & lokale Betriebe. Klar. Persönlich. Wirksam. Digitale Präsenz ohne Stress."
        url="https://jamoko.de"
      />

      {/* ======================
          BACKGROUND WRAPPER
      ====================== */}
      <GlowBackground className="text-jamoko-text">

        {/* ======================
            HERO
        ====================== */}
        <section className="relative pt-32 pb-28 px-6">
          <HeroLuminousBalance />
        </section>

        {/* Soft Transition */}
        <div className="h-28 bg-gradient-to-b from-transparent to-[#001821]" />

        {/* ======================
            PROBLEM / WIRKUNG
            (BrandEssence)
        ====================== */}
        <section className="py-28 md:py-32 px-6 max-w-5xl mx-auto">
          <BrandEssence />
        </section>

        {/* ======================
            LÖSUNG – MINI-SITE
        ====================== */}
        <section
          id="minisite-offer"
          className="py-28 px-6 max-w-5xl mx-auto"
        >
          <MiniSiteOffer />
        </section>

        <PlanetArcGlowMini />

        {/* ======================
            VERTRAUEN / PREVIEW
        ====================== */}
        <section className="py-28 md:py-32 px-6">
          <MiniSitePreview />
        </section>

        {/* ======================
            ANGEBOT / PREIS
        ====================== */}
        <section className="py-28 px-6 max-w-5xl mx-auto">
          <MiniSitePricing />
        </section>

        {/* ======================
            METHODE – KLARHEITSSYSTEM
        ====================== */}
        <section
          id="klarheit"
          className="py-28 md:py-32 px-6 max-w-5xl mx-auto"
        >
          <Klarheitssystem />
        </section>

        {/* ======================
            POSITIONIERUNG / WARUM JAMOKO
        ====================== */}
        <section
          id="werte"
          className="py-28 md:py-32 px-6 max-w-5xl mx-auto space-y-32"
        >
          <Positionierung />

          <div className="w-full flex justify-center">
            <PlanetArcGlowVertical />
          </div>

          <WhyVisibility />
        </section>

        {/* ======================
            FINAL CTA / KONTAKT
        ====================== */}
        <section className="py-36 px-6">
          <ContactSection />
        </section>

      </GlowBackground>
    </>
  );
}
