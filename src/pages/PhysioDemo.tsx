export default function PhysioDemo() {
  return (
    <main className="w-full bg-[#001821] text-white">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[85vh] flex items-center justify-center px-6 overflow-hidden">

        <img
          src="/physio/physio_hero.jpg"
          alt="Physiotherapie Behandlung"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* LAYER */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,24,33,0.85)_0%,rgba(0,24,33,0.6)_40%,rgba(0,24,33,0.2)_70%,transparent_90%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#001821]/30 via-[#001821]/70 to-[#001821]/95" />
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_left,rgba(229,197,139,0.15),transparent_60%)]" />

        {/* CONTENT */}
        <div className="relative z-10 max-w-2xl text-left">

          <h1 className="text-4xl md:text-5xl font-light leading-[1.15] tracking-tight mb-6">
            Schmerzfrei bewegen.
            <span className="block text-jamoko-gold mt-2">
              In deinem Tempo.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/70 mb-8">
            Ohne Hektik. Ohne Fließband.<br />
            Mit Zeit für das, was dir wirklich hilft.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">

            <button className="px-8 py-3 rounded-xl bg-jamoko-gold text-black font-medium transition duration-300 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_30px_rgba(229,197,139,0.25)]">
              Termin anfragen
            </button>

          </div>

          <p className="mt-4 text-white/50 text-sm">
            Antwort meist innerhalb von 24h
          </p>

          <p className="mt-2 text-white/50 text-sm">
            Oder direkt anrufen: 040 / 123456
          </p>

        </div>
      </section>


      {/* ================= PRAXIS ================= */}
      <section className="py-24 px-6">

        <div className="max-w-3xl mx-auto text-center">

          <h2 className="text-3xl mb-6 font-light">
            Ihre Physiotherapie in Altona
          </h2>

          <p className="text-white/70 leading-relaxed">
            Hier geht es nicht um schnelle Behandlung,
            sondern um echte Verbesserung.
            <br /><br />
            Wir nehmen uns Zeit, hören zu und arbeiten gezielt daran,
            dass Sie sich wieder sicher und frei bewegen können.
          </p>

        </div>

      </section>


      {/* ================= LEISTUNGEN ================= */}
      <section className="py-24 px-6 bg-[#01212d]">

        <div className="max-w-5xl mx-auto">

          <h2 className="text-3xl text-center mb-16 font-light">
            Behandlungen
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {[
              {
                title: "Krankengymnastik",
                text: "Gezielte Übungen für mehr Beweglichkeit und Stabilität."
              },
              {
                title: "Manuelle Therapie",
                text: "Behandlung von Gelenken, Muskeln und Nerven."
              },
              {
                title: "Lymphdrainage",
                text: "Sanfte Unterstützung des Lymphsystems."
              },
              {
                title: "Sportphysiotherapie",
                text: "Rehabilitation und Betreuung bei sportlicher Belastung."
              }
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-[#001821] border border-white/10 hover:border-jamoko-gold/40 transition"
              >
                <h3 className="text-white text-lg mb-2">{item.title}</h3>
                <p className="text-white/60 text-sm">{item.text}</p>
              </div>
            ))}

          </div>

        </div>

      </section>


      {/* ================= VERTRAUEN ================= */}
      <section className="py-24 px-6">

        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-3xl mb-12 font-light">
            In guten Händen
          </h2>

          <div className="grid md:grid-cols-3 gap-10 text-white/70">

            <div>
              <p className="text-jamoko-gold mb-2 text-lg">✓</p>
              <p>Keine Behandlung im Akkord</p>
            </div>

            <div>
              <p className="text-jamoko-gold mb-2 text-lg">✓</p>
              <p>Zeit für Ihre individuelle Situation</p>
            </div>

            <div>
              <p className="text-jamoko-gold mb-2 text-lg">✓</p>
              <p>Ruhige, klare Atmosphäre</p>
            </div>

          </div>

        </div>

      </section>


      {/* ================= BEWERTUNGEN ================= */}
      <section className="py-24 px-6 bg-[#01212d]">

        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-3xl mb-6 font-light">
            Vertrauen durch Erfahrung
          </h2>

          <p className="text-white/40 mb-16">
            Echte Rückmeldungen von Patienten
          </p>

          <div className="grid md:grid-cols-3 gap-10">

            {[
              "Ich habe schnell einen Termin bekommen und mich direkt gut aufgehoben gefühlt.",
              "Sehr angenehme Atmosphäre und professionelle Behandlung.",
              "Ich konnte meine Beschwerden deutlich verbessern."
            ].map((text, i) => (
              <div key={i} className="p-8 rounded-2xl bg-[#001821] border border-white/10">
                <p className="text-jamoko-gold mb-3 text-lg">★★★★★</p>
                <p className="text-white/70 text-sm">{text}</p>
              </div>
            ))}

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="py-24 px-6 text-center">

        <h2 className="text-3xl mb-6 font-light">
          Lassen Sie uns ruhig starten.
        </h2>

        <button className="px-8 py-3 rounded-xl bg-jamoko-gold text-black font-medium hover:opacity-90 transition">
          Termin anfragen
        </button>

        <p className="mt-4 text-white/50 text-sm">
          Unverbindlich. Ohne Verpflichtung.
        </p>

        <p className="mt-4 text-white/70">
          Telefon: 040 / 123456
        </p>

      </section>


      {/* ================= KONTAKT ================= */}
      <section className="py-24 px-6 text-center bg-[#01212d]">

        <h2 className="text-3xl mb-6 font-light">
          Kontakt
        </h2>

        <p className="text-white/70">
          Physiotherapie Altona <br />
          Musterstraße 12 <br />
          22765 Hamburg
        </p>

        <p className="mt-6 text-white/50">
          praxis@physio-altona.de
        </p>

      </section>


      {/* ================= MOBILE CTA ================= */}
      <div className="fixed bottom-4 left-4 right-4 md:hidden z-50">
        <button className="w-full py-4 rounded-xl bg-jamoko-gold text-black font-medium shadow-lg">
          Termin anfragen
        </button>
        <p className="text-center text-xs text-white/50 mt-2">
          Antwort innerhalb von 24h
        </p>
      </div>

    </main>
  )
}