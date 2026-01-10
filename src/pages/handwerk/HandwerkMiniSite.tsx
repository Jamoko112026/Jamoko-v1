// src/pages/handwerk/HandwerkMiniSite.tsx

import GlowBackground from "../../components/backgrounds/GlowBackground";
import Hero from "../../sections/hero/HeroLuminousBalance";
import ContactSection from "../../sections/end/ContactSection";

export default function HandwerkMiniSite() {
  return (
    <GlowBackground className="text-jamoko-text min-h-screen">
      <main className="w-full overflow-hidden">

        {/* HERO */}
        <Hero />

        {/* CONTACT */}
        <section className="py-36 px-6 max-w-5xl mx-auto">
          <ContactSection />
        </section>

      </main>
    </GlowBackground>
  );
}
