import { motion } from "framer-motion";
import JellyCubeHero from "../../assets/jamoko/hero/cube/Jamoko_JellyCube_Hero_v1.png";

export default function HeroLuminousBalancePhysio() {
  return (
    <section className="relative pt-32 pb-28 px-6 text-center overflow-hidden">

      <div
        className="
          absolute inset-0 
          bg-gradient-to-b 
          from-[#001821]/85 via-[#001821]/92 to-[#001821]
          pointer-events-none
        "
      />

      <div className="relative max-w-5xl mx-auto rounded-[32px] overflow-hidden shadow-[0_0_45px_rgba(0,0,0,0.45)]">
        <div
          className="
            absolute inset-0 z-10
            pointer-events-none
            rounded-[32px]
            bg-[radial-gradient(circle_at_center,
              rgba(229,197,139,0.25),
              rgba(26,199,164,0.15),
              transparent 70%)
            ]
          "
        />

        <img
          src={JellyCubeHero}
          alt="JaMoKo JellyCube Hero"
          className="w-full h-full object-cover rounded-[32px] select-none opacity-[0.92]"
          draggable="false"
        />
      </div>

      <div className="relative z-20 mt-12 max-w-4xl mx-auto">

        <motion.h1
          className="text-5xl md:text-6xl font-semibold text-jamoko-gold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Websites für Physiopraxen, die Vertrauen schaffen.
        </motion.h1>

        <motion.h2
          className="text-2xl md:text-3xl font-medium text-jamoko-teal"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Ruhig. Klar. Patientenorientiert.
        </motion.h2>

        <motion.p
          className="text-jamoko-text-dim mt-8 text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Eine übersichtliche Website, die Ihre Praxis professionell präsentiert
          und neuen Patientinnen und Patienten Sicherheit gibt.
        </motion.p>
<div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center items-center">

  <a
    href="/beispiel/physio"
    className="
      px-8 py-4
      rounded-xl
      bg-jamoko-gold
      text-[#001821]
      font-semibold
      shadow-lg
      hover:opacity-90
      transition
    "
  >
    Praxis-Beispiel ansehen
  </a>

  <a
    href="#kontakt"
    className="
      text-sm
      text-jamoko-text-dim
      hover:text-jamoko-teal
      transition
    "
  >
    Unverbindlich sprechen (15 Min.)
  </a>

</div>

      </div>
    </section>
  );
}
