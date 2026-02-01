// src/App.tsx
import { useLocation } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes";

// Jamoko Layout
import Header from "./components/Header";
import FooterGlass from "./components/FooterGlass";
import FooterMobileLegal from "./components/FooterMobileLegal";
import StickyMobileCTA from "./components/StickyMobileCTA";

export default function App() {
  const { pathname } = useLocation();
  const isSLB = pathname.startsWith("/slb");

  return (
    <div className="min-h-screen flex flex-col">

      {/* Accessibility Skip Link */}
      <a
        href="#main"
        className="
          absolute left-2 top-2 z-50
          px-3 py-2 rounded
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
        className={`flex-1 ${
          !isSLB
            ? "pt-24 pb-28 bg-[#001821] text-jamoko-text"
            : ""
        }`}
      >
        <AnimatedRoutes />
      </main>

      {/* =========================
         JAMOKO FOOTER
      ========================= */}
      {!isSLB && (
        <>
          {/* Desktop Footer */}
          <div className="hidden md:block">
            <FooterGlass />
          </div>

          {/* Mobile Footer + CTA */}
          <div className="md:hidden">
            <StickyMobileCTA />
            <FooterMobileLegal />
          </div>
        </>
      )}

    </div>
  );
}
