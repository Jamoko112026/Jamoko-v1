// src/sections/WebMinisites.tsx
import { motion } from "framer-motion";

export default function WebMinisites() {
  return (
    <section
      id="web-minisites"
      className="relative py-32 px-6 bg-gradient-to-b from-[#013542] via-[#012B36] to-[#001F29] text-center text-jamoko-text overflow-hidden"
    >
      {/* Hintergrund-Glow */}
      <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 0.25 }}
  transition={{ duration: 2 }}
  viewport={{ once: true }}
  className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(229,197,139,0.12),transparent_70%)]"
/>

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-headline text-jamoko-gold mb-6"
        >
          Web & Minisites
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-jamoko-text-dim leading-relaxed mb-12"
        >
          Kompakte One-Page-Websites mit Struktur und Seele.  
          Schnell, klar und messbar – inklusive Kontakt-System,
          KPI-Dashboard und Hosting auf Netlify.
        </motion.p>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "One-Page-Design",
              desc: "Modern, performant und responsive – perfekt für lokale Dienstleister.",
            },
            {
              title: "KPI-Dashboard",
              desc: "Echtzeit-Einblicke in Klicks, Anfragen und Reichweite.",
            },
            {
              title: "Netlify Hosting",
              desc: "Schnelle Deploys, SSL-Zertifikat, 100 % DSGVO-konform.",
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
