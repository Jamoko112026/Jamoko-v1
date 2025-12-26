import { motion } from "framer-motion";
import GlowBackground from "../components/backgrounds/GlowBackground";

export default function About() {
  return (
    <GlowBackground>
      <section className="relative max-w-3xl mx-auto px-6 py-32 text-center text-jamoko-text">

        {/* Überschrift */}
        <motion.h1
          className="text-3xl md:text-4xl font-headline text-[#E5C58B] mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Über mich
        </motion.h1>

        {/* Text */}
        <motion.div
          className="space-y-6 text-lg leading-relaxed text-jamoko-text/90"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1.2 }}
          viewport={{ once: true }}
        >
          <p>
            Ich arbeite für <strong>Frieden im Kopf</strong> und
            <strong> Kraft fürs Eigene</strong>.
          </p>

          <p>
            Nach vielen Jahren im Handwerk habe ich gelernt, dass gute Arbeit
            Ruhe braucht – klare Abläufe, saubere Entscheidungen
            und Respekt vor dem Menschen dahinter.
          </p>

          <p>
            Genau diese Haltung bringe ich mit <span className="text-[#E5C58B] font-medium">JaMoKo</span>
            in die digitale Welt: reduzierte Websites, klare Strukturen
            und ein Auftritt, der nicht schreit, sondern trägt.
          </p>

          <p>
            Ich glaube, dass Technologie dem Menschen dienen sollte.
            Dass Gestaltung Verantwortung trägt.
            Und dass echte Wirkung aus Klarheit entsteht – nicht aus Lautstärke.
          </p>
        </motion.div>

        {/* Abschluss */}
        <motion.p
          className="mt-16 text-sm text-jamoko-text/60"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          viewport={{ once: true }}
        >
          Jan-Moritz Koch · JaMoKo – Community First
        </motion.p>
      </section>
    </GlowBackground>
  );
}
