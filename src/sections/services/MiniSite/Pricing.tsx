import { Check } from "lucide-react";
import { motion } from "framer-motion";

const CALENDLY_LINK =
  "https://calendly.com/moin-jamoko/jamoko-mini-site-kennenlernen-15-min";

export default function PricingSection() {
  return (
    <motion.section
      id="pricing"
      className="relative mx-auto w-full max-w-6xl px-6 py-24 sm:px-8 md:py-32"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto mb-14 max-w-3xl text-center md:mb-16">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#E5C58B]">
          Transparente Pakete
        </p>
        <h2 className="text-3xl font-light text-white sm:text-4xl md:text-5xl">
          Klare Preise.
          <span className="block text-white/40">
            Ohne laufende Agenturkosten.
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-white/55">
          Eine faire Einmalzahlung für Konzeption, Gestaltung und technische
          Umsetzung. Der genaue Umfang wird vor dem Start gemeinsam festgelegt.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <PricingCard
          title="Mini-Site Basic"
          price="890 €"
          subtitle="Für eine klare digitale Präsenz"
          features={[
            "1–3 Seiten",
            "Individuelles Jamoko Design",
            "Für Mobilgeräte optimiert",
            "Kontaktformular oder WhatsApp",
            "Google Maps & Öffnungszeiten",
            "Basis SEO & Performance",
            "Impressum & Datenschutz",
          ]}
        />

        <PricingCard
          highlight
          title="Mini-Site Plus"
          price="1.490 €"
          subtitle="Für einen umfangreicheren Auftritt"
          features={[
            "4–5 Seiten",
            "Erweitertes individuelles Design",
            "Nutzen- und Vertrauenssektionen",
            "Bildergalerie oder Referenzen",
            "Erweiterte SEO-Grundlage",
            "Zusätzliche Feedbackrunde",
          ]}
        />
      </div>

      <div className="mt-10 text-center">
        <p className="text-sm text-white/45">
          Unverbindliches Kennenlernen · Keine Zahlung vorab · Faire
          Einmalpreise
        </p>
      </div>
    </motion.section>
  );
}

function PricingCard({
  title,
  price,
  subtitle,
  features,
  highlight = false,
}: {
  title: string;
  price: string;
  subtitle: string;
  features: string[];
  highlight?: boolean;
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.4 }}
      className={`relative flex flex-col rounded-3xl border p-7 sm:p-9 ${
        highlight
          ? "border-[#E5C58B]/60 bg-[#E5C58B]/[0.07] shadow-[0_20px_70px_rgba(229,197,139,0.08)]"
          : "border-white/10 bg-white/[0.025]"
      }`}
    >
      {highlight && (
        <span className="absolute -top-3 left-7 rounded-full bg-[#E5C58B] px-3 py-1 text-xs font-medium text-[#001821]">
          Empfehlung
        </span>
      )}

      <h3 className="text-xl font-medium text-white">{title}</h3>
      <p className="mt-2 text-sm text-white/45">{subtitle}</p>

      <div className="mt-7 text-4xl font-light text-[#E5C58B]">
        {price}
        <span className="ml-2 text-sm font-normal text-white/40">
          einmalig
        </span>
      </div>

      <div className="my-7 h-px bg-white/10" />

      <ul className="mb-9 space-y-3 text-sm text-white/60">
        {features.map((item) => (
          <li key={item} className="flex gap-3">
            <Check
              className="mt-0.5 h-4 w-4 shrink-0 text-[#1AC7A4]"
              aria-hidden="true"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <a
        href={CALENDLY_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-auto inline-flex w-full items-center justify-center rounded-full px-6 py-3.5 text-sm font-medium transition ${
          highlight
            ? "bg-[#E5C58B] text-[#001821] hover:bg-[#efd49f]"
            : "border border-white/15 text-white/75 hover:border-white/30 hover:bg-white/5 hover:text-white"
        }`}
      >
        Kennenlerngespräch buchen
      </a>
    </motion.div>
  );
}
