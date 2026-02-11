import { motion } from "framer-motion";

export default function BrandEssence() {
  return (
    <motion.section
      className="max-w-4xl mx-auto px-6 py-28"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >

      {/* Headline */}
      <h2
        className="
          text-3xl sm:text-4xl md:text-5xl
          font-light
          text-jamoko-gold
          mb-10
          tracking-wide
        "
      >
        Gute Arbeit —<br className="hidden sm:block" />
        aber wirkt Ihr Betrieb auch so?
      </h2>

      {/* Content */}
      <div
        className="
          space-y-7
          text-base sm:text-lg
          text-jamoko-text-dim
          leading-relaxed
          max-w-3xl
        "
      >

        <p>
          Viele Betriebe leisten starke Arbeit, doch ihr Außenauftritt zeigt das nicht.
          Websites sind unklar, veraltet oder erklären nicht sofort, was wirklich getan wird.
          Kunden müssen nachfragen, Vertrauen entsteht langsamer und der Betrieb wirkt schwächer, als er ist.
        </p>

        <p>
          Oft liegt das Problem nicht in der Arbeit selbst, sondern im Auftritt.
          Viele wissen: <em>Eigentlich sind wir besser, als wir online wirken.</em>
          Digital fühlt sich kompliziert an — statt unterstützend.
        </p>

        <p>
          Genau hier setzt JaMoKo an.
          Wir bringen Klarheit, Struktur und Ruhe in den Außenauftritt — ohne Technikstress,
          ohne Agentur-Chaos, ohne unnötige Komplexität.
        </p>

        <p>
          Der Betrieb wirkt klar, verständlich und vertrauenswürdig.
          Kunden verstehen sofort, was Sie tun — und melden sich.
          Digital arbeitet mit Ihnen, nicht gegen Sie.
        </p>

      </div>

      {/* Signature Line */}
      <p
        className="
          mt-12
          text-sm
          italic
          text-jamoko-text-dim
          opacity-70
          tracking-wide
        "
      >
        Ihr Außen passt zu Ihrer echten Arbeit.
      </p>

    </motion.section>
  );
}
