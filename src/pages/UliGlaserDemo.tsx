export default function UliGlaserDemo() {
  return (
    <main className="bg-[#001821] text-white">

      {/* HERO – UHR */}
      <section
        className="h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden"
        style={{
          backgroundImage: "linear-gradient(rgba(0,24,33,0.65), rgba(0,24,33,0.92)), url('/uli-watch.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center 30%"
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(229,197,139,0.15),transparent_60%)]" />

        <div className="relative z-10 max-w-xl">
          <h1 className="text-4xl md:text-6xl font-light mb-6">
            Zeit, die bleibt.
          </h1>

          <p className="text-lg md:text-xl text-white/70 mb-8">
            Exklusive Uhren. Mit Geschichte. Neu gedacht.
          </p>

          <button className="px-6 py-3 border border-[#E5C58B]/40 text-[#E5C58B] hover:bg-[#E5C58B] hover:text-[#001821] transition">
            Kollektion ansehen
          </button>
        </div>
      </section>

      {/* SECTION – UHREN */}
      <section
        className="min-h-screen flex items-center justify-center text-center px-6 relative"
        style={{
          backgroundImage: "linear-gradient(rgba(0,24,33,0.75), rgba(0,24,33,0.95)), url('/uli-watch.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(229,197,139,0.12),transparent_60%)]" />

        <div className="relative z-10 max-w-xl">
          <h2 className="text-3xl md:text-4xl mb-6 text-[#E5C58B]">
            Uhren
          </h2>

          <p className="text-white/70 leading-relaxed mb-8">
            Präzision, Handwerk und Zeitgefühl. <br /><br />
            Jede Uhr erzählt ihre eigene Geschichte – ruhig, klar und beständig.
          </p>

          <button className="px-6 py-3 border border-[#E5C58B]/40 text-[#E5C58B] hover:bg-[#E5C58B] hover:text-[#001821] transition">
            Uhren entdecken
          </button>
        </div>
      </section>

      {/* SECTION – TRAURINGE */}
      <section
        className="min-h-screen flex items-center justify-center text-center px-6 relative"
        style={{
          backgroundImage: "linear-gradient(rgba(0,24,33,0.6), rgba(0,24,33,0.9)), url('/uli-rings.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(229,197,139,0.15),transparent_60%)]" />

        <div className="relative z-10 max-w-xl">
          <h2 className="text-3xl md:text-4xl mb-6 text-[#E5C58B]">
            Trauringe
          </h2>

          <p className="text-white/70 leading-relaxed mb-8">
            Für Momente, die bleiben. <br /><br />
            Individuell gefertigt – für eine Verbindung, die sichtbar wird.
          </p>

          <button className="px-6 py-3 border border-[#E5C58B]/40 text-[#E5C58B] hover:bg-[#E5C58B] hover:text-[#001821] transition">
            Trauringe entdecken
          </button>
        </div>
      </section>

      {/* PHILOSOPHIE */}
      <section className="py-24 px-6 text-center max-w-2xl mx-auto">
        <h2 className="text-2xl mb-6 text-[#E5C58B]">
          Mehr als ein Produkt
        </h2>

        <p className="text-white/70 leading-relaxed">
          Es geht nicht um das Objekt. <br /><br />
          Es geht um Bedeutung. <br />
          Um Handwerk. <br />
          Und um das, was bleibt.
        </p>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <h2 className="text-2xl mb-6">
          Lass uns deine Marke sichtbar machen.
        </h2>

        <button className="px-6 py-3 border border-[#E5C58B]/40 text-[#E5C58B] hover:bg-[#E5C58B] hover:text-[#001821] transition">
          Anfrage stellen
        </button>
      </section>

    </main>
  );
}