// src/sections/ConsciousCollab.tsx
import { motion } from "framer-motion";

export default function ConsciousCollab() {
  return (
    <section
      id="conscious-collab"
      className="relative py-32 px-6 bg-gradient-to-b from-[#001821] via-[#011D26] to-[#001315] text-center text-jamoko-text overflow-hidden"
    >
      {/* Hintergrund-Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.25 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(26,199,164,0.15),transparent_75%)]"
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-headline text-jamoko-gold mb-6"
        >
          Conscious Collaboration
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-jamoko-text-dim leading-relaxed mb-12"
        >
          Digitale Arbeit bedeutet Verantwortung.  
          Wir schaffen Strukturen, in denen Kooperation auf Bewusstsein trifft –  
          zwischen Menschen, Marken und Technologien, die etwas bewegen wollen.
        </motion.p>

        {/* Werte / Säulen */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Transparente Prozesse",
              desc: "Offene Kommunikation und klare Abläufe – für Vertrauen auf Augenhöhe.",
            },
            {
              title: "Community Thinking",
              desc: "Wir denken vernetzt – jede Marke ist Teil eines größeren Ganzen.",
            },
            {
              title: "Digitale Achtsamkeit",
              desc: "Technologie als Werkzeug für Balance, nicht für Stress.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.2, duration: 1 }}
              viewport={{ once: true }}
              className="card-glass p-6 text-left rounded-card"
            >
              <h3 className="text-jamoko-gold font-semibold text-xl mb-2">
                {item.title}
              </h3>
              <p className="text-jamoko-text-dim">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
