import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);
  const lastScrollY = useRef(0);
  const heroVisible = useRef(true);

  useEffect(() => {
    const hero = document.getElementById("hero");

    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        heroVisible.current = entry.isIntersecting;
        if (entry.isIntersecting) {
          setVisible(false); // im Hero → kein CTA
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(hero);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const onScroll = () => {
      const currentScroll = window.scrollY;

      if (!heroVisible.current) {
        if (currentScroll < lastScrollY.current) {
          setVisible(true); // hochscrollen → zeigen
        } else if (currentScroll > lastScrollY.current + 5) {
          setVisible(false); // runter → verstecken
        }
      }

      lastScrollY.current = currentScroll;
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`
        fixed bottom-0 left-0 right-0 z-50
        bg-[#001821]/95 backdrop-blur-md border-t border-white/10
        pb-[env(safe-area-inset-bottom)]
        transition-transform duration-300 ease-out
        md:hidden
        ${visible ? "translate-y-0" : "translate-y-full"}
      `}
    >
      <div className="max-w-md mx-auto px-4 py-3 flex items-center justify-center">
        <Link
          to="/kontakt"
          className="
            w-full text-center
            bg-[#E5C58B] text-[#001821]
            font-medium tracking-wide
            py-3 rounded-xl
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