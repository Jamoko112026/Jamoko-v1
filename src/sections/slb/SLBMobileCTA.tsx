// src/sections/slb/SLBMobileCTA.tsx
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const PHONE = "04050091310"; // Dispo
const EMAIL = "dispo@slbautec.de";

export default function SLBMobileCTA() {
  const [afterHeroVisible, setAfterHeroVisible] = useState(false);
  const [kontaktVisible, setKontaktVisible] = useState(false);

  const canShow = useMemo(() => {
    // CTA darf erst erscheinen, wenn Hero vorbei ist
    // und muss verschwinden, sobald Kontakt (oder Footer-Zone) sichtbar ist
    return afterHeroVisible && !kontaktVisible;
  }, [afterHeroVisible, kontaktVisible]);

  useEffect(() => {
    const afterHero = document.getElementById("slb-after-hero");
    const kontakt = document.getElementById("slb-kontakt");

    // Fallback: wenn Marker fehlen, nicht nerven -> CTA erst ab Scroll
    if (!afterHero || !kontakt) {
      const onScroll = () => setAfterHeroVisible((window.scrollY || 0) > 240);
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.target.id === "slb-after-hero") {
            // sobald der Marker im View ist, sind wir "nach dem Hero"
            setAfterHeroVisible(e.isIntersecting);
          }
          if (e.target.id === "slb-kontakt") {
            setKontaktVisible(e.isIntersecting);
          }
        }
      },
      {
        root: null,
        // ein bisschen früh triggern, damit es smooth wirkt
        threshold: 0.01,
        rootMargin: "0px 0px -35% 0px",
      }
    );

    io.observe(afterHero);
    io.observe(kontakt);

    return () => io.disconnect();
  }, []);

  const handlePrimary = () => {
    const el = document.getElementById("slb-kontakt");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="lg:hidden">
      <AnimatePresence>
        {canShow && (
          <motion.div
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 24, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed left-0 right-0 bottom-0 z-[60]"
          >
            <div className="mx-auto max-w-[520px] px-4 pb-[calc(env(safe-area-inset-bottom)+12px)] pt-3">
              <div className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.45)]">
                <div className="px-3 pt-3 pb-2">
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={handlePrimary}
                      className="h-12 rounded-xl font-semibold bg-[var(--sl-accent-main)] text-black active:scale-[0.99] transition"
                    >
                      Projekt anfragen
                    </button>

                    <a
                      href={`tel:${PHONE}`}
                      className="h-12 rounded-xl font-semibold border border-white/15 text-white flex items-center justify-center active:scale-[0.99] transition"
                    >
                      Anrufen
                    </a>
                  </div>

                  <div className="mt-2 flex items-center justify-between text-xs text-white/60">
                    <span>Antwort i. d. R. &lt; 24h</span>
                    <a className="underline underline-offset-4" href={`mailto:${EMAIL}`}>
                      {EMAIL}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
