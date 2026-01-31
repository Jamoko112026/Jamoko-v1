// src/pages/SLB.tsx
import { useEffect } from "react";

// SLB Theme (isoliert nur für /slb)
import "../assets/themes/slb_theme.css";

// Sections
import SLBHero from "../sections/slb/SLBHero";
import SLBServices from "../sections/slb/SLBServices";
import SLBTrust from "../sections/slb/SLBTrust";
import SLBProcess from "../sections/slb/SLBProcess";
import SLBMidCTA from "../sections/slb/SLBMidCTA";
import SLBCTA from "../sections/slb/SLBCTA";
import SLBContact from "../sections/slb/SLBContact";
import SLBFooter from "../sections/slb/SLBFooter";
import SLBMobileCTA from "../sections/slb/SLBMobileCTA";

export default function SLB() {
  // Aktiviert SLB Tokens nur auf dieser Route
  useEffect(() => {
    document.documentElement.classList.add("brand-slb");
    return () => document.documentElement.classList.remove("brand-slb");
  }, []);

  return (
    <div className="theme-sl min-h-screen">
      {/* HERO */}
      <SLBHero />

      {/* Marker: ab hier darf der Mobile CTA erscheinen */}
      <div id="slb-after-hero" />

      {/* CONTENT */}
      <SLBServices />
      <SLBTrust />
      <SLBProcess />

      {/* Conversion Push */}
      <SLBMidCTA />

      {/* Final CTA */}
      <SLBCTA />

      {/* Kontakt-Anker: sobald sichtbar, soll der Mobile CTA verschwinden */}
      <div id="slb-kontakt">
        <SLBContact />
      </div>

      <SLBFooter />

      {/* Sticky Mobile CTA: immer als letztes rendern */}
      <SLBMobileCTA />
    </div>
  );
}
