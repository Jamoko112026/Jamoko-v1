import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

// Standard Pages
import Start from "../pages/Start";
import MiniSite from "../pages/MiniSite";
import Pricing from "../pages/Pricing";
import FAQ from "../pages/FAQ";
import Kontakt from "../pages/Kontakt";
import About from "../pages/About";
import Impressum from "../pages/Impressum";
import Datenschutz from "../pages/Datenschutz";
import AGB from "../pages/AGB";

// Kundenprojekte
import SLB from "../pages/SLB";

// Beispiele
import HandwerkMiniSite from "../pages/beispiele/HandwerkMiniSite";
import PhysioMiniSite from "../pages/beispiele/PhysioMiniSite";
import FeinkostMiniSite from "../pages/beispiele/FeinkostMiniSite";

// Preview Demos
import PhysioPreview from "../pages/Physio/PhysioPreview";

export default function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        <Routes location={location}>

          {/* Hauptseiten */}
          <Route path="/" element={<Start />} />
          <Route path="/minisite" element={<MiniSite />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/kontakt" element={<Kontakt />} />

          {/* Rechtliches */}
          <Route path="/about" element={<About />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/agb" element={<AGB />} />

          {/* Kundenprojekte */}
          <Route path="/slb" element={<SLB />} />

          {/* Showcase Beispiele */}
          <Route path="/beispiel/handwerk" element={<HandwerkMiniSite />} />
          <Route path="/beispiel/physio" element={<PhysioMiniSite />} />
          <Route path="/beispiel/feinkost" element={<FeinkostMiniSite />} />

          {/* Preview Demos */}
          <Route path="/preview/physio" element={<PhysioPreview />} />

        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}
