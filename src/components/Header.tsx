import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

import SLLogo from "../assets/slb-logo.png";

export default function Header() {

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const isMiniSite = location.pathname === "/minisite";

  // Scroll Blur
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Angebot Scroll
  const scrollToOffer = () => {

    const run = () => {
      const el = document.getElementById("minisite-offer");
      if (!el) return;

      const offset = 110;
      const y = el.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top: y,
        behavior: "smooth"
      });
    };

    if (!isMiniSite) {
      navigate("/minisite");
      setTimeout(run, 300);
    } else {
      run();
    }

    setOpen(false);
  };

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50
        h-[110px]
        transition-all duration-300
        border-b border-yellow-400/20
        ${
          scrolled
            ? "bg-[#0b1220]/90 backdrop-blur-xl shadow-[0_8px_28px_rgba(0,0,0,0.45)]"
            : "bg-[#0f1720]"
        }
      `}
    >

      {/* MAIN BAR */}
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">

        {/* LOGO + BAR */}
        <Link to="/" className="flex items-center gap-4 shrink-0">

          {/* LOGO */}
          <img
            src={SLLogo}
            alt="SL BauTec GmbH"
            className="
              h-[88px]
              md:h-[100px]
              w-auto
              object-contain
              block
              select-none
            "
          />

          {/* ORANGE BRAND BAR */}
          <div
            className="
              h-[64px]
              w-[4px]
              rounded-full
              bg-gradient-to-b
              from-[#FFD08A]
              to-[#F28C28]
              shadow-[0_0_10px_rgba(242,140,40,0.45)]
            "
          />

        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8 text-white/90 text-sm">

          <Link to="/" className="hover:text-yellow-400 transition">Start</Link>

          <Link to="/minisite" className="hover:text-yellow-400 transition">Leistungen</Link>

          <button
            onClick={scrollToOffer}
            className="hover:text-yellow-400 transition"
          >
            Angebot
          </button>

          <Link to="/pricing" className="hover:text-yellow-400 transition">Preise</Link>

          <Link to="/kontakt" className="hover:text-yellow-400 transition">Kontakt</Link>

        </nav>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-yellow-400 p-2 rounded-md hover:bg-white/10 transition"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-[#0b1220]/95 backdrop-blur-xl border-t border-yellow-400/20">

          <div className="flex flex-col px-6 py-5 space-y-2 text-white/90">

            <Link to="/" onClick={() => setOpen(false)}>Start</Link>
            <Link to="/minisite" onClick={() => setOpen(false)}>Leistungen</Link>

            <button onClick={scrollToOffer}>Angebot</button>

            <Link to="/pricing" onClick={() => setOpen(false)}>Preise</Link>
            <Link to="/kontakt" onClick={() => setOpen(false)}>Kontakt</Link>

          </div>

        </div>
      )}

    </header>
  );
}
