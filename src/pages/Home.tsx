import GlowBackground from "../components/backgrounds/GlowBackground";
import SEO from "@/components/SEO";
import Reveal from "../components/Reveal";

// HERO
import HeroSoft from "../components/HeroSoft";

// CORE
import BrandEssence from "../components/sections/BrandEssence";
import SpartenCarousel from "../components/SpartenCarousel";

// OFFER
import MiniSiteOffer from "../sections/services/MiniSite/Offer";
import MiniSitePreview from "../sections/services/MiniSite/Preview";
import MiniSitePricing from "../sections/services/MiniSite/Pricing";

// SYSTEM
import Klarheitssystem from "../sections/Klarheitssystem";

// POSITION
import Positionierung from "../sections/value/Positionierung";
import WhyVisibility from "../sections/value/WhyVisibility";

// FINAL
import ContactSection from "../sections/end/ContactSection";

// VISUAL
import PlanetArcGlowMini from "../components/PlanetArcGlowMini";
import PlanetArcGlowVertical from "../components/PlanetArcGlowVertical";

export default function Home() {
  return (
    <>
      {/* ================= SEO ================= */}
      <SEO
        title="JaMoKo – Ruhige Mini-Websites für lokale Betriebe"
        description="Mini-Websites für Handwerk & lokale Betriebe. Klar. Persönlich. Wirksam. Digitale Präsenz ohne Stress."
        url="https://jamoko.de"
      />

      <GlowBackground className="text-jamoko-text">

        {/* ================= HERO ================= */}
        <HeroSoft />

        {/* SOFT TRANSITION */}
        <div className="h-32 bg-gradient-to-b from-transparent to-[#001821]" />

        {/* ================= ERKENNEN ================= */}
        <section className="py-28 px-6 max-w-3xl mx-auto">
          <Reveal>
            <BrandEssence />
          </Reveal>
        </section>

        {/* ================= FÜR WEN ================= */}
        <section className="py-28 px-6">
          <Reveal>
            <SpartenCarousel />
          </Reveal>
        </section>

        {/* ================= LÖSUNG ================= */}
        <section className="py-28 px-6 max-w-4xl mx-auto space-y-24">
          <Reveal>
            <MiniSiteOffer />
          </Reveal>

          <PlanetArcGlowMini />

          <Reveal>
            <MiniSitePreview />
          </Reveal>
        </section>

        {/* ================= SYSTEM ================= */}
        <section className="py-28 px-6 max-w-3xl mx-auto">
          <Reveal>
            <Klarheitssystem />
          </Reveal>
        </section>

        {/* ================= PREISE ================= */}
        <section className="py-32 px-6 max-w-4xl mx-auto">
          <Reveal>
            <MiniSitePricing />
          </Reveal>
        </section>

        {/* ================= HALTUNG ================= */}
        <section className="py-32 px-6 max-w-3xl mx-auto space-y-24">
          <Reveal>
            <Positionierung />
          </Reveal>

          <div className="flex justify-center">
            <PlanetArcGlowVertical />
          </div>

          <Reveal>
            <WhyVisibility />
          </Reveal>
        </section>

        {/* ================= CTA ================= */}
        <section id="kontakt" className="py-36 px-6">
          <Reveal>
            <ContactSection />
          </Reveal>
        </section>

      </GlowBackground>
    </>
  );
}