import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import SLLogo from "../assets/slb-logo-header.png";

export default function HeaderSLB() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  if (!location.pathname.startsWith("/slb")) return null;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 border-b transition-all duration-300"
      style={{
        background: scrolled
          ? "var(--sl-bg-header-scrolled)"
          : "var(--sl-bg-header)",
        borderColor: "var(--sl-border-header)",
        backdropFilter: scrolled ? "blur(14px)" : "none",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className={[
            "flex items-center justify-between transition-all duration-300",
            scrolled ? "h-[92px] md:h-[104px]" : "h-[108px] md:h-[120px]",
          ].join(" ")}
        >
          <Link to="/slb" className="flex items-center gap-4">
            <img
              src={SLLogo}
              alt="SL BauTec GmbH"
              className="h-20 md:h-24 lg:h-28 w-auto object-contain drop-shadow-[0_14px_34px_rgba(0,0,0,0.5)]"
              draggable={false}
            />

            <div
              className="h-10 md:h-12 w-[3px] rounded-full"
              style={{
                background:
                  "linear-gradient(180deg, var(--sl-accent-soft), var(--sl-accent-main))",
              }}
            />
          </Link>

          <a
            href="/slb#kontakt"
            className="sl-btn h-10 px-5 py-0 text-sm flex items-center justify-center"
          >
            Projekt anfragen
          </a>
        </div>
      </div>
    </header>
  );
}
