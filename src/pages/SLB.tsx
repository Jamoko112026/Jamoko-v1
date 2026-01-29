import SLBHero from "@/sections/slb/SLBHero";
import SLBTrust from "@/sections/slb/SLBTrust";
import SLBServices from "@/sections/slb/SLBServices";
import SLBProcess from "@/sections/slb/SLBProcess";
import SLBCTA from "@/sections/slb/SLBCTA";
import SLBContact from "@/sections/slb/SLBContact";
import SLBFooter from "@/sections/slb/SLBFooter";

export default function SLB() {
  return (
    <main className="bg-[#0f1720] text-white">

      <SLBHero />
      <SLBServices />
      <SLBTrust />
      <SLBProcess />
      <SLBCTA />
      <SLBContact />
      <SLBFooter />

    </main>
  );
}
