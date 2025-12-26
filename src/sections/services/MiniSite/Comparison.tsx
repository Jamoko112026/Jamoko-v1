// src/sections/services/MiniSite/Comparison.tsx

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { usePricing } from "../../../state/PricingContext";

type State = "ok" | "mid" | "no";

export default function Comparison() {
  const { cycle } = usePricing();

  // BASIC Feature-Zustände
  const basic: State[] = [
    "ok", // Calm-Energy Design
    "ok", // Professionelle Texte
    "ok", // Responsiv
    "mid", // Google Map optional
    "no", // Bis zu 3 Seiten
    "no", // Erweiterte Struktur
    "no", // Bild-Optimierung & Icons
    "no", // SEO
    "no", // Launch-Begleitung
  ];

  // PREMIUM Feature-Zustände
  const premium: State[] = [
    "ok",
    "ok",
    "ok",
    "ok",
    "ok",
    "ok",
    "ok",
    "ok",
    "ok",
  ];

  const labels = [
    "Calm-Energy Design",
    "Professionelle Texte",
    "Responsiv & mobil-optimiert",
    "Google-Map optional",
    "Bis zu 3 Seiten",
    "Erweiterter Aufbau & Struktur",
    "Bild-Optimierung & Icon-Set",
    "SEO-Grundoptimierung",
    "Launch-Begleitung + Feinschliff",
  ];

  return (
    <section
      id="comparison"
      className="
        relative py-32 px-6 text-center 
        bg-gradient-to-b from-[#013542] via-[#012533] to-[#001821]
        overflow-hidden
      "
    >
      {/* GLOW */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.25 }}
        transition={{ duration: 1.6 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,
                   rgba(229,197,139,0.15),transparent_70%)]"
      />

      <div className="relative z-10 max-w-6xl mx-auto space-y-20">
        
        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
            text-4xl md:text-5xl font-semibold text-jamoko-gold
            drop-shadow-[0_0_25px_rgba(229,197,139,0.35)]
          "
        >
          Basic vs Premium im Überblick
        </motion.h2>

        {/* SUBTEXT — dynamisch anhand PricingToggle */}
        <motion.p
          layout
          className="text-jamoko-text-dim text-lg"
        >
          {cycle === "monthly"
            ? "Monatliche Leistungen im Vergleich"
            : "Leistungen im jährlichen Paketvergleich"}
        </motion.p>

        {/* TABLE */}
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {/* LABELS */}
          <div className="text-left space-y-6 opacity-80">
            {labels.map((label, i) => (
              <div key={i} className="text-jamoko-text text-lg">
                {label}
              </div>
            ))}
          </div>

          {/* BASIC */}
          <div className="space-y-6">
            {basic.map((state, i) => (
              <StateIcon key={i} state={state} />
            ))}
          </div>

          {/* PREMIUM (highlighted analog Pricing v3) */}
          <div className="space-y-6">
            {premium.map((state, i) => (
              <StateIcon key={i} state={state} highlight />
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------- */
/* STATE ICON */
/* ------------------------------------------- */

function StateIcon({
  state,
  highlight,
}: {
  state: "ok" | "mid" | "no";
  highlight?: boolean;
}) {
  return (
    <motion.div
      layout
      className={`
        w-full h-10 flex items-center justify-center rounded-lg
        transition-all duration-300 backdrop-blur-sm
        ${
          highlight
            ? "bg-jamoko-gold/15 border border-jamoko-gold/30 shadow-[0_0_15px_rgba(229,197,139,0.25)]"
            : "bg-[#01212d]/40 border border-white/5"
        }
      `}
    >
      {state === "ok" && <Check size={20} className="text-jamoko-gold" />}
      {state === "mid" && (
        <span className="text-jamoko-gold opacity-50 text-xl">~</span>
      )}
      {state === "no" && (
        <span className="text-red-400 text-xl">✘</span>
      )}
    </motion.div>
  );
}
