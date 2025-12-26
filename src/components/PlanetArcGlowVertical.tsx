import { motion } from "framer-motion";

export default function PlanetArcGlowVertical() {
  return (
    <div className="relative w-[4px] h-full mx-auto select-none">
      
      {/* Soft background glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b 
                   from-jamoko-gold/10 
                   via-jamoko-teal/15 
                   to-jamoko-gold/10 
                   blur-md opacity-40"
        animate={{ opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Core glowing line */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b 
                   from-jamoko-gold/40 
                   via-jamoko-teal/60 
                   to-jamoko-gold/40 
                   rounded-full"
        animate={{
          opacity: [0.6, 0.9, 0.6],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
