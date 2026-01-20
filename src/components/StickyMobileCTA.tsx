import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(true);
  let lastScrollY = window.scrollY;

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY < lastScrollY) {
        setVisible(true);
      } else {
        setVisible(false);
      }
      lastScrollY = window.scrollY;
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
            bg-jamoko-gold text-[#001821]
            font-medium
            py-3 rounded-xl
            shadow-[0_0_18px_rgba(229,197,139,0.35)]
            hover:shadow-[0_0_28px_rgba(229,197,139,0.55)]
            transition-all duration-300 ease-out
            animate-pulse-subtle
          "
        >
          Unverbindlich anfragen
        </Link>
      </div>
    </div>
  );
}
