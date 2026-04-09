export default function ARDDemoContact() {
  return (
    <section id="kontakt" className="py-20 px-6 text-center">

      <h2 className="text-2xl md:text-3xl font-light mb-6">
        Termin anfragen
      </h2>

      <p className="text-white/60 mb-8">
        Schnell & unkompliziert – wir melden uns zeitnah zurück.
      </p>

      <div className="flex flex-col md:flex-row gap-4 justify-center">

        <a
          href="tel:+49123456789"
          className="px-6 py-3 bg-jamoko-gold text-[#001821] rounded-full"
        >
          Jetzt anrufen
        </a>

        <a
          href="mailto:info@reifendienst.de"
          className="px-6 py-3 border border-white/20 rounded-full"
        >
          E-Mail senden
        </a>

      </div>

    </section>
  );
}