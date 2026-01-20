// src/App.tsx
import AnimatedRoutes from "./components/AnimatedRoutes";

import Header from "./components/Header";
import FooterGlass from "./components/FooterGlass";
import FooterMobileLegal from "./components/FooterMobileLegal";
import StickyMobileCTA from "./components/StickyMobileCTA";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#001821] text-jamoko-text">

      {/* Accessibility Skip-Link */}
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

      {/* Header */}
      <Header />

      {/* Main Content */}
      {/* pb-28 = Platz für Sticky Mobile CTA */}
      <main
        id="main"
        role="main"
        className="flex-1 pt-24 pb-28"
      >
        <AnimatedRoutes />
      </main>

      {/* Desktop Footer */}
      <div className="hidden md:block">
        <FooterGlass />
      </div>

      {/* Mobile Sticky CTA */}
      <div className="md:hidden">
        <StickyMobileCTA />
      </div>

      {/* Mobile Legal Footer */}
      <div className="md:hidden">
        <FooterMobileLegal />
      </div>

    </div>
  );
}
