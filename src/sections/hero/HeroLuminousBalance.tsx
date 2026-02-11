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

      {/* Calm Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#001821]/88 via-[#001821]/60 to-[#001821]/25" />

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
          Ihr Betrieb.<br />
          Klar gezeigt.<br />
          Ruhig geführt.<br />
          Digital wirksam.
        </motion.h1>

        {/* SUBLINE */}
        <motion.p
          className="
            mt-6
            max-w-2xl
            text-jamoko-text-dim
            text-base sm:text-lg
            leading-relaxed
          "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.8 }}
        >
          Ruhige, klare Websites für Betriebe, die einfach funktionieren —  
          damit Kunden sofort verstehen, was Sie tun und Vertrauen entsteht.
        </motion.p>

        {/* TRUST MICRO LINE */}
        <p className="mt-4 text-xs text-jamoko-text-dim/80 tracking-wide">
          Für Handwerk & lokale Betriebe · Ohne Agenturstress · Klar geführt
        </p>

        {/* CTA */}
        <motion.div
          className="mt-9 flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.7 }}
        >

          {/* Primary */}
          <motion.a
            href="#kontakt"
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
            Unverbindlich anfragen
          </motion.a>

          {/* Secondary */}
          <a
            href="/slb"
            className="
              px-7 py-3
              rounded-xl
              border border-jamoko-gold/40
              text-jamoko-gold
              hover:bg-jamoko-gold/10
              transition
            "
          >
            Beispiel ansehen
          </a>

        </motion.div>

      </div>

      {/* Bottom Fade */}
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
