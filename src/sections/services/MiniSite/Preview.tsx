import { motion } from "framer-motion";

export default function MiniSitePreview() {
  return (
    <section
      id="minisite-preview"
      className="relative py-32 px-6 
                 bg-gradient-to-b from-[#001821] via-[#012533] to-[#013542]
                 overflow-hidden"
    >
      {/* Radial Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.25 }}
        transition={{ duration: 1.4 }}
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,
                 rgba(229,197,139,0.18),transparent_75%)]"
      />

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">

        {/* IMAGE / PREVIEW */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="
            relative 
            rounded-[32px] 
            overflow-hidden  
            shadow-[0_0_45px_rgba(0,0,0,0.45)]
          "
        >
          {/* Glow Frame */}
          <div
            className="
              absolute inset-0 z-10 
              pointer-events-none
              rounded-[32px]
              bg-[radial-gradient(circle_at_center,
                rgba(229,197,139,0.22),
                rgba(26,199,164,0.12),
                transparent 70%)
              ]
            "
          />

          {/* ARD Preview Image */}
          <img
            src="/ard/preview.webp"
            alt="Altonaer Reifendienst MiniSite Vorschau"
            className="w-full h-full object-cover rounded-[32px]"
          />
        </motion.div>

        {/* TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="text-left"
        >
          <h3
            className="text-3xl md:text-4xl font-semibold 
                       text-jamoko-gold mb-4"
          >
            Projekt: Altonaer Reifendienst
          </h3>

          <p className="text-jamoko-text-dim mb-6 leading-relaxed">
            Ziel: Lokale Sichtbarkeit erhöhen und Kundenanfragen vereinfachen —
            ohne Marketing-Agentur, ohne Technikstress.
          </p>

          <ul className="space-y-3 text-sm text-jamoko-text mb-8">
            <li>✓ Klare Startseite für lokale Kunden</li>
            <li>✓ Mobil optimierte Kontaktführung</li>
            <li>✓ WhatsApp Direktkontakt</li>
            <li>✓ Ruhiges, professionelles Design</li>
            <li>✓ Google-Business Integration</li>
          </ul>

          <a
            href="#contact"
            className="
              inline-block
              px-6 py-3
              rounded-xl
              border border-white/20
              hover:border-[#E5C58B]
              transition
            "
          >
            Ähnliches Projekt anfragen
          </a>
        </motion.div>

      </div>
    </section>
  );
}
