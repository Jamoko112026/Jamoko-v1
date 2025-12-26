// src/components/MiniSiteDeviceMockup.tsx
import { motion } from "framer-motion";
import previewImg from "../assets/minisite_preview.png";

// Hinweis:
// Benenne dein Mockup-Bild exakt so: minisite_preview.png
// und lege es in src/assets/ ab.

export default function MiniSiteDeviceMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="
        relative mx-auto max-w-4xl 
        p-6 md:p-10 rounded-3xl overflow-hidden
        bg-[color-mix(in_srgb,var(--jamoko-navy)_70%,transparent)]
        border border-jamoko-gold/25
        shadow-[0_0_35px_rgba(229,197,139,0.18)]
        backdrop-blur-xl
      "
    >
      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none 
                   bg-[radial-gradient(circle_at_center,rgba(229,197,139,0.12),transparent_70%)]"
      />

      {/* Laptop + Phone Mockup (einfaches Vorschau-Bild) */}
      <img
        src={previewImg}
        alt="MiniSite Vorschau"
        className="
          relative z-10 w-full rounded-2xl shadow-xl
          border border-white/10
        "
      />
    </motion.div>
  );
}
