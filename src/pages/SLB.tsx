// src/pages/SLB.tsx

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
  return (
    <>
      <SLBHero />
      <div id="slb-after-hero" />

      <SLBServices />
      <SLBTrust />
      <SLBProcess />

      <SLBMidCTA />
      <SLBCTA />

      <div id="slb-kontakt">
        <SLBContact />
      </div>

      <SLBFooter />
      <SLBMobileCTA />
    </>
  );
}
