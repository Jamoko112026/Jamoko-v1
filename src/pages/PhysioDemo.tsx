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

        {/* Overlay + Blickführung */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#001821]/40 via-[#001821]/70 to-[#001821]/90"></div>

        {/* JaMoKo Glow */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_left,rgba(229,197,139,0.15),transparent_60%)]"></div>

        <div className="relative z-10 max-w-3xl">

          <h1 className="text-4xl md:text-5xl font-light mb-6 leading-tight">
            Physiotherapie in Hamburg-Altona
            <span className="block text-jamoko-gold mt-2">
              Termine ohne Umwege
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Beweglichkeit. Stabilität. Lebensqualität im Alltag.
          </p>

          <button className="px-8 py-3 rounded-xl bg-jamoko-gold text-black font-medium hover:opacity-90 transition shadow-[0_0_30px_rgba(229,197,139,0.25)]">
            Termin anfragen
          </button>

          <p className="mt-4 text-gray-400 text-sm">
            Oder direkt anrufen: 040 / 123456
          </p>

          <p className="mt-3 text-gray-500 text-sm">
            ✓ Termine oft innerhalb weniger Tage verfügbar
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
            Wir begleiten Menschen auf dem Weg zu mehr Beweglichkeit und weniger Schmerzen.
            Mit moderner Physiotherapie und persönlicher Betreuung helfen wir Ihnen,
            Ihren Alltag wieder aktiv und beschwerdefrei zu gestalten.
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


      {/* WEBSITE ERKLÄRUNG */}
      <section className="py-28 px-6">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl text-center mb-16 font-light">
            Klarheit schafft Vertrauen
          </h2>

          <div className="grid md:grid-cols-2 gap-12">

            <div className="p-10 rounded-2xl bg-[#01212d] border border-white/10">
              <h3 className="text-xl mb-4 text-white">
                Viele Praxis-Websites
              </h3>
              <ul className="text-gray-300 space-y-2">
                <li>• unübersichtlich</li>
                <li>• zu viele Informationen</li>
                <li>• Termin schwer auffindbar</li>
              </ul>
            </div>

            <div className="p-10 rounded-2xl bg-[#01212d] border border-jamoko-gold/30">
              <h3 className="text-xl mb-4 text-jamoko-gold">
                JaMoKo Ansatz
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
            So finden Patienten zu Ihnen
          </h2>

          <div className="grid md:grid-cols-4 gap-10 text-gray-300">

            <div>
              <h3 className="text-white mb-3">1. Suche</h3>
              <p>Physiotherapie in Hamburg wird gesucht.</p>
            </div>

            <div>
              <h3 className="text-white mb-3">2. Finden</h3>
              <p>Ihre Praxis erscheint klar und verständlich.</p>
            </div>

            <div>
              <h3 className="text-white mb-3">3. Vertrauen</h3>
              <p>Der erste Eindruck überzeugt sofort.</p>
            </div>

            <div>
              <h3 className="text-white mb-3">4. Termin</h3>
              <p>Der Patient entscheidet sich schnell.</p>
            </div>

          </div>

        </div>

      </section>


      {/* BEWERTUNGEN */}
      <section className="py-28 px-6 bg-[#01212d]">

        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-3xl mb-6 font-light">
            Vertrauen durch Erfahrung
          </h2>

          <p className="text-gray-400 mb-16">
            Über 120 zufriedene Patienten
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


      {/* MOBILE STICKY CTA */}
      <div className="fixed bottom-4 left-4 right-4 md:hidden z-50">
        <button className="w-full py-4 rounded-xl bg-jamoko-gold text-black font-medium shadow-lg">
          Termin anfragen
        </button>
      </div>

    </main>
  )
}