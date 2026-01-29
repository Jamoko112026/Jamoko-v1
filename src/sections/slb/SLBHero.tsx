import HeroImage from "../../assets/slb/hero/SLB_Hero_Main_v2.jpg";

export default function SLBHero() {
  return (
    <section className="relative text-white px-5 pt-16 md:pt-28 pb-20 md:pb-24 overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-[1.02]"
        style={{ backgroundImage: `url(${HeroImage})` }}
      />

      {/* Premium Business Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f1720]/70 via-[#0f1720]/78 to-[#0f1720]/88" />

      {/* Content */}
      <div className="relative max-w-6xl mx-auto text-center">

        {/* Headline */}
        <h1 className="text-[26px] leading-snug md:text-5xl md:leading-tight tracking-tight font-semibold mb-5">
          Straßen- und Tiefbau<br className="hidden md:block" />
          für den Großraum Hamburg & Schleswig-Holstein
        </h1>

        {/* Subline */}
        <p className="text-[15px] leading-relaxed md:text-xl text-white/85 max-w-3xl mx-auto mb-8">
          Glasfaser, Pflasterbau, Betonarbeiten und Entwässerung – zuverlässig umgesetzt
          für öffentliche und gewerbliche Auftraggeber.
        </p>

        {/* CTA */}
        <div className="flex justify-center">
          <a
            href="#kontakt"
            className="
              bg-[#f2b705]
              text-black
              font-medium
              px-8 py-3.5
              md:px-9 md:py-4
              rounded-md
              shadow-md
              hover:bg-[#ffd24a]
              hover:shadow-lg
              transition
            "
          >
            Projekt anfragen
          </a>
        </div>

        {/* Trust Line */}
        <div className="mt-6 text-xs md:text-sm text-white/70">
          ✔ Termintreu · ✔ Fachgerecht · ✔ Regional im Einsatz
        </div>

      </div>
    </section>
  );
}
