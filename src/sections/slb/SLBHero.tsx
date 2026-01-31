import HeroImage from "../../assets/slb/hero/SLB_Hero_Main_v2.jpg";

export default function SLBHero() {
  return (
    <section className="relative px-6 pt-40 pb-36 overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div
        className="
          absolute inset-0
          bg-cover bg-center
          scale-[1.04]
          brightness-[0.9]
          contrast-[1.05]
        "
        style={{ backgroundImage: `url(${HeroImage})` }}
      />

      {/* DARK BASE OVERLAY */}
      <div className="absolute inset-0 bg-black/45" />

      {/* OLIVE INDUSTRIAL DEPTH */}
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(30,38,28,0.75)] via-[rgba(30,38,28,0.35)] to-transparent" />

      {/* CONTENT */}
      <div className="relative max-w-6xl mx-auto text-center">

        {/* EYEBROW */}
        <p className="uppercase tracking-widest text-sm text-white/70 mb-5">
          Straßenbau · Tiefbau · Infrastruktur
        </p>

        {/* HEADLINE */}
        <h1 className="text-3xl md:text-5xl font-semibold leading-tight mb-6 text-[#E8E3D8]">
          Zuverlässiger Partner
          <br className="hidden md:block" />
          für Tiefbau & Infrastrukturprojekte
        </h1>

        {/* SUBLINE */}
        <p className="text-base md:text-lg text-white/80 max-w-3xl mx-auto mb-12 leading-relaxed">
          Glasfaserausbau, Straßenbau, Betonarbeiten und Entwässerung.
          Strukturierte Projektabwicklung für öffentliche Auftraggeber,
          Versorger und gewerbliche Bauprojekte im Norden.
        </p>

        {/* CTA */}
<div className="flex flex-col items-center gap-4">

  <a
    href="#kontakt"
    className="
      sl-btn
      px-12 py-4
      rounded-lg
      shadow-lg
      hover:shadow-xl
    "
  >
    Unverbindliche Projektanfrage
  </a>

  {/* Trust Line */}
  <div className="text-sm text-white/70 tracking-wide">
    ✓ Antwort innerhalb 24h · ✓ Unverbindlich · ✓ Regionaler Ansprechpartner
  </div>

</div>


        {/* TRUST LINE */}
        <div className="mt-10 text-sm text-white/65 tracking-wide">
          Termintreu · Normgerecht · Regional im Einsatz
        </div>

      </div>
    </section>
  );
}
