export default function SLBTrustExtended() {
  return (
    <section className="px-6 py-28">
      <div className="mx-auto max-w-6xl">

        {/* TITLE */}
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-14">
          Qualifikation & Referenzen
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* LEFT – QUALIFIKATION */}
          <div className="space-y-5 text-white/80 leading-relaxed max-w-xl">
            <p>
              Die SL BauTec GmbH steht für zuverlässige Bauausführung,
              strukturierte Projektabwicklung und hohe Qualitätsstandards
              im Bereich Tiefbau und Glasfaserinfrastruktur.
            </p>

            <ul className="space-y-2 list-disc list-inside text-white/70">
              <li>Erfahrung in großvolumigen Infrastrukturprojekten</li>
              <li>Qualifiziertes Fachpersonal und eingespielte Abläufe</li>
              <li>Arbeiten nach aktuellen technischen Standards</li>
              <li>Sicherheits- und Qualitätsbewusstsein im Baustellenbetrieb</li>
            </ul>
          </div>

          {/* RIGHT – REFERENZEN / LOGOS */}
          <div className="grid grid-cols-2 gap-8 items-center">

            {/* Logo Slot */}
            <div className="h-16 flex items-center justify-center opacity-70 hover:opacity-100 transition">
              <span className="text-white/50 text-sm">Telekom Projekt</span>
            </div>

            <div className="h-16 flex items-center justify-center opacity-70 hover:opacity-100 transition">
              <span className="text-white/50 text-sm">Stadtwerke Infrastruktur</span>
            </div>

            <div className="h-16 flex items-center justify-center opacity-70 hover:opacity-100 transition">
              <span className="text-white/50 text-sm">Glasfaser Ausbau</span>
            </div>

            <div className="h-16 flex items-center justify-center opacity-70 hover:opacity-100 transition">
              <span className="text-white/50 text-sm">Referenz Projekt</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
