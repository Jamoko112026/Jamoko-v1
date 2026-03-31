import { motion } from "framer-motion";

const items = [
  {
    title: "Klarheits-Check",
    text: "Kurze Analyse Ihrer bestehenden Website mit konkreten Verbesserungsvorschlägen."
  },
  {
    title: "Text-Überarbeitung",
    text: "Inhalte vereinfachen, strukturieren und verständlicher machen."
  },
  {
    title: "Bereichs-Optimierung",
    text: "Einzelne Bereiche gezielt verbessern – z. B. Startseite oder Kontakt."
  },
  {
    title: "SEO-Grundoptimierung",
    text: "Basis für bessere Auffindbarkeit bei Google."
  },
  {
    title: "Visuelle Aufwertung",
    text: "Passende Bilder und ruhige visuelle Gestaltung für mehr Vertrauen."
  },
  {
    title: "Laufende Pflege",
    text: "Unterstützung bei kleinen Anpassungen und Updates."
  }
];

export default function ServicesOverview() {
  return (
    <section className="relative py-28 px-6 bg-[#001821] text-white overflow-hidden">

      {/* GLOBAL GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(229,197,139,0.12),transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-light mb-4">
            Leistungen
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Ruhige, klare Lösungen für einen professionellen Auftritt.
          </p>
        </motion.div>

        {/* BASIS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-24 text-center"
        >
          <p className="text-sm tracking-widest text-jamoko-gold mb-3">
            KERNLEISTUNG
          </p>

          <h3 className="text-2xl md:text-3xl font-light mb-6">
            Mini-Website
          </h3>

          <p className="text-white/70 max-w-2xl mx-auto leading-relaxed">
            Kompakte Website, die verständlich zeigt, was Sie machen – 
            klar strukturiert, ruhig gestaltet und auf Vertrauen ausgelegt.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-8">

          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="relative p-6 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.04] transition"
            >
              {/* CARD GLOW */}
              <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_top_left,rgba(229,197,139,0.15),transparent_70%)] opacity-0 hover:opacity-100 transition" />

              <div className="relative z-10">
                <h4 className="text-lg mb-2 text-white">
                  {item.title}
                </h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}

        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <button className="px-10 py-4 rounded-2xl bg-jamoko-gold text-black font-medium tracking-wide hover:opacity-90 transition shadow-[0_0_40px_rgba(229,197,139,0.25)]">
            Unverbindlich anfragen
          </button>
        </motion.div>

      </div>
    </section>
  );
}