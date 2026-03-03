// src/components/SpartenCarousel.tsx

import { useState } from "react";

import Bau from "../assets/sparten/bau-b2b.jpg";
import Gastro from "../assets/sparten/gastro-feinkost.jpg";
import Handwerk from "../assets/sparten/handwerk.jpg";
import Praxis from "../assets/sparten/praxis-studio.jpg";
import Selbst from "../assets/sparten/selbststaendige-studio.jpg";

const slides = [
  {
    image: Bau,
    title: "Bau & Infrastruktur",
    text: "Struktur. Vertrauen. Sichtbarkeit.",
    link: "/bau"
  },
  {
    image: Handwerk,
    title: "Handwerk & Fachbetriebe",
    text: "Substanz. Klarheit. Wirkung.",
    link: "/handwerk"
  },
  {
    image: Praxis,
    title: "Praxis & Studios",
    text: "Seriös. Klar. Persönlich.",
    link: "/praxis"
  },
  {
    image: Gastro,
    title: "Gastronomie & Feinkost",
    text: "Stimmung. Charakter. Sichtbarkeit.",
    link: "/gastro"
  },
  {
    image: Selbst,
    title: "Selbstständige & Dienstleister",
    text: "Klar. Persönlich. Wirksam.",
    link: "/selbststaendige"
  },
];

export default function SpartenCarousel() {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const next = () => {
    setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const slide = slides[index];

  return (
    <section className="relative w-full max-w-6xl mx-auto mt-24 px-6">

      {/* ===== Heading ===== */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-medium text-white">
          Für wen wir bauen
        </h2>
        <p className="text-white/70 mt-3">
          Ruhige, klare Mini-Websites für echte Betriebe.
        </p>
      </div>

      {/* ===== Slide Container ===== */}
      <div className="relative h-[440px] rounded-2xl overflow-hidden shadow-xl">

        {/* Background */}
        <img
          src={slide.image}
          alt={slide.title}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#001821]/85 via-[#001821]/40 to-transparent" />

        {/* Content */}
        <div className="absolute bottom-12 left-10 right-10 text-white max-w-lg">
          <h3 className="text-2xl md:text-3xl font-medium mb-3">
            {slide.title}
          </h3>

          <p className="text-white/80 mb-6">
            {slide.text}
          </p>

          {/* CTA */}
          <a
            href={slide.link}
            className="inline-flex items-center text-jamoko-gold hover:opacity-80 transition"
          >
            Mehr erfahren →
          </a>
        </div>

        {/* ===== Navigation ===== */}
        <button
          onClick={prev}
          className="absolute left-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white text-3xl transition"
          aria-label="Vorheriger Bereich"
        >
          ‹
        </button>

        <button
          onClick={next}
          className="absolute right-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white text-3xl transition"
          aria-label="Nächster Bereich"
        >
          ›
        </button>

        {/* ===== Indicators ===== */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index
                  ? "w-8 bg-jamoko-gold"
                  : "w-2 bg-white/30"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}