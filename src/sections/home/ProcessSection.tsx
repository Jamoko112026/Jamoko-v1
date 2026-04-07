export default function ProcessSection() {
  return (
    <section className="py-20 px-6 bg-[#001821] text-center">

      <div className="max-w-4xl mx-auto">

        <h2 className="text-2xl md:text-3xl font-light text-white mb-4">
          So läuft das ab
        </h2>

        <p className="text-white/60 mb-12">
          Klar. Persönlich. Schritt für Schritt – ohne Stress.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left">

          {/* STEP 1 */}
          <div className="p-6 border border-white/10 rounded-2xl">
            <h3 className="text-white mb-2">1. Kennenlernen</h3>
            <p className="text-white/60 text-sm">
              Wir sprechen kurz über dein Angebot und schauen,
              was du wirklich brauchst.
            </p>
          </div>

          {/* STEP 2 */}
          <div className="p-6 border border-white/10 rounded-2xl">
            <h3 className="text-white mb-2">2. Vorschau</h3>
            <p className="text-white/60 text-sm">
              Du bekommst eine klare Vorschau deiner Website –
              bevor du dich entscheidest.
            </p>
          </div>

          {/* STEP 3 */}
          <div className="p-6 border border-white/10 rounded-2xl">
            <h3 className="text-white mb-2">3. Umsetzung</h3>
            <p className="text-white/60 text-sm">
              Wenn alles passt, setze ich deine Website schnell
              und sauber für dich um.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}