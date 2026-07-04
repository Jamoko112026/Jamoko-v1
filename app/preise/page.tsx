import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  HeartHandshake,
  MessageCircle,
  SearchCheck,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Preise",
  description:
    "Faire Preise und klare Leistungen bei JaMoKo. Transparente Einstiegspakete, persönliche Beratung und Angebote nach Bedarf.",
  alternates: {
    canonical: "https://jamoko.de/preise",
  },
};

const offers = [
  {
    title: "Starter",
    price: "ab 199 €",
    text: "Für kleine Anpassungen, erste Klarheit oder eine einzelne Seite, die sauber stehen soll.",
    features: [
      "kurze Bestandsaufnahme",
      "klare Empfehlung zum nächsten Schritt",
      "kleiner, sauber abgegrenzter Umfang",
      "persönliche Abstimmung",
    ],
  },
  {
    title: "Wachstum",
    price: "ab 499 €",
    text: "Für Betriebe, die ihre Website sichtbar verbessern und Inhalte verständlicher führen möchten.",
    features: [
      "Struktur und Inhalte sortieren",
      "wichtige Seiten oder Bereiche überarbeiten",
      "mobile Darstellung prüfen",
      "Kontaktwege klarer machen",
    ],
    highlight: true,
  },
  {
    title: "Individuell",
    price: "auf Anfrage",
    text: "Für neue Websites, größere Weiterentwicklungen oder Projekte mit mehreren Beteiligten.",
    features: [
      "gemeinsames Vorgespräch",
      "Angebot nach Bedarf",
      "realistischer Zeit- und Leistungsumfang",
      "nachvollziehbare Prioritäten",
    ],
  },
];

const trustCards = [
  {
    title: "Persönlich",
    text: "Du sprichst direkt mit der Person, die dein Projekt versteht und umsetzt.",
    icon: HeartHandshake,
  },
  {
    title: "Verständlich",
    text: "Wir erklären Entscheidungen so, dass du sie nachvollziehen kannst.",
    icon: MessageCircle,
  },
  {
    title: "Transparent",
    text: "Du weißt vor dem Start, worum es geht und was enthalten ist.",
    icon: SearchCheck,
  },
  {
    title: "Nachhaltig",
    text: "Wir bauen nichts ein, was später nur Aufwand macht.",
    icon: ShieldCheck,
  },
];

const notForSale = [
  "unnötig große Pakete",
  "Druck durch künstliche Knappheit",
  "Funktionen, die niemand braucht",
  "Fachbegriffe statt Erklärung",
  "Design-Effekte ohne Nutzen",
];

const faqs = [
  {
    question: "Warum gibt es keine feste Preisliste für alles?",
    answer:
      "Weil Websites sehr unterschiedlich starten. Manche brauchen nur klare Struktur. Andere brauchen neue Inhalte, Technik oder Abstimmung mit mehreren Personen. Ein fester Preis ohne Blick auf den Bedarf wäre nicht ehrlich.",
  },
  {
    question: "Was passiert im kostenlosen Kennenlernen?",
    answer:
      "Wir sprechen kurz über dein Unternehmen, deine aktuelle Website und dein Ziel. Danach lässt sich besser einschätzen, welcher Umfang sinnvoll ist.",
  },
  {
    question: "Muss ich direkt ein großes Projekt starten?",
    answer:
      "Nein. Oft ist ein kleiner, klarer erster Schritt sinnvoller. JaMoKo soll helfen, bessere Entscheidungen zu treffen, nicht möglichst viel auf einmal zu verkaufen.",
  },
  {
    question: "Sind die Preise Netto- oder Bruttopreise?",
    answer:
      "Die genaue Preisangabe klären wir im Angebot. Wichtig ist: Vor dem Start ist transparent, welche Leistung enthalten ist und welcher Betrag dafür anfällt.",
  },
];

function SectionHeading({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#E5C58B]">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-light leading-tight text-white sm:text-4xl">
        {title}
      </h2>
      {intro ? (
        <p className="mt-5 text-base leading-8 text-white/58">{intro}</p>
      ) : null}
    </div>
  );
}

function TextSection({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="px-6 py-20 sm:px-8 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
        <SectionHeading eyebrow={eyebrow} title={title} />
        <div className="space-y-5 text-base leading-8 text-white/58">
          {children}
        </div>
      </div>
    </section>
  );
}

