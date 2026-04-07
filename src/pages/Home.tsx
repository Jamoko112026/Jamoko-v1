import GlowBackground from "../components/backgrounds/GlowBackground";
import SEO from "@/components/SEO";
import Reveal from "../components/Reveal";

// ENTRY
import HeroMinimal from "../components/HeroMinimal";
import TrustStrip from "../components/TrustStrip";
import DemoSection from "../sections/home/DemoSection";
import ProcessSection from "../sections/home/ProcessSection";

// CORE
import MiniSiteOffer from "../sections/services/MiniSite/Offer";
import MiniSitePreview from "../sections/services/MiniSite/Preview";
import MiniSitePricing from "../sections/services/MiniSite/Pricing";

// VALUE
import ValueCards from "../components/ValueCards";

// CTA
import ContactSection from "../sections/end/ContactSection";

// VISUAL
import PlanetArcGlowMini from "../components/PlanetArcGlowMini";

export default function Home() {
  return (
    <>
      <SEO
        title="JaMoKo – Ruhige Mini-Websites für lokale Betriebe"
        description="Klar. Persönlich. Wirksam. Mini-Websites ohne Stress."
        url="https://jamoko.de"
      />

      <GlowBackground className="text-jamoko-text">

        {/* ================= HERO ================= */}
        <HeroMinimal />

        {/* ================= VERTRAUEN ================= */}
        <TrustStrip />

        {/* ================= BEISPIELE ================= */}
        <DemoSection />

        {/* ================= PROZESS ================= */}
        <ProcessSection />



        {/* ================= ANGEBOT ================= */}
        <section className="section-md container-wide space-y-20">

          <Reveal>
            <MiniSiteOffer />
          </Reveal>

          <PlanetArcGlowMini />

          <Reveal>
            <MiniSitePreview />
          </Reveal>

        </section>



        {/* ================= MEHRWERT ================= */}
        <section className="section-md container-narrow">
          <Reveal>
            <ValueCards />
          </Reveal>
        </section>



        {/* ================= PREISE ================= */}
        <section className="section-md container-wide">
          <Reveal>
            <MiniSitePricing />
          </Reveal>
        </section>



        {/* ================= KONTAKT ================= */}
        <section id="kontakt" className="section-lg container-narrow">
          <Reveal>
            <ContactSection />
          </Reveal>
        </section>

      </GlowBackground>
    </>
  );
}