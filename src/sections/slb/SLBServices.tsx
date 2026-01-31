export default function SLBServices() {
  return (
    <section className="sl-section py-28 px-6">

      <div className="max-w-6xl mx-auto">

        {/* HEADLINE */}
        <div className="text-center mb-20">

          <span className="uppercase tracking-widest text-sm sl-accent block mb-3">
            Leistungsportfolio
          </span>

          <h2 className="text-3xl md:text-4xl font-semibold mb-5">
            Unsere Kernleistungen im Tiefbau
          </h2>

          <p className="sl-text-muted max-w-2xl mx-auto leading-relaxed">
            Zuverlässige Ausführung für Infrastrukturprojekte – technisch sauber,
            termintreu und nach aktuellen Standards.
          </p>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* CARD */}
          <div className="sl-card group">

            <h3 className="text-xl font-semibold mb-3">
              Glasfaser & Leitungstiefbau
            </h3>

            <p className="sl-text-muted leading-relaxed">
              Trassenbau, Kabelverlegung, Hausanschlüsse und Netz-Infrastruktur
              für Telekommunikations- und Versorgungsprojekte.
            </p>

          </div>

          <div className="sl-card group">

            <h3 className="text-xl font-semibold mb-3">
              Straßen- & Pflasterbau
            </h3>

            <p className="sl-text-muted leading-relaxed">
              Verkehrsflächen, Gehwege, Bordsteine und belastbare Pflasterlösungen
              für öffentliche und gewerbliche Auftraggeber.
            </p>

          </div>

          <div className="sl-card group">

            <h3 className="text-xl font-semibold mb-3">
              Beton- & Fundamentarbeiten
            </h3>

            <p className="sl-text-muted leading-relaxed">
              Bodenplatten, Fundamente und konstruktive Betonarbeiten
              für Industrie-, Außen- und Spezialprojekte.
            </p>

          </div>

          <div className="sl-card group">

            <h3 className="text-xl font-semibold mb-3">
              Entwässerung & Außenanlagen
            </h3>

            <p className="sl-text-muted leading-relaxed">
              Drainagesysteme, Regenwasserführung und komplette Außenanlagen
              für funktionale und langlebige Infrastruktur.
            </p>

          </div>

        </div>

        {/* MICRO TRUST LINE */}
        <div className="mt-16 text-center text-sm sl-text-muted tracking-wide">
          ✓ Fachpersonal · ✓ Maschinenpark · ✓ Termintreue Ausführung
        </div>

      </div>

    </section>
  );
}
