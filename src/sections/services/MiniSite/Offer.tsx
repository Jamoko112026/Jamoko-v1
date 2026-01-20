import { motion } from "framer-motion";

const packages = [
  {
    name: "Basic",
    price: "ab 590 €",
    featured: false,
    features: [
      "Mini-Website (1 Seite)",
      "Mobil optimiert",
      "Kontakt-Button & WhatsApp",
      "Basis-SEO",
      "Schnelle Umsetzung"
    ]
  },
  {
    name: "Plus",
    price: "ab 890 €",
    featured: true,
    features: [
      "Alles aus Basic",
      "Mehrere Sektionen",
      "Bild- & Layout-Optimierung",
      "Google-Business Optimierung",
      "Conversion-Struktur"
    ]
  },
  {
    name: "Premium",
    price: "ab 1.290 €",
    featured: false,
    features: [
      "Alles aus Plus",
      "Individuelles Design",
      "Mini-Case / Referenz",
      "Performance-Optimierung",
      "Persönliche Betreuung"
    ]
  }
];

export default function Offer() {
  return (
    <section id="offer" className="relative py-28 px-6 jamoko-section-bg">
      
      {/* Calm Background Glow */}
      <div className="absolute inset-0 pointer-events-none jamoko-soft-glow" />

      <div className="relative max-w-6xl mx-auto">

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="jamoko-headline-xl mb-4">
            Klare Pakete. Faire Preise.
          </h2>
          <p className="jamoko-text-muted max-w-xl mx-auto">
            Keine Agenturbindung. Keine Komplexität.  
            Du bekommst genau das, was dein Betrieb wirklich braucht.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className={`
                jamoko-card
                p-8
                flex
                flex-col
                ${pkg.featured ? "jamoko-card-featured" : ""}
              `}
            >

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  {pkg.name}
                </h3>

                <p className="jamoko-accent text-2xl mb-6">
                  {pkg.price}
                </p>

                <ul className="space-y-3 text-sm jamoko-text-soft mb-8">
                  {pkg.features.map(item => (
                    <li key={item} className="flex gap-2">
                      <span className="jamoko-accent">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <a
                href="#contact"
                className={`
                  mt-auto
                  jamoko-button
                  ${pkg.featured ? "jamoko-button-primary" : "jamoko-button-outline"}
                `}
              >
                Jetzt anfragen
              </a>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
