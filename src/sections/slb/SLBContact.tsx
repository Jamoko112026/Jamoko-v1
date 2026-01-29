export default function SLBContact() {
  return (
    <section
      id="contact"
      className="py-24 md:py-32 px-6 bg-[#0f1720] text-white"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">

        {/* LEFT INFO */}
        <div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Kontakt aufnehmen
          </h2>

          <p className="text-white/70 mb-10 max-w-md leading-relaxed">
            Sie planen ein Bauprojekt oder benötigen Unterstützung im
            Straßen-, Tief- oder Glasfaserausbau?
            Unser Team berät Sie zuverlässig und lösungsorientiert.
          </p>

          <div className="space-y-5 text-white/90">

            <div>
              <span className="block text-white/50 text-sm">
                Telefon
              </span>
              <a
                href="tel:04050091310"
                className="text-lg font-semibold hover:text-[#f28c28] transition"
              >
                040 500 91 310
              </a>
            </div>

            <div>
              <span className="block text-white/50 text-sm">
                E-Mail
              </span>
              <a
                href="mailto:dispo@slbautec.de"
                className="text-lg font-semibold hover:text-[#f28c28] transition"
              >
                dispo@slbautec.de
              </a>
            </div>

            <div>
              <span className="block text-white/50 text-sm">
                Standort
              </span>
              <p className="text-lg leading-snug">
                Kielende 3d<br />
                22885 Barsbüttel
              </p>
            </div>

          </div>

        </div>

        {/* FORM */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-8 backdrop-blur">

          <h3 className="text-xl font-semibold mb-6">
            Projektanfrage senden
          </h3>

          {/* NETLIFY READY FORM */}
          <form
            name="slb-contact"
            method="POST"
            data-netlify="true"
            className="space-y-5"
          >
            <input type="hidden" name="form-name" value="slb-contact" />

            <input
              type="text"
              name="name"
              placeholder="Ihr Name"
              required
              className="w-full px-4 py-3 bg-[#0b1220] border border-white/10 rounded-md text-white focus:outline-none focus:border-[#f28c28]"
            />

            <input
              type="email"
              name="email"
              placeholder="E-Mail-Adresse"
              required
              className="w-full px-4 py-3 bg-[#0b1220] border border-white/10 rounded-md text-white focus:outline-none focus:border-[#f28c28]"
            />

            <textarea
              name="message"
              rows={4}
              placeholder="Kurzbeschreibung Ihres Projekts"
              className="w-full px-4 py-3 bg-[#0b1220] border border-white/10 rounded-md text-white focus:outline-none focus:border-[#f28c28]"
            />

            <button
              type="submit"
              className="
                w-full
                py-3
                rounded-md
                font-semibold
                text-[#111]
                bg-gradient-to-r from-[#FFD08A] to-[#F28C28]
                shadow-[0_12px_28px_rgba(242,140,40,0.35)]
                hover:shadow-[0_18px_42px_rgba(242,140,40,0.55)]
                hover:-translate-y-[1px]
                transition-all
              "
            >
              Anfrage senden
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}
