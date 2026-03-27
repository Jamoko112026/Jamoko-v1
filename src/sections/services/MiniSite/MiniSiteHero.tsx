import heroImage from "@/assets/jamoko/hero/hero-minisite.webp";

export default function MiniSiteHero() {
  return (
    <section className="relative min-h-[82vh] overflow-hidden flex items-center">

      {/* Bild (ruhig, ohne Animation) */}
      <img
        src={heroImage}
        alt="JaMoKo MiniSite"
        loading="eager"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover scale-[1.02]"
      />

      {/* Fokus-Verlauf von links */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,24,33,0.92)_0%,rgba(0,24,33,0.75)_30%,rgba(0,24,33,0.4)_55%,rgba(0,24,33,0.1)_75%,rgba(0,24,33,0)_100%)]" />

      {/* subtiler Gold-Akzent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_50%,rgba(229,197,139,0.14),transparent_60%)]" />

      {/* leichter globaler Dark Layer */}
      <div className="absolute inset-0 bg-[#001821]/20" />

      {/* sanfter Übergang nach unten */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#001821]" />

      {/* Content */}
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20">

        <div className="max-w-xl">

          <h1 className="text-4xl md:text-6xl font-light text-[#E5C58B] leading-tight">
            Mini-Website in 7 Tagen.
          </h1>

          <p className="mt-6 text-lg text-[#D6E0E7] leading-relaxed">
            Ruhige Mini-Websites für lokale Betriebe.<br />
            Klar. Persönlich. Wirksam.
          </p>

          <button className="mt-8 px-6 py-3 rounded-full 
            bg-[#E5C58B] text-[#001821] 
            font-medium 
            transition duration-300 
            hover:opacity-90">
            Unverbindlich anfragen
          </button>

        </div>
      </div>

    </section>
  );
}