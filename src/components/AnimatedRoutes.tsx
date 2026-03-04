// src/components/AnimatedRoutes.tsx

import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

// Layout
import JamokoLayout from "../layouts/JamokoLayout";

// Core Pages
import Home from "../pages/Home";
import MiniSite from "../pages/MiniSite";
import Pricing from "../pages/Pricing";
import FAQ from "../pages/FAQ";
import Kontakt from "../pages/Kontakt";
import About from "../pages/About";
import Business from "../pages/Business";

// Case Studies
import SLBautec from "../pages/SLBautec";
import PhysioDemo from "../pages/PhysioDemo";

// Legal
import Impressum from "../pages/Impressum";
import Datenschutz from "../pages/Datenschutz";
import AGB from "../pages/AGB";

export default function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{
          duration: 0.4,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <Routes location={location}>
          <Route path="/" element={<JamokoLayout />}>

            {/* Core */}
            <Route index element={<Home />} />
            <Route path="minisite" element={<MiniSite />} />
            <Route path="business" element={<Business />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="kontakt" element={<Kontakt />} />
            <Route path="about" element={<About />} />

            {/* Case Study */}
            <Route path="sl-bautec" element={<SLBautec />} />

            {/* Demo */}
            <Route path="physio-demo" element={<PhysioDemo />} />

            {/* Legal */}
            <Route path="impressum" element={<Impressum />} />
            <Route path="datenschutz" element={<Datenschutz />} />
            <Route path="agb" element={<AGB />} />

          </Route>
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}