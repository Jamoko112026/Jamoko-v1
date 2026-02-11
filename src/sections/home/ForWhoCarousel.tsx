import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Slide = {
  key: string;
  title: string;
  reality: string;
  impact: string;
  image: string; // path/URL
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
        alt: "Seriöse B2B-Szene: Planung, Büro, Baustellenkoordination",
      },
      {
        key: "solo",
        title: "Selbständige & kleine Studios",
        reality: "Du machst viel – aber der Auftritt ist nicht klar genug.",
        impact: "Fokus, Ordnung, Ruhe. Damit es stimmig wirkt.",
        image: "/images/carousel/solo.jpg",
        alt: "Ruhige Szene am Schreibtisch eines Selbständigen",
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

        {/* Card */}
        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          {/* Image */}
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <AnimatePresence mode="wait">
              <motion.img
                key={current.key}
                src={current.image}
                alt={current.alt}
                className="w-full h-[360px] md:h-[460px] object-cover"
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.01 }}
                transition={{ duration: 0.35 }}
                loading="lazy"
              />
            </AnimatePresence>

            {/* soft overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#001821]/65 via-transparent to-transparent" />
          </div>

          {/* Text */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-7 md:p-9 flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.key}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                <p className="text-xs tracking-wide text-jamoko-text-dim/80">
                  Slide {index + 1} / {slides.length}
                </p>

                <h3 className="mt-3 text-2xl md:text-3xl font-medium text-jamoko-gold">
                  {current.title}
                </h3>

                <p className="mt-6 text-jamoko-text-dim leading-relaxed">
                  <span className="opacity-80">Realität: </span>
                  {current.reality}
                </p>

                <p className="mt-4 text-jamoko-text-dim leading-relaxed">
                  <span className="opacity-80">Wirkung: </span>
                  {current.impact}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#kontakt"
                    className="px-6 py-3 rounded-xl bg-jamoko-gold text-[#001821] font-medium shadow-lg"
                  >
                    Unverbindlich anfragen
                  </a>
                  <a
                    href="/slb"
                    className="px-6 py-3 rounded-xl border border-jamoko-gold/40 text-jamoko-gold hover:bg-jamoko-gold/10 transition"
                  >
                    Beispiel ansehen
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="mt-10 flex items-center justify-between gap-4">
              <button
                onClick={prev}
                className="px-4 py-2 rounded-lg border border-white/10 text-jamoko-text-dim hover:bg-white/5 transition"
                aria-label="Vorherige Slide"
              >
                ← Zurück
              </button>

              <div className="flex gap-2">
                {slides.map((s, i) => (
                  <button
                    key={s.key}
                    onClick={() => setIndex(i)}
                    className={`h-2.5 w-2.5 rounded-full transition ${
                      i === index ? "bg-jamoko-gold" : "bg-white/15 hover:bg-white/25"
                    }`}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="px-4 py-2 rounded-lg border border-white/10 text-jamoko-text-dim hover:bg-white/5 transition"
                aria-label="Nächste Slide"
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
