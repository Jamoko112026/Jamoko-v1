export default function PhysioPreview() {
  return (
    <main className="bg-[#FAF8F5] text-[#2B2B2B]">

      {/* ================= HERO ================= */}

      <section className="px-6 py-28 bg-gradient-to-br from-[#F5EFE8] to-white">
        <div className="max-w-5xl mx-auto">

          <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
            Private Physiotherapie
            <br />
            bei Ihnen zu Hause
          </h1>

          <p className="text-lg text-[#6B6B6B] max-w-xl">
            Persönliche Behandlung. Individuell abgestimmt.
            Ruhig. Professionell. Ohne Wartezimmer.
          </p>

          <button
            className="
            mt-10
            px-7 py-3
            rounded-full
            bg-[#8B6B4F]
            text-white
            shadow-md
            hover:brightness-110
            transition
          "
          >
            Termin anfragen
          </button>

        </div>
      </section>


      {/* ================= LEISTUNGEN ================= */}

      <section className="px-6 py-24">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-semibold mb-14">
            Behandlungsschwerpunkte
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              "Manuelle Therapie",
              "Krankengymnastik",
              "Neurologische Therapie",
              "Schmerztherapie",
              "Prävention & Mobilisation",
              "Hausbesuche"
            ].map((item) => (

              <div
                key={item}
                className="
                  bg-white
                  rounded-2xl
                  p-7
                  shadow-sm
                  hover:shadow-md
                  transition
                "
              >

                <p className="font-medium text-lg">
                  {item}
                </p>

              </div>

            ))}

          </div>

        </div>
      </section>


      {/* ================= VORTEILE ================= */}

      <section className="px-6 py-24 bg-[#EFE7DE]">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-3xl font-semibold mb-10">
            Behandlung dort, wo Sie sich wohlfühlen
          </h2>

          <ul className="space-y-4 text-[#5A5A5A] text-lg">

            <li>✔ Kein Praxisstress</li>
            <li>✔ Keine Wartezeiten</li>
            <li>✔ Therapie im gewohnten Umfeld</li>
            <li>✔ Ideal für Senior:innen</li>

          </ul>

        </div>
      </section>


      {/* ================= CTA ================= */}

      <section className="px-6 py-24 bg-[#2B2B2B] text-white text-center">

        <div className="max-w-3xl mx-auto">

          <h2 className="text-3xl font-semibold mb-6">
            Jetzt Termin anfragen
          </h2>

          <p className="mb-10 text-[#D6D6D6]">
            Vereinbaren Sie unkompliziert Ihren persönlichen Behandlungstermin.
          </p>

          <button
            className="
              px-9 py-3
              bg-[#8B6B4F]
              rounded-full
              font-medium
              hover:brightness-110
              transition
            "
          >
            Kontakt aufnehmen
          </button>

        </div>

      </section>

    </main>
  );
}