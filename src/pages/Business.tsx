export default function Business() {
  return (
    <main className="bg-[#001821] text-jamoko-text">

      {/* ======================
          HERO
      ====================== */}
      <section className="min-h-[85vh] px-6 pt-44 pb-32 flex items-center">

        <div className="max-w-7xl mx-auto">

          <div className="max-w-4xl">

            {/* Badge */}
            <span
              className="
                inline-block mb-8 px-5 py-2 rounded-full
                text-xs tracking-widest uppercase
                bg-white/5 border border-white/10
                text-jamoko-gold
              "
            >
              Business Lösungen · Klarheit statt Komplexität
            </span>

            {/* Headline */}
            <h1
              className="
                text-4xl md:text-5xl xl:text-6xl
                font-semibold leading-tight mb-8
              "
            >
              Digitale Systeme für Unternehmen,
              <br />
              <span className="text-jamoko-gold">
                die stabil und verlässlich funktionieren.
              </span>
            </h1>

            {/* Subline */}
            <p
              className="
                text-jamoko-text-dim
                text-lg leading-relaxed
                max-w-3xl
              "
            >
              Strukturierte Webauftritte und digitale Prozesse
              für Unternehmen, die Professionalität, Ordnung
              und nachhaltige Wirkung aufbauen wollen —
              ruhig, skalierbar und unabhängig von Agenturmodellen.
            </p>

            {/* CTA */}
            <div className="mt-14 flex flex-wrap gap-5">

              <a
                href="#business-contact"
                className="
                  inline-flex items-center justify-center
                  px-10 py-4 rounded-full
                  bg-jamoko-gold text-[#001821]
                  font-semibold
                  shadow-[0_0_30px_rgba(229,197,139,0.35)]
                  hover:shadow-[0_0_45px_rgba(229,197,139,0.55)]
                  transition-all
                "
              >
                Erstgespräch vereinbaren
              </a>

              <a
                href="/kontakt"
                className="
                  inline-flex items-center justify-center
                  px-10 py-4 rounded-full
                  border border-jamoko-gold/30
                  text-jamoko-gold
                  hover:bg-jamoko-gold/10
                  transition
                "
              >
                Kontakt aufnehmen
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* ======================
          POSITIONIERUNG
      ====================== */}
      <section className="px-6 py-32">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20">

          {/* Text */}
          <div className="space-y-8">

            <h2 className="text-2xl md:text-3xl font-semibold text-jamoko-gold">
              Keine Agentur. Keine Baukästen.
            </h2>

            <p className="text-jamoko-text-dim leading-relaxed">
              JaMoKo entwickelt keine austauschbaren Webseiten.
              Wir bauen digitale Strukturen,
              die Vertrauen schaffen,
              Prozesse vereinfachen
              und Unternehmen professionell repräsentieren.
            </p>

            <p className="text-jamoko-text-dim leading-relaxed">
              Weniger Technikstress.<br />
              Mehr Klarheit, Stabilität und nachhaltige Wirkung.
            </p>

          </div>

          {/* Benefits Box */}
          <div
            className="
              rounded-3xl
              bg-[#01212d]/70 backdrop-blur-xl
              border border-jamoko-gold/20
              p-12
            "
          >

            <ul className="text-sm text-jamoko-text-dim space-y-4">

              <li>✓ Strukturierte Unternehmens-Websites</li>
              <li>✓ Klare Angebots- und Prozessdarstellung</li>
              <li>✓ Skalierbare technische Architektur</li>
              <li>✓ Ruhiges, professionelles Erscheinungsbild</li>
              <li>✓ Persönliche Betreuung statt Ticketsystem</li>

            </ul>

          </div>

        </div>

      </section>

      {/* ======================
          CTA BLOCK
      ====================== */}
      <section
        id="business-contact"
        className="px-6 py-40"
      >

        <div
          className="
            max-w-3xl mx-auto
            rounded-3xl
            bg-[#01212d]/70 backdrop-blur-xl
            border border-jamoko-gold/20
            p-16
            shadow-[0_0_35px_rgba(0,0,0,0.45)]
          "
        >

          <h3 className="text-2xl font-semibold text-jamoko-gold mb-6">
            Projekt besprechen
          </h3>

          <p className="text-jamoko-text-dim mb-10 leading-relaxed">
            Ein ruhiges Erstgespräch auf Augenhöhe.
            Kein Verkaufsdruck. Keine Verpflichtung.
            Wir prüfen gemeinsam, ob JaMoKo zu deinem Projekt passt.
          </p>

          <a
            href="/kontakt"
            className="
              inline-flex items-center justify-center
              px-10 py-4 rounded-full
              bg-jamoko-gold text-[#001821]
              font-semibold
              hover:opacity-90
              transition
            "
          >
            Kontakt aufnehmen
          </a>

        </div>

      </section>

    </main>
  );
}
