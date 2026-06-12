export default function ProcessSection() {
  return (
    <section className="py-20 px-6 bg-[#001821] text-center">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-2xl md:text-4xl font-light text-white mb-4">
          So läuft die Zusammenarbeit
        </h2>

        <p className="text-white/60 mb-12 max-w-2xl mx-auto">
          Einfach, persönlich und ohne unnötigen Aufwand.
          Du konzentrierst dich auf dein Geschäft –
          ich kümmere mich um den digitalen Teil.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left">

          <div className="p-6 border border-white/10 rounded-2xl">
            <div className="text-[#E5C58B] text-sm mb-3">
              Schritt 01
            </div>

            <h3 className="text-white text-xl mb-3">
              Kennenlernen
            </h3>

            <p className="text-white/60 text-sm leading-relaxed">
              In einem kurzen Gespräch lernen wir uns kennen.
              Gemeinsam schauen wir, was du brauchst und welche
              Ziele du erreichen möchtest.
            </p>
          </div>

          <div className="p-6 border border-white/10 rounded-2xl">
            <div className="text-[#E5C58B] text-sm mb-3">
              Schritt 02
            </div>

            <h3 className="text-white text-xl mb-3">
              Vorschau erhalten
            </h3>

            <p className="text-white/60 text-sm leading-relaxed">
              Du erhältst eine erste Vorschau deiner neuen Website.
              So kannst du dir alles in Ruhe ansehen, bevor eine
              Entscheidung getroffen wird.
            </p>
          </div>

          <div className="p-6 border border-white/10 rounded-2xl">
            <div className="text-[#E5C58B] text-sm mb-3">
              Schritt 03
            </div>

            <h3 className="text-white text-xl mb-3">
              Umsetzung & Go-Live
            </h3>

            <p className="text-white/60 text-sm leading-relaxed">
              Nach deiner Freigabe setze ich die Website um,
              optimiere sie für Mobilgeräte und veröffentliche sie
              für deine Kunden.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}