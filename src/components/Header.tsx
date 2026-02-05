import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Header() {

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  // SL Bautec eigener Header
  if (location.pathname.startsWith("/slb")) return null;

  const isBusiness = location.pathname.startsWith("/business");

  // Scroll Blur Effekt
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (

    <header
      className={`
        fixed top-0 left-0 w-full z-50
        h-[90px]
        transition-all duration-300
        ${
          scrolled
            ? "bg-[#001821]/85 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.45)]"
            : "bg-[#001821]"
        }
      `}
    >

      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">

        {/* LOGO */}
        <Link
          to="/"
          className="text-jamoko-gold text-xl font-semibold tracking-wide"
        >
          JaMoKo
        </Link>

        {/* ======================
            TARGET GROUP SWITCH
        ====================== */}
        <div className="
          hidden md:flex items-center
          bg-white/5 border border-white/10
          rounded-full p-1
          backdrop-blur-lg
        ">

          <button
            onClick={() => navigate("/")}
            className={`
              px-5 py-2 rounded-full text-sm transition
              ${
                !isBusiness
                  ? "bg-jamoko-gold text-[#001821] shadow-[0_0_15px_rgba(229,197,139,0.35)]"
                  : "text-white/70 hover:text-white"
              }
            `}
          >
            MiniSite
          </button>

          <button
            onClick={() => navigate("/business")}
            className={`
              px-5 py-2 rounded-full text-sm transition
              ${
                isBusiness
                  ? "bg-jamoko-gold text-[#001821] shadow-[0_0_15px_rgba(229,197,139,0.35)]"
                  : "text-white/70 hover:text-white"
              }
            `}
          >
            Business
          </button>

        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8 text-white/80 text-sm">

          {!isBusiness && (
            <>
              <Link to="/" className="hover:text-jamoko-teal transition">
                Start
              </Link>

              <Link to="/minisite" className="hover:text-jamoko-teal transition">
                Beispiel
              </Link>

              <Link to="/pricing" className="hover:text-jamoko-teal transition">
                Preise
              </Link>
            </>
          )}

          {isBusiness && (
            <>
              <Link to="/business" className="hover:text-jamoko-teal transition">
                Übersicht
              </Link>

              <Link to="/business#business-pricing" className="hover:text-jamoko-teal transition">
                Pakete
              </Link>
            </>
          )}

          <Link
            to="/kontakt"
            className="
              px-5 py-2 rounded-full
              bg-jamoko-teal text-black font-medium
              hover:bg-jamoko-gold transition
            "
          >
            Kontakt
          </Link>

        </nav>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-jamoko-teal p-2"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>

      </div>

      {/* ======================
          MOBILE MENU
      ====================== */}
      {open && (

        <div className="md:hidden bg-[#001821]/95 backdrop-blur-xl">

          <div className="flex flex-col px-6 py-6 space-y-4 text-white/80">

            {/* Switch Mobile */}
            <div className="flex gap-2 mb-3">

              <button
                onClick={() => {
                  navigate("/");
                  setOpen(false);
                }}
                className={`flex-1 py-2 rounded-full text-sm ${
                  !isBusiness ? "bg-jamoko-gold text-[#001821]" : "bg-white/5"
                }`}
              >
                MiniSite
              </button>

              <button
                onClick={() => {
                  navigate("/business");
                  setOpen(false);
                }}
                className={`flex-1 py-2 rounded-full text-sm ${
                  isBusiness ? "bg-jamoko-gold text-[#001821]" : "bg-white/5"
                }`}
              >
                Business
              </button>

            </div>

            {!isBusiness && (
              <>
                <Link to="/" onClick={() => setOpen(false)}>Start</Link>
                <Link to="/minisite" onClick={() => setOpen(false)}>Beispiel</Link>
                <Link to="/pricing" onClick={() => setOpen(false)}>Preise</Link>
              </>
            )}

            {isBusiness && (
              <>
                <Link to="/business" onClick={() => setOpen(false)}>Übersicht</Link>
                <Link to="/business#business-pricing" onClick={() => setOpen(false)}>Pakete</Link>
              </>
            )}

            <Link to="/kontakt" onClick={() => setOpen(false)}>Kontakt</Link>

          </div>

        </div>

      )}

    </header>
  );
}
