import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (location.pathname.startsWith("/slb")) return null;

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50
        transition-all duration-300 ease-out
        ${
          scrolled
            ? "bg-[#001821]/85 backdrop-blur-md border-b border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
            : "bg-transparent"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 h-16 flex items-center justify-between relative">

        {/* LOGO */}
        <Link
          to="/"
          className="text-[#E5C58B] text-lg font-medium tracking-wide transition hover:opacity-80"
        >
          JaMoKo
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8 text-white/70 text-sm">

          <Link to="/" className="hover:text-[#1AC7A4] transition duration-300">
            Start
          </Link>

          <Link to="/minisite" className="hover:text-[#1AC7A4] transition duration-300">
            Beispiel
          </Link>

          <Link to="/pricing" className="hover:text-[#1AC7A4] transition duration-300">
            Preise
          </Link>

        </nav>

        {/* CTA Desktop (erscheint erst beim Scroll) */}
        {scrolled && (
          <div className="hidden md:block">
            <Link
              to="/kontakt"
              className="
                px-5 py-2 rounded-full
                bg-[#E5C58B] text-[#001821]
                text-sm font-medium tracking-wide
                shadow-[0_0_18px_rgba(229,197,139,0.25)]
                hover:opacity-90
                transition duration-300
              "
            >
              Anfragen
            </Link>
          </div>
        )}

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[#1AC7A4] p-2"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-[#001821]/95 backdrop-blur-xl border-t border-white/10">
          <div className="flex flex-col px-6 py-6 space-y-5 text-white/80 text-base">

            <Link
              to="/kontakt"
              onClick={() => setOpen(false)}
              className="bg-[#E5C58B] text-[#001821] px-4 py-2 rounded-full text-center font-medium"
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
