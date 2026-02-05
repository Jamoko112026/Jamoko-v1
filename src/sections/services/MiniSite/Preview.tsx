import { motion } from "framer-motion";

export default function MiniSitePreview() {
  return (
    <motion.section
      id="minisite-preview"
      className="
        relative
        py-32 px-6
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

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* IMAGE PREVIEW */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            relative
            rounded-2xl
            overflow-hidden
            shadow-[0_18px_45px_rgba(0,0,0,0.45)]
          "
        >
          <img
            src="/ard/preview.webp"
            alt="Altonaer Reifendienst MiniSite Vorschau"
            className="w-full h-auto object-cover"
            draggable={false}
          />

          {/* Calm Overlay */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-[#001821]/35 via-transparent to-transparent" />
        </motion.div>

        {/* TEXT CONTENT */}
        <div className="text-left">

          <h3
            className="
              text-2xl sm:text-3xl md:text-4xl
              font-light
              text-jamoko-gold
              mb-6
            "
          >
            Beispielprojekt: Altonaer Reifendienst
          </h3>

          <p className="text-jamoko-text-dim leading-relaxed mb-6 max-w-md">
            Ziel: Lokale Sichtbarkeit erhöhen und Kundenanfragen vereinfachen —
            ruhig, verständlich und ohne Technikstress.
          </p>

          <ul className="space-y-3 text-sm text-jamoko-text-dim mb-8">
            <li>✓ Klare Startseite für lokale Kunden</li>
            <li>✓ Mobil optimierte Kontaktführung</li>
            <li>✓ WhatsApp Direktkontakt</li>
            <li>✓ Ruhiges, professionelles Design</li>
            <li>✓ Google-Business Integration</li>
          </ul>

          <motion.a
            href="#kontakt"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 280, damping: 18 }}
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
            Ähnliches Projekt anfragen
          </motion.a>

        </div>

      </div>

    </motion.section>
  );
}
