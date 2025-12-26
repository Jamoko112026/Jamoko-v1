// src/components/PageHero.tsx

import { motion } from "framer-motion";

export default function PageHero({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section
      className="
        relative py-36 px-6 text-center 
        bg-gradient-to-b from-[#001821] via-[#012633] to-[#013542]
        text-jamoko-text overflow-hidden
      "
    >
      {/* Soft Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.22 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(229,197,139,0.18),transparent_70%)]"
      />

      <div className="relative z-10 max-w-4xl mx-auto space-y-6">
        
        {/* Titel */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-semibold text-jamoko-gold"
        >
          Digitale Ruhe für deine Marke.
        </motion.h1>

        {/* Untertitel */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3 }}
          className="text-lg md:text-xl text-jamoko-text-dim leading-relaxed"
        >
          Sichtbar. Klar. Wirklich wirksam.
        </motion.p>

      </div>
    </section>
  );
}
