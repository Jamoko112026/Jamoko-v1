"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";
import { ThemeControl } from "./ThemeControl";
import { Brand } from "./Brand";
import styles from "./Chrome.module.css";

const navItems = [
  { label: "Start", href: "/" },
  { label: "Website", href: "/mini-site" },
  { label: "Digitalbegleitung", href: "/#digitalbegleitung" },
  { label: "Projekte", href: "/projekte" },
  { label: "Preise", href: "/preise" },
  { label: "Über JaMoKo", href: "/ueber-jamoko" },
];

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function MobileStickyCTA({ menuOpen }: { menuOpen: boolean }) {
  const [visible, setVisible] = useState(false);
  const lastScrollY = useRef(0);
  const heroVisible = useRef(true);
  const pathname = usePathname();
  const isDigitalStart = pathname === "/start";

  useEffect(() => {
    setVisible(false);
    heroVisible.current = true;
    lastScrollY.current = window.scrollY;
    const hero = document.getElementById("hero");
    if (!hero || menuOpen) return;
    const mobile = window.matchMedia("(max-width: 767px)");
    const protectedAreas = new Map<Element, boolean>();
    const areaObserver = new IntersectionObserver(entries => {
      for (const entry of entries) protectedAreas.set(entry.target, entry.isIntersecting);
      if (Array.from(protectedAreas.values()).some(Boolean)) setVisible(false);
    }, { rootMargin: "0px 0px 80px 0px" });
    document.querySelectorAll("main form, footer").forEach(area => areaObserver.observe(area));
    const observer = new IntersectionObserver(([entry]) => {
      heroVisible.current = entry.isIntersecting;
      if (entry.isIntersecting) setVisible(false);
    }, { threshold: 0.4 });
    observer.observe(hero);
    const hide = () => { setVisible(false); lastScrollY.current = window.scrollY; };
    const isEditing = () => document.activeElement?.matches("input, textarea, select, [contenteditable=true]");
    const handleFocus = () => { if (isEditing()) setVisible(false); };
    const handleScroll = () => {
      const y = window.scrollY;
      setVisible(mobile.matches && !heroVisible.current && !isEditing()
        && !Array.from(protectedAreas.values()).some(Boolean) && y < lastScrollY.current);
      lastScrollY.current = y;
    };
    mobile.addEventListener("change", hide);
    document.addEventListener("focusin", handleFocus);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      observer.disconnect();
      areaObserver.disconnect();
      mobile.removeEventListener("change", hide);
      document.removeEventListener("focusin", handleFocus);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname, menuOpen]);

  return <div className={`${styles.sticky} ${visible ? styles.stickyVisible : ""}`} aria-hidden={!visible}>
    <Link href={isDigitalStart ? "/start#situation" : "/kontakt"} tabIndex={visible ? 0 : -1}>
      {isDigitalStart ? "Situation schildern" : "Kostenlos kennenlernen"}<ArrowRight size={18} aria-hidden="true" />
    </Link>
  </div>;
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const pathname = usePathname() ?? "/";
  const isDigitalStart = pathname === "/start";
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const firstLink = headerRef.current?.querySelector<HTMLAnchorElement>("#mobile-navigation a");
    firstLink?.focus();
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpen(false); toggleRef.current?.focus(); }
      if (event.key !== "Tab") return;
      const items = Array.from(headerRef.current?.querySelectorAll<HTMLElement>("a, button, summary, input") ?? []).filter(el => el.getClientRects().length > 0);
      const first = items[0], last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
    };
    const media = window.matchMedia("(min-width: 1280px)");
    const closeOnDesktop = () => { if (media.matches) setOpen(false); };
    media.addEventListener("change", closeOnDesktop);
    document.addEventListener("keydown", handleKey);
    return () => { document.body.style.overflow = previousOverflow; document.removeEventListener("keydown", handleKey); media.removeEventListener("change", closeOnDesktop); };
  }, [open]);

  if (pathname.startsWith("/slb")) return null;
  const cta = isDigitalStart ? "Situation schildern" : "Kostenlos kennenlernen";
  const href = isDigitalStart ? "#situation" : "/kontakt";

  return <>
    <header ref={headerRef} className={styles.header} data-compact={compact}>
      <div className={styles.headerInner}>
        <Brand subtitle={isDigitalStart ? "Digitale Orientierung" : undefined} />
        <nav aria-label="Hauptnavigation" className={styles.desktopNav}>
          {navItems.map(item => <Link key={item.href} href={item.href} aria-current={isActivePath(pathname,item.href) ? "page" : undefined}>{item.label}</Link>)}
        </nav>
        <Link href={href} className={styles.headerCTA}>{cta}<ArrowRight size={16} aria-hidden="true" /></Link>
        <ThemeControl />
        <details className={styles.mobileMenu} open={open} onToggle={event => setOpen(event.currentTarget.open)}>
          <summary ref={toggleRef} className={styles.menuButton} aria-label={open ? "Navigation schließen" : "Navigation öffnen"} aria-controls="mobile-navigation">
            <Menu size={23} aria-hidden="true" className={styles.menuOpenIcon} />
            <X size={23} aria-hidden="true" className={styles.menuCloseIcon} />
          </summary>
          <nav id="mobile-navigation" aria-label="Mobile Navigation" className={styles.mobileNav}>
            {navItems.map((item,index) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} aria-current={isActivePath(pathname,item.href) ? "page" : undefined}><span className={styles.navNumber} aria-hidden="true">0{index+1}</span>{item.label}<ArrowRight size={19} aria-hidden="true" /></Link>)}
            <Link href={href} onClick={() => setOpen(false)} className={styles.mobileCTA}>{cta}<ArrowRight size={18} aria-hidden="true" /></Link>
            <p>{isDigitalStart ? "Unverbindlich · persönlich · ohne Vorbereitung" : "Unverbindlich · Persönlich · Antwort meist innerhalb von 24 Stunden"}</p>
          </nav>
        </details>
      </div>
    </header>
    <MobileStickyCTA key={pathname} menuOpen={open} />
  </>;
}
