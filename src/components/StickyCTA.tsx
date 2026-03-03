import { motion } from "framer-motion";

export default function StickyCTA() {
  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="
        fixed bottom-6 left-1/2 -translate-x-1/2 z-50
        backdrop-blur-xl
        bg-white/5 border border-white/10
        shadow-lg
        rounded-full
        px-5 py-3
        flex items-center gap-4
      "
    >
      <span className="text-sm text-white/70 hidden sm:block">
        Kurz sprechen?
      </span>

      <a
        href="#kontakt"
        className="
          bg-jamoko-gold
          text-[#001821]
          px-5 py-2.5
          rounded-full
          text-sm font-medium
          hover:scale-105
          transition
        "
      >
        Unverbindlich anfragen
      </a>
    </motion.div>
  );
}