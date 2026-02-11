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

  /**
   * SLB ist jetzt ROOT (/)
   * → Alles außer /jamoko gehört zu SLB
   */
  const isJamoko = pathname.startsWith("/jamoko");
  const isSLB = !isJamoko;

  return (
    <div
      className={`
        min-h-screen flex flex-col
        ${isJamoko ? "bg-[#001821] text-jamoko-text" : ""}
      `}
    >

      {/* Skip Link */}
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

      {/* JAMOKO HEADER */}
      {isJamoko && <Header />}

      {/* MAIN */}
      <main
        id="main"
        role="main"
        className={`
          flex-1
          ${isJamoko ? "pt-24 pb-28" : ""}
        `}
      >
        <AnimatedRoutes />
      </main>

      {/* JAMOKO CTA */}
      {isJamoko && <StickyLandingCTA />}

      {/* JAMOKO FOOTER */}
      {isJamoko && (
        <>
          <div className="hidden md:block">
            <FooterGlass />
          </div>
          <div className="md:hidden">
            <FooterMobileLegal />
          </div>
        </>
      )}
    </div>
  );
}
