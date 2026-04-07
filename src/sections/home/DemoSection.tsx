export default function DemoSection() {
  return (
    <section id="beispiele" className="py-24 px-6 bg-[#001821] text-center">

      <div className="max-w-5xl mx-auto">

        {/* HEADLINE */}
        <h2 className="text-2xl md:text-3xl font-light text-white mb-4">
          Ein erster Eindruck
        </h2>

        <p className="text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed">
          So kann sich Ihre Website anfühlen.
          Ruhig, klar und auf den Punkt – damit Menschen sofort verstehen,
          warum sie sich für Sie entscheiden.
        </p>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* PHYSIO */}
          <a
            href="/physio-demo"
            className="group block rounded-2xl overflow-hidden border border-white/10 hover:border-jamoko-gold transition bg-[#001821]"
          >

            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src="/physio/physio_hero.jpg"
                alt="Physio Demo"
                className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#001821]/30 to-[#001821]/90" />
            </div>

            <div className="p-5 text-left">
              <h3 className="text-white text-lg mb-2">Physiotherapie</h3>

              <p className="text-white/60 text-sm leading-relaxed">
                Ruhiger Auftritt. Klare Struktur.
                <br />
                Vertrauen ab dem ersten Blick.
              </p>

              <p className="mt-4 text-jamoko-gold opacity-80 group-hover:opacity-100 transition">
                Demo ansehen →
              </p>
            </div>

          </a>

          {/* ULI */}
          <a
            href="/uli-glaser-demo"
            className="group block rounded-2xl overflow-hidden border border-white/10 hover:border-jamoko-gold transition bg-[#001821]"
          >

            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src="/uli/uli_hero.jpg"
                alt="Uli Glaser Demo"
                className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#001821]/30 to-[#001821]/90" />
            </div>

            <div className="p-5 text-left">
              <h3 className="text-white text-lg mb-2">Uli Glaser Design</h3>

              <p className="text-white/60 text-sm leading-relaxed">
                Klar präsentiert.
                <br />
                Reduziert auf das Wesentliche.
              </p>

              <p className="mt-4 text-jamoko-gold opacity-80 group-hover:opacity-100 transition">
                Demo ansehen →
              </p>
            </div>

          </a>

        </div>

      </div>
    </section>
  )
}