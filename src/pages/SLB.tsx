import SLBHero from "@/sections/slb/SLBHero";
import SLBTrust from "@/sections/slb/SLBTrust";
import SLBServices from "@/sections/slb/SLBServices";
import SLBProcess from "@/sections/slb/SLBProcess";
import SLBCTA from "@/sections/slb/SLBCTA";
import SLBContact from "@/sections/slb/SLBContact";

export default function SLB() {
  return (
    <main className="bg-[#0f1720] text-white">

      <div style={{padding:"20px", color:"red", fontSize:"22px"}}>
        SLB PAGE ACTIVE
      </div>

      <SLBHero />
      <SLBTrust />
      <SLBServices />
      <SLBProcess />
      <SLBCTA />
      <SLBContact />

    </main>
  );
}

