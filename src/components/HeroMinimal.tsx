export default function HeroMinimal() {
  return (
    <section className="relative min-h-[70svh] md:min-h-[85vh] pt-24 flex items-center justify-center text-center px-5 sm:px-6 overflow-hidden bg-[#001821]">

      {/* GOLD GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(229,197,139,0.22),transparent_60%)]" />

      {/* TIEFE */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,24,33,0.6)_100%)]" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-2xl mx-auto">

        {/* HEADLINE */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-light leading-tight tracking-tight mb-5 text-jamoko-gold">
          Ruhige Mini-Websites,
          <br className="hidden sm:block" />
          die Anfragen bringen.
        </h1>

        {/* SUBLINE */}
        <p className="text-base sm:text-lg md:text-xl text-white/70 mb-8 max-w-xl mx-auto leading-relaxed">
          Für Praxen, Dienstleister und Handwerk –
          klar aufgebaut, schnell online und gemacht,
          damit Kunden dich sofort verstehen.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-8">

          <button className="w-full sm:w-auto px-6 py-4 rounded-xl bg-jamoko-gold text-black font-medium transition hover:opacity-90 active:scale-[0.98]">
            Kostenfreie Vorschau sehen
          </button>

          <button className="w-full sm:w-auto px-6 py-4 rounded-xl border border-white/20 text-white hover:bg-white/5 transition active:scale-[0.98]">
            Beispiele ansehen
          </button>

        </div>

      </div>
    </section>
  )
}