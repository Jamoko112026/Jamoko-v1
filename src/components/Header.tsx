import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const navigation = [
  { label: "Start", to: "/" },
  { label: "Mini-Site", to: "/minisite" },
  { label: "Preise", to: "/pricing" },
  { label: "Über Jamoko", to: "/about" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (location.pathname.startsWith("/slb")) return null;

  const navClass = ({ isActive }: { isActive: boolean }) =>
    `relative py-2 transition-colors ${
      isActive ? "text-white" : "text-white/55 hover:text-white"
    }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled || open
          ? "border-white/10 bg-[#001821]/90 shadow-[0_12px_40px_rgba(0,0,0,0.25)] backdrop-blur-xl"
          : "border-transparent bg-[#001821]/35 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-12 lg:px-20">
        <Link
          to="/"
          aria-label="Jamoko Startseite"
          className="group flex items-center gap-3"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#E5C58B]/25 bg-[#E5C58B]/5 text-sm font-semibold text-[#E5C58B] transition group-hover:border-[#E5C58B]/45">
            J
          </span>
          <span>
            <span className="block text-sm font-medium tracking-[0.08em] text-white">
              JaMoKo
            </span>
            <span className="block text-[9px] uppercase tracking-[0.2em] text-white/35">
              Webdesign Hamburg
            </span>
          </span>
        </Link>

        <nav
          aria-label="Hauptnavigation"
          className="hidden items-center gap-7 text-sm md:flex"
        >
          {navigation.map((item) => (
            <NavLink key={item.to} to={item.to} className={navClass} end={item.to === "/"}>
              {({ isActive }) => (
                <>
                  {item.label}
                  <span
                    className={`absolute inset-x-0 -bottom-0.5 mx-auto h-px bg-[#E5C58B] transition-transform ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            to="/kontakt"
            className="inline-flex items-center gap-2 rounded-full bg-[#E5C58B] px-5 py-2.5 text-sm font-semibold text-[#001821] transition hover:-translate-y-0.5 hover:bg-[#efd49f]"
          >
            Projekt besprechen
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white transition hover:border-white/25 hover:bg-white/5 md:hidden"
          aria-label={open ? "Navigation schließen" : "Navigation öffnen"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div
          id="mobile-navigation"
          className="border-t border-white/10 bg-[#001821]/98 px-6 pb-8 pt-5 backdrop-blur-xl md:hidden"
        >
          <nav aria-label="Mobile Navigation" className="mx-auto max-w-lg">
            <div className="flex flex-col">
              {navigation.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    `flex items-center justify-between border-b border-white/10 py-4 text-lg ${
                      isActive ? "text-[#E5C58B]" : "text-white/70"
                    }`
                  }
                >
                  {item.label}
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </NavLink>
              ))}
            </div>

            <Link
              to="/kontakt"
              className="mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-[#E5C58B] px-6 py-4 text-sm font-semibold text-[#001821]"
            >
              Projekt besprechen
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>

            <p className="mt-5 text-center text-xs text-white/35">
              Unverbindlich · Persönlich · Antwort meist innerhalb von 24 Stunden
            </p>
          </nav>
        </div>
      )}
    </header>
  );
}
