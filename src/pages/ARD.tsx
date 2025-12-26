// src/pages/ARD.tsx

import ARDHero from "../sections/ARD/ARDHero";
import ARDGallery from "../sections/ARD/ARDGallery";
import ARDServices from "../sections/ARD/ARDServices";
import ARDPrices from "../sections/ARD/ARDPrices";
import ARDReviews from "../sections/ARD/ARDReviews";
import ARDContact from "../sections/ARD/ARDContact";

export default function ARD() {
  return (
    <div className="bg-white text-[#0A1F35]">
      <ARDHero />
      <ARDGallery />
      <ARDServices />
      <ARDPrices />
      <ARDReviews />
      <ARDContact />

      <footer className="py-10 text-center text-sm text-[#0A1F35]/70">
        Altonaer Reifendienst · Hamburg-Altona
      </footer>
    </div>
  );
}
