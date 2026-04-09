import ARDDemoHero from "../demos/ARD/ARDDemoHero";
import ARDDemoGallery from "../demos/ARD/ARDDemoGallery";
import ARDDemoServices from "../demos/ARD/ARDDemoServices";
import ARDDemoPrices from "../demos/ARD/ARDDemoPrices";
import ARDDemoContact from "../demos/ARD/ARDDemoContact";

export default function ARDDemo() {
  return (
    <div className="bg-[#001821] text-white">

      {/* 🔵 DEMO HINWEIS (wichtig für Verkauf) */}
      <div className="text-center text-xs py-3 bg-jamoko-gold text-[#001821] tracking-wide">
        DEMO · So könnte deine Website aussehen
      </div>

      <ARDDemoHero />
      <ARDDemoGallery />
      <ARDDemoServices />
      <ARDDemoPrices />
      <ARDDemoContact />

      <footer className="py-12 text-center text-sm text-white/50">
        JaMoKo Demo · Altonaer Reifendienst
      </footer>
    </div>
  );
}