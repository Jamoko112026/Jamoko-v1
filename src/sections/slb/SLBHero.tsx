import HeroImage from "../../assets/slb/hero/SLB_Hero_Main_v2.jpg";

export default function SLBHero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-[170px] md:pt-[200px] pb-44"
    >
      {/* ================= Background Image ================= */}
      <div
        className="
          absolute inset-0
          bg-cover
          bg-[position:62%_center]
          scale-[1.02]
          brightness-[1.06]
          contrast-[1.10]
          saturate-[1.02]
        "
        style={{ backgroundImage: `url(${HeroImage})` }}
      />

      {/* ================= Bottom Depth Overlay ================= */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-b
          from-[rgba(18,24,30,0.10)]
          via-[rgba(18,24,30,0.28)]
          to-[rgba(18,24,30,0.60)]
        "
      />

      {/* ================= Left Balance Fade ================= */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(
            to right,
            rgba(10,14,18,0.55) 0%,
            rgba(10,14,18,0.35) 28%,
            rgba(10,14,18,0.0) 60%
          )`
        }}
      />

      {/* ================= Light Focus ================= */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(
            circle at 48% 30%,
            rgba(255,255,255,0.08),
            transparent 65%
          )`
        }}
      />

      {/* ================= Content ================= */}
      <div className="relative z-10 mx-auto max-w-6xl px-5 text-center">

        {/* Eyebrow */}
        <p className="mb-6 text-sm uppercase tracking-[0.28em] text-white/70">
          Straßenbau · Tiefbau · Infrastruktur
        </p>

        {/* Headline */}
        <h1 className="mb-8 text-[32px] md:text-5xl lg:text-6xl font-semibold leading-[1.15] tracking-tight text-white drop-shadow-[0_3px_8px_rgba(0,0,0,0.45)]">
          Zuverlässiger{" "}
          <span className="whitespace-nowrap">
            Partner <span className="mx-[0.08em]">für</span>
          </span>
          <br className="hidden md:block" />
          Tiefbau & Infrastrukturprojekte
        </h1>

        {/* Subline */}
        <p className="mx-auto mb-12 max-w-2xl text-[15.5px] md:text-lg leading-[1.7] text-white/88 drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)]">
          Glasfaserausbau, Straßenbau, Betonarbeiten und Entwässerung.
          Strukturierte Projektabwicklung für öffentliche Auftraggeber,
          Versorger und gewerbliche Bauprojekte im Norden.
        </p>

        {/* CTA */}
        <div className="flex flex-col items-center gap-5">

          <a
            href="/slb#kontakt"
            className="
              sl-btn
              px-12 py-4
              rounded-xl
              shadow-[0_14px_34px_rgba(242,140,40,0.35)]
              hover:shadow-[0_20px_48px_rgba(242,140,40,0.55)]
              transition-all duration-300
            "
          >
            Unverbindliche Projektanfrage
          </a>

          <div className="text-sm text-white/70 tracking-wide">
            ✓ Antwort innerhalb 24h · ✓ Unverbindlich · ✓ Regionaler Ansprechpartner
          </div>

        </div>

        {/* Trust Line */}
        <div className="mt-12 text-sm text-white/65 tracking-wide">
          Termintreu · Normgerecht · Regional im Einsatz
        </div>

      </div>
    </section>
  );
}
