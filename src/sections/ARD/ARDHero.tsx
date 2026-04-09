export default function ARDHero() {
  return (
    <section className="relative h-[65vh] md:h-[75vh] w-full flex items-center justify-center text-center overflow-hidden">

      {/* Background */}
      <img
        src="/ard/Hero_1920w_ARDlook.jpg"
        alt="Altonaer Reifendienst Werkstatt"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay (wichtiger für Wirkung) */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Content */}
      <div className="relative z-10 px-6 text-white max-w-2xl">

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl font-light mb-4 tracking-wide">
          Reifenservice in Hamburg-Altona
        </h1>

        {/* Subline */}
        <h2 className="text-xl md:text-2xl font-light text-white/80 mb-6">
          Schnell. Ehrlich. Lokal.
        </h2>

        {/* Description */}
        <p className="text-base md:text-lg text-white/70 leading-relaxed mb-10">
          Reifenwechsel · Einlagerung · Profilcheck  
          <br className="hidden md:block" />
          direkt vor Ort – ohne Umwege.
        </p>

        {/* CTA */}
        <div className="flex justify-center gap-4 flex-wrap">

          <a
            href="https://wa.me/"
            className="bg-white text-[#0A1F35] px-6 py-3 rounded-xl font-medium shadow-md hover:scale-[1.02] transition"
          >
            Termin per WhatsApp
          </a>

          <a
            href="tel:+4940434993"
            className="bg-[#D40000] px-6 py-3 rounded-xl text-white font-medium shadow-md hover:scale-[1.02] transition"
          >
            Jetzt anrufen
          </a>

        </div>
      </div>
    </section>
  );
}