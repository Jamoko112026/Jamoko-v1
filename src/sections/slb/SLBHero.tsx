import HeroImage from "../../assets/slb/hero/SLB_Hero_Main_v2.jpg";

export default function SLBHero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-[140px] md:pt-[160px] pb-36"
    >

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-[1.04]"
        style={{ backgroundImage: `url(${HeroImage})` }}
      />

      {/* Base Dark Layer */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Olive Industrial Depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(30,38,28,0.75)] via-[rgba(30,38,28,0.45)] to-[rgba(30,38,28,0.15)]" />

      {/* Content Wrapper */}
      <div className="relative mx-auto max-w-6xl text-center">

        {/* Eyebrow */}
        <p className="mb-5 text-sm uppercase tracking-widest text-white/70">
          Straßenbau · Tiefbau · Infrastruktur
        </p>

        {/* Headline */}
        <h1 className="mb-6 text-3xl md:text-5xl font-semibold leading-tight text-[#E8E3D8]">
          Zuverlässiger Partner
          <br className="hidden md:block" />
          für Tiefbau & Infrastrukturprojekte
        </h1>

        {/* Subline */}
        <p className="mx-auto mb-12 max-w-3xl text-base md:text-lg leading-relaxed text-white/80">
          Glasfaserausbau, Straßenbau, Betonarbeiten und Entwässerung.
          Strukturierte Projektabwicklung für öffentliche Auftraggeber,
          Versorger und gewerbliche Bauprojekte im Norden.
        </p>

        {/* CTA Area */}
        <div className="flex flex-col items-center gap-4">

          <a
            href="/slb#kontakt"
            className="sl-btn px-12 py-4 rounded-xl shadow-lg hover:shadow-xl"
          >
            Unverbindliche Projektanfrage
          </a>

          <div className="text-sm tracking-wide text-white/70">
            ✓ Antwort innerhalb 24h · ✓ Unverbindlich · ✓ Regionaler Ansprechpartner
          </div>

        </div>

        {/* Trust Footer Line */}
        <div className="mt-10 text-sm tracking-wide text-white/65">
          Termintreu · Normgerecht · Regional im Einsatz
        </div>

      </div>
    </section>
  );
}
