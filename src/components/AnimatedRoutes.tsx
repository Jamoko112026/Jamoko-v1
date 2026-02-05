import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

// Layouts
import JamokoLayout from "../layouts/JamokoLayout";
import SLBLayout from "../layouts/SLBLayout";

// Jamoko Pages
import Home from "../pages/Home";
import MiniSite from "../pages/MiniSite";
import Pricing from "../pages/Pricing";
import FAQ from "../pages/FAQ";
import Kontakt from "../pages/Kontakt";
import About from "../pages/About";
import Business from "../pages/Business";

// Jamoko Legal
import Impressum from "../pages/Impressum";
import Datenschutz from "../pages/Datenschutz";
import AGB from "../pages/AGB";

// SLB Pages
import SLB from "../pages/SLB";
import SLBImpressum from "../pages/slb/SLBImpressum";
import SLBDatenschutz from "../pages/slb/SLBDatenschutz";
import SLBRechtlicheHinweise from "@/pages/slb/SLBRechtlicheHinweise";

export default function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <Routes location={location}>

          {/* =========================
              JAMOKO CORE
          ========================= */}

          <Route element={<JamokoLayout />}>

            {/* Public Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/minisite" element={<MiniSite />} />
            <Route path="/business" element={<Business />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="/about" element={<About />} />

            {/* Legal */}
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
            <Route path="/agb" element={<AGB />} />

          </Route>

          {/* =========================
    SL BAUTEC SYSTEM
========================= */}

<Route path="/slb" element={<SLBLayout />}>
  <Route index element={<SLB />} />
  <Route path="impressum" element={<SLBImpressum />} />
  <Route path="datenschutz" element={<SLBDatenschutz />} />
  <Route
    path="rechtliche-hinweise"
    element={<SLBRechtlicheHinweise />}
  />
</Route>


        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}
