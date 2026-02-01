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
      ? "linear-gradient(180deg, rgba(42,51,38,0.88), rgba(42,51,38,0.82))"
      : "linear-gradient(180deg, rgba(42,51,38,0.42), rgba(42,51,38,0.25))",
    borderBottom: "1px solid var(--sl-border-header)",
    backdropFilter: scrolled ? "blur(10px) saturate(120%)" : "none",
    WebkitBackdropFilter: scrolled ? "blur(10px) saturate(120%)" : "none",
  }}
>

      <div className="mx-auto max-w-7xl px-5">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            scrolled
              ? "h-[92px] md:h-[104px]"
              : "h-[108px] md:h-[120px]"
          }`}
        >
          {/* Logo */}
          <Link to="/slb" className="flex items-center gap-4">
            <img
              src={SLLogo}
              alt="SL BauTec GmbH"
              className="h-20 md:h-24 lg:h-28 w-auto object-contain"
              draggable={false}
            />

            {/* Accent Line */}
            <div
              className="h-10 md:h-12 w-[3px] rounded-full"
              style={{
                background:
                  "linear-gradient(180deg, var(--sl-accent-soft), var(--sl-accent-main))",
              }}
            />
          </Link>

          {/* CTA */}
          <a
            href="/slb#kontakt"
            className="sl-btn h-10 px-5 text-sm flex items-center justify-center"
          >
            Projekt anfragen
          </a>
        </div>
      </div>
    </header>
  );
}
