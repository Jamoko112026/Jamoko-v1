import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

import SLLogo from "../assets/slb-logo-header.png";

export default function HeaderSLB() {

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  // Nur exakt /slb bekommt diesen Header
  if (location.pathname !== "/slb") return null;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
<header
  className={`
    fixed top-0 left-0 w-full z-50
    h-[110px]

    border-b border-[rgba(201,111,40,0.25)]

    transition-all duration-300

    ${scrolled
      ? "bg-[var(--sl-bg-header)]/95 backdrop-blur-lg shadow-[0_8px_24px_rgba(0,0,0,0.35)]"
      : "bg-[var(--sl-bg-header)]"
    }
  `}
>


      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/slb" className="flex items-center gap-4">

        <img
  src={SLLogo}
  alt="SL BauTec GmbH"
  className="h-10 md:h-12 object-contain"
/>


          <div
            className="
              h-[64px] w-[4px] rounded-full
              bg-gradient-to-b from-[#FFD08A] to-[#F28C28]
            "
          />

        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-white/90 text-sm">

          <a href="/slb#top">Start</a>
          <a href="/slb#leistungen">Leistungen</a>
          <a href="/slb#kontakt">Kontakt</a>

        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-yellow-400"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#0b1220]/95 border-t border-yellow-400/20">

          <div className="flex flex-col px-6 py-5 space-y-3 text-white">

            <a href="/slb#top" onClick={() => setOpen(false)}>Start</a>
            <a href="/slb#leistungen" onClick={() => setOpen(false)}>Leistungen</a>
            <a href="/slb#kontakt" onClick={() => setOpen(false)}>Kontakt</a>

          </div>

        </div>
      )}

    </header>
  );
}
