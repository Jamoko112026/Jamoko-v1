import { motion } from "framer-motion";

export default function PlanetArcGlowMini() {
  return (
    <div className="relative w-full h-[90px] overflow-hidden select-none my-10">
      
      {/* Soft tiny aura */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r 
                   from-jamoko-gold/5 
                   via-jamoko-teal/5 
                   to-jamoko-gold/5 
                   blur-xl opacity-20"
        animate={{ opacity: [0.1, 0.18, 0.1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Small arc shape */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 
                   w-[120%] h-[160%]
                   rounded-full 
                   bg-gradient-to-r 
                   from-jamoko-gold/20 
                   via-jamoko-teal/25 
                   to-jamoko-gold/20 
                   blur-[40px] opacity-25"
        animate={{
          opacity: [0.18, 0.28, 0.18],
          scale: [0.98, 1.02, 0.98],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* tiny horizon line */}
      <div
        className="absolute bottom-[2px] w-full h-[1px]
                   bg-gradient-to-r 
                   from-transparent 
                   via-jamoko-teal/30 
                   to-transparent"
      />
    </div>
  );
}
