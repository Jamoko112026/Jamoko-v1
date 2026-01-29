export default function SLBServices() {
  return (
    <section className="bg-[#0b1220] text-white py-24 px-6">

      <div className="max-w-6xl mx-auto">

        {/* Section Headline */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-semibold mb-4">
            Unsere Leistungen
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Fachgerechte Umsetzung für öffentliche Auftraggeber, Versorger und gewerbliche Projekte.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Service Card */}
          <div className="bg-[#141e2a] rounded-xl p-8 shadow-md border border-white/5">
            <h3 className="text-xl font-semibold mb-3">Glasfaser & Tiefbau</h3>
            <p className="text-white/70">
              Ausbau moderner Glasfaser-Infrastruktur, Kabeltrassen, Gräben und Fundamentarbeiten
              für Netzbetreiber und Versorger.
            </p>
          </div>

          <div className="bg-[#141e2a] rounded-xl p-8 shadow-md border border-white/5">
            <h3 className="text-xl font-semibold mb-3">Straßen- & Pflasterbau</h3>
            <p className="text-white/70">
              Pflasterflächen, Wege, Bordsteine und Verkehrsflächen – präzise Ausführung
              für langlebige Ergebnisse.
            </p>
          </div>

          <div className="bg-[#141e2a] rounded-xl p-8 shadow-md border border-white/5">
            <h3 className="text-xl font-semibold mb-3">Betonarbeiten</h3>
            <p className="text-white/70">
              Betonflächen, Fundamente und Speziallösungen für Industrie- und Außenbereiche.
            </p>
          </div>

          <div className="bg-[#141e2a] rounded-xl p-8 shadow-md border border-white/5">
            <h3 className="text-xl font-semibold mb-3">Entwässerung & Außenanlagen</h3>
            <p className="text-white/70">
              Drainagesysteme, Regenwasserführung und komplette Außenanlagen
              für funktionale Infrastruktur.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
