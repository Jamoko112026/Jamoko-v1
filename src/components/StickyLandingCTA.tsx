import { motion, useScroll, useTransform } from "framer-motion";

export default function StickyLandingCTA() {
  const { scrollY } = useScroll();

  // Einblenden nach Hero
  const opacity = useTransform(scrollY, [300, 600], [0, 1]);

  return (
    <motion.div
      style={{ opacity }}
      className="
        fixed bottom-4 left-0 right-0 z-50
        flex justify-center pointer-events-none
        md:hidden
      "
    >
      <a
        href="#kontakt"
        className="
          pointer-events-auto
          bg-jamoko-gold text-[#001821]
          px-6 py-3 rounded-xl
          shadow-xl font-medium
        "
      >
        Jetzt starten
      </a>
    </motion.div>
  );
}
