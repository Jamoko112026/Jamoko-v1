// src/sections/services/MiniSite/Process.tsx

import { motion } from "framer-motion";

export default function MiniSiteProcess() {
  return (
    <section
      id="minisite-process"
      className="
        relative py-32 px-6 text-center
        bg-gradient-to-b from-[#001821] via-[#012533] to-[#013542]
        overflow-hidden
      "
    >
      {/* Hintergrund Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.22 }}
        transition={{ duration: 1.8 }}
        className="
          absolute inset-0
          bg-[radial-gradient(ellipse_at_center,rgba(229,197,139,0.14),transparent_75%)]
        "
      />

      {/* Wrapper */}
      <div className="relative z-10 max-w-5xl mx-auto space-y-20">

        {/* HEADLINE */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
            text-4xl md:text-5xl font-semibold 
            text-jamoko-gold drop-shadow-[0_0_25px_rgba(229,197,139,0.3)]
          "
        >
          So läuft es ab
        </motion.h2>

        {/* SUBLINE */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="
            text-jamoko-text-dim text-lg md:text-xl 
            max-w-2xl mx-auto leading-relaxed
          "
        >
          Klare Schritte, ruhige Zusammenarbeit — und deine Mini-Site ist in nur 
          <span className="text-jamoko-gold"> 7 Tagen </span>
          online.
        </motion.p>

        {/* PROCESS STEPS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          <ProcessStep
            number="01"
            title="Kickoff"
            text="Kurzes, ruhiges Gespräch: Ziele, Look, Inhalte. Du brauchst nichts vorzubereiten."
          />

          <ProcessStep
            number="02"
            title="Design & Aufbau"
            text="Hero, Typo, Icons, Struktur — alles im Calm-Energy-Stil gestaltet. Du bekommst Vorschauen."
          />

          <ProcessStep
            number="03"
            title="Launch & Übergabe"
            text="Fertigstellung, Feinschliff, Veröffentlichung und klare Anleitung für kleine Updates."
          />

        </div>
      </div>
    </section>
  );
}

/* ----------------------------- */
/*   PROCESS STEP COMPONENT      */
/* ----------------------------- */

function ProcessStep({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="
        group p-10 rounded-3xl text-left
        bg-[#01212d]/70
        border border-jamoko-gold/15
        backdrop-blur-md
        shadow-[0_0_25px_rgba(229,197,139,0.07)]
        hover:shadow-[0_0_45px_rgba(229,197,139,0.18)]
        hover:border-jamoko-gold/30
        transition-all duration-300
      "
    >
      <div className="text-jamoko-gold text-4xl font-semibold mb-4 opacity-80">
        {number}
      </div>

      <h3 className="text-2xl font-semibold text-jamoko-gold mb-3">
        {title}
      </h3>

      <p className="text-jamoko-text-dim leading-relaxed">
        {text}
      </p>
    </motion.div>
  );
}
