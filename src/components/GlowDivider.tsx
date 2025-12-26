import { FC } from "react";
import { motion } from "framer-motion";

interface GlowDividerProps {
  className?: string;
}

const GlowDivider: FC<GlowDividerProps> = ({ className = "" }) => {
  return (
    <motion.div
      className={`relative w-full h-[3px] my-16 ${className}`}
      initial={{ opacity: 0, scaleX: 0.6 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Inner Glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r 
                   from-transparent 
                   via-jamoko-teal/40 
                   to-transparent"
        animate={{
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Soft Outer Glow */}
      <div
        className="absolute inset-0 bg-gradient-to-r 
                  from-jamoko-gold/0 
                  via-jamoko-teal/20 
                  to-jamoko-gold/0 
                  blur-lg"
      />
    </motion.div>
  );
};

export default GlowDivider;
