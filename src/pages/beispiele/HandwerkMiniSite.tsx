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

<div className="h-px w-24 mx-auto my-20 bg-gradient-to-r from-transparent via-jamoko-gold/40 to-transparent" />

        {/* CONTACT */}
       <section className="pt-24 pb-36 px-6 max-w-5xl mx-auto">
  <ContactSection />
</section>


      </main>
    </GlowBackground>
  );
}
