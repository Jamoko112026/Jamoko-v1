// src/components/FooterGlass.tsx
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

import InstagramIcon from "../assets/icons/instagram_gold.svg";
import LinkedInIcon from "../assets/icons/linkedin_gold.svg";

export default function FooterGlass() {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="hidden md:block relative bg-[#001821]/80 backdrop-blur-xl border-t border-jamoko-teal/20 py-10 text-center text-jamoko-text overflow-hidden"
    >

      {/* Gold Glow Divider */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#E5C58B]/40 to-transparent" />

      {/* Hintergrund-Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.12 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(229,197,139,0.12),transparent_70%)]"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 space-y-6">

        {/* Identität */}
        <div className="space-y-1">
          <h3 className="text-lg font-headline text-[#E5C58B]">
            JaMoKo – Community First
          </h3>

          <p className="text-sm text-jamoko-text/70">
            Jan-Moritz Koch
          </p>

          <a
            href="mailto:moin@jamoko.de"
            className="text-sm text-[#1AC7A4] hover:text-[#E5C58B] transition-all duration-300 ease-out"
          >
            moin@jamoko.de
          </a>
        </div>

        {/* Rechtliches */}
        <div className="text-xs text-jamoko-text/60 flex items-center justify-center gap-2">

          <NavLink
            to="/impressum"
            className={({ isActive }) =>
              `transition-all duration-300 ease-out ${
                isActive
                  ? "text-[#E5C58B]"
                  : "hover:text-[#E5C58B]"
              }`
            }
          >
            Impressum
          </NavLink>

          <span className="opacity-40">·</span>

          <NavLink
            to="/datenschutz"
            className={({ isActive }) =>
              `transition-all duration-300 ease-out ${
                isActive
                  ? "text-[#E5C58B]"
                  : "hover:text-[#E5C58B]"
              }`
            }
          >
            Datenschutz
          </NavLink>

          <span className="opacity-40">·</span>

          <NavLink
            to="/agb"
            className={({ isActive }) =>
              `transition-all duration-300 ease-out ${
                isActive
                  ? "text-[#E5C58B]"
                  : "hover:text-[#E5C58B]"
              }`
            }
          >
            AGB
          </NavLink>

        </div>

        {/* Social */}
        <div className="flex items-center justify-center gap-5 pt-2">
          <a
            href="https://www.instagram.com/jamoko30"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="JaMoKo auf Instagram"
            className="opacity-60 hover:opacity-100 transition-all duration-300 ease-out"
          >
            <img src={InstagramIcon} alt="" className="w-[18px] h-[18px]" />
          </a>

          <a
            href="https://www.linkedin.com/company/jamoko"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="JaMoKo auf LinkedIn"
            className="opacity-60 hover:opacity-100 transition-all duration-300 ease-out"
          >
            <img src={LinkedInIcon} alt="" className="w-[18px] h-[18px]" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-jamoko-text/50">
          © {year} JaMoKo – Community First
        </p>

      </div>
    </motion.footer>
  );
}
