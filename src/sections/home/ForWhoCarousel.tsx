import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Slide = {
  key: string;
  title: string;
  reality: string;
  impact: string;
  image: string;
  alt: string;
};

export default function ForWhoCarousel() {
  const slides: Slide[] = useMemo(
    () => [
      {
        key: "handwerk",
        title: "Handwerk & echte Betriebe",
        reality: "Gute Arbeit – aber online wirkt es nicht so.",
        impact: "Klarer Auftritt. Mehr Vertrauen. Passendere Anfragen.",
        image: "/images/carousel/handwerk.jpg",
        alt: "Ruhige Werkstatt-Szene eines Handwerksbetriebs",
      },
      {
        key: "dienstleister",
        title: "Praxis & Dienstleistung",
        reality: "Vertrauen entscheidet – noch bevor jemand anruft.",
        impact: "Ruhige Website. Klarer Eindruck. Weniger Erklärbedarf.",
        image: "/images/carousel/praxis.jpg",
        alt: "Ruhige Praxis- oder Dienstleistungs-Szene",
      },
      {
        key: "laden",
        title: "Laden, Café, Feinkost",
        reality: "Man findet euch – aber versteht euch nicht sofort.",
        impact: "Einfach sichtbar. Verständlich. Sympathisch professionell.",
        image: "/images/carousel/laden.jpg",
        alt: "Ruhige Szene in einem kleinen Laden oder Café",
      },
      {
        key: "b2b",
        title: "B2B & Unternehmen",
        reality: "Seriosität zählt – nicht Marketing-Lärm.",
        impact: "Ruhig professionell. Klar strukturiert. Verlässlich.",
        image: "/images/carousel/b2b.jpg",
        alt: "Seriöse B2B-Szene",
      },
      {
        key: "solo",
        title: "Selbständige & kleine Studios",
        reality: "Du machst viel – aber der Auftritt ist nicht klar genug.",
        impact: "Fokus, Ordnung, Ruhe. Damit es stimmig wirkt.",
        image: "/images/carousel/solo.jpg",
        alt: "Ruhige Szene eines Selbständigen",
      },
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const current = slides[index];

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);

  return (
    <section className="py-28 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Head */}
        <div className="max-w-3xl mb-10">
          <h2 className="text-3xl md:text-4xl font-light text-jamoko-gold tracking-wide">
            Für wen JaMoKo wirkt
          </h2>
          <p className="mt-4 text-jamoko-text-dim leading-relaxed">
            Nicht laut. Nicht kompliziert. Sondern klar, ruhig und vertrauenswürdig —
            für Betriebe mit echter Arbeit.
          </p>
        </div>

        {/* Layout */}
        <div className="grid lg:grid-cols-2 gap-10 items-stretch">

          {/* IMAGE CARD */}
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <AnimatePresence mode="wait">
              <motion.img
                key={current.key}
                src={current.image}
                alt={current.alt}
                className="w-full h-[360px] md:h-[460px] object-cover"
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                loading="lazy"
              />
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-t from-[#001821]/65 via-transparent to-transparent" />
          </div>

          {/* TEXT CARD */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 md:p-10 flex flex-col gap-6 h-full">

            <AnimatePresence mode="wait">
              <motion.div
                key={current.key}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              >

                <p className="text-xs text-jamoko-text-dim/70">
                  Slide {index + 1} / {slides.length}
                </p>

                <h3 className="text-xl md:text-2xl font-medium text-jamoko-gold leading-snug">
                  {current.title}
                </h3>

                <p className="text-sm text-jamoko-text-dim leading-relaxed break-words">
                  <span className="opacity-70">Realität: </span>
                  {current.reality}
                </p>

                <p className="text-sm text-jamoko-text-dim leading-relaxed break-words">
                  <span className="opacity-70">Wirkung: </span>
                  {current.impact}
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href="#kontakt"
                    className="px-5 py-2.5 rounded-xl bg-jamoko-gold text-[#001821] font-medium"
                  >
                    Unverbindlich anfragen
                  </a>

                  <a
                    href="/slb"
                    className="px-5 py-2.5 rounded-xl border border-jamoko-gold/40 text-jamoko-gold hover:bg-jamoko-gold/10 transition"
                  >
                    Beispiel ansehen
                  </a>
                </div>

              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="mt-auto flex items-center justify-between">
              <button
                onClick={prev}
                className="px-4 py-2 rounded-lg border border-white/10 text-jamoko-text-dim hover:bg-white/5 transition"
              >
                ← Zurück
              </button>

              <div className="flex gap-2">
                {slides.map((s, i) => (
                  <button
                    key={s.key}
                    onClick={() => setIndex(i)}
                    className={`h-2.5 w-2.5 rounded-full transition ${
                      i === index ? "bg-jamoko-gold" : "bg-white/20"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="px-4 py-2 rounded-lg border border-white/10 text-jamoko-text-dim hover:bg-white/5 transition"
              >
                Weiter →
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}