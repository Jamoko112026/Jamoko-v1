export default function PhysioDemo() {
  return (
    <main className="w-full bg-[#001821] text-white">

      {/* HERO */}
      <section className="relative min-h-[75vh] flex items-center justify-center text-center px-6 overflow-hidden">

        <img
          src="/physio/physio_hero.jpg"
          alt="Physiotherapie Behandlung"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-[#001821]/65"></div>

        <div className="relative z-10 max-w-3xl">

          <h1 className="text-4xl md:text-5xl font-light mb-6">
            Physiotherapie in Hamburg-Altona
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-10">
            Beweglichkeit. Stabilität. Lebensqualität im Alltag.
          </p>

          <button className="px-8 py-3 rounded-xl bg-jamoko-gold text-black font-medium hover:opacity-90 transition">
            Termin vereinbaren
          </button>

          <p className="mt-6 text-gray-300">
            Telefon: 040 / 123456
          </p>

        </div>
      </section>


      {/* PRAXIS */}
      <section className="py-28 px-6">

        <div className="max-w-3xl mx-auto text-center">

          <h2 className="text-3xl mb-6 font-light">
            Ihre Physiotherapie in Altona
          </h2>

          <p className="text-gray-300 leading-relaxed">
            Unsere Praxis begleitet Menschen auf dem Weg zu mehr Beweglichkeit
            und weniger Schmerzen. Mit moderner Physiotherapie und persönlicher
            Betreuung unterstützen wir Sie dabei, Ihren Alltag wieder aktiv
            und beschwerdefrei zu gestalten.
          </p>

        </div>

      </section>


      {/* BEHANDLUNGEN */}
      <section className="py-28 px-6 bg-[#01212d]">

        <div className="max-w-5xl mx-auto">

          <h2 className="text-3xl text-center mb-16 font-light">
            Unsere Behandlungen
          </h2>

          <div className="grid md:grid-cols-2 gap-12 text-gray-300">

            <div>
              <h3 className="text-xl mb-2 text-white">Krankengymnastik</h3>
              <p>Individuelle Übungen zur Verbesserung von Beweglichkeit und Kraft.</p>
            </div>

            <div>
              <h3 className="text-xl mb-2 text-white">Manuelle Therapie</h3>
              <p>Behandlung von Funktionsstörungen an Gelenken, Muskeln und Nerven.</p>
            </div>

            <div>
              <h3 className="text-xl mb-2 text-white">Lymphdrainage</h3>
              <p>Sanfte Therapie zur Unterstützung des Lymphsystems.</p>
            </div>

            <div>
              <h3 className="text-xl mb-2 text-white">Sportphysiotherapie</h3>
              <p>Begleitung bei Rehabilitation und sportlicher Belastung.</p>
            </div>

          </div>

        </div>

      </section>


      {/* PRAXIS EINBLICKE */}
      <section className="py-28 px-6">

        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-3xl mb-6 font-light">
            Ein Blick in unsere Praxis
          </h2>

          <p className="text-gray-300 leading-relaxed">
            Eine ruhige Atmosphäre, moderne Behandlungsräume und persönliche
            Betreuung stehen bei uns im Mittelpunkt. Patienten sollen sich
            vom ersten Moment an gut aufgehoben fühlen.
          </p>

        </div>

      </section>


      {/* WEBSITE ERKLÄRUNG */}
      <section className="py-28 px-6 bg-[#01212d]">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl text-center mb-16 font-light">
            Warum eine klare Praxis-Website wichtig ist
          </h2>

          <div className="grid md:grid-cols-2 gap-12">

            <div className="p-10 rounded-2xl bg-[#001821] border border-white/10">

              <h3 className="text-xl mb-4 text-white">
                Typische Praxis-Website
              </h3>

              <ul className="text-gray-300 space-y-2">
                <li>• lange Texte</li>
                <li>• unübersichtliche Struktur</li>
                <li>• Termin schwer zu finden</li>
              </ul>

            </div>


            <div className="p-10 rounded-2xl bg-[#001821] border border-jamoko-gold/30">

              <h3 className="text-xl mb-4 text-jamoko-gold">
                JaMoKo Praxis-Website
              </h3>

              <ul className="text-gray-300 space-y-2">
                <li>• ruhiger Einstieg</li>
                <li>• klare Struktur</li>
                <li>• Termin sofort erreichbar</li>
              </ul>

            </div>

          </div>

        </div>

      </section>


      {/* PATIENTENREISE */}
      <section className="py-28 px-6">

        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-3xl mb-16 font-light">
            Der Weg eines Patienten
          </h2>

          <div className="grid md:grid-cols-4 gap-10 text-gray-300">

            <div>
              <h3 className="text-white mb-3">1. Suche</h3>
              <p>Patient sucht Physiotherapie in seiner Nähe.</p>
            </div>

            <div>
              <h3 className="text-white mb-3">2. Finden</h3>
              <p>Er entdeckt die Praxis über Google.</p>
            </div>

            <div>
              <h3 className="text-white mb-3">3. Vertrauen</h3>
              <p>Die Website zeigt klar Praxis und Leistungen.</p>
            </div>

            <div>
              <h3 className="text-white mb-3">4. Termin</h3>
              <p>Der Patient vereinbart einen Termin.</p>
            </div>

          </div>

        </div>

      </section>


      {/* BEWERTUNGEN */}
      <section className="py-28 px-6 bg-[#01212d]">

        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-3xl mb-6 font-light">
            Was unsere Patienten sagen
          </h2>

          <p className="text-gray-400 mb-16">
            Über 120 zufriedene Bewertungen
          </p>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="p-8 rounded-2xl bg-[#001821] border border-white/10">
              <p className="text-jamoko-gold mb-3 text-lg">★★★★★</p>
              <p className="text-gray-300">
                Sehr freundliches Team und kompetente Behandlung.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#001821] border border-white/10">
              <p className="text-jamoko-gold mb-3 text-lg">★★★★★</p>
              <p className="text-gray-300">
                Schnelle Terminvergabe und angenehme Atmosphäre.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#001821] border border-white/10">
              <p className="text-jamoko-gold mb-3 text-lg">★★★★★</p>
              <p className="text-gray-300">
                Sehr professionelle Betreuung nach meiner Verletzung.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* TERMIN */}
      <section className="py-28 px-6 text-center">

        <h2 className="text-3xl mb-6 font-light">
          Termin vereinbaren
        </h2>

        <button className="px-8 py-3 rounded-xl bg-jamoko-gold text-black font-medium hover:opacity-90 transition">
          Termin anfragen
        </button>

        <p className="mt-6 text-gray-300">
          Telefon: 040 / 123456
        </p>

      </section>


      {/* KONTAKT */}
      <section className="py-28 px-6 text-center bg-[#01212d]">

        <h2 className="text-3xl mb-6 font-light">
          Kontakt
        </h2>

        <p className="text-gray-300">
          Physiotherapie Altona <br />
          Musterstraße 12 <br />
          22765 Hamburg
        </p>

        <p className="mt-6 text-gray-400">
          praxis@physio-altona.de
        </p>

      </section>

    </main>
  )
}