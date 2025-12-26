export default function Start() {
  return (
    <main className="min-h-screen bg-[#001821] text-white flex flex-col items-center px-6">

      {/* HERO */}
      <section className="max-w-3xl w-full py-28 text-center">
        <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
          Ich helfe lokalen Betrieben, online klar sichtbar zu werden –
          <span className="block text-jamoko-gold">
            ohne Agentur-Stress und Technikchaos.
          </span>
        </h1>

        <p className="mt-6 text-lg text-white/80">
          Eine ruhige Mini-Website, die zeigt, wer du bist, was du anbietest
          und wie man dich erreicht. Verständlich. Persönlich. Funktional.
        </p>

        <a
          href="#kontakt"
          className="inline-block mt-10 px-7 py-3 rounded-full
                     bg-jamoko-gold text-[#001821] font-medium"
        >
          Unverbindlich anfragen
        </a>
      </section>

      {/* FÜR WEN */}
      <section className="max-w-3xl w-full py-16">
        <h2 className="text-xl font-semibold mb-6">Für wen das ist</h2>
        <ul className="space-y-3 text-white/80">
          <li>• lokale Betriebe ohne Lust auf Technik</li>
          <li>• Menschen, die keinen Agenturapparat brauchen</li>
          <li>• Klarheit statt Marketing-Lärm</li>
          <li>• eine einfache, ehrliche Online-Präsenz</li>
        </ul>
      </section>

      {/* LEISTUNG */}
      <section className="max-w-3xl w-full py-16">
        <h2 className="text-xl font-semibold mb-6">Was ich konkret mache</h2>
        <p className="text-white/80 leading-relaxed">
          Ich erstelle eine klare Mini-Website, die ruhig gestaltet ist,
          auf allen Geräten funktioniert und die wichtigsten Informationen bündelt.
          Ohne Baukasten-Chaos. Ohne Fachchinesisch.
        </p>
      </section>

      {/* ABLAUF */}
      <section className="max-w-3xl w-full py-16">
        <h2 className="text-xl font-semibold mb-6">So läuft es ab</h2>
        <ol className="space-y-3 text-white/80">
          <li>1. Kurzes Gespräch</li>
          <li>2. Strukturierte Umsetzung</li>
          <li>3. Feinschliff</li>
          <li>4. Online gehen</li>
        </ol>
      </section>

      {/* KONTAKT */}
      <section
        id="kontakt"
        className="max-w-3xl w-full py-24 text-center scroll-mt-32"
      >
        <p className="text-white/80 mb-10 leading-relaxed">
          Nach deiner Anfrage melde ich mich persönlich bei dir zurück.
          Wir klären in einem kurzen, unverbindlichen Gespräch,
          ob und wie ich dich unterstützen kann.
        </p>

        {/* FORMULAR */}
        <form
          action="mailto:moin@jamoko.de"
          method="POST"
          encType="text/plain"
          className="space-y-4 text-left max-w-md mx-auto"
        >
          <div>
            <label className="block text-sm mb-1 text-white/70">Name</label>
            <input
              type="text"
              name="Name"
              required
              className="w-full px-4 py-2 rounded
                         bg-white/5 border border-white/10
                         text-white focus:outline-none
                         focus:border-jamoko-gold"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-white/70">
              E-Mail-Adresse
            </label>
            <input
              type="email"
              name="Email"
              required
              className="w-full px-4 py-2 rounded
                         bg-white/5 border border-white/10
                         text-white focus:outline-none
                         focus:border-jamoko-gold"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-white/70">
              Worum geht es kurz?
            </label>
            <textarea
              name="Nachricht"
              rows={3}
              placeholder="Ein paar Stichworte reichen."
              className="w-full px-4 py-2 rounded
                         bg-white/5 border border-white/10
                         text-white focus:outline-none
                         focus:border-jamoko-gold"
            />
          </div>

          <p className="text-xs text-white/50">
            Deine Anfrage wird vertraulich behandelt und nur zur Kontaktaufnahme genutzt.
          </p>

          {/* OPT-IN */}
          <div className="flex items-start gap-2 text-xs text-white/60">
            <input
              type="checkbox"
              required
              className="mt-1 accent-jamoko-gold"
            />
            <span>
              Ich stimme zu, dass meine Angaben zur Kontaktaufnahme verarbeitet werden.
              Weitere Informationen findest du in der{" "}
              <a href="/datenschutz" className="underline hover:text-white">
                Datenschutzerklärung
              </a>.
            </span>
          </div>

          <button
            type="submit"
            className="w-full mt-4 px-6 py-3 rounded-full
                       bg-jamoko-gold text-[#001821]
                       font-medium"
          >
            Unverbindlich anfragen
          </button>
        </form>
      </section>

    </main>
  );
}
