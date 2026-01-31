export default function SLBTrust() {
  return (
    <section className="sl-section py-24 px-6">

      {/* HEADLINE */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Warum SL Bautec
        </h2>

        <p className="sl-text-muted max-w-2xl mx-auto leading-relaxed">
          Erfahrung, Zuverlässigkeit und professionelle Umsetzung
          für öffentliche Auftraggeber und Unternehmen.
        </p>
      </div>

      {/* TRUST GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* TRUST CARD */}
        <div className="sl-card text-center">

          <h3 className="text-lg font-semibold mb-3">
            Termintreue
          </h3>

          <p className="sl-text-muted text-sm leading-relaxed">
            Verlässliche Planung und pünktliche Umsetzung –
            auch bei komplexen Infrastrukturprojekten.
          </p>

        </div>

        {/* TRUST CARD */}
        <div className="sl-card text-center">

          <h3 className="text-lg font-semibold mb-3">
            Fachkompetenz
          </h3>

          <p className="sl-text-muted text-sm leading-relaxed">
            Erfahrene Teams, moderne Technik und Arbeiten
            nach aktuellen Normen und Standards.
          </p>

        </div>

        {/* TRUST CARD */}
        <div className="sl-card text-center">

          <h3 className="text-lg font-semibold mb-3">
            Regionale Stärke
          </h3>

          <p className="sl-text-muted text-sm leading-relaxed">
            Einsatzgebiet Hamburg & Schleswig-Holstein –
            kurze Wege, schnelle Reaktionszeiten.
          </p>

        </div>

      </div>

    </section>
  );
}
