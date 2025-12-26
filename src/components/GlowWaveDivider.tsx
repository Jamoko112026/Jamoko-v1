import { motion } from "framer-motion";

export default function GlowWaveDivider() {
  return (
    <div className="relative w-full overflow-hidden h-[140px] select-none">
      {/* Blur Glow Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r 
                   from-jamoko-gold/20 
                   via-jamoko-teal/20 
                   to-jamoko-gold/20 blur-2xl opacity-40"
        animate={{ opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Wave Shape */}
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        className="absolute bottom-0 w-full h-full"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.path
          fill="url(#glowGradient)"
          d="M0,256L80,240C160,224,320,192,480,197.3C640,203,800,245,960,234.7C1120,224,1280,160,1360,128L1440,96V320H0Z"
          animate={{ d: waveAnimation }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <defs>
          <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E5C58B" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#1AC7A4" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#E5C58B" stopOpacity="0.4" />
          </linearGradient>
        </defs>
      </motion.svg>
    </div>
  );
}

// Smooth waving animation (3 keyframes)
const waveAnimation = [
  "M0,256L80,240C160,224,320,192,480,197.3C640,203,800,245,960,234.7C1120,224,1280,160,1360,128L1440,96V320H0Z",
  "M0,240L100,230C200,220,350,200,520,210C700,220,880,260,1060,240C1240,220,1340,160,1440,120V320H0Z",
  "M0,256L80,240C160,224,320,192,480,197.3C640,203,800,245,960,234.7C1120,224,1280,160,1360,128L1440,96V320H0Z",
];
