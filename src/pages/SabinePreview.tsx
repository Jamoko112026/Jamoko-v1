export default function SabinePreview() {
  return (
    <main className="w-full bg-[#001821] text-white">

      {/* HERO */}
      <section className="relative min-h-[85vh] flex items-center justify-center text-center px-6 overflow-hidden">

        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/sabine/jamoko_sabine_hero_v1.jpg')",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#001821]/75" />

        {/* Gold Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(229,197,139,0.25),transparent_60%)]" />

        {/* Content */}
        <div className="relative z-10 max-w-2xl">

          <h1 className="text-4xl md:text-5xl font-light mb-6 leading-tight">
            Veränderung braucht Klarheit.
            <br />Und einen Menschen, der sie hält.
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-10">
            Ich begleite Führungskräfte und Teams durch Phasen des Wandels – 
            ruhig, strukturiert und mit einem klaren Blick für das, was wirklich zählt.
          </p>

          <button className="px-8 py-3 rounded-xl bg-jamoko-gold text-black font-medium hover:opacity-90 transition">
            Erstes Gespräch vereinbaren
          </button>

        </div>
      </section>


      {/* SABINE (NEU – wichtig!) */}
      <section className="py-24 px-6 max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Bild */}
        <div className="relative">
          <img
            src="/sabine/jamoko_sabine_hero_v1.jpg"
            alt="Atmosphärisches Motiv für das Beratungskonzept"
            className="rounded-2xl object-cover w-full h-[420px]"
          />
          <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_top_left,rgba(229,197,139,0.2),transparent_60%)]" />
        </div>

        {/* Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            Sabine
          </h2>

          <p className="text-gray-300 mb-6 leading-relaxed">
            Veränderung ist selten nur ein Prozess.  
            Sie betrifft Menschen, Dynamiken und oft auch Unsicherheiten.
          </p>

          <p className="text-gray-300 leading-relaxed">
            Genau dort setze ich an:  
            Ich schaffe Struktur, ohne Druck.  
            Orientierung, ohne zu überfordern.  
            Und Räume, in denen echte Entwicklung möglich wird.
          </p>
        </div>

      </section>


      {/* WAS SIE MACHT */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-light mb-12">
          Klarheit in komplexen Situationen
        </h2>

        <div className="grid md:grid-cols-3 gap-10 text-left">

          <div>
            <h3 className="text-xl mb-3 text-jamoko-gold">Für wen</h3>
            <ul className="text-gray-300 space-y-2">
              <li>Führungskräfte</li>
              <li>Teams</li>
              <li>Organisationen im Wandel</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl mb-3 text-jamoko-gold">Wobei</h3>
            <ul className="text-gray-300 space-y-2">
              <li>Veränderungsprozesse</li>
              <li>Kommunikation</li>
              <li>Neuausrichtung</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl mb-3 text-jamoko-gold">Wirkung</h3>
            <p className="text-gray-300">
              Klarheit, Vertrauen und tragfähige Entscheidungen.
            </p>
          </div>

        </div>

      </section>


      {/* WIRKUNG */}
      <section className="relative py-24 px-6 text-center overflow-hidden">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(229,197,139,0.12),transparent_70%)]" />

        <div className="relative max-w-3xl mx-auto">

          <p className="text-2xl md:text-3xl font-light mb-8 leading-relaxed">
            Gute Veränderung fühlt sich nicht laut an.
            <br />Sondern klar.
          </p>

          <p className="text-gray-400 text-lg">
            Wenn Menschen verstehen, was passiert, entsteht Vertrauen –
            und daraus Bewegung.
          </p>

        </div>

      </section>


      {/* TESTIMONIALS */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center">

        <h2 className="text-3xl font-light mb-12">
          Stimmen aus der Zusammenarbeit
        </h2>

        <div className="space-y-8 text-gray-300">

          <p>„Sehr klare Begleitung in einer komplexen Phase.“</p>
          <p>„Hat uns geholfen, wieder gemeinsam zu denken.“</p>
          <p>„Strukturiert, ruhig, wirksam.“</p>

        </div>

      </section>


      {/* CTA */}
      <section className="py-24 px-6 text-center">

        <h2 className="text-3xl md:text-4xl font-light mb-6">
          Lassen Sie uns gemeinsam schauen,
          <br />was Ihre Situation gerade braucht.
        </h2>

        <button className="mt-6 px-8 py-3 rounded-xl bg-jamoko-gold text-black font-medium hover:opacity-90 transition">
          Gespräch anfragen
        </button>

      </section>

    </main>
  );
}
