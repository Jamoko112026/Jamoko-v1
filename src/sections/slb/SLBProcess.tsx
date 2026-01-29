export default function SLBProcess() {
  return (
    <section className="py-24 md:py-32 px-6 bg-[#0b1220] text-white">

      {/* HEADLINE */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          So arbeiten wir
        </h2>

        <p className="text-white/70 max-w-2xl mx-auto leading-relaxed">
          Strukturierte Abläufe, klare Kommunikation und termingerechte Umsetzung –
          von der ersten Anfrage bis zur finalen Übergabe.
        </p>
      </div>

      {/* PROCESS GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* STEP */}
        <div className="p-7 rounded-xl bg-white/5 border border-white/10 backdrop-blur transition hover:border-[#f28c28]/40">

          <span className="text-[#FFD08A] font-semibold tracking-wider">
            01
          </span>

          <h3 className="text-lg font-semibold mt-3 mb-2">
            Anfrage & Beratung
          </h3>

          <p className="text-sm text-white/70 leading-relaxed">
            Projektanalyse, technische Klärung und erste Machbarkeitsbewertung.
          </p>

        </div>

        {/* STEP */}
        <div className="p-7 rounded-xl bg-white/5 border border-white/10 backdrop-blur transition hover:border-[#f28c28]/40">

          <span className="text-[#FFD08A] font-semibold tracking-wider">
            02
          </span>

          <h3 className="text-lg font-semibold mt-3 mb-2">
            Planung & Vorbereitung
          </h3>

          <p className="text-sm text-white/70 leading-relaxed">
            Terminplanung, Ressourcenkoordination und detaillierte Projektvorbereitung.
          </p>

        </div>

        {/* STEP */}
        <div className="p-7 rounded-xl bg-white/5 border border-white/10 backdrop-blur transition hover:border-[#f28c28]/40">

          <span className="text-[#FFD08A] font-semibold tracking-wider">
            03
          </span>

          <h3 className="text-lg font-semibold mt-3 mb-2">
            Umsetzung
          </h3>

          <p className="text-sm text-white/70 leading-relaxed">
            Fachgerechte Ausführung durch erfahrene Teams nach aktuellen Standards.
          </p>

        </div>

        {/* STEP */}
        <div className="p-7 rounded-xl bg-white/5 border border-white/10 backdrop-blur transition hover:border-[#f28c28]/40">

          <span className="text-[#FFD08A] font-semibold tracking-wider">
            04
          </span>

          <h3 className="text-lg font-semibold mt-3 mb-2">
            Übergabe & Dokumentation
          </h3>

          <p className="text-sm text-white/70 leading-relaxed">
            Saubere Abnahme, vollständige Dokumentation und transparente Übergabe.
          </p>

        </div>

      </div>

    </section>
  );
}
