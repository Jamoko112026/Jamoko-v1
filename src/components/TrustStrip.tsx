export default function TrustStrip() {
  return (
    <section className="w-full py-10 border-t border-white/5 border-b border-white/5 bg-[#001821]">
      <div className="max-w-5xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">

          {/* POINT 1 */}
          <div>
            <p className="text-jamoko-gold text-lg mb-2">
              In wenigen Tagen online
            </p>
            <p className="text-white/50 text-sm">
              Keine langen Prozesse, keine unnötigen Schleifen.
            </p>
          </div>

          {/* POINT 2 */}
          <div>
            <p className="text-jamoko-gold text-lg mb-2">
              Kein Agentur-Overhead
            </p>
            <p className="text-white/50 text-sm">
              Direkt, klar und auf den Punkt umgesetzt.
            </p>
          </div>

          {/* POINT 3 */}
          <div>
            <p className="text-jamoko-gold text-lg mb-2">
              Eine Seite, die wirkt
            </p>
            <p className="text-white/50 text-sm">
              Statt Chaos bekommst du Klarheit und Struktur.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}