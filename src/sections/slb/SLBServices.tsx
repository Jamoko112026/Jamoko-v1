export default function SLBServices() {
  return (
    <section className="py-24 md:py-32 px-6 bg-[#0f1720] text-white">

      {/* HEADLINE */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Unsere Leistungen
        </h2>

        <p className="text-white/70 max-w-2xl mx-auto leading-relaxed">
          SL BauTec realisiert leistungsstarke Infrastrukturprojekte für öffentliche,
          gewerbliche und industrielle Auftraggeber — zuverlässig, präzise und termintreu.
        </p>
      </div>

      {/* SERVICES GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* SERVICE CARD */}
        <div className="group p-8 rounded-xl bg-white/5 border border-white/10 backdrop-blur transition hover:border-[#f28c28]/40">

          <h3 className="text-xl font-semibold mb-4 text-[#FFD08A]">
            Glasfaserausbau
          </h3>

          <ul className="text-white/75 space-y-2 text-sm leading-relaxed">
            <li>• Tiefbau & Technik für Telekomprojekte</li>
            <li>• Glasfaserprojekte für Stadtwerke</li>
            <li>• Trassenbau & Leitungsinfrastruktur</li>
          </ul>

        </div>

        {/* SERVICE CARD */}
        <div className="group p-8 rounded-xl bg-white/5 border border-white/10 backdrop-blur transition hover:border-[#f28c28]/40">

          <h3 className="text-xl font-semibold mb-4 text-[#FFD08A]">
            Straßen- & Tiefbau
          </h3>

          <ul className="text-white/75 space-y-2 text-sm leading-relaxed">
            <li>• Straßen- und Wegebau</li>
            <li>• Pflasterarbeiten aller Art</li>
            <li>• Betonflächen & Fundamentarbeiten</li>
          </ul>

        </div>

        {/* SERVICE CARD */}
        <div className="group p-8 rounded-xl bg-white/5 border border-white/10 backdrop-blur transition hover:border-[#f28c28]/40">

          <h3 className="text-xl font-semibold mb-4 text-[#FFD08A]">
            Infrastruktur & Außenanlagen
          </h3>

          <ul className="text-white/75 space-y-2 text-sm leading-relaxed">
            <li>• Entwässerungs- & Drainageleitungen</li>
            <li>• Terrassen- & Wegebau</li>
            <li>• Außenanlagen & Erschließungen</li>
          </ul>

        </div>

      </div>

    </section>
  );
}
