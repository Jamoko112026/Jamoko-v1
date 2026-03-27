import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useLayoutEffect } from "react";

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

// Case Studies / Demos
import SLBautec from "../pages/SLBautec";
import PhysioDemo from "../pages/PhysioDemo";
import SushiDemo from "../pages/SushiDemo"; // 👈 NEU

// Legal
import Impressum from "../pages/Impressum";
import Datenschutz from "../pages/Datenschutz";
import AGB from "../pages/AGB";

export default function AnimatedRoutes() {
  const location = useLocation();

  // Scroll bei Routewechsel
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={location.pathname}
        style={{ willChange: "transform, opacity" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{
          duration: 0.45,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <Routes location={location} key={location.pathname}>

          <Route path="/" element={<JamokoLayout />}>

            {/* Home */}
            <Route index element={<Home />} />

            {/* Services */}
            <Route path="minisite" element={<MiniSite />} />
            <Route path="business" element={<Business />} />
            <Route path="pricing" element={<Pricing />} />

            {/* Info */}
            <Route path="faq" element={<FAQ />} />
            <Route path="kontakt" element={<Kontakt />} />
            <Route path="about" element={<About />} />

            {/* Case Studies */}
            <Route path="sl-bautec" element={<SLBautec />} />

            {/* Demos */}
            <Route path="physio" element={<PhysioDemo />} />
            <Route path="sushi" element={<SushiDemo />} /> {/* 👈 NEU */}

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