export default function SLBProcess() {
  return (
    <section className="sl-section py-28 px-6">

      {/* HEADLINE */}
      <div className="max-w-6xl mx-auto text-center mb-20">

        <span className="uppercase tracking-widest text-sm sl-accent block mb-3">
          Projektablauf
        </span>

        <h2 className="text-3xl md:text-4xl font-semibold mb-5">
          Klare Abläufe. Saubere Umsetzung.
        </h2>

        <p className="sl-text-muted max-w-2xl mx-auto leading-relaxed">
          Transparente Prozesse sorgen für Planungssicherheit, Termintreue
          und eine reibungslose Projektdurchführung.
        </p>

      </div>

      {/* PROCESS GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* STEP */}
        <div className="sl-card">

          <span className="sl-accent font-semibold tracking-widest text-sm">
            SCHRITT 01
          </span>

          <h3 className="text-lg font-semibold mt-4 mb-3">
            Anfrage & Projektklärung
          </h3>

          <p className="sl-text-muted text-sm leading-relaxed">
            Analyse der Anforderungen, technische Abstimmung
            und realistische Einschätzung des Projektumfangs.
          </p>

        </div>

        {/* STEP */}
        <div className="sl-card">

          <span className="sl-accent font-semibold tracking-widest text-sm">
            SCHRITT 02
          </span>

          <h3 className="text-lg font-semibold mt-4 mb-3">
            Planung & Vorbereitung
          </h3>

          <p className="sl-text-muted text-sm leading-relaxed">
            Einsatzplanung, Materialdisposition und strukturierte
            Vorbereitung für einen reibungslosen Ablauf.
          </p>

        </div>

        {/* STEP */}
        <div className="sl-card">

          <span className="sl-accent font-semibold tracking-widest text-sm">
            SCHRITT 03
          </span>

          <h3 className="text-lg font-semibold mt-4 mb-3">
            Fachgerechte Umsetzung
          </h3>

          <p className="sl-text-muted text-sm leading-relaxed">
            Umsetzung durch erfahrene Teams unter Einhaltung
            aller technischen und sicherheitsrelevanten Standards.
          </p>

        </div>

        {/* STEP */}
        <div className="sl-card">

          <span className="sl-accent font-semibold tracking-widest text-sm">
            SCHRITT 04
          </span>

          <h3 className="text-lg font-semibold mt-4 mb-3">
            Übergabe & Dokumentation
          </h3>

          <p className="sl-text-muted text-sm leading-relaxed">
            Saubere Abnahme, vollständige Dokumentation
            und transparente Projektübergabe.
          </p>

        </div>

      </div>

      {/* TRUST STRIP */}
      <div className="mt-16 text-center text-sm sl-text-muted tracking-wide">
        ✓ Planungssicherheit · ✓ Saubere Prozesse · ✓ Termintreue Umsetzung
      </div>

    </section>
  );
}
