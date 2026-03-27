import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // SLB komplett ausblenden
  if (location.pathname.startsWith("/slb")) return null;

  // Scroll Status
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50 h-[90px]
        transition-all duration-300 border-b border-white/5
        ${
          scrolled
            ? "bg-[#001821]/85 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.45)]"
            : "bg-[#001821]"
        }
      `}
    >
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between relative">

        {/* LOGO */}
        <Link
          to="/"
          className="text-jamoko-gold text-xl font-semibold tracking-wide transition hover:opacity-80"
        >
          JaMoKo
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8 text-white/80 text-sm">

          <Link to="/" className="hover:text-jamoko-teal transition duration-300">
            Start
          </Link>

          <Link to="/minisite" className="hover:text-jamoko-teal transition duration-300">
            Beispiel
          </Link>

          <Link to="/pricing" className="hover:text-jamoko-teal transition duration-300">
            Preise
          </Link>

          <Link
            to="/kontakt"
            className="
              px-5 py-2 rounded-full
              bg-jamoko-teal text-black font-medium
              hover:bg-jamoko-gold
              transition duration-300
              shadow-[0_0_15px_rgba(26,199,164,0.25)]
              hover:shadow-[0_0_25px_rgba(229,197,139,0.35)]
            "
          >
            Jetzt starten
          </Link>

        </nav>

        {/* STICKY CTA (nur beim Scroll) */}
        {scrolled && (
          <div className="hidden md:block absolute right-6 top-1/2 -translate-y-1/2">
            <Link
              to="/kontakt"
              className="
                px-4 py-1.5 text-sm rounded-full
                bg-jamoko-gold text-[#001821]
                shadow-[0_0_20px_rgba(229,197,139,0.35)]
                hover:opacity-90 transition
              "
            >
              Kontakt
            </Link>
          </div>
        )}

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-jamoko-teal p-2"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-[#001821]/95 backdrop-blur-xl">
          <div className="flex flex-col px-6 py-6 space-y-5 text-white/80 text-base">

            {/* CTA zuerst */}
            <Link
              to="/kontakt"
              onClick={() => setOpen(false)}
              className="bg-jamoko-teal text-black px-4 py-2 rounded-full text-center font-medium"
            >
              Jetzt starten
            </Link>

            <Link to="/" onClick={() => setOpen(false)}>Start</Link>
            <Link to="/minisite" onClick={() => setOpen(false)}>Beispiel</Link>
            <Link to="/pricing" onClick={() => setOpen(false)}>Preise</Link>

          </div>
        </div>
      )}
    </header>
  );
}