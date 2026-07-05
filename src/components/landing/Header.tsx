"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";

const navItems = [
  { label: "Start", href: "/" },
  { label: "Mini-Site", href: "/mini-site" },
  { label: "Projekte", href: "/projekte" },
  { label: "Preise", href: "/preise" },
  { label: "Über JaMoKo", href: "/ueber-jamoko" },
];

function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

function MobileStickyCTA() {
  const [visible, setVisible] = useState(false);
  const lastScrollY = useRef(0);
  const heroVisible = useRef(true);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        heroVisible.current = entry.isIntersecting;
        if (entry.isIntersecting) {
          setVisible(false);
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (!heroVisible.current) {
        if (currentScrollY < lastScrollY.current) {
          setVisible(true);
        } else if (currentScrollY > lastScrollY.current + 5) {
          setVisible(false);
        }
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`
        fixed bottom-0 left-0 right-0 z-50
        border-t border-white/10 bg-[#001821]/95 backdrop-blur-md
        pb-[env(safe-area-inset-bottom)]
        transition-transform duration-300 ease-out
        md:hidden
        ${visible ? "translate-y-0" : "translate-y-full"}
      `}
    >
      <div className="mx-auto flex max-w-md items-center justify-center px-4 py-3">
        <Link
          href="/kontakt"
          className="
            w-full rounded-xl bg-[#E5C58B] py-3 text-center
            font-medium tracking-wide text-[#001821]
            shadow-[0_0_18px_rgba(229,197,139,0.35)]
            transition-all duration-300 ease-out
            active:scale-[0.98]
          "
        >
          Unverbindlich anfragen
        </Link>
      </div>
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const currentPathname = usePathname();
  const pathname = currentPathname ?? "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (pathname.startsWith("/slb")) {
    return null;
  }

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
          scrolled || open
            ? "border-white/10 bg-[#001821]/90 shadow-[0_12px_40px_rgba(0,0,0,0.25)] backdrop-blur-xl"
            : "border-transparent bg-[#001821]/35 backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-12 lg:px-20">
          <Link
            href="/"
            aria-label="JaMoKo Startseite"
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
            {navItems.map((item) => {
              const active = isActivePath(pathname, item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative py-2 transition-colors ${
                    active ? "text-white" : "text-white/55 hover:text-white"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute inset-x-0 -bottom-0.5 mx-auto h-px bg-[#E5C58B] transition-transform ${
                      active ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:block">
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 rounded-full bg-[#E5C58B] px-5 py-2.5 text-sm font-semibold text-[#001821] transition hover:-translate-y-0.5 hover:bg-[#efd49f]"
            >
              Projekt besprechen
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
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

        {open ? (
          <div
            id="mobile-navigation"
            className="border-t border-white/10 bg-[#001821]/98 px-6 pb-8 pt-5 backdrop-blur-xl md:hidden"
          >
            <nav aria-label="Mobile Navigation" className="mx-auto max-w-lg">
              <div className="flex flex-col">
                {navItems.map((item) => {
                  const active = isActivePath(pathname, item.href);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`flex items-center justify-between border-b border-white/10 py-4 text-lg ${
                        active ? "text-[#E5C58B]" : "text-white/70"
                      }`}
                    >
                      {item.label}
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  );
                })}
              </div>

              <Link
                href="/kontakt"
                className="mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-[#E5C58B] px-6 py-4 text-sm font-semibold text-[#001821]"
              >
                Projekt besprechen
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>

              <p className="mt-5 text-center text-xs text-white/35">
                Unverbindlich · Persönlich · Antwort meist innerhalb von 24
                Stunden
              </p>
            </nav>
          </div>
        ) : null}
      </header>

      <MobileStickyCTA />
    </>
  );
}
