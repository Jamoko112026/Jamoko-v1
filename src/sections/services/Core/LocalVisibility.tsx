import CalmEnergyCard from "../../../components/CalmEnergyCard";

export default function LocalVisibility() {
  return (
    <section className="py-32 px-6 bg-[#001821] text-jamoko-text text-center">
      
      <h2 className="text-5xl font-semibold text-jamoko-gold mb-8">
        Digitale Sichtbarkeit – ruhig, klar, lokal
      </h2>

      <p className="text-jamoko-text-dim max-w-3xl mx-auto text-lg leading-relaxed mb-20">
        Ich bringe dich dorthin, wo Menschen nach dir suchen.  
        Mit Profilen, Bewertungen und digitaler Präsenz, die Vertrauen schafft.
      </p>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">

        {/* Karte 1 */}
        <CalmEnergyCard>
          <h3 className="text-2xl font-semibold text-jamoko-gold mb-4">
            Google My Business
          </h3>
          <p className="text-jamoko-text-dim leading-relaxed">
            Optimierte Profile, Standortpflege, Bilder & Bewertungen – 
            für einen professionellen ersten Eindruck auf Google.
          </p>
        </CalmEnergyCard>

        {/* Karte 2 */}
        <CalmEnergyCard>
          <h3 className="text-2xl font-semibold text-jamoko-gold mb-4">
            Lokale SEO
          </h3>
          <p className="text-jamoko-text-dim leading-relaxed">
            Gezielte Keyword-Strategien und sichtbare Map-Platzierungen, 
            damit dich Kund:innen in deiner Umgebung finden.
          </p>
        </CalmEnergyCard>

        {/* Karte 3 */}
        <CalmEnergyCard>
          <h3 className="text-2xl font-semibold text-jamoko-gold mb-4">
            Bewertungsmanagement
          </h3>
          <p className="text-jamoko-text-dim leading-relaxed">
            Echte Stimmen schaffen Vertrauen – wir begleiten dich beim 
            Aufbau einer glaubwürdigen Bewertungs- und Feedback-Kultur.
          </p>
        </CalmEnergyCard>

      </div>

    </section>
  );
}
