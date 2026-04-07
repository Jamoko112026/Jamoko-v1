export default function UliGlaserDemo() {
  return (
    <main className="bg-[#001821] text-white">

      {/* HERO */}
      <section className="relative min-h-[80vh] flex items-center px-6">

        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/feine-handwerkskunst/uli_hero_watch.jpg')"
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#001821] via-[#001821]/80 to-transparent" />

        {/* Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(229,197,139,0.18),transparent_60%)]" />

        {/* Content */}
        <div className="relative max-w-5xl">

          <h1 className="text-3xl md:text-5xl font-light mb-6 leading-tight">
            Zeit, die bleibt.
          </h1>

          <p className="text-white/70 max-w-xl leading-relaxed">
            Feine Handwerkskunst verdient einen Auftritt,  
            der ihre Qualität sichtbar macht – ruhig, klar und präzise.
          </p>

        </div>
      </section>

      {/* SECTION: WERT */}
      <section className="py-24 px-6 text-center">

        <div className="max-w-3xl mx-auto">

          <h2 className="text-2xl md:text-3xl font-light mb-6">
            Wenn Qualität sichtbar wird
          </h2>

          <p className="text-white/60 leading-relaxed">
            Jedes Detail hat Bedeutung.  
            Materialien, Form, Zeit – alles trägt zur Wirkung bei.  
            Genau das sollte auch Ihre Website widerspiegeln.
          </p>

        </div>
      </section>

      {/* IMAGE SECTION */}
      <section className="px-6 pb-24">

        <div className="max-w-5xl mx-auto">

          <div className="relative rounded-2xl overflow-hidden">

            <img
              src="/feine-handwerkskunst/uli-rings.jpg"
              alt="Handwerkskunst Detail"
              className="w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#001821] via-transparent to-transparent" />

          </div>

        </div>
      </section>

      {/* SECTION: RUHE */}
      <section className="py-24 px-6 text-center">

        <div className="max-w-3xl mx-auto">

          <h2 className="text-2xl md:text-3xl font-light mb-6">
            Weniger zeigen. Mehr wirken.
          </h2>

          <p className="text-white/60 leading-relaxed">
            Keine Ablenkung. Keine Überladung.  
            Nur das, was wirklich zählt – klar geführt und ruhig präsentiert.
          </p>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center">

        <div className="max-w-xl mx-auto">

          <h2 className="text-2xl md:text-3xl font-light mb-6">
            Bereit für einen ruhigen Auftritt?
          </h2>

          <p className="text-white/60 mb-8">
            Lassen Sie uns gemeinsam eine Website entwickeln,  
            die Ihre Arbeit wirklich widerspiegelt.
          </p>

          <a
            href="/kontakt"
            className="inline-block px-8 py-3 border border-[#E5C58B] text-[#E5C58B] rounded-full hover:bg-[#E5C58B] hover:text-[#001821] transition"
          >
            Kontakt aufnehmen
          </a>

        </div>
      </section>

    </main>
  );
}