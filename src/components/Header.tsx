import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isMiniSite = location.pathname === "/minisite";

  // Scroll nur für Angebot auf Minisite
  const scrollToOffer = () => {
    const doScroll = () => {
      const el = document.getElementById("minisite-offer");
      if (!el) return;

      const headerOffset = 96;
      const y =
        el.getBoundingClientRect().top +
        window.pageYOffset -
        headerOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth"
      });
    };

    if (!isMiniSite) {
      navigate("/minisite");
      setTimeout(doScroll, 250);
    } else {
      doScroll();
    }

    setOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-[#001821]/70 border-b border-jamoko-gold/10">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link
          to="/"
          className="text-jamoko-gold font-semibold text-xl tracking-wide"
        >
          JaMoKo
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-10 text-jamoko-text text-lg items-center">

          <Link to="/">
            Home
          </Link>

          <Link to="/minisite">
            Mini-Site
          </Link>

          <Link to="/beispiel/handwerk">
            Handwerk
          </Link>

          <Link to="/beispiel/physio">
            Physiopraxis
          </Link>

          <Link to="/beispiel/feinkost">
            Feinkost
          </Link>

          <button className="w-full text-left py-2 hover:text-jamoko-gold transition" onClick={scrollToOffer}>
            Angebot
          </button>

          <Link to="/pricing">
            Preise
          </Link>

          <Link to="/faq">
            FAQ
          </Link>

          <Link to="/kontakt">
            Kontakt
          </Link>

        </nav>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-jamoko-gold"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden flex flex-col bg-[#001821]/90 px-6 py-6 space-y-4 text-jamoko-text">

          <Link to="/" onClick={() => setOpen(false)} className="block py-2">Home</Link>
          <Link to="/minisite" onClick={() => setOpen(false)}>Mini-Site</Link>

          <Link to="/beispiel/handwerk" onClick={() => setOpen(false)}>Handwerk</Link>
          <Link to="/beispiel/physio" onClick={() => setOpen(false)}>Physiopraxis</Link>
          <Link to="/beispiel/feinkost" onClick={() => setOpen(false)}>Feinkost</Link>

          <button className="w-full text-left py-2 hover:text-jamoko-gold transition" onClick={scrollToOffer}>Angebot</button>

          <Link to="/pricing" onClick={() => setOpen(false)}>Preise</Link>
          <Link to="/faq" onClick={() => setOpen(false)}>FAQ</Link>
          <Link to="/kontakt" onClick={() => setOpen(false)}>Kontakt</Link>

        </div>
      )}

    </header>
  );
}
