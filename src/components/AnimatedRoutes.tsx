import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
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
import Projects from "../pages/Projects";
import NotFound from "../pages/NotFound";

// Cases (echte Kunden)
import SLBautec from "../pages/SLBautec";
import ARD from "../pages/ARD";
import UliGlaser from "../pages/UliGlaser";

// Demos
import PhysioDemo from "../pages/PhysioDemo";
import SushiDemo from "../pages/SushiDemo";
import SabinePreview from "../pages/SabinePreview";
import UweHaberstroh from "../pages/UweHaberstroh";
import ARDDemo from "../pages/ARDDemo"; // 🔥 NEU

// Legal
import Impressum from "../pages/Impressum";
import Datenschutz from "../pages/Datenschutz";
import AGB from "../pages/AGB";

export default function AnimatedRoutes() {
  const location = useLocation();

  // 🔧 sauberer Scroll Reset (stabil)
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
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
        {location.pathname.startsWith("/demos/") && (
          <Helmet>
            <meta name="robots" content="noindex, nofollow" />
          </Helmet>
        )}

        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<JamokoLayout />}>

            {/* ================= CORE ================= */}
            <Route index element={<Home />} />
            <Route path="minisite" element={<MiniSite />} />
            <Route path="business" element={<Business />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="projekte" element={<Projects />} />

            {/* ================= INFO ================= */}
            <Route path="faq" element={<FAQ />} />
            <Route path="kontakt" element={<Kontakt />} />
            <Route path="about" element={<About />} />

            {/* ================= CASES (ECHT) ================= */}
            <Route path="cases/sl-bautec" element={<SLBautec />} />
            <Route path="cases/reifendienst" element={<ARD />} />
            <Route path="cases/uli-glaser" element={<UliGlaser />} />

            {/* ================= DEMOS (VERKAUF) ================= */}
            <Route path="demos/physio" element={<PhysioDemo />} />
            <Route path="demos/sushi" element={<SushiDemo />} />
            <Route path="demos/sabine" element={<SabinePreview />} />
            <Route path="demos/uwe" element={<UweHaberstroh />} />
            <Route path="demos/uli-glaser" element={<UliGlaser />} />
            <Route path="demos/reifendienst" element={<ARDDemo />} /> {/* 🔥 wichtig */}

            {/* ================= LEGAL ================= */}
            <Route path="impressum" element={<Impressum />} />
            <Route path="datenschutz" element={<Datenschutz />} />
            <Route path="agb" element={<AGB />} />

            <Route path="*" element={<NotFound />} />

          </Route>
        </Routes>
      </motion.main>
    </AnimatePresence>
  );
}
