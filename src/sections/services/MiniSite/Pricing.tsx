// src/sections/services/MiniSite/Pricing.tsx

import { motion } from "framer-motion";
import GlowDivider from "../../../components/GlowDivider";

const CALENDLY_LINK =
  "https://calendly.com/moin-jamoko/jamoko-mini-site-kennenlernen-15-min";

export default function PricingSection() {
  return (
    <motion.section
      id="pricing"
      className="relative w-full px-6 py-32 max-w-7xl mx-auto"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >

      {/* HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-jamoko-gold mb-6">
          Klare Preise. Ruhige Entscheidungen.
        </h2>

        <p className="text-jamoko-text-dim text-base sm:text-lg leading-relaxed">
          Keine Baukästen. Keine Agenturpakete.<br />
          Eine faire Einmalzahlung für eine funktionierende Online-Präsenz.
        </p>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14">

        {/* BASIC */}
        <PricingCard
          title="Mini-Site Basic"
          price="890 €"
          subtitle="Für eine klare digitale Präsenz"
          features={[
            "1–3 Seiten",
            "Calm-Energy Design",
            "Mobil optimiert",
            "Kontaktformular oder WhatsApp",
            "Google Maps & Öffnungszeiten",
            "Basis SEO & Performance",
            "Impressum & Datenschutz"
          ]}
        />

        {/* PLUS */}
        <PricingCard
          highlight
          title="Mini-Site Plus"
          price="1.490 €"
          subtitle="Empfohlen für aktive Kundengewinnung"
          features={[
            "4–5 Seiten",
            "Erweitertes Calm-Energy Design",
            "Nutzen- & Trust-Sektionen",
            "Bildergalerie",
            "Erweiterte SEO Basis",
            "Zusätzliche Feedbackrunde"
          ]}
        />

      </div>

      {/* TRUST LINE */}
      <div className="text-center mt-14">
        <p className="text-sm text-jamoko-text-dim opacity-75">
          Unverbindliches Kennenlernen · Keine Zahlung vorab · Faire Einmalpreise
        </p>
      </div>

      <GlowDivider className="mt-28 opacity-30" />

    </motion.section>
  );
}

/* ======================
   Pricing Card Component
====================== */

function PricingCard({
  title,
  price,
  subtitle,
  features,
  highlight = false
}: {
  title: string;
  price: string;
  subtitle: string;
  features: string[];
  highlight?: boolean;
}) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4 }}
      className={`
        relative
        rounded-2xl p-10
        border
        ${
          highlight
            ? "border-jamoko-gold bg-[#012533]"
            : "border-white/10 bg-[#001f2a]"
        }
      `}
    >

      {highlight && (
        <span className="absolute -top-3 left-6 bg-jamoko-gold text-[#001821] text-xs px-3 py-1 rounded-full">
          Empfehlung
        </span>
      )}

      <h3 className="text-2xl text-jamoko-gold mb-2">
        {title}
      </h3>

      <p className="text-sm text-jamoko-text-dim mb-4">
        {subtitle}
      </p>

      <div className="text-3xl font-semibold text-white mb-6">
        {price}
        <span className="text-sm font-normal text-jamoko-text-dim ml-2">
          einmalig
        </span>
      </div>

      <ul className="space-y-2 text-sm text-jamoko-text-dim mb-8">
        {features.map((item, i) => (
          <li key={i}>✓ {item}</li>
        ))}
      </ul>

      <a
        href={CALENDLY_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="
          inline-block w-full text-center
          py-3 rounded-xl
          border border-jamoko-gold/40
          text-jamoko-gold
          hover:bg-jamoko-gold/10
          transition
        "
      >
        Kennenlerngespräch buchen
      </a>

    </motion.div>
  );
}
