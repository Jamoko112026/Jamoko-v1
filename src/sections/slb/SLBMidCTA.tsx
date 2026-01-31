export default function SLBMidCTA() {
  return (
    <section className="sl-section py-24 px-6">

      <div className="max-w-5xl mx-auto sl-card text-center">

        {/* Eyebrow */}
        <p className="uppercase tracking-widest text-sm sl-accent mb-4">
          Projektstart
        </p>

        {/* Headline */}
        <h3 className="text-2xl md:text-3xl font-semibold mb-5">
          Sie planen ein Tiefbau- oder Infrastrukturprojekt?
        </h3>

        {/* Subline */}
        <p className="sl-text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
          Wir prüfen Ihr Vorhaben unverbindlich und geben Ihnen eine realistische
          Einschätzung zu Machbarkeit, Ablauf und Zeitrahmen.
        </p>

        {/* CTA */}
        <div className="flex justify-center">
          <a
            href="#kontakt"
            className="sl-btn px-10 py-4 rounded-lg shadow-lg hover:shadow-xl"
          >
            Projekt kostenlos anfragen
          </a>
        </div>

        {/* Trust hint */}
        <div className="mt-6 text-sm sl-text-muted">
          Antwort innerhalb von 24 Stunden · Persönliche Rückmeldung · Keine Verpflichtung
        </div>

      </div>

    </section>
  );
}
