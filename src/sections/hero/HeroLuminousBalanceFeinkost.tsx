import { motion } from "framer-motion";
import FeinkostHero from "../../assets/jamoko/hero/feinkost/Feinkost_Hero_v1.jpg";

export default function HeroLuminousBalanceFeinkost() {
  return (
    <section className="relative pt-32 pb-28 px-6 text-center overflow-hidden">

      {/* Calm dark background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#001821]/80 via-[#001821]/90 to-[#001821]" />

      {/* Image Frame */}
      <div className="relative max-w-5xl mx-auto rounded-[32px] overflow-hidden shadow-[0_0_45px_rgba(0,0,0,0.45)]">

        <div className="absolute inset-0 z-10 pointer-events-none rounded-[32px]
          bg-[radial-gradient(circle_at_center,rgba(229,197,139,0.18),rgba(26,199,164,0.10),transparent_70%)]" />

        <img
          src={FeinkostHero}
          alt="Feinkostgeschäft – hochwertige Lebensmittel"
          className="w-full h-full object-cover rounded-[32px] opacity-[0.95]"
          draggable="false"
        />
      </div>

      {/* Text */}
      <div className="relative z-20 mt-12 max-w-4xl mx-auto">

        <motion.h1
          className="text-5xl md:text-6xl font-semibold text-jamoko-gold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Websites für Feinkostläden, die Qualität zeigen.
        </motion.h1>

        <motion.h2
          className="text-2xl md:text-3xl font-medium text-jamoko-teal"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Genuss. Vertrauen. Handwerk.
        </motion.h2>

        <motion.p
          className="text-jamoko-text-dim mt-8 text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Eine ruhige, hochwertige Website, die Ihre Produkte, Ihre Geschichte
          und Ihre Qualität sichtbar macht – für Kunden, die Wert auf Genuss legen.
        </motion.p>

      </div>
    </section>
  );
}
