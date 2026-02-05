import { motion } from "framer-motion";

export default function HeroBusiness() {
  return (
    <div className="relative max-w-5xl mx-auto text-center">

      {/* Sub Badge */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="
          inline-block mb-6 px-5 py-2 rounded-full
          bg-white/5 border border-white/10
          text-sm text-jamoko-gold tracking-wide
        "
      >
        Business Lösungen · Struktur statt Chaos
      </motion.div>

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-4xl md:text-6xl font-semibold leading-tight mb-8"
      >
        Websites für Unternehmen,
        <br />
        <span className="text-jamoko-gold">
          die funktionieren.
        </span>
      </motion.h1>

      {/* Subline */}
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="text-jamoko-text-dim text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed"
      >
        Digitale Systeme für B2B-Dienstleister und wachsende Unternehmen — strukturiert aufgebaut, performant umgesetzt und langfristig wartbar.
      </motion.p>

      {/* CTA Row */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-6"
      >

        {/* Primary CTA */}
        <a
          href="https://calendly.com/moin-jamoko/jamoko-business-strategie"
          target="_blank"
          rel="noopener noreferrer"
          className="
            px-10 py-4 rounded-full
            bg-jamoko-gold text-[#001821]
            font-semibold
            shadow-[0_0_30px_rgba(229,197,139,0.35)]
            hover:shadow-[0_0_45px_rgba(229,197,139,0.55)]
            transition-all
          "
        >
          Strategiegespräch buchen
        </a>

        {/* Secondary CTA */}
        <a
          href="/business#referenzen"
          className="
            px-10 py-4 rounded-full
            border border-white/15
            text-jamoko-text
            hover:border-jamoko-gold/40
            transition-all
          "
        >
          Referenz ansehen
        </a>

      </motion.div>

    </div>
  );
}
