import { motion } from "framer-motion";
import HandwerkHero from "../../assets/jamoko/hero/handwerk/Handwerk_Hero_v1.jpg";

export default function HeroLuminousBalance() {
  return (
    <section className="relative pt-32 pb-28 px-6 text-center overflow-hidden">

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
      <div className="relative max-w-5xl mx-auto rounded-[32px] overflow-hidden shadow-[0_0_45px_rgba(0,0,0,0.45)]">

        {/* Handwerk Glow – wärmer, erdiger */}
        <div
          className="
            absolute inset-0 z-10
            pointer-events-none
            rounded-[32px]
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
            w-full h-full object-cover 
            rounded-[32px]
            select-none
            opacity-[0.92]
          "
          draggable="false"
        />
      </div>

      {/* TYPO BLOCK */}
      <div className="relative z-20 mt-12 max-w-4xl mx-auto">

        <motion.h1
          className="
            text-5xl md:text-6xl
            font-semibold
            block mt-2 text-jamoko-gold
            mb-6
            drop-shadow-[0_0_25px_rgba(229,197,139,0.35)]
          "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Mini-Websites für lokale Betriebe, die Kunden bringen.
        </motion.h1>

        <motion.h2
          className="
            text-2xl md:text-3xl
            font-medium
            text-jamoko-teal
            drop-shadow-[0_0_25px_rgba(26,199,164,0.35)]
          "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Klar. Übersichtlich. Vertrauenswürdig.
        </motion.h2>

        <motion.p
          className="
            text-jamoko-text-dim
            mt-8
            text-lg
            leading-relaxed
            max-w-2xl
            mx-auto
            drop-shadow-lg
          "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          In 7–14 Tagen zu deiner professionellen Online-Präsenz –  
          ohne Agentur-Stress, ohne Technikchaos, ohne Baukasten-Frust.
        </motion.p>

        {/* CTA */}
        <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center items-center">

          <a
            href="/beispiel/handwerk"
            className="
              px-8 py-4
              rounded-xl
              bg-jamoko-gold
              text-[#001821]
              font-semibold
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
        <p className="mt-4 text-xs text-jamoko-text-dim">
          Für Handwerk, Dienstleister & lokale Betriebe in Hamburg & Umgebung
        </p>

      </div>
    </section>
  );
}
