// src/components/FooterGlass.tsx
import { motion } from "framer-motion";

import InstagramIcon from "../assets/icons/instagram_gold.svg";
import LinkedInIcon from "../assets/icons/linkedin_gold.svg";

export default function FooterGlass() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#001821]/80 backdrop-blur-xl border-t border-jamoko-teal/20 py-10 text-center text-jamoko-text overflow-hidden">
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
            className="text-sm text-[#1AC7A4] hover:text-[#E5C58B] transition-colors"
          >
            moin@jamoko.de
          </a>
        </div>

        {/* Rechtliches */}
        <div className="text-xs text-jamoko-text/60 space-x-3">
          <a
            href="/impressum"
            className="hover:text-[#E5C58B] transition-colors"
          >
            Impressum
          </a>
          <span>·</span>
          <a
            href="/datenschutz"
            className="hover:text-[#E5C58B] transition-colors"
          >
            Datenschutz
          </a>
        </div>

        {/* Social */}
        <div className="flex items-center justify-center gap-5 pt-2">
          <a
            href="https://www.instagram.com/jamoko30"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="JaMoKo auf Instagram"
            className="opacity-60 hover:opacity-100 transition-opacity"
          >
            <img
              src={InstagramIcon}
              alt=""
              className="w-[18px] h-[18px]"
            />
          </a>

          <a
            href="https://www.linkedin.com/company/jamoko"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="JaMoKo auf LinkedIn"
            className="opacity-60 hover:opacity-100 transition-opacity"
          >
            <img
              src={LinkedInIcon}
              alt=""
              className="w-[18px] h-[18px]"
            />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-jamoko-text/50">
          © {year} JaMoKo – Community First
        </p>
      </div>
    </footer>
  );
}
