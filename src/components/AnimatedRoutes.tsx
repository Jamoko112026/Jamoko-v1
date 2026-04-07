import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useLayoutEffect } from "react";

// Layout
import JamokoLayout from "../layouts/JamokoLayout";

// Pages
import Home from "../pages/Home";
import MiniSite from "../pages/MiniSite";
import Pricing from "../pages/Pricing";
import FAQ from "../pages/FAQ";
import Kontakt from "../pages/Kontakt";
import About from "../pages/About";
import Business from "../pages/Business";

// Demos
import SLBautec from "../pages/SLBautec";
import PhysioDemo from "../pages/PhysioDemo";
import SushiDemo from "../pages/SushiDemo";
import SabinePreview from "../pages/SabinePreview";
import UweHaberstroh from "../pages/UweHaberstroh";
import UliGlaserDemo from "../pages/UliGlaserDemo"; // ✅ NEU

// Legal
import Impressum from "../pages/Impressum";
import Datenschutz from "../pages/Datenschutz";
import AGB from "../pages/AGB";

export default function AnimatedRoutes() {
  const location = useLocation();

  // 🔧 sauberer Scroll Reset
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={location.pathname}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -4 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<JamokoLayout />}>

            {/* Core */}
            <Route index element={<Home />} />
            <Route path="minisite" element={<MiniSite />} />
            <Route path="business" element={<Business />} />
            <Route path="pricing" element={<Pricing />} />

            {/* Info */}
            <Route path="faq" element={<FAQ />} />
            <Route path="kontakt" element={<Kontakt />} />
            <Route path="about" element={<About />} />

            {/* Cases */}
            <Route path="sl-bautec" element={<SLBautec />} />

            {/* Demos (JETZT KLAR STRUKTURIERT) */}
            <Route path="demos/physio" element={<PhysioDemo />} />
            <Route path="demos/sushi" element={<SushiDemo />} />
            <Route path="demos/sabine" element={<SabinePreview />} />
            <Route path="demos/uwe" element={<UweHaberstroh />} />
            <Route path="demos/uli-glaser" element={<UliGlaserDemo />} /> {/* ✅ */}

            {/* Legal */}
            <Route path="impressum" element={<Impressum />} />
            <Route path="datenschutz" element={<Datenschutz />} />
            <Route path="agb" element={<AGB />} />

          </Route>
        </Routes>
      </motion.main>
    </AnimatePresence>
  );
}