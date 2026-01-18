import { motion } from "framer-motion";
import HandwerkHero from "../../assets/jamoko/hero/handwerk/Handwerk_Hero_v1.jpg";

export default function HeroLuminousBalance() {
  return (
    <section className="relative pt-24 md:pt-32 pb-20 md:pb-28 px-4 sm:px-6 text-center overflow-hidden">

      {/* NAVY DEPTH PANEL */}
      <div
        className="
          absolute inset-0 
          bg-gradient-to-b 
          from-[#001821]/85 via-[#001821]/92 to-[#001821]
          pointer-events-none
        "
      />

      {/* SIGNATURE GLOW FRAME */}
      <div className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-[0_0_45px_rgba(0,0,0,0.45)]">

        {/* Glow Overlay */}
        <div
          className="
            absolute inset-0 z-10
            pointer-events-none
            rounded-3xl
            bg-[radial-gradient(circle_at_center,
              rgba(229,197,139,0.22),
              rgba(160,120,60,0.10),
              transparent 70%)
            ]
          "
        />

        {/* Hero Image */}
        <img
          src={HandwerkHero}
          alt="Handwerksbetrieb bei der Arbeit"
          className="
            w-full
            h-[240px] sm:h-[300px] md:h-full
            object-cover
            rounded-3xl
            select-none
            opacity-[0.92]
          "
          draggable="false"
        />
      </div>

      {/* TYPO BLOCK */}
      <div className="relative z-20 mt-10 md:mt-12 max-w-4xl mx-auto">

        <motion.h1
          className="
            text-3xl sm:text-4xl md:text-6xl
            font-semibold
            text-jamoko-gold
            mb-5
            leading-tight
            drop-shadow-[0_0_20px_rgba(229,197,139,0.35)]
          "
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Mini-Websites für lokale Betriebe, die Kunden bringen.
        </motion.h1>

        <motion.h2
          className="
            text-lg sm:text-xl md:text-3xl
            font-medium
            text-jamoko-teal
            drop-shadow-[0_0_20px_rgba(26,199,164,0.35)]
          "
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          Klar. Übersichtlich. Vertrauenswürdig.
        </motion.h2>

        <motion.p
          className="
            text-jamoko-text-dim
            mt-6
            text-base md:text-lg
            leading-relaxed
            max-w-2xl
            mx-auto
          "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          In 7–14 Tagen zu deiner professionellen Online-Präsenz –  
          ohne Agentur-Stress, ohne Technikchaos, ohne Baukasten-Frust.
        </motion.p>

        {/* CTA BLOCK */}
        <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">

          <a
            href="/beispiel/handwerk"
            className="
              w-full sm:w-auto
              px-8 py-4
              rounded-xl
              bg-jamoko-gold
              text-[#001821]
              font-semibold
              text-base
              shadow-lg
              hover:opacity-90
              transition
            "
          >
            Handwerks-Beispiel ansehen
          </a>

          <a
            href="#contact"
            className="
              text-sm
              text-jamoko-text-dim
              hover:text-jamoko-teal
              transition
            "
          >
            Kostenloses Erstgespräch starten (15 Minuten)
          </a>

        </div>

        {/* TRUST LINE */}
        <p className="mt-3 text-xs text-jamoko-text-dim">
          Für Handwerk, Dienstleister & lokale Betriebe in Hamburg & Umgebung
        </p>

      </div>
    </section>
  );
}
