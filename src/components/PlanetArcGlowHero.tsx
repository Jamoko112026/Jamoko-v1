import { motion } from "framer-motion";

export default function PlanetArcGlowHero() {
  return (
    <div className="relative w-full h-[320px] overflow-hidden select-none">
      
      {/* Massive Glow Field */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br 
                   from-jamoko-gold/15 
                   via-jamoko-teal/20 
                   to-jamoko-gold/15 
                   blur-3xl opacity-50"
        animate={{ opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* HUGE Planet Arc */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 
                   w-[200%] h-[300%] 
                   rounded-full 
                   bg-gradient-to-r 
                   from-jamoko-gold/50 
                   via-jamoko-teal/70 
                   to-jamoko-gold/50 
                   blur-[100px] opacity-50"
        animate={{
          opacity: [0.35, 0.6, 0.35],
          scale: [0.95, 1.03, 0.95],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Sharp Horizon Line */}
      <div
        className="absolute bottom-0 w-full h-[2px] 
                   bg-gradient-to-r 
                   from-transparent 
                   via-jamoko-teal/70 
                   to-transparent"
      />
    </div>
  );
}
