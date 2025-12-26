import { motion } from "framer-motion";

export default function PlanetArcGlowDark() {
  return (
    <div className="relative w-full h-[180px] overflow-hidden select-none my-20">
      
      {/* Very subtle background aura */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r 
                   from-jamoko-gold/5 
                   via-jamoko-teal/5 
                   to-jamoko-gold/5 
                   blur-3xl opacity-20"
        animate={{ opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Dark Planet Arc */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 
                   w-[150%] h-[220%] rounded-full 
                   bg-gradient-to-r 
                   from-jamoko-gold/20 
                   via-jamoko-teal/25 
                   to-jamoko-gold/20 
                   blur-[80px] opacity-25"
        animate={{
          opacity: [0.18, 0.28, 0.18],
          scale: [0.97, 1.01, 0.97],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Thin Highlight Line */}
      <div
        className="absolute bottom-0 w-full h-[1px]
                   bg-gradient-to-r 
                   from-transparent 
                   via-jamoko-teal/25 
                   to-transparent"
      />
    </div>
  );
}
