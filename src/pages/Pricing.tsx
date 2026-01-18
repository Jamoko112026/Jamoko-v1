// src/sections/services/MiniSite/Pricing.tsx

import { motion } from "framer-motion";

export default function MiniSitePricing() {
  return (
    <section
      id="pricing"
      className="relative py-40 px-6 text-center
                 bg-gradient-to-b from-[#001821] via-[#01212f] to-[#001821]"
    >
      {/* Hintergrund Glow */}
      <div className="absolute inset-0 opacity-[0.13] bg-[radial-gradient(circle_at_center,rgba(229,197,139,0.25),transparent_75%)]" />

      <div className="relative z-10 max-w-6xl mx-auto space-y-20">

        {/* HEADLINE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-jamoko-gold">
            Mini-Website Pakete
          </h2>

          <p className="text-jamoko-gold/80 text-xl">
            ab Preise · transparent · ohne laufende Kosten
          </p>

          <p className="text-jamoko-text-dim max-w-2xl mx-auto leading-relaxed">
            Jede Website wird individuell umgesetzt.  
            Die Preise sind Einstiegspreise – der finale Umfang wird im kurzen Gespräch abgestimmt.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* STARTER */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="p-10 rounded-3xl bg-[#01212b]/60 border border-jamoko-gold/20
                       backdrop-blur-xl shadow-xl space-y-6"
          >
            <h3 className="text-2xl font-semibold text-jamoko-gold">Starter</h3>
            <p className="text-3xl font-bold text-jamoko-text">ab 480 €</p>

            <p className="text-jamoko-text-dim">
              Der klare Einstieg für kleine Betriebe.
            </p>

            <ul className="text-left text-jamoko-text-dim space-y-3 mt-6 opacity-90">
              <li>• Ruhiges Calm-Energy Grunddesign</li>
              <li>• Übersichtliche Onepager-Struktur</li>
              <li>• Starttexte auf Basis deiner Inhalte</li>
              <li>• Lokale Basis-SEO</li>
              <li>• Kontaktbereich mit klarer Handlungsführung</li>
            </ul>

            <a
              href="/about#contact"
              className="inline-block mt-6 px-6 py-3 rounded-full font-medium
                         bg-jamoko-gold/20 text-jamoko-gold border border-jamoko-gold/30
                         hover:bg-jamoko-gold/30 transition"
            >
              Kostenloses Erstgespräch starten
            </a>
          </motion.div>

          {/* STANDARD – MEIST GEWÄHLT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85 }}
            className="p-10 rounded-3xl bg-[#013542]/80 border border-jamoko-gold/40
                       backdrop-blur-xl shadow-[0_0_35px_rgba(229,197,139,0.2)]
                       scale-[1.03] space-y-6 relative"
          >
            {/* Badge */}
            <div className="absolute -top-5 left-1/2 -translate-x-1/2
                            bg-jamoko-gold text-[#001821]
                            text-xs font-semibold px-4 py-1 rounded-full shadow-lg">
              EMPFOHLEN
            </div>

            <h3 className="text-2xl font-semibold text-jamoko-gold">Business</h3>
            <p className="text-3xl font-bold text-jamoko-text">ab 830 €</p>

            <p className="text-jamoko-text-dim">
              Die beste Balance aus Wirkung und Klarheit.
            </p>

            <ul className="text-left text-jamoko-text-dim space-y-3 mt-6 opacity-90">
              <li>• Erweiterte Calm-Energy Gestaltung</li>
              <li>• Strukturierte Inhaltsbereiche</li>
              <li>• Professionell formulierte Website-Texte</li>
              <li>• Starke lokale SEO-Optimierung</li>
              <li>• Conversion-orientiertes Kontaktformular</li>
              <li>• Mobile & Tablet Optimierung</li>
              <li>• Persönlicher Support bis zur Abnahme</li>
            </ul>

            <p className="text-xs text-jamoko-text-dim/80 mt-2">
              Ideal für Handwerksbetriebe, Praxen & lokale Dienstleister.
            </p>

            <a
              href="/about#contact"
              className="inline-block mt-6 px-6 py-3 rounded-full font-medium
                         bg-jamoko-gold text-[#001821] hover:bg-jamoko-gold/90 transition"
            >
              Kostenloses Erstgespräch starten
            </a>
          </motion.div>

         {/* PREMIUM / B2B */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.0 }}
  className="p-10 rounded-3xl bg-[#022E37]/60 border border-jamoko-gold/30
             backdrop-blur-xl shadow-xl space-y-6"
>
  <h3 className="text-2xl font-semibold text-jamoko-gold">Business Pro</h3>
  <p className="text-3xl font-bold text-jamoko-text">ab 1.480 €</p>

  <p className="text-jamoko-text-dim">
    Für anspruchsvolle Betriebe & Firmenprojekte.
  </p>

  <ul className="text-left text-jamoko-text-dim space-y-3 mt-6 opacity-90">
    <li>• Individuelles Premium-Design</li>
    <li>• Maßgeschneiderte Seitenstruktur</li>
    <li>• Projekt- & Leistungsdarstellungen</li>
    <li>• SEO Pro Setup</li>
    <li>• Performance-Optimierung</li>
    <li>• Erweiterter persönlicher Support</li>
    <li>• Launch-Begleitung & Übergabe</li>
  </ul>

  <a
    href="/about#contact"
    className="inline-block mt-6 px-6 py-3 rounded-full font-medium
               bg-jamoko-teal/30 text-jamoko-teal border border-jamoko-teal/30
               hover:bg-jamoko-teal/40 transition"
  >
    Kostenloses Erstgespräch starten
  </a>
          </motion.div>
        </div> {/* GRID ENDE */}

        {/* FOOTNOTE */}
        <p className="text-jamoko-text-dim mt-10 opacity-80">
          Nicht sicher, welches Paket passt?
          <br />Ich berate dich gern kostenlos & unverbindlich.
        </p>

        {/* MwSt Hinweis */}
        <p className="text-xs text-jamoko-text-dim/70 mt-6">
          Alle Preise sind Endpreise gemäß §19 UStG (Kleinunternehmerregelung).
          Es wird keine Umsatzsteuer ausgewiesen.
        </p>

      </div> {/* CONTENT WRAPPER ENDE */}
    </section>
  );
}
