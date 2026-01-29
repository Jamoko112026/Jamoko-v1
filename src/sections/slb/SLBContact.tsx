export default function SLBContact() {
  return (
    <section
      id="kontakt"
      className="bg-[#0b1220] text-white py-24 px-6 border-t border-white/5"
    >
      <div className="max-w-5xl mx-auto text-center">

        {/* Headline */}
        <h2 className="text-2xl md:text-4xl font-semibold mb-6">
          Projektanfrage stellen
        </h2>

        {/* Subline */}
        <p className="text-white/70 max-w-2xl mx-auto mb-10">
          Sie planen ein Bau- oder Infrastrukturprojekt?
          Kontaktieren Sie uns für eine unverbindliche Erstberatung.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center mb-10">
          <a
            href="mailto:dispo@slbautec.de"
            className="
              bg-[#f2b705]
              text-black
              font-medium
              px-10 py-4
              rounded-md
              shadow-md
              hover:bg-[#ffd24a]
              hover:shadow-lg
              transition
            "
          >
            Jetzt Kontakt aufnehmen
          </a>
        </div>

        {/* Contact Info */}
        <div className="text-sm text-white/70 space-y-2">
          <p>
            Telefon:{" "}
            <a
              href="tel:04050091310"
              className="text-white hover:text-[#f2b705] transition"
            >
              040 50091310
            </a>
          </p>

          <p>
            E-Mail:{" "}
            <a
              href="mailto:dispo@slbautec.de"
              className="text-white hover:text-[#f2b705] transition"
            >
              dispo@slbautec.de
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