export default function PricingPage() {
  return (
    <div className="relative overflow-hidden">
      <section className="px-6 py-16 sm:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#E5C58B]">
              Preise
            </p>
            <h1 className="mt-5 text-4xl font-light leading-tight text-white sm:text-5xl md:text-6xl">
              Faire Preise.
              <span className="block text-white/40">Klare Leistungen.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/58">
              Gute digitale Arbeit beginnt mit Verständnis. Deshalb sprechen
              wir zuerst über Bedarf, Umfang und Prioritäten, bevor ein Angebot
              entsteht.
            </p>
            <Link
              href="/kontakt"
              className="mt-9 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#E5C58B] px-6 py-3 text-sm font-semibold text-[#001821] transition hover:-translate-y-0.5 hover:bg-[#efd49f]"
            >
              Kostenlos kennenlernen
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <TextSection
        eyebrow="Transparenz"
        title="Warum wir transparent sind"
      >
        <p>
          Eine Website ist für viele lokale Unternehmen keine alltägliche
          Entscheidung. Deshalb soll der Preis nachvollziehbar sein.
        </p>
        <p>
          Du sollst verstehen, was gemacht wird, warum es sinnvoll ist und
          welcher Aufwand dahintersteht. Nicht erst am Ende. Sondern bevor wir
          beginnen.
        </p>
        <p>
          Transparenz heißt für uns auch: Wenn etwas gerade nicht nötig ist,
          sagen wir das.
        </p>
      </TextSection>

      <section className="border-y border-white/10 bg-white/[0.025] px-6 py-20 sm:px-8 md:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Angebote"
            title="Drei ruhige Einstiege. Kein Druck."
            intro="Die Pakete geben Orientierung. Der genaue Umfang entsteht im Gespräch und richtet sich nach dem, was dein Projekt wirklich braucht."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {offers.map((offer) => (
              <article
                key={offer.title}
                className={`relative flex flex-col rounded-3xl border p-7 sm:p-8 ${
                  offer.highlight
                    ? "border-[#E5C58B]/60 bg-[#E5C58B]/[0.07] shadow-[0_20px_70px_rgba(229,197,139,0.08)]"
                    : "border-white/10 bg-white/[0.025]"
                }`}
              >
                {offer.highlight ? (
                  <span className="absolute -top-3 left-7 rounded-full bg-[#E5C58B] px-3 py-1 text-xs font-medium text-[#001821]">
                    Häufig passend
                  </span>
                ) : null}
                <h2 className="text-2xl font-medium text-white">
                  {offer.title}
                </h2>
                <p className="mt-4 text-4xl font-light text-[#E5C58B]">
                  {offer.price}
                </p>
                <p className="mt-5 leading-relaxed text-white/54">
                  {offer.text}
                </p>
                <div className="my-7 h-px bg-white/10" />
                <ul className="space-y-3">
                  {offer.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex gap-3 text-sm text-white/60"
                    >
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#1AC7A4]"
                        aria-hidden="true"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/kontakt"
                  className="mt-8 inline-flex min-h-11 w-fit items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-white/75 transition hover:border-white/30 hover:bg-white/5 hover:text-white"
                >
                  Projekt besprechen
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-8 md:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Vertrauen"
            title="Was du bei JaMoKo erwarten kannst"
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {trustCards.map(({ title, text, icon: Icon }) => (
              <article
                key={title}
                className="rounded-3xl border border-white/10 bg-white/[0.025] p-7"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#1AC7A4]/20 bg-[#1AC7A4]/5 text-[#1AC7A4]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h2 className="mt-8 text-xl font-medium text-white">
                  {title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-white/52">
                  {text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025] px-6 py-20 sm:px-8 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            eyebrow="Bewusst nicht"
            title="Was wir bewusst nicht verkaufen"
            intro="Nicht alles, was möglich ist, hilft einer Website. Deshalb lassen wir Dinge weg, wenn sie keine Klarheit schaffen."
          />
          <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-7 sm:p-8">
            <ul className="space-y-4">
              {notForSale.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-white/62">
                  <CheckCircle2
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#1AC7A4]"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <TextSection eyebrow="Preisversprechen" title="Der Preis folgt dem Bedarf.">
        <p>
          Wir empfehlen nur, was dein Projekt wirklich weiterbringt. Wenn ein
          kleiner Schritt reicht, bleibt es ein kleiner Schritt.
        </p>
        <p>
          Vor dem Start ist klar, welche Leistung enthalten ist, welche
          Entscheidung wir gemeinsam treffen und welche Kosten entstehen.
        </p>
        <p>
          Das ist für uns fairer als große Pakete, die mehr versprechen, als ein
          Betrieb im Moment braucht.
        </p>
      </TextSection>

      <section className="border-y border-white/10 bg-white/[0.025] px-6 py-20 sm:px-8 md:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="FAQ"
            title="Häufige Fragen zu Preisen und Umfang"
          />

          <div className="mt-12 grid gap-4">
            {faqs.map((item) => (
              <details
                key={item.question}
                className="group rounded-3xl border border-white/10 bg-white/[0.025] p-6 open:border-[#E5C58B]/35 open:bg-white/[0.045]"
              >
                <summary className="flex cursor-pointer items-start justify-between gap-6 text-left text-lg font-medium text-white">
                  <span>{item.question}</span>
                  <span className="mt-1 text-[#E5C58B] transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-5 max-w-3xl text-sm leading-7 text-white/55">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-8 md:py-28">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-[#E5C58B]/30 bg-[#E5C58B] px-7 py-12 text-[#001821] sm:px-10 md:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#001821]/55">
            Nächster Schritt
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-light leading-tight sm:text-4xl">
            Kostenlos kennenlernen
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-[#001821]/65">
            In einem kurzen Gespräch klären wir, wo du stehst, was deine
            Website leisten soll und welcher Umfang sinnvoll ist.
          </p>
          <Link
            href="/kontakt"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#001821] px-7 py-4 text-sm font-medium text-white transition hover:-translate-y-0.5"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Kostenlos kennenlernen
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
