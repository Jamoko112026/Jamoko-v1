// src/App.tsx

import { useLocation } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes";

// Jamoko Layout
import Header from "./components/Header";
import FooterGlass from "./components/FooterGlass";
import FooterMobileLegal from "./components/FooterMobileLegal";

// Landing CTA
import StickyLandingCTA from "./components/StickyLandingCTA";

export default function App() {
  const { pathname } = useLocation();

  // SL Bautec Bereich trennen
  const isSLB = pathname.startsWith("/slb");

  return (
    <div
      className={`
        min-h-screen flex flex-col
        ${!isSLB ? "bg-[#001821] text-jamoko-text" : ""}
      `}
    >

      {/* =========================
         ACCESSIBILITY SKIP LINK
      ========================= */}
      <a
        href="#main"
        className="
          absolute left-3 top-3 z-50
          px-4 py-2 rounded-lg
          bg-jamoko-gold text-[#001821]
          opacity-0 focus:opacity-100
          transition
        "
      >
        Zum Inhalt springen
      </a>

      {/* =========================
         JAMOKO HEADER
      ========================= */}
      {!isSLB && <Header />}

      {/* =========================
         MAIN CONTENT
      ========================= */}
      <main
        id="main"
        role="main"
        className={`
          flex-1
          ${!isSLB ? "pt-24 pb-28" : ""}
        `}
      >
        <AnimatedRoutes />
      </main>

      {/* =========================
         MOBILE STICKY CTA
      ========================= */}
      {!isSLB && <StickyLandingCTA />}

      {/* =========================
         JAMOKO FOOTER
      ========================= */}
      {!isSLB && (
        <>
          {/* Desktop Footer */}
          <div className="hidden md:block">
            <FooterGlass />
          </div>

          {/* Mobile Legal Footer */}
          <div className="md:hidden">
            <FooterMobileLegal />
          </div>
        </>
      )}

    </div>
  );
}
