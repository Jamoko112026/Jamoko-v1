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
        Digitale Ruhe.<br className="hidden sm:block" />
        Spürbare Wirkung.
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
          JaMoKo steht für Technologie, die entlastet statt überfordert.
          Wir gestalten digitale Lösungen, die Klarheit schaffen,
          Orientierung geben und Menschen in ihrer Selbstständigkeit stärken.
        </p>

        <p>
          Technologie ist für uns kein Selbstzweck.
          Sie dient dem Menschen – leise, zuverlässig und verständlich.
          Echte Barrierefreiheit beginnt dort, wo Technologie begleitet
          und Beziehung zulässt.
        </p>

        <p>
          JaMoKo richtet sich an Selbständige und kleine Unternehmen,
          die einen ruhigen, professionellen Online-Auftritt wollen
          und persönliche Begleitung schätzen.
          Nicht für Baukästen, nicht für lautes Marketing –
          sondern für Klarheit.
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
        Reduktion ist Qualität. Beziehung steht vor Funktion.
      </p>

    </motion.section>
  );
}
