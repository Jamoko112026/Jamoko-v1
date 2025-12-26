import GlowSection from "../../components/sections/GlowSection";
import ValueGlowCard from "../../components/cards/ValueGlowCard";
import GlowDivider from "../../components/GlowDivider";

export default function WhyVisibility() {
  return (
    <GlowSection>
      <h2 className="text-5xl font-semibold text-jamoko-gold text-center mb-12">
        Warum Sichtbarkeit zählt
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

        <ValueGlowCard>
          <h3 className="text-2xl font-semibold text-jamoko-gold mb-4">
            Nähe schafft Vertrauen
          </h3>
          <p className="text-jamoko-text-dim">
            Menschen suchen lokal – wer sichtbar ist, wird gefunden.
          </p>
        </ValueGlowCard>

        <ValueGlowCard>
          <h3 className="text-2xl font-semibold text-jamoko-gold mb-4">
            Ruhige Präsenz
          </h3>
          <p className="text-jamoko-text-dim">
            Ein klarer Auftritt sorgt für Struktur, Orientierung und Wirkung.
          </p>
        </ValueGlowCard>

        <ValueGlowCard>
          <h3 className="text-2xl font-semibold text-jamoko-gold mb-4">
            Wahrnehmung → Vertrauen
          </h3>
          <p className="text-jamoko-text-dim">
            Sichtbarkeit ist der erste Schritt zu echter Verbindung.
          </p>
        </ValueGlowCard>

      </div>
    </GlowSection>
  );
}
