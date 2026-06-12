import {
  ArrowUpRight,
  Check,
  CircleHelp,
  CreditCard,
  Server,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

import SEO from "@/components/SEO";
import MiniSitePricing from "@/sections/services/MiniSite/Pricing";

const included = [
  "Konzeption und klare Seitenstruktur",
  "Individuelle Gestaltung im JaMoKo-Stil",
  "Optimierung für Smartphone und Tablet",
  "Technische Umsetzung und Veröffentlichung",
  "SEO-Grundlage und Performance-Optimierung",
  "Persönliche Begleitung bis zur Abnahme",
];

const costNotes = [
  {
    icon: CreditCard,
    title: "Einmaliger Projektpreis",
    text: "Der vereinbarte Preis deckt den festgelegten Umfang für Konzeption, Gestaltung und Umsetzung ab.",
  },
  {
    icon: Server,
    title: "Domain & Hosting",
    text: "Diese externen Dienste laufen idealerweise direkt auf deinen Namen und kosten je nach Anbieter separat.",
  },
  {
    icon: ShieldCheck,
    title: "Betreuung nach Wunsch",
    text: "Es gibt keinen verpflichtenden Agenturvertrag. Pflege und Erweiterungen kannst du bei Bedarf beauftragen.",
  },
];

const pricingFaq = [
  {
    question: "Welches Paket passt zu meinem Betrieb?",
    answer:
      "Basic passt für einen kompakten Auftritt mit wenigen klaren Seiten. Plus bietet mehr Raum für Leistungen, Vertrauen, Referenzen und eine umfangreichere Suchmaschinen-Grundlage. Im Erstgespräch bekommst du eine ehrliche Empfehlung.",
  },
  {
    question: "Kann der Preis vom Paketpreis abweichen?",
    answer:
      "Ja, wenn besondere Funktionen oder ein deutlich größerer Umfang gewünscht sind. Solche Punkte werden vor Projektstart besprochen und transparent angeboten. Es entstehen keine unangekündigten Zusatzkosten.",
  },
  {
    question: "Wann wird bezahlt?",
    answer:
      "Vor dem Kennenlerngespräch ist keine Zahlung nötig. Zahlungszeitpunkt und mögliche Teilzahlungen werden im verbindlichen Angebot klar festgehalten.",
  },
];

export default function Pricing() {
  return (
    <>
      <SEO
        title="Website-Preise für lokale Betriebe | JaMoKo"
        description="Transparente Einmalpreise für individuelle Mini-Sites: klarer Leistungsumfang, keine verpflichtenden Agenturkosten und persönliche Beratung."
        url="https://jamoko.de/pricing"
      />

      <main className="overflow-hidden bg-[#001821] text-white">
        <section
          id="hero"
          className="relative border-b border-white/10 px-6 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 h-[32rem] w-[44rem] -translate-x-1/2 rounded-full bg-[#E5C58B]/[0.08] blur-[135px]"
          />

          <div className="relative mx-auto max-w-6xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#E5C58B]">
              Preise
            </p>
            <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-semibold leading-[1.08] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Eine gute Website braucht einen{" "}
              <span className="text-[#E5C58B]">klaren Rahmen.</span>
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-white/60">
              Du erhältst einen nachvollziehbaren Projektpreis, einen
              festgelegten Leistungsumfang und einen direkten Ansprechpartner.
              Ohne verpflichtenden Wartungsvertrag.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-x-7 gap-y-3 text-sm text-white/48">
              {[
                "Keine Zahlung vorab",
                "Persönliche Beratung",
                "Transparenter Umfang",
              ].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[#1AC7A4]" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-white/10 bg-white/[0.02]">
          <MiniSitePricing />
        </section>

        <section className="px-6 py-24 sm:px-8 sm:py-32">
          <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#E5C58B]">
                Im Projekt enthalten
              </p>
              <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-4xl">
                Mehr als eine schöne Oberfläche.
              </h2>
              <p className="mt-6 leading-relaxed text-white/52">
                Beide Pakete verbinden Strategie, Gestaltung und Technik. Der
                Unterschied liegt vor allem im Umfang und in der Tiefe der
                Inhalte.
              </p>
            </div>

            <div className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
              {included.map((item) => (
                <div
                  key={item}
                  className="flex gap-3 border-b border-white/10 py-5 text-white/68"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E5C58B]/12 text-[#E5C58B]">
                    <Check className="h-3 w-3" strokeWidth={2.5} />
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.025] px-6 py-24 sm:px-8 sm:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#E5C58B]">
                Laufende Kosten
              </p>
              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                Klar getrennt. Verständlich erklärt.
              </h2>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {costNotes.map(({ icon: Icon, title, text }) => (
                <article
                  key={title}
                  className="rounded-3xl border border-white/10 bg-[#001821]/70 p-7"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#E5C58B]/10 text-[#E5C58B]">
                    <Icon className="h-5 w-5" strokeWidth={1.7} />
                  </div>
                  <h3 className="mt-7 text-lg font-semibold">{title}</h3>
                  <p className="mt-4 leading-relaxed text-white/52">{text}</p>
                </article>
              ))}
            </div>

            <p className="mt-8 text-sm leading-relaxed text-white/35">
              Alle genannten Preise sind Endpreise gemäß § 19 UStG. Es wird
              keine Umsatzsteuer ausgewiesen.
            </p>
          </div>
        </section>

        <section className="px-6 py-24 sm:px-8 sm:py-32">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#E5C58B]/10 text-[#E5C58B]">
                <CircleHelp className="h-5 w-5" strokeWidth={1.7} />
              </div>
              <h2 className="mt-6 text-3xl font-semibold tracking-[-0.03em]">
                Fragen zu den Preisen
              </h2>
              <p className="mt-4 leading-relaxed text-white/48">
                Die wichtigsten Punkte vor einer Entscheidung, kurz und
                verbindlich beantwortet.
              </p>
            </div>

            <div className="divide-y divide-white/10 border-y border-white/10">
              {pricingFaq.map((item) => (
                <details key={item.question} className="group py-6">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-lg font-medium text-white/80 marker:content-none">
                    {item.question}
                    <span
                      aria-hidden="true"
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/12 text-xl font-light text-[#E5C58B] transition group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="max-w-2xl pr-10 pt-5 leading-relaxed text-white/52">
                    {item.answer}
                  </p>
                </details>
              ))}

              <div className="py-6">
                <Link
                  to="/faq"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#E5C58B] transition hover:text-[#efd49f]"
                >
                  Alle häufigen Fragen ansehen
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-24 sm:px-8 sm:pb-32">
          <div className="mx-auto flex max-w-6xl flex-col justify-between gap-8 rounded-[2rem] bg-[#E5C58B] p-8 text-[#001821] sm:p-12 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#001821]/55">
                Noch unsicher?
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-4xl">
                Wir finden den Umfang, der wirklich zu deinem Betrieb passt.
              </h2>
              <p className="mt-4 leading-relaxed text-[#001821]/68">
                Im ersten Gespräch klären wir Bedarf und Prioritäten. Danach
                weißt du, welches Paket sinnvoll ist und womit du rechnen
                kannst.
              </p>
            </div>

            <Link
              to="/kontakt"
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-[#001821] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#07303d]"
            >
              Projekt besprechen
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
