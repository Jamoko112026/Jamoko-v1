import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import SLLogo from "../assets/slb-logo-header.png";

export default function HeaderSLB() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Nur im SLB Bereich anzeigen
  if (!location.pathname.startsWith("/slb")) return null;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "linear-gradient(180deg, rgba(42,51,38,0.94), rgba(42,51,38,0.88))"
          : "linear-gradient(180deg, rgba(42,51,38,0.45), rgba(42,51,38,0.25))",
        borderBottom: "1px solid var(--sl-border-header)",
        backdropFilter: scrolled ? "blur(10px) saturate(120%)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(10px) saturate(120%)" : "none",
      }}
    >
      <div className="mx-auto max-w-7xl px-5">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            scrolled
              ? "h-[110px] md:h-[120px]"
              : "h-[128px] md:h-[140px]"
          }`}
        >
          {/* LOGO */}
          <Link to="/slb" className="flex items-center">
            <img
              src={SLLogo}
              alt="SL BauTec"
              className="
                h-24
                md:h-32
                lg:h-40
                w-auto
                object-contain
                select-none
                pointer-events-none
              "
              draggable={false}
            />
          </Link>

          {/* CTA */}
          <a
            href="/slb#kontakt"
            className="sl-btn h-11 px-6 text-sm flex items-center justify-center"
          >
            Projekt anfragen
          </a>
        </div>
      </div>
    </header>
  );
}
