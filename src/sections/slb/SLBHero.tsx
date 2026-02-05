import HeroImage from "../../assets/slb/hero/SLB_Hero_Main_v2.jpg";

export default function SLBHero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-[160px] md:pt-[180px] pb-44"
    >
      {/* Background Image */}
      <div
        className="
          absolute inset-0
          bg-cover bg-center
          scale-[1.04]
          brightness-[1.1]
          contrast-[1.08]
          saturate-[1.06]
        "
        style={{ backgroundImage: `url(${HeroImage})` }}
      />

      {/* Soft Dark Layer */}
      <div className="absolute inset-0 bg-black/25" />

      {/* Olive Atmosphere Layer */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-t
          from-[rgba(30,38,28,0.6)]
          via-[rgba(30,38,28,0.32)]
          to-[rgba(30,38,28,0.08)]
        "
      />

      {/* Content */}
      <div className="relative mx-auto max-w-6xl px-4 text-center">

        {/* Eyebrow */}
        <p className="mb-7 text-sm uppercase tracking-widest text-white/75">
          Straßenbau · Tiefbau · Infrastruktur
        </p>

        {/* Headline */}
        <h1
          className="
            mb-9
            text-[30px]
            leading-[1.25]
            md:text-5xl
            md:leading-tight
            font-semibold
            text-[#F2EFE6]
          "
        >
Zuverlässiger Partner{" "}
<br className="hidden md:block" />
für Tiefbau & Infrastrukturprojekte
        </h1>

        {/* Subline */}
        <p
          className="
            mx-auto
            mb-16
            max-w-3xl
            text-[15.5px]
            leading-[1.65]
            md:text-lg
            md:leading-relaxed
            text-white/85
          "
        >
          Glasfaserausbau, Straßenbau, Betonarbeiten und Entwässerung.
          Strukturierte Projektabwicklung für öffentliche Auftraggeber,
          Versorger und gewerbliche Bauprojekte im Norden.
        </p>

        {/* CTA Block */}
        <div className="flex flex-col items-center gap-6">

          <a
            href="/slb#kontakt"
            className="
              sl-btn
              px-14
              py-4
              rounded-xl
              shadow-xl
              hover:shadow-2xl
            "
          >
            Unverbindliche Projektanfrage
          </a>

          <div className="text-sm tracking-wide text-white/75">
            ✓ Antwort innerhalb 24h · ✓ Unverbindlich · ✓ Regionaler Ansprechpartner
          </div>

        </div>

        {/* Trust Line */}
        <div className="mt-16 text-sm tracking-wide text-white/70">
          Termintreu · Normgerecht · Regional im Einsatz
        </div>

      </div>
    </section>
  );
}
