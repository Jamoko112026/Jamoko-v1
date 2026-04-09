// src/sections/ARD/ARDContact.tsx
export default function ARDContact() {
  return (
    <section className="py-24 px-6 bg-[#0A1F35] text-white text-center">
      <div className="max-w-3xl mx-auto">

        {/* Headline */}
        <h2 className="text-2xl md:text-3xl font-light mb-6">
          Schnell wieder mobil.
        </h2>

        {/* Subline */}
        <p className="text-white/70 mb-10 leading-relaxed">
          Schreib uns kurz per WhatsApp oder ruf direkt an.  
          Wir kümmern uns schnell und unkompliziert.
        </p>

        {/* CTAs */}
        <div className="flex justify-center gap-4 flex-wrap mb-12">

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

        {/* Vertrauen / Info */}
        <div className="text-white/50 text-sm leading-relaxed">
          📍 Hamburg-Altona  
          <br />
          Schnell erreichbar – keine langen Wartezeiten
        </div>

      </div>
    </section>
  );
}