import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  MapPin,
  MessageCircle,
  Smartphone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Mini-Site",
  description:
    "Eine JaMoKo Mini-Site ist eine klare, schnelle Website für lokale Betriebe. Verständlich aufgebaut, mobil stark und persönlich betreut.",
  alternates: {
    canonical: "https://jamoko.de/mini-site",
  },
};

const strengths = [
  {
    title: "Schnell verständlich",
    text: "Besucher erkennen sofort, was du anbietest, für wen es passt und wie sie dich erreichen.",
    icon: CheckCircle2,
  },
  {
    title: "Für unterwegs gedacht",
    text: "Die Seite bleibt auf dem Smartphone ruhig, lesbar und einfach bedienbar.",
    icon: Smartphone,
  },
  {
    title: "Lokal verankert",
    text: "Standort, Öffnungszeiten, Kontaktwege und Vertrauen stehen dort, wo Menschen sie suchen.",
    icon: MapPin,
  },
];

const sections = [
  "Startbereich mit klarem Nutzen",
  "Angebot und Leistungen verständlich erklärt",
  "Vertrauenssignale wie Bilder, Bewertungen oder Referenzen",
  "Kontaktbereich mit Formular, Telefon, Mail oder WhatsApp",
];

const steps = [
  {
    title: "Kennenlernen",
    text: "Wir sprechen über deinen Betrieb, deine Kunden und das Ziel der Website.",
  },
  {
    title: "Struktur",
    text: "Ich sortiere Inhalte so, dass Besucher ohne Umwege verstehen, worum es geht.",
  },
  {
    title: "Umsetzung",
    text: "Die Mini-Site wird sauber gebaut, mobil geprüft und für den Start vorbereitet.",
  },
];

export default function MiniSitePage() {
  return (
    <div className="relative overflow-hidden">
      <section className="px-6 py-16 sm:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#E5C58B]">
              Mini-Site
            </p>
            <h1 className="mt-5 text-4xl font-light leading-tight text-white sm:text-5xl md:text-6xl">
              Eine klare Website für lokale Betriebe.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/58">
              Eine JaMoKo Mini-Site ist ein ruhiger digitaler Auftritt für
              Menschen, die gute Arbeit leisten und online verständlich
              gefunden werden möchten.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/kontakt"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#E5C58B] px-6 py-3 text-sm font-semibold text-[#001821] transition hover:-translate-y-0.5 hover:bg-[#efd49f]"
              >
                Website anfragen
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/projekte"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white/75 transition hover:border-white/30 hover:bg-white/5 hover:text-white"
              >
                Beispiele ansehen
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025] px-6 py-16 sm:px-8 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
          {strengths.map(({ title, text, icon: Icon }) => (
            <article
              key={title}
              className="rounded-3xl border border-white/10 bg-white/[0.025] p-7"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#1AC7A4]/20 bg-[#1AC7A4]/5 text-[#1AC7A4]">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h2 className="mt-8 text-lg font-medium text-white">{title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/50">
                {text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-6 py-20 sm:px-8 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#E5C58B]">
              Aufbau
            </p>
            <h2 className="mt-4 text-3xl font-light leading-tight text-white sm:text-4xl">
              Alles Wichtige.
              <span className="block text-white/40">Ohne Überladung.</span>
            </h2>
            <p className="mt-6 leading-relaxed text-white/55">
              Die Mini-Site ist bewusst kompakt. Sie beantwortet die Fragen,
              die vor einer Anfrage wirklich zählen, und führt ruhig zum
              nächsten Schritt.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-7 sm:p-8">
            <ul className="space-y-4">
              {sections.map((item) => (
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

      <section className="px-6 pb-24 sm:px-8 md:pb-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#E5C58B]">
              Zusammenarbeit
            </p>
            <h2 className="mt-4 text-3xl font-light leading-tight text-white sm:text-4xl">
              Ruhiger Prozess.
              <span className="block text-white/40">Klare Entscheidungen.</span>
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {steps.map((step, index) => (
              <article
                key={step.title}
                className="rounded-3xl border border-white/10 bg-white/[0.025] p-7"
              >
                <div className="mb-10 flex items-center justify-between">
                  <span className="text-sm tracking-[0.2em] text-[#E5C58B]">
                    0{index + 1}
                  </span>
                  <Clock3 className="h-4 w-4 text-white/20" aria-hidden="true" />
                </div>
                <h2 className="text-xl font-medium text-white">
                  {step.title}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-white/50">
                  {step.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 sm:px-8 md:pb-28">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-[#E5C58B]/30 bg-[#E5C58B] px-7 py-12 text-[#001821] sm:px-10 md:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#001821]/55">
            Nächster Schritt
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-light leading-tight sm:text-4xl">
            Lass uns klären, ob eine Mini-Site zu deinem Betrieb passt.
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-[#001821]/65">
            Ein kurzes Gespräch reicht, um Umfang, Inhalte und sinnvolle
            Prioritäten zu sortieren.
          </p>
          <Link
            href="/kontakt"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#001821] px-7 py-4 text-sm font-medium text-white transition hover:-translate-y-0.5"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Kontakt aufnehmen
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
