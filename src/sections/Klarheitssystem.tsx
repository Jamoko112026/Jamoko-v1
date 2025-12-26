// src/sections/Klarheitssystem.tsx

import { motion } from "framer-motion";

export default function Klarheitssystem() {
  return (
    <section
      id="klarheitssystem"
      className="
        relative 
        py-24 px-6 
        text-center 
        bg-gradient-to-b
        from-[#001821] via-[#011e2a] to-[#012533]
        rounded-3xl
        overflow-hidden
      "
    >
      {/* Sehr sanfter, matter Glow */}
      <div
        className="
          absolute inset-0 
          bg-[radial-gradient(ellipse_at_center,rgba(229,197,139,0.06),transparent_70%)]
          opacity-60
        "
      />

      <div className="relative z-10 max-w-4xl mx-auto space-y-16">

        {/* Titel */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-semibold text-jamoko-gold"
        >
          Das JaMoKo-Klarheitssystem
        </motion.h2>

        {/* Einleitung */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="
            text-jamoko-text-dim 
            text-lg md:text-xl 
            leading-relaxed 
            max-w-2xl mx-auto 
            opacity-90
          "
        >
          Ein ruhiges System, das dir Orientierung gibt:
          klare Schritte, klare Struktur, klare Energie.
          Modern, ruhig und auf das Wesentliche reduziert.
        </motion.p>

        {/* 5-Kernpunkte */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left mx-auto max-w-3xl">

          {/* 1 – Klarheitspunkt */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="
              bg-[#01212c]/60 
              rounded-xl 
              border border-jamoko-gold/15 
              p-6 
              backdrop-blur-sm
            "
          >
            <h3 className="text-jamoko-gold text-lg font-semibold mb-2">1. Klarheitspunkt</h3>
            <p className="text-jamoko-text-dim opacity-85">
              Wir identifizieren den einen Punkt, der Unruhe erzeugt.  
              <span className="opacity-70">So entsteht sofort Fokus.</span>
            </p>
          </motion.div>

          {/* 2 – Klarheitsbild */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="
              bg-[#01212c]/60 
              rounded-xl 
              border border-jamoko-gold/15 
              p-6 
              backdrop-blur-sm
            "
          >
            <h3 className="text-jamoko-gold text-lg font-semibold mb-2">2. Klarheitsbild</h3>
            <p className="text-jamoko-text-dim opacity-85">
              Wir definieren ein ruhiges, modernes Zielbild —  
              <span className="opacity-70">so sieht deine digitale Ruhe aus.</span>
            </p>
          </motion.div>

          {/* 3 – Klarheitsstruktur */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
            className="
              bg-[#01212c]/60 
              rounded-xl 
              border border-jamoko-gold/15 
              p-6 
              backdrop-blur-sm
            "
          >
            <h3 className="text-jamoko-gold text-lg font-semibold mb-2">3. Klarheitsstruktur</h3>
            <p className="text-jamoko-text-dim opacity-85">
              Die nächsten 3 Schritte — nie mehr.  
              <span className="opacity-70">Das bringt Ruhe und Orientierung.</span>
            </p>
          </motion.div>

          {/* 4 – Klarheitssystem */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="
              bg-[#01212c]/60 
              rounded-xl 
              border border-jamoko-gold/15 
              p-6 
              backdrop-blur-sm
            "
          >
            <h3 className="text-jamoko-gold text-lg font-semibold mb-2">4. Klarheitssystem</h3>
            <p className="text-jamoko-text-dim opacity-85">
              Tools, Seiten, Struktur —  
              <span className="opacity-70">aber reduziert, ruhig und übersichtlich.</span>
            </p>
          </motion.div>

          {/* 5 – Klarheitsenergie */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3 }}
            className="
              md:col-span-2
              bg-[#01212c]/60 
              rounded-xl 
              border border-jamoko-gold/15 
              p-6 
              backdrop-blur-sm
            "
          >
            <h3 className="text-jamoko-gold text-lg font-semibold mb-2">5. Klarheitsenergie</h3>
            <p className="text-jamoko-text-dim opacity-85">
              Die Ruhe, die du reinbringst.  
              Die Art, wie du Menschen fühlst und orientierst.  
              <span className="opacity-70">Das ist dein echter USP — unersetzlich.</span>
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
