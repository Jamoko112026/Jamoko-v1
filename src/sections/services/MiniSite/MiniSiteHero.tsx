import heroImage from "@/assets/jamoko/hero/hero-minisite.webp";

export default function MiniSiteHero() {
  const handleScroll = () => {
    document.getElementById("kontakt")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[82vh] flex items-center overflow-hidden"
    >

      {/* Background */}
      <img
        src={heroImage}
        alt="JaMoKo MiniSite"
        loading="eager"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover scale-[1.02]
                   brightness-[0.78] contrast-[1.06] saturate-[0.9]"
      />

      {/* Focus Gradient */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,
        rgba(0,24,33,0.92)_0%,
        rgba(0,24,33,0.82)_28%,
        rgba(0,24,33,0.55)_52%,
        rgba(0,24,33,0.2)_72%,
        rgba(0,24,33,0)_100%)]"
      />

      {/* Gold Glow (ruhiger gesetzt) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_38%,
        rgba(229,197,139,0.14),
        transparent_60%)]"
      />

      {/* Soft global overlay */}
      <div className="absolute inset-0 bg-[#001821]/25" />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 
        bg-gradient-to-b from-transparent to-[#001821]"
      />

      {/* Content */}
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20">
        <div className="max-w-xl">

          <h1 className="text-4xl md:text-6xl font-light leading-[1.1] text-[#E5C58B]/90 mb-2">
            Viele gute Betriebe werden nicht gesehen.
          </h1>

          <p className="mt-4 text-lg leading-relaxed text-[#D6E0E7]">
            Ich mache sichtbar,<br />
            was eigentlich schon gut ist.
          </p>

          {/* CTA */}
          <button
            onClick={handleScroll}
            className="mt-8 px-6 py-3 rounded-full
                       bg-[#E5C58B] text-[#001821]
                       font-medium tracking-wide
                       transition duration-300 ease-out
                       hover:opacity-90 
                       hover:scale-[1.02]"
          >
            Unverbindlich anfragen
          </button>

          {/* Trust */}
          <p className="mt-4 text-sm text-white/50">
            100% unverbindlich · Antwort innerhalb von 24h
          </p>

        </div>
      </div>

    </section>
  );
}