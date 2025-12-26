import { motion } from "framer-motion";

export default function GlowPreview() {
  return (
    <section
      id="glow-preview"
      className="relative py-32 px-6 bg-jamoko-navy text-jamoko-text overflow-hidden"
    >
      {/* Hintergrund-Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(229,197,139,0.15),transparent_70%)]"
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-12">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="hero-title mb-6"
        >
          Luminous Balance – Theme Preview
        </motion.h1>

        <p className="hero-sub max-w-2xl mx-auto">
          Diese Vorschau zeigt dir den JaMoKo-Look in Aktion: Glow, Farben, Typo
          und Glas-Karten. Ruhig, klar und spürbar.
        </p>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="card-glass max-w-xl mx-auto text-left space-y-4"
        >
          <h2 className="text-jamoko-gold font-semibold text-2xl">
            Calm-Energy Card
          </h2>
          <p className="text-jamoko-text/90 leading-relaxed">
            Das ist eine Glass-Card mit weichem Glow-Schatten, abgestimmt auf
            deinen Farbverlauf aus Gold → Teal. Ideal für Leistungsblöcke oder
            Testimonials.
          </p>

          <div className="space-y-2">
            <input type="text" placeholder="Dein Name" />
            <textarea placeholder="Deine Nachricht" rows={3}></textarea>
            <button>Senden</button>
          </div>
        </motion.div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          <a href="#!" className="link-btn">
            Mehr erfahren
          </a>
        </motion.div>
      </div>
    </section>
  );
}
