// src/sections/services/MiniSite/Pricing.tsx

import GlowDivider from "../../../components/GlowDivider";

const CALENDLY_LINK =
  "https://calendly.com/moin-jamoko/jamoko-mini-site-kennenlernen-15-min";

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="relative w-full px-6 py-32 max-w-7xl mx-auto"
    >
      {/* HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="text-4xl md:text-5xl font-semibold text-jamoko-gold mb-6">
          Pricing
        </h2>
        <p className="text-jamoko-text-dim text-lg leading-relaxed">
          Kein Baukasten. Keine Agenturpakete.
          <br />
          Ein klarer Preis für eine ruhige, funktionierende Präsenz.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* ---------------- BASIC ---------------- */}
        <div className="
          group rounded-3xl p-10
          bg-[#01212d]/70 border border-jamoko-gold/15 backdrop-blur-md
          shadow-[0_0_25px_rgba(229,197,139,0.07)]
          hover:shadow-[0_0_45px_rgba(229,197,139,0.18)]
          transition-all duration-300
        ">
          <h3 className="text-3xl font-semibold text-jamoko-gold mb-2">
            Mini-Site Basic
          </h3>
          <p className="text-2xl text-jamoko-text mb-6">
            890 € <span className="text-base text-jamoko-text-dim">einmalig</span>
          </p>

          <ul className="space-y-3 text-jamoko-text mb-8">
            <li>• 1–3 Seiten</li>
            <li>• Calm-Energy Design</li>
            <li>• Mobile-optimiert</li>
            <li>• Kontaktformular / WhatsApp-Link</li>
            <li>• Google Maps & Öffnungszeiten</li>
            <li>• Basis-SEO & Performance</li>
            <li>• Impressum & Datenschutz</li>
          </ul>

          <a
            href={CALENDLY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-block px-8 py-4 rounded-full
              bg-jamoko-gold text-[#001821] font-medium
              hover:opacity-90 transition
            "
          >
            Kennenlerngespräch buchen (15 Min.)
          </a>

          <p className="mt-3 text-sm text-jamoko-text-dim">
            Unverbindlich · keine Zahlung vorab
          </p>
        </div>

        {/* ---------------- PLUS ---------------- */}
        <div className="
          relative group rounded-3xl p-10
          bg-[#01212d]/80 border border-jamoko-gold/30 backdrop-blur-md
          shadow-[0_0_45px_rgba(229,197,139,0.22)]
          transition-all duration-300
        ">
          <span className="absolute top-6 right-6 text-xs uppercase tracking-wider text-jamoko-gold">
            Empfehlung
          </span>

          <h3 className="text-3xl font-semibold text-jamoko-gold mb-2">
            Mini-Site Plus
          </h3>
          <p className="text-2xl text-jamoko-text mb-6">
            1.490 € <span className="text-base text-jamoko-text-dim">einmalig</span>
          </p>

          <ul className="space-y-3 text-jamoko-text mb-8">
            <li>• 4–5 Seiten</li>
            <li>• Erweitertes Calm-Energy Design</li>
            <li>• Nutzen- & Trust-Sektionen</li>
            <li>• Bildergalerie</li>
            <li>• Erweiterte SEO-Basis</li>
            <li>• Extra Feedbackrunde</li>
          </ul>

          <a
            href={CALENDLY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-block px-8 py-4 rounded-full
              bg-jamoko-gold text-[#001821] font-medium
              hover:opacity-90 transition
            "
          >
            Kennenlerngespräch buchen (15 Min.)
          </a>

          <p className="mt-3 text-sm text-jamoko-text-dim">
            Unverbindlich · keine Zahlung vorab
          </p>
        </div>
      </div>

      <GlowDivider className="mt-32 opacity-40" />
    </section>
  );
}
