import GlowBackground from "../components/backgrounds/GlowBackground"
import SEO from "@/components/SEO"
import Reveal from "../components/Reveal"

// HERO
import HeroSoft from "../components/HeroSoft"

// CORE
import BrandEssence from "../components/sections/BrandEssence"
import SpartenCarousel from "../components/SpartenCarousel"

// OFFER
import MiniSiteOffer from "../sections/services/MiniSite/Offer"
import MiniSitePreview from "../sections/services/MiniSite/Preview"
import MiniSitePricing from "../sections/services/MiniSite/Pricing"

// SYSTEM
import Klarheitssystem from "../sections/Klarheitssystem"

// POSITION
import Positionierung from "../sections/value/Positionierung"
import WhyVisibility from "../sections/value/WhyVisibility"

// FINAL
import ContactSection from "../sections/end/ContactSection"

// VISUAL
import PlanetArcGlowMini from "../components/PlanetArcGlowMini"
import PlanetArcGlowVertical from "../components/PlanetArcGlowVertical"

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

        {/* ==================================================
            HERO
        ================================================== */}

        <HeroSoft />

        {/* Soft Hero Transition */}

        <div className="h-32 bg-gradient-to-b from-transparent to-[#001821]" />



        {/* ==================================================
            ERKENNEN
        ================================================== */}

        <section className="section-md container-narrow">

          <Reveal>
            <BrandEssence />
          </Reveal>

        </section>



        {/* ==================================================
            FÜR WEN
        ================================================== */}

        <section className="section-md container-full">

          <Reveal>
            <SpartenCarousel />
          </Reveal>

        </section>



        {/* ==================================================
            LÖSUNG
        ================================================== */}

        <section className="section-md container-wide space-y-24">

          <Reveal>
            <MiniSiteOffer />
          </Reveal>

          <PlanetArcGlowMini />

          <Reveal>
            <MiniSitePreview />
          </Reveal>

        </section>



        {/* ==================================================
            SYSTEM
        ================================================== */}

        <section className="section-md container-narrow">

          <Reveal>
            <Klarheitssystem />
          </Reveal>

        </section>



        {/* ==================================================
            PREISE
        ================================================== */}

        <section className="section-lg container-wide">

          <Reveal>
            <MiniSitePricing />
          </Reveal>

        </section>



        {/* ==================================================
            HALTUNG
        ================================================== */}

        <section className="section-lg container-narrow space-y-24">

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



        {/* ==================================================
            CTA
        ================================================== */}

        <section
          id="kontakt"
          className="section-lg container-narrow"
        >

          <Reveal>
            <ContactSection />
          </Reveal>

        </section>

      </GlowBackground>
    </>
  )
}