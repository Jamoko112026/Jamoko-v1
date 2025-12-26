// src/sections/services/MiniSite/Preview.tsx

import { motion } from "framer-motion";

// Preview Bilder
import HeroImg from "../../../assets/jamoko/hero/cube/Jamoko_JellyCube_Hero_v1.png";
import TypoImg from "../../../assets/minisite/Jamoko_MiniSite_Typo_v1.png";
import IconsImg from "../../../assets/minisite/Jamoko_MiniSite_Icons_v1.png";

export default function MiniSitePreview() {
  return (
    <section
      id="minisite-preview"
      className="relative py-32 px-6 text-center 
                 bg-gradient-to-b from-[#001821] via-[#012533] to-[#013542]
                 overflow-hidden"
    >
      {/* Radial Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.25 }}
        transition={{ duration: 1.4 }}
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,
                 rgba(229,197,139,0.18),transparent_75%)]"
      />

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-6xl mx-auto space-y-24">

        {/* SECTION TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-semibold 
                     text-jamoko-gold drop-shadow-[0_0_25px_rgba(229,197,139,0.3)]"
        >
          Deine Mini-Site im Überblick
        </motion.h2>

        {/* PREVIEW IMAGES */}
        {[
          { img: HeroImg, alt: "MiniSite Hero Visual" },
          { img: TypoImg, alt: "MiniSite Typografie" },
          { img: IconsImg, alt: "MiniSite Icons" },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 + index * 0.1 }}
            className="
              relative 
              rounded-[32px] 
              overflow-hidden  
              max-w-5xl mx-auto
              shadow-[0_0_45px_rgba(0,0,0,0.45)]
            "
          >
            {/* SIGNATURE GLOW FRAME */}
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

            {/* IMAGE */}
            <img
              src={item.img}
              alt={item.alt}
              className="w-full h-full object-cover rounded-[32px]"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
