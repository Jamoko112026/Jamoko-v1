import { motion } from "framer-motion";

export default function PlanetArcGlow() {
  return (
    <div className="relative w-full h-[200px] overflow-hidden select-none my-20">
      {/* Soft Background Glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r 
                   from-jamoko-gold/10 
                   via-jamoko-teal/10 
                   to-jamoko-gold/10 blur-3xl opacity-40"
        animate={{ opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Planet Arc */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 
                   w-[160%] h-[250%] 
                   rounded-full 
                   bg-gradient-to-r 
                   from-jamoko-gold/60 
                   via-jamoko-teal/70 
                   to-jamoko-gold/60 
                   blur-[60px] 
                   opacity-40"
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [0.95, 1.02, 0.95],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Crisp top line */}
      <div
        className="absolute bottom-0 w-full h-[2px] 
                   bg-gradient-to-r 
                   from-transparent 
                   via-jamoko-teal/60 
                   to-transparent"
      />
    </div>
  );
}
