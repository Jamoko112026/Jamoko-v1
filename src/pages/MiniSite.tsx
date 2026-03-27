import GlowBackground from "@/components/backgrounds/GlowBackground";
import GlowSection from "@/components/sections/GlowSection";
import ContactSection from "@/sections/end/ContactSection";

// ✅ DEIN RICHTIGER HERO
import MiniSiteHero from "@/sections/services/MiniSite/MiniSiteHero";

// BEISPIELE (bleiben)
import HeroLuminousBalanceFeinkost from "@/sections/hero/HeroLuminousBalanceFeinkost";
import HeroLuminousBalancePhysio from "@/sections/hero/HeroLuminousBalancePhysio";

// VALUE
import CareGrowth from "@/sections/value/CareGrowth";
import Positionierung from "@/sections/value/Positionierung";
import WhyVisibility from "@/sections/value/WhyVisibility";
import Klarheitssystem from "@/sections/Klarheitssystem";

// GLOW
import PlanetArcGlowHero from "@/components/PlanetArcGlowHero";
import PlanetArcGlowMini from "@/components/PlanetArcGlowMini";
import PlanetArcGlowDark from "@/components/PlanetArcGlowDark";
import PlanetArcGlowVertical from "@/components/PlanetArcGlowVertical";
import CalmEnergyLightline from "@/components/CalmEnergyLightline";

export default function MiniSite() {
  return (
    <GlowBackground className="text-jamoko-text min-h-screen relative overflow-hidden">

      <main className="relative z-10 w-full overflow-visible">

        {/* 🔥 HERO (JETZT RICHTIG) */}
        <MiniSiteHero />
        <PlanetArcGlowHero />
        <CalmEnergyLightline />

        {/* VALUE / ANGEBOT */}
        <section id="minisite-offer">
          <GlowSection className="py-32 md:py-40">
            <div className="max-w-5xl mx-auto space-y-32">
              <CareGrowth />
              <Positionierung />
              <WhyVisibility />
              <Klarheitssystem />
            </div>
          </GlowSection>
        </section>

        <PlanetArcGlowMini />
        <CalmEnergyLightline />

        {/* BEISPIELE */}
        <section id="examples">
          <GlowSection className="py-32 md:py-40">
            <div className="max-w-6xl mx-auto space-y-24">
              <HeroLuminousBalanceFeinkost />
              <HeroLuminousBalancePhysio />
            </div>
          </GlowSection>
        </section>

        <PlanetArcGlowDark />
        <CalmEnergyLightline />

        {/* KONTAKT */}
        <section id="contact">
          <GlowSection className="py-36 md:py-40">
            <div className="max-w-5xl mx-auto px-6">
              <ContactSection />
            </div>
          </GlowSection>
        </section>

        <PlanetArcGlowVertical />
        <CalmEnergyLightline />

      </main>
    </GlowBackground>
  );
}