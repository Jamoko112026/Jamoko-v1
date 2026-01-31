export default function SLBCTA() {
  return (
    <section className="sl-section py-28 px-6">

      <div className="max-w-5xl mx-auto">

        {/* CTA BOX */}
        <div className="sl-card text-center">

          {/* HEADLINE */}
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Projektanfrage starten
          </h2>

          {/* SUBLINE */}
          <p className="sl-text-muted max-w-xl mx-auto mb-8 leading-relaxed">
            Sie planen ein Tiefbau- oder Infrastrukturprojekt?
            Wir beraten Sie kompetent und erstellen ein
            transparentes Angebot.
          </p>

          {/* CTA BUTTON */}
          <div className="flex justify-center">
            <a
              href="#kontakt"
              className="sl-btn px-10 py-4 rounded-md"
            >
              Jetzt Projekt anfragen
            </a>
          </div>

          {/* TRUST FOOTNOTE */}
          <div className="mt-6 text-sm sl-text-muted tracking-wide">
            Antwort innerhalb von 24 Stunden · Persönlicher Ansprechpartner
          </div>

        </div>

      </div>

    </section>
  );
}
