import HeroImage from "../../assets/slb/hero/SLB_Hero_Main_v2.jpg";

export default function SLBHero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-[200px] md:pt-[220px] pb-44"
    >
      {/* ================= Background Image ================= */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{
          backgroundImage: `url(${HeroImage})`,
          transform: "scale(1.02)",
          filter: "brightness(1.05) contrast(1.08) saturate(1.02)",
        }}
      />

      {/* ================= Dark Depth Overlay ================= */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[rgba(12,18,24,0.15)] via-[rgba(12,18,24,0.35)] to-[rgba(12,18,24,0.65)]" />

      {/* ================= Left Balance Fade ================= */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(8,12,16,0.55) 0%, rgba(8,12,16,0.28) 32%, rgba(8,12,16,0.0) 60%)",
        }}
      />

      {/* ================= Light Focus ================= */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 28%, rgba(255,255,255,0.08), transparent 65%)",
        }}
      />

      {/* ================= Content ================= */}
      <div className="relative z-10 mx-auto max-w-6xl px-5 text-center">

        {/* Eyebrow */}
        <p className="mb-6 text-xs md:text-sm uppercase tracking-[0.28em] text-white/70">
          Straßenbau · Tiefbau · Infrastruktur
        </p>

        {/* Headline */}
        <h1 className="mb-8 text-[30px] md:text-5xl lg:text-6xl font-semibold leading-[1.12] tracking-tight text-white drop-shadow-[0_3px_10px_rgba(0,0,0,0.45)]">
          Zuverlässiger Partner für
          <br className="hidden md:block" />
          Tiefbau & Infrastrukturprojekte
        </h1>

        {/* Subline */}
        <p className="mx-auto mb-12 max-w-2xl text-[15px] md:text-lg leading-[1.7] text-white/85 drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)]">
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
              hover:shadow-[0_22px_48px_rgba(242,140,40,0.55)]
              transition-all duration-300
            "
          >
            Unverbindliche Projektanfrage
          </a>

          <div className="text-sm text-white/70">
            ✓ Antwort innerhalb 24h · ✓ Unverbindlich · ✓ Regionaler Ansprechpartner
          </div>
        </div>

        {/* Trust Line */}
        <div className="mt-12 text-sm text-white/60">
          Termintreu · Normgerecht · Regional im Einsatz
        </div>
      </div>
    </section>
  );
}
