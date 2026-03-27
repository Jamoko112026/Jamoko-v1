import { motion } from "framer-motion";

export default function SushiDemo() {
  return (
    <main className="w-full bg-[#001821] text-white">

      {/* HERO */}
      <section className="relative min-h-[75vh] flex items-center justify-center text-center px-6 overflow-hidden">

        {/* Background Motion Image */}
        <motion.img
          src="/sushi/jamoko_sushi_hero_v1.jpg"
          alt="Sushi Hamburg"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.05, y: 0 }}
          animate={{ scale: 1.1, y: -10 }}
          transition={{
            duration: 22,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        {/* Dark Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#001821]/40 via-[#001821]/60 to-[#001821]/85"></div>

        {/* Gold Glow */}
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-jamoko-gold/15 rounded-full blur-[160px]"></div>

        {/* Teal Balance */}
        <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] bg-teal-400/10 rounded-full blur-[140px]"></div>

        {/* Content Animation */}
        <motion.div
          className="relative z-10 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >

          <h1 className="text-4xl md:text-5xl font-light mb-6 tracking-tight text-white/95">
            Sushi Lieferung in Hamburg
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-10">
            Frisch. Zuverlässig. Einfach gut.
          </p>

          <button className="px-8 py-3 rounded-xl bg-jamoko-gold text-black font-medium transition-all duration-300 hover:opacity-95 hover:shadow-[0_0_25px_rgba(229,197,139,0.35)]">
            Jetzt bestellen
          </button>

          <p className="mt-6 text-gray-300">
            Telefon: 040 18060773
          </p>

        </motion.div>
      </section>


      {/* SUSHI */}
      <section className="py-28 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl mb-6 font-light">
            Sushi in Winterhude
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Hier geht es nicht um Trends oder Experimente, sondern um gutes Sushi, das einfach funktioniert.  
            Frisch zubereitet, sauber gearbeitet und zuverlässig geliefert – genau das, was man erwartet.
          </p>
        </div>
      </section>


      {/* ANGEBOT */}
      <section className="py-28 px-6 bg-[#01212d]">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-3xl text-center mb-16 font-light">
            Unser Angebot
          </h2>

          <div className="grid md:grid-cols-2 gap-12 text-gray-300">

            <div>
              <h3 className="text-xl mb-2 text-white">Maki & Nigiri</h3>
              <p>Klassisches Sushi, frisch und ausgewogen zubereitet.</p>
            </div>

            <div>
              <h3 className="text-xl mb-2 text-white">Sushi Sets</h3>
              <p>Ideal für entspannte Abende – allein oder gemeinsam.</p>
            </div>

            <div>
              <h3 className="text-xl mb-2 text-white">Warme Gerichte</h3>
              <p>Ergänzende Speisen für eine vollständige Mahlzeit.</p>
            </div>

            <div>
              <h3 className="text-xl mb-2 text-white">Takeaway & Lieferung</h3>
              <p>Schnell, unkompliziert und zuverlässig bei dir.</p>
            </div>

          </div>

        </div>
      </section>


      {/* EINBLICK */}
      <section className="py-28 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl mb-6 font-light">
            Ein ruhiger Blick hinter die Bestellung
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Klare Abläufe, frische Zutaten und eine Küche, die weiß, was sie tut.  
            Kein Chaos, sondern ein verlässlicher Ablauf vom ersten Klick bis zur Lieferung.
          </p>
        </div>
      </section>


      {/* WEBSITE ERKLÄRUNG */}
      <section className="py-28 px-6 bg-[#01212d]">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl text-center mb-16 font-light">
            Warum eine klare Website wichtig ist
          </h2>

          <div className="grid md:grid-cols-2 gap-12">

            <div className="p-10 rounded-2xl bg-[#001821] border border-white/10">
              <h3 className="text-xl mb-4 text-white">
                Typische Sushi-Website
              </h3>
              <ul className="text-gray-300 space-y-2">
                <li>• überladen</li>
                <li>• unklare Struktur</li>
                <li>• Bestellung schwer auffindbar</li>
              </ul>
            </div>

            <div className="p-10 rounded-2xl bg-[#001821] border border-jamoko-gold/30">
              <h3 className="text-xl mb-4 text-jamoko-gold">
                JaMoKo Sushi-Seite
              </h3>
              <ul className="text-gray-300 space-y-2">
                <li>• ruhiger Einstieg</li>
                <li>• klare Struktur</li>
                <li>• Bestellung sofort möglich</li>
              </ul>
            </div>

          </div>

        </div>
      </section>


      {/* CTA */}
      <section className="py-28 px-6 text-center">
        <h2 className="text-3xl mb-6 font-light">
          Jetzt bestellen
        </h2>
        <button className="px-8 py-3 rounded-xl bg-jamoko-gold text-black font-medium transition-all duration-300 hover:opacity-95 hover:shadow-[0_0_25px_rgba(229,197,139,0.35)]">
          Bestellung starten
        </button>
        <p className="mt-6 text-gray-300">
          Telefon: 040 18060773
        </p>
      </section>


      {/* KONTAKT */}
      <section className="py-28 px-6 text-center bg-[#01212d]">

        <h2 className="text-3xl mb-6 font-light">
          Kontakt
        </h2>

        <p className="text-gray-300">
          Beispielseite für einen lokalen Sushi-Lieferservice <br />
          in Hamburg Winterhude
        </p>

        <p className="mt-6 text-gray-400">
          kontakt@sushi-demo.de
        </p>

        <p className="mt-10 text-sm text-gray-500">
          Erstellt von JaMoKo – Community First
        </p>

      </section>

    </main>
  );
}