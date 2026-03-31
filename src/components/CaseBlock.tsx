export default function CaseBlock() {
  return (
    <section className="section-lg container-wide">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADLINE */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-light mb-4">
            So kann eine JaMoKo-Seite aussehen
          </h2>
          <p className="text-white/60">
            Klar, ruhig und gemacht, damit Besucher sofort verstehen, worum es geht.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* IMAGE / MOCKUP */}
          <div className="relative rounded-2xl overflow-hidden border border-white/10">
            <img
              src="/demo/physio-demo.jpg"  // 👉 später ersetzen
              alt="Beispiel Mini-Website"
              className="w-full h-full object-cover"
            />

            {/* Overlay Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(229,197,139,0.15),transparent_60%)]" />
          </div>

          {/* TEXT */}
          <div className="space-y-6">

            <div>
              <h3 className="text-xl mb-2 text-jamoko-gold">
                Beispiel: Physiotherapie Praxis
              </h3>
              <p className="text-white/60 text-sm">
                Ziel: Vertrauen aufbauen und Anfragen vereinfachen.
              </p>
            </div>

            <div className="space-y-3 text-white/70 text-sm">

              <p>
                <span className="text-white">Problem:</span> Website war unklar,
                überladen und hat kaum Anfragen gebracht.
              </p>

              <p>
                <span className="text-white">Lösung:</span> klare Struktur,
                ruhiges Design und Fokus auf eine verständliche Startseite.
              </p>

              <p>
                <span className="text-white">Ergebnis:</span> Besucher verstehen
                sofort das Angebot und finden schneller zum Kontakt.
              </p>

            </div>

            {/* CTA */}
            <div className="pt-4">
              <button className="px-6 py-3 rounded-xl bg-jamoko-gold text-black font-medium hover:opacity-90 transition">
                Eigene Vorschau sehen
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}