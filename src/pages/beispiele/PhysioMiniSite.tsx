// src/pages/beispiele/PhysioMiniSite.tsx

import GlowBackground from "../../components/backgrounds/GlowBackground";
import CalmEnergyLightline from "../../components/CalmEnergyLightline";
import PlanetArcGlowHero from "../../components/PlanetArcGlowHero";

import Hero from "../../sections/hero/HeroLuminousBalancePhysio";
import ContactSection from "../../sections/end/ContactSection";

export default function PhysioMiniSite() {
  return (
    <GlowBackground className="text-jamoko-text min-h-screen">
      <main className="w-full overflow-hidden">

        {/* HERO */}
        <Hero />
        <PlanetArcGlowHero />
        <CalmEnergyLightline />

        {/* CONTACT */}
        <section className="py-36 px-6 max-w-5xl mx-auto">
          <ContactSection />
        </section>

      </main>
    </GlowBackground>
  );
}
