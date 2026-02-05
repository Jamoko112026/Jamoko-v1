import { motion } from "framer-motion";

export default function BusinessPricing() {
  return (
    <section className="px-6 py-36">

      <div className="max-w-7xl mx-auto space-y-24">

        {/* ======================
            HEADER
        ====================== */}
        <header className="max-w-3xl space-y-6">

          <h2 className="text-3xl md:text-4xl font-semibold text-jamoko-gold">
            Business Lösungen — fair & transparent
          </h2>

          <p className="text-jamoko-text-dim leading-relaxed">
            Keine Agenturpakete. Keine Abos. Keine Abhängigkeiten.
            Jedes Projekt wird klar definiert, sauber umgesetzt
            und als einmalige Investition realisiert.
          </p>

        </header>

        {/* ======================
            PRICING GRID
        ====================== */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* FOUNDATION */}
          <PricingCard
            title="Business Foundation"
            price="ab 1.900 €"
            description="Professioneller Einstieg für klare Unternehmenspräsenz."
            features={[
              "Unternehmens-Website (3–5 Seiten)",
              "Strukturierte Angebotsdarstellung",
              "Ruhiges Business Design",
              "Mobile Optimierung",
              "SEO Basis-Setup",
              "Impressum & Datenschutz Integration",
            ]}
          />

          {/* GROWTH */}
          <PricingCard
            highlight
            title="Business Growth"
            price="ab 3.500 €"
            description="Für aktive Kundengewinnung und Markenpositionierung."
            features={[
              "Erweiterte Seitenarchitektur",
              "Conversion-orientierte Struktur",
              "Individuelles Layout-System",
              "Performance Optimierung",
              "Google Business Integration",
              "Zwei Feedbackrunden",
            ]}
          />

          {/* PRO */}
          <PricingCard
            title="Business Pro"
            price="Projektbasiert"
            description="Individuelle Systeme für skalierende Unternehmen."
            features={[
              "Maßgeschneiderte Architektur",
              "Funnel & Prozessabbildung",
              "Tool- & CRM-Anbindungen",
              "Mehrsprachigkeit optional",
              "Performance-Optimierung",
              "Persönliche Projektbegleitung",
            ]}
          />

        </div>

        {/* ======================
            TRUST NOTE
        ====================== */}
        <div className="max-w-3xl pt-8">

          <p className="text-sm text-jamoko-text-dim leading-relaxed">
            Jedes Business-Projekt startet mit einem ruhigen Erstgespräch.
            Danach erhältst du ein transparentes Festpreis-Angebot.
            Keine laufenden Agenturverträge. Keine versteckten Kosten.
          </p>

        </div>

      </div>

    </section>
  );
}

/* ======================
   Pricing Card Component
====================== */

function PricingCard({
  title,
  price,
  description,
  features,
  highlight = false,
}: {
  title: string;
  price: string;
  description: string;
  features: string[];
  highlight?: boolean;
}) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={`
        relative
        rounded-3xl
        p-10
        backdrop-blur-xl
        border
        ${
          highlight
            ? "bg-[#01212d]/85 border-jamoko-gold/40 shadow-[0_0_40px_rgba(229,197,139,0.22)]"
            : "bg-[#01212d]/65 border-jamoko-gold/20"
        }
      `}
    >

      {highlight && (
        <span
          className="
            absolute -top-4 left-8
            bg-jamoko-gold text-[#001821]
            text-xs font-semibold
            px-4 py-1 rounded-full
            tracking-wide
          "
        >
          Empfohlen
        </span>
      )}

      <div className="space-y-4">

        <h3 className="text-xl font-semibold text-jamoko-gold">
          {title}
        </h3>

        <p className="text-sm text-jamoko-text-dim">
          {description}
        </p>

        <div className="text-2xl font-semibold text-white pt-2">
          {price}
        </div>

      </div>

      <ul className="mt-8 space-y-3 text-sm text-jamoko-text-dim">

        {features.map((item, i) => (
          <li key={i} className="flex gap-2">
            <span className="text-jamoko-gold">✓</span>
            <span>{item}</span>
          </li>
        ))}

      </ul>

    </motion.div>
  );
}
