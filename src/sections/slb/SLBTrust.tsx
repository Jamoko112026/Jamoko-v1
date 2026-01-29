export default function SLBTrust() {
  return (
    <section className="bg-[#0f1720] text-white py-24 px-6">

      <div className="max-w-6xl mx-auto">

        {/* Headline */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-semibold mb-4">
            Warum SL BauTec
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Zuverlässiger Partner für Infrastrukturprojekte im Großraum Hamburg & Schleswig-Holstein.
          </p>
        </div>

        {/* Trust Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Trust Card */}
          <div className="bg-[#141e2a] rounded-xl p-8 border border-white/5">
            <h3 className="text-lg font-semibold mb-3">Erfahrung & Fachkompetenz</h3>
            <p className="text-white/70">
              Eingespieltes Team mit Erfahrung im Straßenbau, Tiefbau und Glasfaserausbau
              für anspruchsvolle Infrastrukturprojekte.
            </p>
          </div>

          <div className="bg-[#141e2a] rounded-xl p-8 border border-white/5">
            <h3 className="text-lg font-semibold mb-3">Großprojekt-Erfahrung</h3>
            <p className="text-white/70">
              Umsetzung von Projekten für Netzbetreiber und kommunale Auftraggeber
              mit hohen Qualitäts- und Terminanforderungen.
            </p>
          </div>

          <div className="bg-[#141e2a] rounded-xl p-8 border border-white/5">
            <h3 className="text-lg font-semibold mb-3">Regional & Einsatzbereit</h3>
            <p className="text-white/70">
              Aktiv im Großraum Hamburg und Schleswig-Holstein –
              kurze Wege, schnelle Reaktionszeiten, direkte Kommunikation.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
