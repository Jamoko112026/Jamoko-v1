// src/sections/AboutHero.tsx
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section
      id="about-hero"
      className="relative flex flex-col items-center justify-center text-center overflow-hidden py-32 px-6 bg-gradient-to-b from-[#001821] via-[#012633] to-[#013542] text-jamoko-text"
    >
      {/* Hintergrund-Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(229,197,139,0.12),transparent_70%)]"
      />

      {/* Portrait */}
      <motion.img
        src="/assets/Mo_Koch_Profile_Portrait.jpg"
        alt="Jan-Moritz Koch – JaMoKo"
        className="relative z-10 w-40 h-40 md:w-52 md:h-52 rounded-full object-cover shadow-lg border-2 border-jamoko-teal/50 mb-8"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Überschrift */}
      <motion.h1
        className="text-4xl md:text-5xl font-headline text-[#E5C58B] mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Jan-Moritz Koch
      </motion.h1>

      {/* Unterzeile */}
      <motion.p
        className="text-lg md:text-xl text-jamoko-text/80 max-w-2xl leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1.2 }}
      >
        Ich arbeite für <span className="text-[#E5C58B]">Frieden im Kopf</span>  
        und <span className="text-[#1AC7A4]">Kraft fürs Eigene</span>.<br />
        Technik, Design und Bewusstsein gehören zusammen – 
        wenn wir sie achtsam verbinden.
      </motion.p>
    </section>
  );
}
