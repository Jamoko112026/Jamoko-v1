import { motion } from "framer-motion";
import PhysioHeroImage from "../../assets/jamoko/hero/physio/Physio_Hero_v1.jpg";

export default function HeroLuminousBalancePhysio() {
  return (
    <section className="relative pt-36 pb-32 px-6 text-center overflow-hidden">

      {/* Background depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#001821]/80 via-[#001821]/95 to-[#001821] pointer-events-none" />

      {/* Image frame */}
      <div className="relative max-w-5xl mx-auto rounded-[32px] overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.5)]">
        <div className="absolute inset-0 z-10 pointer-events-none rounded-[32px] bg-[radial-gradient(circle_at_center,rgba(229,197,139,0.18),rgba(26,199,164,0.12),transparent_70%)]" />

        <img
          src={PhysioHeroImage}
          alt="Physiotherapeutin behandelt Patientin in ruhiger Praxis"
          className="w-full h-full object-cover rounded-[32px]"
          draggable={false}
        />
      </div>

      {/* Copy */}
      <div className="relative z-20 mt-14 max-w-3xl mx-auto">

        <motion.h1
          className="text-5xl md:text-6xl font-semibold text-jamoko-gold mb-6 leading-tight"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          Websites für Physiopraxen,<br className="hidden md:block" />
          die Vertrauen aufbauen.
        </motion.h1>

        <motion.h2
          className="text-xl md:text-2xl font-medium text-jamoko-teal mb-8"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Ruhig. Klar. Menschlich.
        </motion.h2>

        <motion.p
          className="text-jamoko-text-dim text-lg leading-relaxed max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Eine Website, die Ihre Praxis professionell zeigt,
          Vertrauen schafft und neuen Patientinnen und Patienten
          sofort Sicherheit gibt.
        </motion.p>

        {/* CTAs */}
        <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center">

          <a
            href="/beispiel/physio"
            className="px-8 py-4 rounded-xl bg-jamoko-gold text-[#001821] font-semibold shadow-lg hover:opacity-90 transition"
          >
            Praxis-Beispiel ansehen
          </a>

          <a
            href="#contact"
            className="text-sm text-jamoko-text-dim hover:text-jamoko-teal transition"
          >
            Unverbindlich sprechen (15 Min.)
          </a>

        </div>

      </div>
    </section>
  );
}
