// src/pages/SLB.tsx

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
      {/* HERO */}
      <SLBHero />
      <div id="slb-after-hero" />

      {/* LEISTUNGEN */}
      <SLBServices />

      {/* VERTRAUEN / KERN */}
      <SLBTrust />

      {/* NEU: ZERTIFIKATE + REFERENZEN */}
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

      {/* FOOTER */}
  

      {/* MOBILE CTA */}
      <SLBMobileCTA />
    </>
  );
}
