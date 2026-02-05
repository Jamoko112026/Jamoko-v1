import { Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <motion.section
      id="kontakt"
      className="
        relative py-36 px-6 text-center overflow-hidden
        bg-gradient-to-b from-[#001821] via-[#001f2a] to-[#001821]
      "
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >

      <div className="relative z-10 max-w-4xl mx-auto">

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-jamoko-gold mb-6">
          Lass uns ruhig starten
        </h2>

        {/* Subline */}
        <p className="text-jamoko-text-dim text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-12">
          Ein kurzes Kennenlernen reicht aus, um zu sehen,
          ob JaMoKo zu deinem Projekt passt.
          Persönlich. Unverbindlich. Ohne Verkaufsdruck.
        </p>

        {/* Primary CTA */}
        <motion.a
          href="mailto:moin@jamoko.de"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 280, damping: 18 }}
          className="
            inline-flex items-center gap-3
            bg-jamoko-gold text-[#001821]
            font-medium px-8 py-4 rounded-xl
            shadow-lg
          "
        >
          <Mail className="w-5 h-5" />
          moin@jamoko.de
        </motion.a>

        {/* Secondary Contact */}
        <div className="mt-8 flex justify-center">
          <a
            href="tel:017682032127"
            className="
              flex items-center gap-2
              text-jamoko-text-dim text-sm
              hover:text-jamoko-teal
              transition
            "
          >
            <Phone className="w-4 h-4" />
            0176 8203 2127
          </a>
        </div>

        {/* Trust Footer */}
        <p className="mt-12 text-xs text-jamoko-text-dim opacity-70">
          Keine Verpflichtung · Antwort meist innerhalb von 24 Stunden
        </p>

      </div>

    </motion.section>
  );
}
