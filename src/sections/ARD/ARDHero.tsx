// src/sections/ARD/ARDHero.tsx

export default function ARDHero() {
  return (
    <section className="relative h-[60vh] md:h-[70vh] w-full flex items-center justify-center text-center">

      {/* Hintergrundbild */}
      <img
        src="/ard/Hero_1920w_ARDlook.jpg"
        alt="Altonaer Reifendienst Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dunkles Overlay */}
      <div className="absolute inset-0 bg-black/55"></div>

      {/* Text */}
      <div className="relative z-10 px-6 text-white">
        <h1 className="text-4xl md:text-5xl font-light mb-3 drop-shadow-lg">
          Altonaer Reifendienst
        </h1>

        <h2 className="text-2xl md:text-3xl font-light text-blue-200 mb-6 drop-shadow">
          Schnell. Ehrlich. Lokal.
        </h2>

        <p className="max-w-xl mx-auto text-lg mb-10 text-blue-100 leading-relaxed drop-shadow">
          Reifenwechsel • Einlagerung • Profilcheck  
          – direkt in Hamburg-Altona.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="https://wa.me/"
            className="bg-white text-[#0A1F35] px-6 py-3 rounded-xl font-semibold shadow-lg"
          >
            WhatsApp Termin
          </a>

          <a
            href="tel:+4940434993"
            className="bg-[#D40000] px-6 py-3 rounded-xl text-white font-semibold shadow-lg"
          >
            Anrufen
          </a>
        </div>
      </div>
    </section>
  );
}
