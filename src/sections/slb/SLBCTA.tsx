export default function SLBCTA() {
  return (
    <section className="py-24 md:py-32 px-6 bg-gradient-to-r from-[#FFD08A] to-[#F28C28] text-black">

      <div className="max-w-6xl mx-auto text-center">

        {/* HEADLINE */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Projekt starten
        </h2>

        {/* SUBLINE */}
        <p className="max-w-xl mx-auto mb-10 text-black/80 leading-relaxed">
          Sprechen Sie direkt mit unserem Team über Ihr Bauvorhaben.
          Wir beraten Sie transparent, unverbindlich und lösungsorientiert.
        </p>

        {/* CTA BUTTON */}
        <a
          href="#contact"
          className="
            inline-flex
            items-center
            justify-center
            px-10 py-4
            rounded-lg
            font-semibold
            text-white
            bg-[#0b1220]

            shadow-[0_14px_32px_rgba(0,0,0,0.4)]
            hover:shadow-[0_20px_46px_rgba(0,0,0,0.55)]
            hover:-translate-y-[2px]

            transition-all duration-200
          "
        >
          Projekt anfragen
        </a>

      </div>

    </section>
  );
}
