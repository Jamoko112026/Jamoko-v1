// src/sections/services/MiniSite/CTA.tsx

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section
      id="cta"
      className="
        relative py-40 px-6 text-center
        bg-gradient-to-b from-[#001821] via-[#012533] to-[#013542]
        overflow-hidden
      "
    >
      {/* Hintergrund Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.28 }}
        transition={{ duration: 1.4 }}
        className="
          absolute inset-0 
          bg-[radial-gradient(circle_at_center,rgba(229,197,139,0.22),transparent_70%)]
        "
      />

      <div className="relative z-10 max-w-3xl mx-auto space-y-12">

        {/* Signature Glow Line */}
        <div
          className="
            w-full h-[2px] mx-auto mb-12
            bg-gradient-to-r 
            from-jamoko-gold/40 
            via-jamoko-teal/40 
            to-jamoko-gold/40
            rounded-full
            shadow-[0_0_25px_rgba(229,197,139,0.35)]
          "
        />

        {/* HEADLINE */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
            text-4xl md:text-5xl font-semibold text-jamoko-gold
            drop-shadow-[0_0_25px_rgba(229,197,139,0.35)]
          "
        >
          Bereit für deine Mini-Site?
        </motion.h2>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="
            text-jamoko-text-dim text-lg leading-relaxed max-w-xl mx-auto
          "
        >
          Klar strukturiert. Ruhig gestaltet. Effektiv umgesetzt —  
          und in nur 7 Tagen online.
        </motion.p>

        {/* CTA BUTTON → CALENDLY */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <a
            href="https://calendly.com/moin-jamoko/jamoko-mini-site-kennenlernen-15-min"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-block px-12 py-4 rounded-2xl font-semibold text-lg
              bg-jamoko-gold text-[#001821]
              shadow-[0_0_30px_rgba(229,197,139,0.35)]
              hover:shadow-[0_0_45px_rgba(229,197,139,0.55)]
              transition-all duration-300
              hover:-translate-y-[2px]
            "
          >
            Kennenlerngespräch buchen (15 Min.)
          </a>

          <p className="mt-4 text-sm text-jamoko-text-dim">
            Unverbindlich · keine Zahlung vorab
          </p>
        </motion.div>
      </div>
    </section>
  );
}
