import { motion } from "framer-motion";

export default function Start() {
  return (
    <main className="min-h-screen bg-sl-navy text-white flex flex-col items-center px-6 scroll-smooth">

      {/* ======================
          HERO — SL BAUTEC
      ====================== */}

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="
          relative w-full flex justify-center py-28
          scroll-mt-32
        "
      >
        {/* Background Layer */}
        <div className="absolute inset-0 bg-gradient-to-b from-sl-navyLight via-sl-navy to-sl-navyDark" />
        <div className="absolute inset-0 bg-black/40" />

        {/* Content Card */}
        <div
          className="
            relative z-10 max-w-3xl w-full
            text-center px-10 py-14
            rounded-2xl
            bg-white/5 backdrop-blur-xl
            border border-white/10
            shadow-2xl
          "
        >
          <h1 className="text-[28px] md:text-4xl font-bold uppercase tracking-wide leading-tight">
            SL BauTec GmbH
          </h1>

          {/* Tech Line */}
          <div className="mx-auto mt-4 mb-5 w-20 h-[3px] bg-sl-green rounded-full" />

          <p className="text-sl-textSoft text-lg">
            Straßenbau · Tiefbau · Glasfasertechnik
          </p>

          <p className="mt-4 text-sl-textSoft text-sm max-w-xl mx-auto">
            Infrastrukturprojekte für Hamburg & Schleswig-Holstein.
            Zuverlässig. Technisch sauber. Termintreu umgesetzt.
          </p>

          {/* CTA */}
          <a
            href="#kontakt"
            className="
              inline-block mt-8 px-10 py-3 rounded-lg
              bg-gradient-to-b from-[#FFD08A] to-sl-orange
              text-black font-semibold
              shadow-xl shadow-orange-500/30
              hover:scale-[1.04]
              transition-all duration-300 ease-out
            "
          >
            Projekt anfragen
          </a>
        </div>
      </motion.section>

      {/* ======================
          LEISTUNGEN
      ====================== */}

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-3xl w-full py-20 scroll-mt-32"
      >
        <h2 className="text-xl font-semibold mb-8 text-center">
          Unsere Leistungen
        </h2>

        <ul className="space-y-4 text-sl-textSoft">
          <li>• Glasfaserausbau (Tiefbau & Technik)</li>
          <li>• Straßen- und Tiefbauarbeiten</li>
          <li>• Pflasterarbeiten & Außenanlagen</li>
          <li>• Betonflächen & Entwässerungssysteme</li>
          <li>• Garten-, Wege- und Terrassenbau</li>
        </ul>
      </motion.section>

      {/* ======================
          ARBEITSWEISE
      ====================== */}

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-3xl w-full py-20 scroll-mt-32"
      >
        <h2 className="text-xl font-semibold mb-8 text-center">
          So arbeiten wir
        </h2>

        <ol className="space-y-3 text-sl-textSoft">
          <li>1. Projektbesprechung & Bedarfsklärung</li>
          <li>2. Planung & technische Vorbereitung</li>
          <li>3. Umsetzung vor Ort</li>
          <li>4. Übergabe & Dokumentation</li>
        </ol>
      </motion.section>

      {/* ======================
          KONTAKT
      ====================== */}

      <motion.section
        id="kontakt"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-3xl w-full py-24 text-center scroll-mt-32"
      >
        <p className="text-sl-textSoft mb-10 leading-relaxed">
          Nehmen Sie Kontakt mit unserer Disposition auf.
          Wir melden uns zeitnah zurück und besprechen Ihr Projekt.
        </p>

        <a
          href="mailto:dispo@slbautec.de"
          className="
            inline-block px-10 py-3 rounded-lg
            bg-sl-orange text-black font-semibold
            shadow-xl shadow-orange-500/30
            hover:bg-sl-orangeHover
            transition
          "
        >
          Anfrage senden
        </a>
      </motion.section>

    </main>
  );
}
