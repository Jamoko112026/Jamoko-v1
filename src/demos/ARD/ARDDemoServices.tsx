export default function ARDDemoServices() {
  return (
    <section className="py-20 px-6 text-center">
      <h2 className="text-2xl md:text-3xl font-light mb-12">
        Unsere Leistungen
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

        <div className="p-6 border border-white/10 rounded-2xl">
          <h3 className="mb-2">Reifenwechsel</h3>
          <p className="text-white/60 text-sm">
            Schnell und zuverlässig – Sommer- und Winterreifen.
          </p>
        </div>

        <div className="p-6 border border-white/10 rounded-2xl">
          <h3 className="mb-2">Einlagerung</h3>
          <p className="text-white/60 text-sm">
            Sicher und sauber – wir lagern deine Reifen fachgerecht.
          </p>
        </div>

        <div className="p-6 border border-white/10 rounded-2xl">
          <h3 className="mb-2">Beratung</h3>
          <p className="text-white/60 text-sm">
            Persönlich und ehrlich – wir finden die passende Lösung.
          </p>
        </div>

      </div>
    </section>
  );
}