// src/sections/services/MiniSite/Testimonials.tsx

import { motion } from "framer-motion";

export default function MiniSiteTestimonials() {
  return (
    <section
      id="testimonials"
      className="
        relative py-40 px-6 text-center 
        bg-gradient-to-b from-[#013542] via-[#012533] to-[#001821]
        overflow-hidden
      "
    >
      {/* Hintergrund Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.22 }}
        transition={{ duration: 1.4 }}
        className="
          absolute inset-0 
          bg-[radial-gradient(circle_at_center,rgba(229,197,139,0.18),transparent_70%)]
        "
      />

      <div className="relative z-10 max-w-5xl mx-auto space-y-20">

        {/* HEADLINE */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
            text-4xl md:text-5xl font-semibold text-jamoko-gold
            drop-shadow-[0_0_25px_rgba(229,197,139,0.35)]
          "
        >
          Was Kunden sagen
        </motion.h2>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          <TestimonialCard
            name="Maria S."
            text="Die Seite wirkt so ruhig und hochwertig — endlich habe ich einen professionellen Auftritt, der wirklich zu meinem Studio passt."
          />

          <TestimonialCard
            name="Jonas K."
            text="Die Zusammenarbeit war extrem angenehm. Klarer Prozess, moderne Optik und alles wurde für mich verständlich erklärt."
          />

          <TestimonialCard
            name="Timo L."
            text="Ich bekomme regelmäßig Komplimente für die neue Seite. Genau der richtige Mix aus Ruhe, Klarheit und Wirkung."
          />

        </div>

        {/* TRUST SUBLINE */}
        <p className="text-jamoko-text-dim text-lg max-w-2xl mx-auto">
          Alle Mini-Sites entstehen in ruhiger 1:1-Zusammenarbeit — klar,
          verständlich und ohne technischen Stress.
        </p>

        {/* OPTIONAL FOOTNOTE */}
        <p className="text-jamoko-text-dim text-sm opacity-60">
          (Weitere Referenzen in Vorbereitung)
        </p>
      </div>
    </section>
  );
}

/* ---------------------------------------- */
/* Testimonial Card Component               */
/* ---------------------------------------- */

function TestimonialCard({
  name,
  text,
}: {
  name: string;
  text: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="
        p-8 rounded-3xl text-left
        bg-[#01212d]/70 border border-jamoko-gold/15
        backdrop-blur-lg
        shadow-[0_0_25px_rgba(229,197,139,0.1)]
        hover:shadow-[0_0_45px_rgba(229,197,139,0.2)]
        transition-all duration-300
      "
    >
      <p className="text-jamoko-text-dim leading-relaxed mb-6">
        „{text}“
      </p>
      <div className="text-jamoko-gold font-semibold">
        {name}
      </div>
    </motion.div>
  );
}
