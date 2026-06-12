import SEO from "@/components/SEO";
import heroImage from "@/assets/jamoko/hero/hero-minisite.webp";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Clock3,
  LayoutTemplate,
  MapPin,
  MessageCircleMore,
  Search,
  Smartphone,
} from "lucide-react";
import { Link } from "react-router-dom";
import ContactSection from "../sections/end/ContactSection";
import MiniSitePricing from "../sections/services/MiniSite/Pricing";

const benefits = [
  {
    icon: LayoutTemplate,
    title: "Klar aufgebaut",
    text: "Besucher verstehen schnell, was du anbietest und warum sie bei dir richtig sind.",
  },
  {
    icon: Smartphone,
    title: "Mobil optimiert",
    text: "Deine Seite bleibt auf Smartphone, Tablet und Desktop einfach bedienbar.",
  },
  {
    icon: Search,
    title: "Lokal auffindbar",
    text: "Saubere Technik und SEO-Grundlagen helfen Suchmaschinen, dein Angebot einzuordnen.",
  },
  {
    icon: MessageCircleMore,
    title: "Kontakt leicht gemacht",
    text: "Telefon, E-Mail, WhatsApp oder Formular sind dort erreichbar, wo sie gebraucht werden.",
  },
];

const included = [
  "Individuelle Gestaltung im Jamoko-Stil",
  "Klare Seiten- und Inhaltsstruktur",
  "Optimierung für Mobilgeräte",
  "Kontaktformular, Telefon oder WhatsApp",
  "Google Maps und Öffnungszeiten",
  "SEO-Basics und schnelle Ladezeiten",
  "Impressum und Datenschutz eingebunden",
  "Persönliche Begleitung bis zum Go-Live",
];

const examples = [
  {
    title: "Goldschmiede",
    description: "Handwerkskunst, Beratung und Tradition hochwertig vermittelt.",
    image: "/cases/uli-glaser/Jamoko_Referenz_UliGlaser_Hero.png",
    alt: "Website von Uli Glaser Design",
    to: "/cases/uli-glaser",
  },
  {
    title: "Lokaler Service",
    description: "Leistungen und Kontaktwege für Menschen unterwegs klar geordnet.",
    image: "/ard/Hero_1920w_ARDlook.jpg",
    alt: "Website-Demo für einen lokalen Reifendienst",
    to: "/demos/reifendienst",
  },
  {
    title: "Gesundheitspraxis",
    description: "Eine ruhige Nutzerführung, die früh Vertrauen entstehen lässt.",
    image: "/physio/physio_hero.jpg",
    alt: "Website-Demo für eine Physiotherapiepraxis",
    to: "/demos/physio",
  },
];

const steps = [
  {
    number: "01",
    title: "Kennenlernen",
    text: "Wir klären dein Angebot, deine Zielgruppe und was die neue Website für dich leisten soll.",
  },
  {
    number: "02",
    title: "Inhalte & Vorschau",
    text: "Aus deinen Informationen entsteht eine erste klare Struktur mit Gestaltung und Textvorschlägen.",
  },
  {
    number: "03",
    title: "Umsetzung & Go-Live",
    text: "Nach deinem Feedback wird alles finalisiert, getestet und unter deiner Domain veröffentlicht.",
  },
];

const faqItems = [
  {
    question: "Für wen eignet sich eine Mini-Site?",
    answer:
      "Für lokale Betriebe, Selbstständige, Praxen und kleine Unternehmen, die ihr Angebot verständlich präsentieren und leichter erreichbar sein möchten.",
  },
  {
    question: "Brauche ich bereits fertige Texte und Bilder?",
    answer:
      "Nein. Stichpunkte und vorhandenes Material reichen für den Start. Jamoko unterstützt bei Struktur, Formulierungen und der Auswahl geeigneter Bilder.",
  },
  {
    question: "Wie lange dauert die Umsetzung?",
    answer:
      "Das hängt von Umfang und Materiallage ab. Eine kompakte Mini-Site kann meist innerhalb weniger Wochen geplant, abgestimmt und veröffentlicht werden.",
  },
  {
    question: "Kann die Website später erweitert werden?",
    answer:
      "Ja. Weitere Seiten, Referenzen, Leistungen oder Funktionen können ergänzt werden, wenn dein Unternehmen wächst.",
  },
  {
    question: "Entstehen laufende Agenturkosten?",
    answer:
      "Für Konzeption und Umsetzung gilt ein transparenter Einmalpreis. Laufende Kosten entstehen nur für notwendige externe Leistungen wie Domain oder Hosting.",
  },
];

