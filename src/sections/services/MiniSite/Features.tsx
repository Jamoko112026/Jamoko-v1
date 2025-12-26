// src/sections/services/MiniSite/Features.tsx
import { motion } from "framer-motion";
import {
  Palette,
  Layers,
  Smartphone,
  Zap,
  Search,
  Shapes,
} from "lucide-react";

export default function MiniSiteFeatures() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Hintergrund Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.25 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,
          rgba(229,197,139,0.12),transparent_70%)]"
      />

      {/* HEADLINE */}
      <div className="relative z-10 text-center max-w-3xl mx-auto mb-20">
        <h2 className="text-4xl md:text-5xl font-semibold text-jamoko-gold mb-6">
          Was deine Mini-Site ausmacht
        </h2>
        <p className="text-jamoko-text-dim text-lg leading-relaxed">
          Jede Mini-Site folgt einem klaren Calm-Energy-System: modern, ruhig,
          hochwertig und perfekt strukturiert – für maximale Wirkung.
        </p>
      </div>

      {/* GRID */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {/* FEATURE 1 */}
        <FeatureCard
          icon={<Palette className="w-10 h-10 text-jamoko-gold" />}
          title="Calm-Energy Design"
          text="Moderner, hochwertiger Look mit ruhigen Glows, klaren Farben und
          einzigartigen Visuals – dein professioneller Auftritt."
        />

        {/* FEATURE 2 */}
        <FeatureCard
          icon={<Layers className="w-10 h-10 text-jamoko-gold" />}
          title="Struktur, die trägt"
          text="Klares Layout, intuitive Navigation und Inhalte, die deine
          Stärken sichtbar machen und Vertrauen erzeugen."
        />

        {/* FEATURE 3 */}
        <FeatureCard
          icon={<Smartphone className="w-10 h-10 text-jamoko-gold" />}
          title="100% Mobile-First"
          text="Deine Site sieht auf jedem Gerät perfekt aus – schnell, präzise
          und optimal lesbar."
        />

        {/* FEATURE 4 */}
        <FeatureCard
          icon={<Zap className="w-10 h-10 text-jamoko-gold" />}
          title="Performance optimiert"
          text="Schnelle Ladezeiten, optimierte Bilder und moderne Technologie
          für ein flüssiges Nutzererlebnis."
        />

        {/* FEATURE 5 */}
        <FeatureCard
          icon={<Search className="w-10 h-10 text-jamoko-gold" />}
          title="SEO-Grundoptimierung"
          text="Klare Struktur, saubere Meta-Daten und sinnvolle Keywords für
          bessere Sichtbarkeit."
        />

        {/* FEATURE 6 */}
        <FeatureCard
          icon={<Shapes className="w-10 h-10 text-jamoko-gold" />}
          title="Visuelle Konsistenz"
          text="Eine perfekte Einheit aus Typografie, Farben, Icons und
          Gestaltung – alles wirkt wie aus einem Guss."
        />
      </div>
    </section>
  );
}

/* -------------------------------------- */
/* FeatureCard Component */
/* -------------------------------------- */

function FeatureCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="
        group p-10 rounded-3xl 
        bg-[#01212d]/70 backdrop-blur-xl
        border border-jamoko-gold/15
        shadow-[0_0_25px_rgba(229,197,139,0.06)]
        hover:shadow-[0_0_40px_rgba(229,197,139,0.15)]
        transition-all
      "
    >
      <div className="mb-6">{icon}</div>
      <h3 className="text-2xl font-semibold text-jamoko-gold mb-4">{title}</h3>
      <p className="text-jamoko-text-dim leading-relaxed">{text}</p>
    </motion.div>
  );
}
