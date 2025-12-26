// src/App.tsx
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import FooterGlass from "./components/FooterGlass";

// Pages
import Start from "./pages/Start";
import MiniSite from "./pages/MiniSite";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#001821] text-jamoko-text">
      {/* Accessibility: Skip Link */}
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

      {/* Navigation */}
      <Header />

      {/* Main Content */}
      <main id="main" role="main" className="flex-1 pt-24">
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/minisite" element={<MiniSite />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
        </Routes>
      </main>

      {/* Footer */}
      <FooterGlass />
    </div>
  );
}
