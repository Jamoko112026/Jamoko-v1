// src/components/HeroSoft.tsx

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

import handwerk from "../assets/sparten/handwerk.jpg";
import praxis from "../assets/sparten/praxis-studio.jpg";
import selbst from "../assets/sparten/selbststaendige-studio.jpg";

const slides = [
  { type: "video", src: "/video/krokus-hero.mp4" },
  { type: "image", src: handwerk },
  { type: "image", src: praxis },
  { type: "image", src: selbst },
];

export default function HeroSoft() {

  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const { scrollY } = useScroll();

  const yBg = useTransform(scrollY, [0, 600], [0, 100]);
  const opacityBg = useTransform(scrollY, [0, 500], [1, 0.35]);

  const yText = useTransform(scrollY, [0, 250], [0, -70]);
  const opacityText = useTransform(scrollY, [0, 220], [1, 0]);

  // Mobile check
  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  // Timer nur für Bilder
  useEffect(() => {

    if (slides[index].type !== "image") return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 9000);

    return () => clearInterval(interval);

  }, [index]);

  return (
    <section className="relative h-[92vh] w-full overflow-hidden">

      {/* ===== Background ===== */}

      <AnimatePresence mode="sync">

        {!isMobile && slides[index].type === "video" ? (

          <motion.video
            key="video"
            style={{ y: yBg, opacity: opacityBg }}
            autoPlay
            muted
            playsInline
            preload="metadata"
            poster="/video/krokus-hero.jpg"
            onEnded={() =>
              setIndex((prev) => (prev + 1) % slides.length)
            }
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.8 }}
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src={slides[index].src} type="video/mp4" />
          </motion.video>

        ) : (

          <motion.img
            key={slides[index].src}
            style={{ y: yBg, opacity: opacityBg }}
            src={slides[index].src}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2.4 }}
            className="absolute inset-0 h-full w-full object-cover"
            alt="JaMoKo Mini-Websites für lokale Betriebe"
          />

        )}

      </AnimatePresence>

      {/* ===== Overlays ===== */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,24,33,0.15),rgba(0,24,33,0.9))]" />

      <div className="absolute inset-0 bg-gradient-to-b from-[#001821]/40 via-[#001821]/30 to-[#001821]/90" />

      {/* ===== Content ===== */}

      <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">

        <motion.div
          style={{ y: yText, opacity: opacityText }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
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

          {/* ===== CTA ===== */}

          <div className="mt-10 flex justify-center gap-5 flex-wrap">

            <a
              href="#kontakt"
              className="group relative px-8 py-3 rounded-full bg-jamoko-gold text-[#001821] font-medium overflow-hidden transition-all duration-300 hover:scale-[1.03]"
            >
              <span className="relative z-10">MiniSite starten</span>
              <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition duration-300" />
            </a>

            <a
              href="/minisite"
              className="px-8 py-3 rounded-full border border-white/30 text-white backdrop-blur-sm hover:bg-white/10 transition duration-300"
            >
              Beispiele ansehen
            </a>

          </div>

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