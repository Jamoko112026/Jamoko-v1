import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function MiniSitePreview() {
  return (
    <motion.section
      id="minisite-preview"
      className="
        relative
        py-36 px-6
        bg-gradient-to-b
        from-[#001821]
        via-[#001f2a]
        to-[#001821]
        overflow-hidden
      "
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        {/* CLICKABLE MOCKUP */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <Link to="/demo" className="block group">

            {/* Glow Frame */}
            <div className="
              absolute -inset-1
              bg-gradient-to-r
              from-jamoko-gold/30
              via-transparent
              to-jamoko-gold/30
              blur-xl
              opacity-40
              group-hover:opacity-70
              transition
            " />

            {/* Card */}
            <div className="
              relative
              bg-[#002433]
              rounded-3xl
              p-6
              shadow-[0_25px_60px_rgba(0,0,0,0.6)]
              transition
              group-hover:scale-[1.02]
            ">

              {/* Fake Browser Bar */}
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-400/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
                <div className="w-3 h-3 rounded-full bg-green-400/70" />
              </div>

              {/* Hero Block */}
              <div className="rounded-xl bg-gradient-to-br from-[#003347] to-[#00465f] p-8 mb-6">
                <h4 className="text-white text-xl font-light mb-2">
                  Musterbetrieb Hamburg
                </h4>
                <p className="text-jamoko-text-dim text-sm">
                  Klar. Persönlich. Wirksam.
                </p>
              </div>

              {/* Content Lines */}
              <div className="space-y-4">
                <div className="h-4 w-3/4 bg-[#003b50] rounded" />
                <div className="h-4 w-1/2 bg-[#003b50] rounded" />
                <div className="h-4 w-5/6 bg-[#003b50] rounded" />
              </div>

            </div>

          </Link>
        </motion.div>

        {/* TEXT SIDE */}
        <div className="text-left">

          <h3 className="
              text-3xl md:text-4xl
              font-light
              text-jamoko-gold
              mb-6
              tracking-wide
            ">
            Struktur statt Chaos
          </h3>

          <p className="text-jamoko-text-dim leading-relaxed mb-6 max-w-md">
            Jede Mini-Site folgt einer klaren Architektur:
            Leistungen, Vertrauen, Kontakt.
            Keine Spielereien – sondern Fokus.
          </p>

          <ul className="space-y-3 text-sm text-jamoko-text-dim mb-10">
            <li>✓ Klare Startseitenführung</li>
            <li>✓ Vertrauensbildende Struktur</li>
            <li>✓ Mobile Optimierung</li>
            <li>✓ Schnelle Kontaktaufnahme</li>
            <li>✓ SEO-Grundlage integriert</li>
          </ul>

          <Link
            to="/demo"
            className="
              inline-block
              px-6 py-3
              rounded-xl
              border border-jamoko-gold/40
              text-jamoko-gold
              hover:bg-jamoko-gold/10
              transition
            "
          >
            Live-Demo ansehen
          </Link>

        </div>

      </div>
    </motion.section>
  );
}