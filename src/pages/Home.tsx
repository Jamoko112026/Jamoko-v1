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

      <GlowBackground className="text-jamoko-text">

        {/* ======================
            HERO
        ====================== */}
        <section className="pt-32 pb-28 px-6 relative">
          <HeroLuminousBalance />
        </section>

        {/* Soft Transition */}
        <div className="h-28 bg-gradient-to-b from-transparent to-[#001821]" />

        {/* ======================
            BRAND ESSENCE
        ====================== */}
        <section className="py-28 md:py-32 px-6 max-w-5xl mx-auto">
          <BrandEssence />
        </section>

        {/* ======================
            OFFER
        ====================== */}
        <section
          id="minisite-offer"
          className="py-28 px-6 max-w-5xl mx-auto"
        >
          <MiniSiteOffer />
        </section>

        <PlanetArcGlowMini />

        {/* ======================
            PREVIEW
        ====================== */}
        <section className="py-28 md:py-32 px-6">
          <MiniSitePreview />
        </section>

        {/* ======================
            PRICING
        ====================== */}
        <section className="py-28 px-6 max-w-5xl mx-auto">
          <MiniSitePricing />
        </section>

        {/* ======================
            KLARHEITSSYSTEM
        ====================== */}
        <section
          id="klarheit"
          className="py-28 md:py-32 px-6 max-w-5xl mx-auto"
        >
          <Klarheitssystem />
        </section>

        {/* ======================
            MARKENWERTE
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
            CONTACT (FINAL CTA)
        ====================== */}
        <section className="py-36 px-6">
          <ContactSection />
        </section>

      </GlowBackground>
    </>
  );
}
