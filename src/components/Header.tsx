// src/components/Header.tsx

import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isMiniSite = location.pathname === "/minisite";

  // ZENTRALER SCROLL-HANDLER
  const scrollTo = (id: string) => {
    if (!isMiniSite) {
      navigate("/minisite");
      setTimeout(() => {
        const el = document.getElementById(id);
        el?.scrollIntoView({ behavior: "smooth" });
      }, 80);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-[#001821]/70 border-b border-jamoko-gold/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="text-jamoko-gold font-semibold text-xl tracking-wide"
        >
          JaMoKo
        </Link>

        {/* DESKTOP */}
        <nav className="hidden md:flex gap-10 text-jamoko-text text-lg">
          <Link to="/" className="hover:text-jamoko-gold transition">Home</Link>
          <Link to="/minisite" className="hover:text-jamoko-gold transition">Mini-Site</Link>

          <button onClick={() => scrollTo("minisite-offer")} className="hover:text-jamoko-gold">
            Angebot
          </button>
          <button onClick={() => scrollTo("pricing")} className="hover:text-jamoko-gold">
            Preise
          </button>
          <button onClick={() => scrollTo("faq")} className="hover:text-jamoko-gold">
            FAQ
          </button>
          <button onClick={() => scrollTo("contact")} className="hover:text-jamoko-gold">
            Kontakt
          </button>
        </nav>

        {/* MOBILE BUTTON */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-jamoko-gold">
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-[#001821]/90 px-6 py-6 space-y-4 text-jamoko-text">
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/minisite" onClick={() => setOpen(false)}>Mini-Site</Link>

          <button onClick={() => scrollTo("minisite-offer")}>Angebot</button>
          <button onClick={() => scrollTo("pricing")}>Preise</button>
          <button onClick={() => scrollTo("faq")}>FAQ</button>
          <button onClick={() => scrollTo("contact")}>Kontakt</button>
        </div>
      )}
    </header>
  );
}
