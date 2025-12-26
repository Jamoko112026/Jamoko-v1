import GlowSection from "../../components/sections/GlowSection";
import ValueGlowCard from "../../components/cards/ValueGlowCard";

export default function CareGrowth() {
  return (
    <GlowSection>

      <h2 className="text-5xl font-semibold text-jamoko-gold text-center mb-10">
        Wachstum mit Ruhe
      </h2>

      <p className="text-jamoko-text-dim text-center max-w-3xl mx-auto mb-20 leading-relaxed">
        Wirkung entsteht nicht durch Lautstärke – sondern durch Klarheit.
        Nachhaltiges Wachstum heißt: authentisch bleiben, Beziehungen pflegen
        und kontinuierlich sichtbar sein.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

        <ValueGlowCard>
          <h3 className="text-2xl font-semibold text-jamoko-gold mb-4">
            Klare Schritte
          </h3>
          <p className="text-jamoko-text-dim">
            Struktur, Fokus und ruhige Umsetzung – ein Weg, der trägt.
          </p>
        </ValueGlowCard>

        <ValueGlowCard>
          <h3 className="text-2xl font-semibold text-jamoko-gold mb-4">
            Nachhaltige Wirkung
          </h3>
          <p className="text-jamoko-text-dim">
            Kundenbindung entsteht durch Ehrlichkeit, Ruhe und Beständigkeit.
          </p>
        </ValueGlowCard>

        <ValueGlowCard>
          <h3 className="text-2xl font-semibold text-jamoko-gold mb-4">
            Verbunden bleiben
          </h3>
          <p className="text-jamoko-text-dim">
            Wirkung entsteht aus Beziehung – nicht aus Hektik.
          </p>
        </ValueGlowCard>

      </div>

    </GlowSection>
  );
}
