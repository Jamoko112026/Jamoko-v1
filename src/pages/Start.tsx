import { motion } from "framer-motion";

export default function Start() {
  return (
    <main className="bg-[#001821] text-jamoko-text">

      {/* HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">

        {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#001821] via-[#001821]/95 to-[#001821]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(229,197,139,0.12),transparent_65%)]" />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="
            relative z-10
            max-w-3xl mx-auto
            text-center
            px-8 py-16
            rounded-3xl
            bg-white/5
            backdrop-blur-xl
            border border-white/10
            shadow-[0_0_60px_rgba(0,0,0,0.45)]
          "
        >

          <h1 className="text-3xl md:text-5xl font-headline text-[#E5C58B] mb-6">
            Ruhige Mini-Websites<br />für lokale Betriebe
          </h1>

          <p className="text-lg text-jamoko-text/80 leading-relaxed mb-10">
            Klar. Persönlich. Wirksam.<br />
            Digitale Präsenz ohne Stress – für echte Menschen.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">

            <a
              href="/minisite"
              className="
                px-8 py-4 rounded-lg
                bg-[#E5C58B]
                text-[#001821]
                font-semibold
                shadow-lg
                hover:bg-[#ffdca3]
                transition
              "
            >
              Beispiel ansehen
            </a>

            <a
              href="/kontakt"
              className="
                px-8 py-4 rounded-lg
                border border-[#E5C58B]/40
                text-[#E5C58B]
                hover:bg-[#E5C58B]/10
                transition
              "
            >
              Kontakt aufnehmen
            </a>

          </div>

        </motion.div>

      </section>

      {/* TRUST LINE */}
      <section className="py-20 text-center">

        <p className="text-jamoko-text/70 text-sm tracking-wide">
          Community First · Digitale Ruhe · Nachhaltige Wirkung
        </p>

      </section>

    </main>
  );
}
