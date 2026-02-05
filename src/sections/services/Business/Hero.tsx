import { motion } from "framer-motion";

export default function BusinessHero() {
  return (
    <section
      className="
        relative
        min-h-[85vh]
        flex items-center
        px-6
        overflow-hidden
        bg-[#001821]
      "
    >
      {/* Subtle Business Glow */}
      <div className="
        absolute inset-0
        bg-[radial-gradient(ellipse_at_top_left,rgba(229,197,139,0.08),transparent_65%)]
      " />

      <div className="relative z-10 max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-4xl"
        >

          {/* Badge */}
          <span className="
            inline-block mb-6 px-5 py-2 rounded-full
            text-sm tracking-wide
            bg-white/5 border border-white/10
            text-jamoko-gold
          ">
            Business Lösungen · Struktur statt Chaos
          </span>

          {/* Headline */}
          <h1 className="
            text-4xl md:text-6xl font-semibold leading-tight mb-6
          ">
            Digitale Systeme für Unternehmen,
            <br />
            <span className="text-jamoko-gold">
              die stabil funktionieren.
            </span>
          </h1>

          {/* Subline */}
          <p className="
            text-jamoko-text-dim
            text-lg md:text-xl
            leading-relaxed
            max-w-3xl
          ">
            Webseiten, Strukturen und digitale Ordnung
            für wachsende Unternehmen,
            die Klarheit, Kontrolle und messbare Wirkung brauchen.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap gap-5">

            <a
              href="#business-pricing"
              className="
                px-9 py-4 rounded-full
                bg-jamoko-gold text-[#001821]
                font-semibold
                shadow-[0_0_25px_rgba(229,197,139,0.35)]
                hover:shadow-[0_0_40px_rgba(229,197,139,0.55)]
                transition-all
              "
            >
              Pakete ansehen
            </a>

            <a
              href="/kontakt"
              className="
                px-9 py-4 rounded-full
                border border-jamoko-gold/40
                text-jamoko-gold
                hover:bg-jamoko-gold/10
                transition
              "
            >
              Erstgespräch starten
            </a>

          </div>

        </motion.div>

      </div>

    </section>
  );
}
