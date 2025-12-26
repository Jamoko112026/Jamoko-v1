// src/pages/MiniSite.tsx

import GlowBackground from "../components/backgrounds/GlowBackground";
import GlowSection from "../components/sections/GlowSection";

// Calm-Energy Divider
import CalmEnergyLightline from "../components/CalmEnergyLightline";

// ArcGlow Assets
import PlanetArcGlowHero from "../components/PlanetArcGlowHero";
import PlanetArcGlowMini from "../components/PlanetArcGlowMini";
import PlanetArcGlowDark from "../components/PlanetArcGlowDark";
import PlanetArcGlowVertical from "../components/PlanetArcGlowVertical";

// Mini-Site Sections
import MiniSiteHero from "../sections/services/MiniSite/MiniSiteHero";
import MiniSiteOffer from "../sections/services/MiniSite/Offer";
import MiniSitePreview from "../sections/services/MiniSite/Preview";
import MiniSiteFeatures from "../sections/services/MiniSite/Features";
import MiniSiteProcess from "../sections/services/MiniSite/Process";
import MiniSitePricing from "../sections/services/MiniSite/Pricing";
import MiniSiteTestimonials from "../sections/services/MiniSite/Testimonials";
import MiniSiteCTA from "../sections/services/MiniSite/CTA";
import MiniSiteFAQ from "../sections/services/MiniSite/FAQ";
import MiniSiteComparison from "../sections/services/MiniSite/Comparison";

// Kontakt
import ContactSection from "../sections/end/ContactSection";

export default function MiniSite() {
  return (
    <GlowBackground className="text-jamoko-text min-h-screen">
      <main className="w-full overflow-hidden">

        {/* HERO */}
        <MiniSiteHero />
        <PlanetArcGlowHero />
        <CalmEnergyLightline />

        {/* OFFER */}
        <GlowSection className="py-32 md:py-40">
          <div className="max-w-5xl mx-auto">
            <MiniSiteOffer />
          </div>
        </GlowSection>
        <PlanetArcGlowMini />
        <CalmEnergyLightline />

        {/* PREVIEW */}
        <GlowSection className="py-32 md:py-40">
          <div className="max-w-6xl mx-auto">
            <MiniSitePreview />
          </div>
        </GlowSection>
        <PlanetArcGlowDark />
        <CalmEnergyLightline />

        {/* FEATURES */}
        <GlowSection className="py-32 md:py-40">
          <div className="max-w-6xl mx-auto">
            <MiniSiteFeatures />
          </div>
        </GlowSection>
        <CalmEnergyLightline />

        {/* PROCESS */}
        <GlowSection className="py-32 md:py-40">
          <div className="max-w-6xl mx-auto">
            <MiniSiteProcess />
          </div>
        </GlowSection>
        <PlanetArcGlowMini />
        <CalmEnergyLightline />

        {/* PRICING */}
        <GlowSection className="py-32 md:py-40">
          <div className="max-w-5xl mx-auto">
            <MiniSitePricing />
          </div>
        </GlowSection>
        <PlanetArcGlowDark />
        <CalmEnergyLightline />

        {/* ADD-ONS */}
        <GlowSection className="py-32 md:py-40">
          <div className="max-w-6xl mx-auto">
            {/* dein Add-On-Block bleibt unverändert */}
          </div>
        </GlowSection>
        <CalmEnergyLightline />

        {/* COMPARISON */}
        <GlowSection className="py-32 md:py-40">
          <div className="max-w-6xl mx-auto">
            <MiniSiteComparison />
          </div>
        </GlowSection>
        <PlanetArcGlowVertical />
        <CalmEnergyLightline />

        {/* FAQ */}
        <GlowSection className="py-32 md:py-40">
          <div className="max-w-5xl mx-auto">
            <MiniSiteFAQ />
          </div>
        </GlowSection>
        <CalmEnergyLightline />

        {/* TESTIMONIALS */}
        <GlowSection className="py-32 md:py-40">
          <div className="max-w-6xl mx-auto">
            <MiniSiteTestimonials />
          </div>
        </GlowSection>
        <PlanetArcGlowMini />
        <CalmEnergyLightline />

        {/* CTA */}
        <GlowSection className="py-40 md:py-48">
          <div className="max-w-4xl mx-auto">
            <MiniSiteCTA />
          </div>
        </GlowSection>
        <CalmEnergyLightline />

        {/* CONTACT */}
        <section className="py-36 px-6 max-w-5xl mx-auto">
          <ContactSection />
        </section>

      </main>
    </GlowBackground>
  );
}
