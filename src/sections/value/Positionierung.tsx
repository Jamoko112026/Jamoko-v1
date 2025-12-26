import GlowSection from "../../components/sections/GlowSection";
import ValueGlowCard from "../../components/cards/ValueGlowCard";

export default function Positionierung() {
  return (
    <GlowSection>

      <h2 className="text-5xl font-semibold text-jamoko-gold text-center mb-12">
        Was dich besonders macht
      </h2>

      <p className="text-jamoko-text-dim text-center max-w-3xl mx-auto mb-20 leading-relaxed">
        Jede Marke hat eine eigene Energie. Deine Aufgabe ist nicht,
        alle zu überzeugen – sondern die Richtigen zu erreichen.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

        <ValueGlowCard>
          <h3 className="text-2xl font-semibold text-jamoko-gold mb-4">
            Klarer Fokus
          </h3>
          <p className="text-jamoko-text-dim">
            Zeig genau das, was dich stark macht –
            und lass alles weg, was ablenkt.
          </p>
        </ValueGlowCard>

        <ValueGlowCard>
          <h3 className="text-2xl font-semibold text-jamoko-gold mb-4">
            Authentische Wirkung
          </h3>
          <p className="text-jamoko-text-dim">
            Menschen spüren, ob etwas echt ist. Authentizität zieht an.
          </p>
        </ValueGlowCard>

        <ValueGlowCard>
          <h3 className="text-2xl font-semibold text-jamoko-gold mb-4">
            Deine Energie zählt
          </h3>
          <p className="text-jamoko-text-dim">
            Stärke entsteht, wenn Form, Gefühl und Ausdruck übereinstimmen.
          </p>
        </ValueGlowCard>

      </div>

    </GlowSection>
  );
}
