import { motion } from "framer-motion";

export default function Demo() {
  return (
    <div className="min-h-screen bg-white text-black">

      {/* HERO */}
      <section className="bg-[#0A1F35] text-white py-24 px-6 text-center">
        <h1 className="text-4xl font-light mb-4">
          Musterbetrieb Hamburg
        </h1>
        <p className="opacity-80">
          Klar. Persönlich. Wirksam.
        </p>
      </section>

      {/* LEISTUNGEN */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">
          Leistungen
        </h2>

        <ul className="space-y-3">
          <li>✓ Beratung & Umsetzung</li>
          <li>✓ Persönlicher Ansprechpartner</li>
          <li>✓ Transparente Preise</li>
          <li>✓ Schnelle Terminvergabe</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="py-20 text-center bg-gray-100">
        <motion.a
          whileHover={{ scale: 1.05 }}
          className="inline-block px-6 py-3 bg-[#0A1F35] text-white rounded-xl"
          href="#"
        >
          Kontakt aufnehmen
        </motion.a>
      </section>

    </div>
  );
}