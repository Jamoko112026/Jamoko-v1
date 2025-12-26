// src/pages/Home.tsx

import GlowBackground from "../components/backgrounds/GlowBackground";

// Calm-Energy Divider
import CalmEnergyLightline from "../components/CalmEnergyLightline";

// ArcGlow-Assets
import PlanetArcGlowHero from "../components/PlanetArcGlowHero";
import PlanetArcGlowMini from "../components/PlanetArcGlowMini";
import PlanetArcGlowDark from "../components/PlanetArcGlowDark";
import PlanetArcGlowVertical from "../components/PlanetArcGlowVertical";

// HERO
import HeroLuminousBalance from "../sections/hero/HeroLuminousBalance";

// BRAND ESSENCE
import BrandEssence from "../components/sections/BrandEssence";

// MINI-SITE
import MiniSiteOffer from "../sections/services/MiniSite/Offer";
import MiniSitePreview from "../sections/services/MiniSite/Preview";
import MiniSitePricing from "../sections/services/MiniSite/Pricing";

// KLARHEITSSYSTEM
import Klarheitssystem from "../sections/Klarheitssystem";

// MARKENWERTE
import Positionierung from "../sections/value/Positionierung";
import WhyVisibility from "../sections/value/WhyVisibility";

// CONTACT
import ContactSection from "../sections/end/ContactSection";

export default function Home() {
  return (
    <GlowBackground className="text-jamoko-text">
      {/* HERO */}
      <section className="pt-32 pb-36 text-center px-6 relative">
        <HeroLuminousBalance />
      </section>

      <PlanetArcGlowHero />

      {/* BRAND ESSENCE */}
      <CalmEnergyLightline />

      <section className="py-32 px-6 max-w-5xl mx-auto">
        <BrandEssence />
      </section>

      <div className="h-24 bg-gradient-to-b from-transparent to-[#001821]" />

      {/* OFFER */}
      <section id="minisite-offer" className="py-24 px-6 max-w-5xl mx-auto">
        <MiniSiteOffer />
      </section>

      <PlanetArcGlowMini />
      <CalmEnergyLightline />

      {/* PREVIEW */}
      <section className="py-32 px-6">
        <MiniSitePreview />
      </section>

      <PlanetArcGlowDark />
      <CalmEnergyLightline />

      {/* PRICING */}
      <section className="py-28 px-6 max-w-5xl mx-auto">
        <MiniSitePricing />
      </section>

      <CalmEnergyLightline />

      <div className="h-24 bg-gradient-to-b from-[#001821] via-[#001f2a] to-[#001821]" />

      {/* KLARHEITSSYSTEM */}
      <section id="klarheit" className="py-32 px-6 max-w-5xl mx-auto">
        <Klarheitssystem />
      </section>

      <PlanetArcGlowMini />
      <CalmEnergyLightline />

      {/* MARKENWERTE */}
      <section id="werte" className="py-32 px-6 max-w-5xl mx-auto space-y-40">
        <Positionierung />

        {/* Vertical Glow */}
        <div className="w-full flex justify-center">
          <PlanetArcGlowVertical />
        </div>

        <CalmEnergyLightline />

        <WhyVisibility />
      </section>

      <PlanetArcGlowMini />
      <CalmEnergyLightline />

      {/* CONTACT */}
      <section className="py-36 px-6">
        <ContactSection />
      </section>
    </GlowBackground>
  );
}
