// src/sections/services/MiniSite/Offer.tsx

import { motion } from "framer-motion";

export default function MiniSiteOffer() {
  return (
    <section
      id="minisite-offer"
      className="
        relative py-32 px-6 text-center
        bg-gradient-to-b from-[#013542] via-[#012533] to-[#001821]
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

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-5xl mx-auto space-y-20">

        {/* HEADLINE */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
            text-4xl md:text-5xl font-semibold 
            text-jamoko-gold mb-6
            drop-shadow-[0_0_25px_rgba(229,197,139,0.3)]
          "
        >
          Was du bekommst
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
          Eine moderne Mini-Site im Calm-Energy-Stil –  
          klar strukturiert, hochwertig gestaltet und in nur **7 Tagen** online.
        </motion.p>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* BOX 1 */}
          <OfferBox
            title="Moderner Web-Auftritt"
            text="Eine klare, minimalistische Seite mit ruhiger Energie – optimiert für Vertrauen & Übersichtlichkeit."
          />

          {/* BOX 2 */}
          <OfferBox
            title="Professionelles Branding"
            text="Farben, Typo & Glow im Jamoko-Look – perfekt abgestimmt auf dein Geschäft."
          />

          {/* BOX 3 */}
          <OfferBox
            title="Mobile-First Design"
            text="Auf jedem Gerät gestochen scharf und intuitiv zu bedienen – ohne überladen zu wirken."
          />

          {/* BOX 4 */}
          <OfferBox
            title="Google-optimierte Struktur"
            text="Saubere technische Basis, schnelle Ladezeiten, klare Navigation und lokale SEO-Grundstruktur."
          />

          {/* BOX 5 */}
          <OfferBox
            title="Mini-CMS & einfache Updates"
            text="Du kannst nach dem Launch jederzeit selbst Texte oder Bilder anpassen – ohne Entwickler."
          />

          {/* BOX 6 */}
          <OfferBox
            title="Persönliche Zusammenarbeit"
            text="Ruhige 1:1-Abstimmung – zielgerichtet, verständlich & ohne technischen Stress."
          />

        </div>
      </div>
    </section>
  );
}

/* ----------------------------- */
/*   OFFER BOX COMPONENT         */
/* ----------------------------- */

function OfferBox({ title, text }: { title: string; text: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="
        group p-10 rounded-3xl
        bg-[#01212d]/70
        border border-jamoko-gold/15
        backdrop-blur-md
        shadow-[0_0_25px_rgba(229,197,139,0.07)]
        transition-all duration-300
        hover:shadow-[0_0_45px_rgba(229,197,139,0.18)]
        hover:border-jamoko-gold/30
      "
    >
      <h3 className="text-2xl font-semibold text-jamoko-gold mb-4">
        {title}
      </h3>

      <p className="text-jamoko-text-dim leading-relaxed">
        {text}
      </p>
    </motion.div>
  );
}
