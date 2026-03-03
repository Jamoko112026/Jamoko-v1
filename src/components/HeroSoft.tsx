// src/components/HeroSoft.tsx

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import handwerk from "../assets/sparten/handwerk.jpg";
import praxis from "../assets/sparten/praxis-studio.jpg";
import selbst from "../assets/sparten/selbststaendige-studio.jpg";

const slides = [handwerk, praxis, selbst];

export default function HeroSoft() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[92vh] w-full overflow-hidden">

      {/* ===== Background ===== */}
      <AnimatePresence mode="sync">
        <motion.img
          key={index}
          src={slides[index]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2.2, ease: "easeInOut" }}
          className="absolute inset-0 h-full w-full object-cover"
          alt="JaMoKo Mini-Websites für lokale Betriebe"
        />
      </AnimatePresence>

      {/* ===== Overlays ===== */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,24,33,0.15),rgba(0,24,33,0.85))]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#001821]/50 via-[#001821]/30 to-[#001821]/80" />

      {/* ===== Content ===== */}
      <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <h1 className="jmk-hero-title">
            Ihr Betrieb.
            <br />
            Klar gezeigt.
            <br />
            Digital wirksam.
          </h1>

          <p className="jmk-hero-sub mt-6">
            Ruhige, klare Mini-Websites für echte Betriebe.
          </p>

          {/* ===== CTAs ===== */}
          <div className="mt-10 flex justify-center gap-5 flex-wrap">

            {/* Primary CTA */}
            <a
              href="#kontakt"
              className="group relative px-8 py-3 rounded-full bg-jamoko-gold text-[#001821] font-medium overflow-hidden transition-all duration-300 hover:scale-[1.03]"
            >
              <span className="relative z-10">MiniSite starten</span>
              <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition duration-300" />
            </a>

            {/* Secondary CTA */}
            <a
              href="/minisite"
              className="px-8 py-3 rounded-full border border-white/30 text-white backdrop-blur-sm hover:bg-white/10 transition duration-300"
            >
              Beispiele ansehen
            </a>
          </div>

          {/* Sub-Trust-Line */}
          <p className="text-xs text-white/50 mt-5">
            Klar strukturiert. In wenigen Tagen online.
          </p>

          {/* ===== Slide Indicator ===== */}
          <div className="mt-10 flex justify-center gap-2">
            {slides.map((_, i) => (
              <div
                key={i}
                className={`h-2 rounded-full transition-all duration-500 ${
                  i === index
                    ? "w-8 bg-jamoko-gold"
                    : "w-2 bg-white/30"
                }`}
              />
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}