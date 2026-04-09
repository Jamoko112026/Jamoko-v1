export default function ARDDemoHero() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center text-center px-6 relative overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#001821] to-[#000] opacity-90" />

      {/* Content */}
      <div className="relative z-10 max-w-2xl">

        <h1 className="text-3xl md:text-5xl font-light mb-6 leading-tight">
          Reifenservice in Hamburg-Altona
          <br />
          <span className="text-jamoko-gold">schnell. zuverlässig. persönlich.</span>
        </h1>

        <p className="text-white/70 mb-8">
          Reifenwechsel, Einlagerung und Beratung – unkompliziert und direkt vor Ort.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="#kontakt"
            className="px-6 py-3 bg-jamoko-gold text-[#001821] rounded-full text-sm"
          >
            Termin anfragen
          </a>

          <a
            href="tel:+49123456789"
            className="px-6 py-3 border border-white/20 rounded-full text-sm"
          >
            Direkt anrufen
          </a>
        </div>

      </div>
    </section>
  );
}