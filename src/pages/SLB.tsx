// src/pages/SLB.tsx

import { Helmet } from "react-helmet-async";

import SLBHero from "../sections/slb/SLBHero";
import SLBServices from "../sections/slb/SLBServices";
import SLBTrust from "../sections/slb/SLBTrust";
import SLBTrustExtended from "../sections/slb/SLBTrustExtended";
import SLBProcess from "../sections/slb/SLBProcess";
import SLBMidCTA from "../sections/slb/SLBMidCTA";
import SLBCTA from "../sections/slb/SLBCTA";
import SLBContact from "../sections/slb/SLBContact";
import SLBMobileCTA from "../sections/slb/SLBMobileCTA";

export default function SLB() {
  return (
    <>
      {/* =====================
          SEO / TAB TITLE
      ====================== */}
      <Helmet>
        <title>SL Bautec – Glasfaser & Tiefbau Hamburg</title>
        <meta
          name="description"
          content="SL Bautec – Glasfaserbau, Tiefbau und Infrastruktur in Hamburg. Zuverlässig, strukturiert, professionell."
        />
        <meta property="og:title" content="SL Bautec – Glasfaser & Tiefbau Hamburg" />
        <meta
          property="og:description"
          content="Glasfaserbau, Tiefbau und Infrastruktur. Strukturiert. Zuverlässig. Professionell."
        />
        <meta property="og:url" content="https://slbautec.de" />
      </Helmet>

      {/* HERO */}
      <SLBHero />
      <div id="slb-after-hero" />

      {/* LEISTUNGEN */}
      <SLBServices />

      {/* VERTRAUEN / KERN */}
      <SLBTrust />

      {/* ZERTIFIKATE + REFERENZEN */}
      <SLBTrustExtended />

      {/* ABLAUF */}
      <SLBProcess />

      {/* CTA MID */}
      <SLBMidCTA />

      {/* HAUPT CTA */}
      <SLBCTA />

      {/* KONTAKT */}
      <div id="slb-kontakt">
        <SLBContact />
      </div>

      {/* MOBILE CTA */}
      <SLBMobileCTA />
    </>
  );
}
