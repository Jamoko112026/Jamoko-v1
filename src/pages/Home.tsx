import SEO from "@/components/SEO";
import GlowBackground from "../components/backgrounds/GlowBackground";
import HeroMinimal from "../components/HeroMinimal";
import Reveal from "../components/Reveal";
import TrustStrip from "../components/TrustStrip";
import ValueCards from "../components/ValueCards";
import ContactSection from "../sections/end/ContactSection";
import DemoSection from "../sections/home/DemoSection";
import ProcessSection from "../sections/home/ProcessSection";
import MiniSitePricing from "../sections/services/MiniSite/Pricing";

export default function Home() {
  return (
    <>
      <SEO
        title="JaMoKo – Webdesign für lokale Unternehmen"
        description="Persönlich gestaltete Websites für lokale Unternehmen. Klar strukturiert, mobil optimiert und ohne laufende Agenturkosten."
        url="https://jamoko.de"
      />

      <GlowBackground className="text-jamoko-text">
        <HeroMinimal />
        <TrustStrip />

        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <section className="py-24 md:py-32">
            <Reveal>
              <DemoSection />
            </Reveal>
          </section>

          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <section className="py-24 md:py-32">
            <Reveal>
              <ProcessSection />
            </Reveal>
          </section>

          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <section className="py-24 md:py-32">
            <Reveal>
              <ValueCards />
            </Reveal>
          </section>
        </div>

        <section className="border-y border-white/10 bg-white/[0.025]">
          <Reveal>
            <MiniSitePricing />
          </Reveal>
        </section>

        <section>
          <Reveal>
            <ContactSection />
          </Reveal>
        </section>
      </GlowBackground>
    </>
  );
}