export default function MiniSite() {
  return (
    <>
      <SEO
        title="Mini-Sites für lokale Unternehmen · Jamoko"
        description="Individuelle, mobil optimierte Mini-Sites für lokale Unternehmen. Klar strukturiert, persönlich gestaltet und ohne laufende Agenturkosten."
        url="https://jamoko.de/minisite"
      />

      <main className="overflow-hidden bg-[#001821] text-white">
        <section
          id="hero"
          className="relative px-6 pb-24 pt-16 sm:px-8 md:pb-32 md:pt-24"
        >
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <div className="absolute -left-40 top-0 h-[34rem] w-[34rem] rounded-full bg-[#E5C58B]/10 blur-3xl" />
            <div className="absolute -right-48 top-1/3 h-[32rem] w-[32rem] rounded-full bg-[#1AC7A4]/10 blur-3xl" />
          </div>

          <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-[#E5C58B]">
                Jamoko Mini-Site
              </p>
              <h1 className="text-4xl font-light leading-[1.06] tracking-tight sm:text-5xl md:text-6xl">
                Alles Wichtige über dein Unternehmen.
                <span className="block text-white/40">
                  Klar an einem Ort.
                </span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg font-light leading-relaxed text-white/60 md:text-xl">
                Eine kompakte Website, die dein Angebot verständlich macht,
                Vertrauen aufbaut und Menschen direkt zur Kontaktaufnahme führt.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#preise"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#E5C58B] px-7 py-4 text-sm font-semibold text-[#001821] transition hover:-translate-y-0.5 hover:bg-[#efd49f]"
                >
                  Pakete ansehen
                  <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <Link
                  to="/kontakt"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-4 text-sm font-medium text-white/75 transition hover:border-white/30 hover:bg-white/5 hover:text-white"
                >
                  Projekt besprechen
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>

              <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/40">
                <span className="flex items-center gap-2">
                  <Clock3 className="h-4 w-4 text-[#1AC7A4]" aria-hidden="true" />
                  Überschaubarer Prozess
                </span>
                <span className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[#1AC7A4]" aria-hidden="true" />
                  Für lokale Sichtbarkeit
                </span>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-xl lg:justify-self-end">
              <div
                className="absolute -inset-8 rounded-full bg-[#E5C58B]/10 blur-3xl"
                aria-hidden="true"
              />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#012631] p-3 shadow-2xl shadow-black/30">
                <div className="flex items-center gap-2 px-3 py-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#1AC7A4]/60" />
                  <span className="ml-auto text-[10px] uppercase tracking-[0.18em] text-white/25">
                    Deine Website
                  </span>
                </div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.4rem]">
                  <img
                    src={heroImage}
                    alt="Arbeitsplatz als Symbol für eine Jamoko Mini-Site"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#001821]/85 via-[#001821]/25 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#001821] to-transparent p-7 pt-24">
                    <p className="text-xs uppercase tracking-[0.22em] text-[#E5C58B]">
                      Dein Betrieb
                    </p>
                    <p className="mt-3 max-w-sm text-2xl font-light leading-tight sm:text-3xl">
                      Persönlich. Verlässlich. Schnell erreichbar.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.025] px-6 py-24 sm:px-8 md:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="mb-14 max-w-2xl md:mb-16">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#E5C58B]">
                Warum eine Mini-Site?
              </p>
              <h2 className="text-3xl font-light leading-tight sm:text-4xl md:text-5xl">
                Kompakt im Umfang.
                <span className="block text-white/40">Stark in der Wirkung.</span>
              </h2>
              <p className="mt-6 leading-relaxed text-white/50">
                Du brauchst keine riesige Website. Du brauchst die richtigen
                Informationen in einer Reihenfolge, die Menschen verstehen.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map(({ icon: Icon, title, text }) => (
                <article
                  key={title}
                  className="rounded-3xl border border-white/10 bg-[#001821]/50 p-7 transition hover:-translate-y-1 hover:border-[#1AC7A4]/25"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#1AC7A4]/20 bg-[#1AC7A4]/5 text-[#1AC7A4]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-7 text-lg font-medium">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/45">
                    {text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-24 sm:px-8 md:py-32">
          <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-24">
            <div className="lg:sticky lg:top-32">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#E5C58B]">
                Leistungsumfang
              </p>
              <h2 className="text-3xl font-light leading-tight sm:text-4xl md:text-5xl">
                Was deine Mini-Site mitbringt.
              </h2>
              <p className="mt-6 leading-relaxed text-white/50">
                Gestaltung, Technik und Nutzerführung werden als ein
                zusammenhängender Auftritt entwickelt.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {included.map((item, index) => (
                <div
                  key={item}
                  className="flex min-h-28 gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-5"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#E5C58B]/10 text-xs text-[#E5C58B]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm leading-relaxed text-white/65">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.025] px-6 py-24 sm:px-8 md:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="mb-14 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#E5C58B]">
                  Beispiele
                </p>
                <h2 className="text-3xl font-light leading-tight sm:text-4xl md:text-5xl">
                  Eine Struktur.
                  <span className="block text-white/40">
                    Unterschiedliche Charaktere.
                  </span>
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-white/45 md:text-right">
                Jede Seite wird passend zum Unternehmen gestaltet und nicht aus
                einer fertigen Vorlage übernommen.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {examples.map((example) => (
                <Link
                  key={example.title}
                  to={example.to}
                  className="group overflow-hidden rounded-3xl border border-white/10 bg-[#001821]/60 transition hover:-translate-y-1 hover:border-[#E5C58B]/35"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={example.image}
                      alt={example.alt}
                      loading="lazy"
                      className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#001821]/80 via-transparent to-transparent" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-lg font-medium">{example.title}</h3>
                      <ArrowUpRight
                        className="h-4 w-4 shrink-0 text-[#E5C58B]"
                        aria-hidden="true"
                      />
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-white/45">
                      {example.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-24 sm:px-8 md:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto mb-14 max-w-2xl text-center md:mb-16">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#E5C58B]">
                Zusammenarbeit
              </p>
              <h2 className="text-3xl font-light sm:text-4xl md:text-5xl">
                In drei klaren Schritten online.
              </h2>
              <p className="mt-6 leading-relaxed text-white/50">
                Persönlich abgestimmt, nachvollziehbar aufgebaut und ohne
                unnötige technische Schleifen.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {steps.map((step, index) => (
                <article
                  key={step.number}
                  className="rounded-3xl border border-white/10 bg-white/[0.025] p-7 sm:p-8"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm tracking-[0.2em] text-[#E5C58B]">
                      {step.number}
                    </span>
                    {index < steps.length - 1 && (
                      <ArrowRight
                        className="hidden h-4 w-4 text-white/20 md:block"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                  <h3 className="mt-12 text-xl font-medium">{step.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/45">
                    {step.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="preise"
          className="border-y border-white/10 bg-white/[0.025]"
        >
          <MiniSitePricing />
        </section>

        <section className="px-6 py-24 sm:px-8 md:py-32">
          <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#E5C58B]">
                Häufige Fragen
              </p>
              <h2 className="text-3xl font-light leading-tight sm:text-4xl md:text-5xl">
                Gut zu wissen,
                <span className="block text-white/40">bevor wir starten.</span>
              </h2>
            </div>

            <div className="divide-y divide-white/10 border-y border-white/10">
              {faqItems.map((item) => (
                <details key={item.question} className="group py-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg text-white/80">
                    {item.question}
                    <span className="text-2xl font-light text-[#E5C58B] transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="max-w-2xl pt-4 text-sm leading-relaxed text-white/45">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
    </>
  );
}
