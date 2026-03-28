export default function PhysioDemo() {
  return (
    <main className="w-full bg-[#001821] text-white">

      {/* HERO */}
      <section className="relative min-h-[80vh] flex items-center justify-center text-center px-6 overflow-hidden">

        <img
          src="/physio/physio_hero.jpg"
          alt="Physiotherapie Behandlung"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#001821]/40 via-[#001821]/70 to-[#001821]/90"></div>

        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_left,rgba(229,197,139,0.15),transparent_60%)]"></div>

        <div className="relative z-10 max-w-3xl">

          <h1 className="text-4xl md:text-5xl font-light mb-6 leading-tight">
            Wieder beweglich werden.
            <span className="block text-jamoko-gold mt-2">
              Schritt für Schritt.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Individuelle Physiotherapie in ruhiger Atmosphäre – direkt hier im Viertel.
          </p>

          <button className="px-8 py-3 rounded-xl bg-jamoko-gold text-black font-medium hover:opacity-90 transition shadow-[0_0_30px_rgba(229,197,139,0.25)]">
            Termin anfragen
          </button>

          <p className="mt-4 text-gray-400 text-sm">
            Oder direkt anrufen: 040 / 123456
          </p>

        </div>
      </section>


      {/* PRAXIS */}
      <section className="py-24 px-6">

        <div className="max-w-3xl mx-auto text-center">

          <h2 className="text-3xl mb-6 font-light">
            Ihre Physiotherapie in Altona
          </h2>

          <p className="text-gray-300 leading-relaxed">
            Wir begleiten Sie auf dem Weg zu mehr Beweglichkeit und weniger Schmerzen.
            Mit moderner Physiotherapie und persönlicher Betreuung unterstützen wir Sie dabei,
            Ihren Alltag wieder aktiv und stabil zu gestalten.
          </p>

        </div>

      </section>


      {/* LEISTUNGEN */}
      <section className="py-24 px-6 bg-[#01212d]">

        <div className="max-w-5xl mx-auto">

          <h2 className="text-3xl text-center mb-16 font-light">
            Behandlungen
          </h2>

          <div className="grid md:grid-cols-2 gap-12 text-gray-300">

            <div>
              <h3 className="text-xl mb-2 text-white">Krankengymnastik</h3>
              <p>Gezielte Übungen für mehr Beweglichkeit und Stabilität.</p>
            </div>

            <div>
              <h3 className="text-xl mb-2 text-white">Manuelle Therapie</h3>
              <p>Behandlung von Gelenken, Muskeln und Nerven.</p>
            </div>

            <div>
              <h3 className="text-xl mb-2 text-white">Lymphdrainage</h3>
              <p>Sanfte Unterstützung des Lymphsystems.</p>
            </div>

            <div>
              <h3 className="text-xl mb-2 text-white">Sportphysiotherapie</h3>
              <p>Rehabilitation und Betreuung bei sportlicher Belastung.</p>
            </div>

          </div>

        </div>

      </section>


      {/* VERTRAUEN */}
      <section className="py-24 px-6">

        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-3xl mb-12 font-light">
            In guten Händen
          </h2>

          <div className="grid md:grid-cols-3 gap-10 text-gray-300">

            <div>
              <p className="text-jamoko-gold mb-2 text-lg">✓</p>
              <p>Persönliche Betreuung</p>
            </div>

            <div>
              <p className="text-jamoko-gold mb-2 text-lg">✓</p>
              <p>Ruhige Atmosphäre</p>
            </div>

            <div>
              <p className="text-jamoko-gold mb-2 text-lg">✓</p>
              <p>Langjährige Erfahrung</p>
            </div>

          </div>

        </div>

      </section>


      {/* BEWERTUNGEN */}
      <section className="py-24 px-6 bg-[#01212d]">

        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-3xl mb-6 font-light">
            Vertrauen durch Erfahrung
          </h2>

          <p className="text-gray-400 mb-16">
            Stimmen von Patienten
          </p>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="p-8 rounded-2xl bg-[#001821] border border-white/10">
              <p className="text-jamoko-gold mb-3 text-lg">★★★★★</p>
              <p className="text-gray-300">
                Ich habe schnell einen Termin bekommen und mich direkt gut aufgehoben gefühlt.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#001821] border border-white/10">
              <p className="text-jamoko-gold mb-3 text-lg">★★★★★</p>
              <p className="text-gray-300">
                Sehr angenehme Atmosphäre und professionelle Behandlung.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#001821] border border-white/10">
              <p className="text-jamoko-gold mb-3 text-lg">★★★★★</p>
              <p className="text-gray-300">
                Ich konnte meine Beschwerden deutlich verbessern.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="py-24 px-6 text-center">

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
      <section className="py-24 px-6 text-center bg-[#01212d]">

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


      {/* MOBILE CTA */}
      <div className="fixed bottom-4 left-4 right-4 md:hidden z-50">
        <button className="w-full py-4 rounded-xl bg-jamoko-gold text-black font-medium shadow-lg">
          Termin anfragen
        </button>
      </div>

    </main>
  )
}