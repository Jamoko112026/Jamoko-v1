// src/sections/hero/HeroLuminousBalance.tsx

import { motion } from "framer-motion";
import JellyCubeHero from "../../assets/jamoko/hero/cube/Jamoko_JellyCube_Hero_v1.png";

export default function HeroLuminousBalance() {
  return (
    <section className="relative pt-40 pb-32 px-6 text-center overflow-hidden">

      {/* NAVY DEPTH PANEL */}
      <div className="
          absolute inset-0 
          bg-gradient-to-b 
          from-[#001821]/85 via-[#001821]/92 to-[#001821]
          pointer-events-none
        " 
      />

      {/* SIGNATURE GLOW FRAME */}
      <div className="relative max-w-5xl mx-auto rounded-[32px] overflow-hidden shadow-[0_0_45px_rgba(0,0,0,0.45)]">
        
        {/* Glow Frame Rahmen */}
        <div className="
            absolute inset-0 z-10
            pointer-events-none
            rounded-[32px]
            bg-[radial-gradient(circle_at_center,
                rgba(229,197,139,0.25),
                rgba(26,199,164,0.15),
                transparent 70%)
            ]
          " 
        />

        {/* Hero Bild */}
        <img
          src={JellyCubeHero}
          alt="JaMoKo JellyCube Hero"
          className="
            w-full h-full object-cover 
            rounded-[32px]
            select-none
            opacity-[0.92]
          "
          draggable="false"
        />
      </div>

      {/* TYPO BLOCK */}
      <div className="relative z-20 mt-16 max-w-4xl mx-auto">

        <motion.h1
          className="text-5xl md:text-6xl font-semibold text-jamoko-gold mb-4 
                     drop-shadow-[0_0_25px_rgba(229,197,139,0.35)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Digitale Ruhe.
        </motion.h1>

        <motion.h2
          className="text-4xl md:text-5xl font-semibold text-jamoko-teal 
                     drop-shadow-[0_0_25px_rgba(26,199,164,0.35)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Spürbare Wirkung.
        </motion.h2>

        <motion.p
          className="text-jamoko-text-dim mt-10 text-lg leading-relaxed 
                     max-w-2xl mx-auto drop-shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          Der klare, moderne und ruhige Weg zu einem professionellen Online-Auftritt,
          der Kunden wirklich erreicht.
        </motion.p>
      </div>

    </section>
  );
}
