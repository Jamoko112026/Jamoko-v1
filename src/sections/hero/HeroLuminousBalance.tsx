import { motion, useScroll, useTransform } from "framer-motion";
import HeroImage from "@/assets/jamoko/hero/Jamoko_Hero_MinSite_CalmDesk_v1_2026-02-01.webp";

export default function HeroLuminousBalance() {

  // Calm Parallax
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 450], ["0%", "6%"]);

  return (
    <motion.section
      className="relative w-full min-h-[80vh] flex items-center overflow-hidden"
      style={{
        backgroundImage: `url(${HeroImage})`,
        backgroundSize: "cover",
        backgroundPositionX: "75%",
        backgroundPositionY: bgY,
        backgroundRepeat: "no-repeat"
      }}
    >

      {/* Calm Overlay Layer */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#001821]/85 via-[#001821]/55 to-[#001821]/20" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-28">

        {/* HEADLINE */}
        <motion.h1
          className="
            text-4xl sm:text-5xl md:text-6xl
            font-semibold
            text-jamoko-gold
            leading-tight
            max-w-3xl
          "
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          Ruhige Mini-Websites<br />
          für lokale Betriebe
        </motion.h1>

        {/* SUBLINE */}
        <motion.p
          className="
            mt-6
            max-w-xl
            text-jamoko-text-dim
            text-base sm:text-lg
            leading-relaxed
          "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.8 }}
        >
          Klar. Persönlich. Wirksam.<br />
          Digitale Präsenz ohne Stress – für echte Menschen.
        </motion.p>

        {/* CTA ROW */}
        <motion.div
          className="mt-9 flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.7 }}
        >

          {/* Primary CTA */}
          <motion.a
            href="/minisite"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300, damping: 18 }}
            className="
              px-7 py-3
              rounded-xl
              bg-jamoko-gold
              text-[#001821]
              font-medium
              shadow-lg
            "
          >
            Beispiel ansehen
          </motion.a>

          {/* Secondary CTA */}
          <a
            href="#kontakt"
            className="
              px-7 py-3
              rounded-xl
              border border-jamoko-gold/40
              text-jamoko-gold
              hover:bg-jamoko-gold/10
              transition
            "
          >
            Kontakt aufnehmen
          </a>

        </motion.div>

        {/* TRUST LINE */}
        <p className="mt-6 text-xs text-jamoko-text-dim tracking-wide">
          Für lokale Betriebe · Handwerk · Dienstleister
        </p>

      </div>

      {/* BOTTOM FADE TRANSITION */}
      <div className="
        absolute bottom-0 left-0 w-full h-40
        bg-gradient-to-b
        from-transparent
        via-[#001821]/60
        to-[#001821]
      " />

    </motion.section>
  );
}
