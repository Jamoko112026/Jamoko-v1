import CalmEnergyCard from "../../../components/CalmEnergyCard";

export default function Leistungsarchitektur() {
  return (
    <section className="py-32 px-6 bg-[#001821] text-jamoko-text text-center">

      <h2 className="text-5xl font-semibold text-jamoko-gold mb-10">
        Leistungsarchitektur
      </h2>

      <p className="text-jamoko-text-dim max-w-3xl mx-auto text-lg leading-relaxed mb-20">
        Die fünf Säulen für klare Wirkung: sichtbar werden, Ausdruck finden,
        Strukturen schaffen, Beziehungen pflegen und bewusstes Marketing leben.
      </p>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">

        {/* 1 Sichtbarkeit */}
        <CalmEnergyCard>
          <h3 className="text-2xl font-semibold text-jamoko-gold mb-4">
            Sichtbarkeit – Nähe, die man findet
          </h3>
          <p className="text-jamoko-text-dim leading-relaxed">
            Ich sorge dafür, dass Unternehmen dort sichtbar sind, wo Menschen
            wirklich suchen – lokal, klar und vertrauensvoll. Präsenz, die Nähe schafft.
          </p>
        </CalmEnergyCard>

        {/* 2 Ausdruck */}
        <CalmEnergyCard>
          <h3 className="text-2xl font-semibold text-jamoko-gold mb-4">
            Ausdruck – Marken mit Energie
          </h3>
          <p className="text-jamoko-text-dim leading-relaxed">
            Ich übersetze Persönlichkeit in Bild, Farbe und Sprache: 
            von „Calm Energy“ bis „Luminous Balance“ – so wird Identität spürbar.
          </p>
        </CalmEnergyCard>

        {/* 3 Struktur */}
        <CalmEnergyCard>
          <h3 className="text-2xl font-semibold text-jamoko-gold mb-4">
            Struktur – Einfachheit als System
          </h3>
          <p className="text-jamoko-text-dim leading-relaxed">
            Ich baue digitale Räume, die leicht zu bedienen und angenehm
            anzusehen sind – technisch sauber, menschlich gedacht. Klarheit schafft Vertrauen.
          </p>
        </CalmEnergyCard>

        {/* 4 Wachstum */}
        <CalmEnergyCard>
          <h3 className="text-2xl font-semibold text-jamoko-gold mb-4">
            Wachstum – Beziehungen, die bleiben
          </h3>
          <p className="text-jamoko-text-dim leading-relaxed">
            Marketing endet nicht beim Klick. Ich begleite Kund:innen mit
            kontinuierlicher Pflege, Follow-Ups und ehrlicher Kommunikation.
            Wachstum entsteht durch Verbindung.
          </p>
        </CalmEnergyCard>

        {/* 5 Bewusstsein */}
        <CalmEnergyCard className="md:col-span-2">
          <h3 className="text-2xl font-semibold text-jamoko-gold mb-4">
            Bewusstsein – Marketing mit Seele
          </h3>
          <p className="text-jamoko-text-dim leading-relaxed max-w-3xl mx-auto">
            Ich arbeite achtsam, ruhig und klar – mit Blick auf das, was 
            Menschen wirklich bewegt. Digitale Ruhe als Grundlage für Wirkung.
          </p>
        </CalmEnergyCard>

      </div>
    </section>
  );
}
