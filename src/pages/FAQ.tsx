import { ArrowUpRight, Check, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

import SEO from "@/components/SEO";

const faqGroups = [
  {
    title: "Angebot & Zusammenarbeit",
    description: "Damit du schnell einschätzen kannst, ob JaMoKo zu dir passt.",
    items: [
      {
        question: "Für wen eignet sich eine Mini-Site?",
        answer:
          "Für lokale Betriebe, Selbstständige, Praxen und kleine Unternehmen, die ihr Angebot klar präsentieren und leichter erreichbar sein möchten. Sie eignet sich besonders, wenn eine übersichtliche Seite mehr hilft als ein großes, komplexes Webprojekt.",
      },
      {
        question: "Was ist der Unterschied zu einer klassischen Website?",
        answer:
          "Eine Mini-Site konzentriert sich auf die Inhalte, die für deine Kundinnen und Kunden wirklich entscheidend sind. Leistungen, Vertrauen, Kontakt und lokale Auffindbarkeit werden kompakt verbunden. Weitere Seiten können später ergänzt werden.",
      },
      {
        question: "Wie läuft die Zusammenarbeit ab?",
        answer:
          "Nach einem unverbindlichen Kennenlernen klären wir Ziele, Angebot und vorhandenes Material. Danach entstehen Struktur, Gestaltung und Textvorschläge. Du gibst gebündelt Feedback, bevor die Seite final getestet und veröffentlicht wird.",
      },
      {
        question: "Wie lange dauert die Umsetzung?",
        answer:
          "Das hängt vom Umfang und davon ab, wie schnell Inhalte und Rückmeldungen verfügbar sind. Eine kompakte Mini-Site kann meist innerhalb weniger Wochen geplant, abgestimmt und veröffentlicht werden. Den realistischen Zeitrahmen klären wir vor dem Start.",
      },
    ],
  },
  {
    title: "Inhalte & Gestaltung",
    description: "Du musst nicht mit einer fertigen Website im Kopf zu uns kommen.",
    items: [
      {
        question: "Brauche ich bereits fertige Texte und Bilder?",
        answer:
          "Nein. Stichpunkte, vorhandene Unterlagen und ein Gespräch reichen für den Anfang. JaMoKo unterstützt dich bei der Struktur, bei klaren Formulierungen und bei der Auswahl passender Bilder.",
      },
      {
        question: "Kann die Website zu meinem bestehenden Auftritt passen?",
        answer:
          "Ja. Vorhandene Farben, Logo und Bildsprache können aufgegriffen und sinnvoll weitergeführt werden. Falls noch kein klarer Auftritt existiert, entwickeln wir eine ruhige visuelle Richtung, die zu deinem Betrieb passt.",
      },
      {
        question: "Wie viele Korrekturen sind möglich?",
        answer:
          "Feedback gehört fest zum Ablauf. Der konkrete Korrekturumfang richtet sich nach dem gewählten Paket und wird vor Projektbeginn transparent festgehalten. So wissen beide Seiten, was enthalten ist.",
      },
      {
        question: "Kann ich Inhalte später selbst ändern?",
        answer:
          "Das hängt von der technischen Lösung und deinem gewünschten Pflegeaufwand ab. Wir klären vorab, ob du Inhalte selbst bearbeiten möchtest oder Änderungen lieber unkompliziert durch JaMoKo erledigen lässt.",
      },
    ],
  },
  {
    title: "Technik, Kosten & danach",
    description: "Die Technik soll verständlich bleiben und langfristig tragen.",
    items: [
      {
        question: "Gibt es laufende Agenturkosten?",
        answer:
          "Konzeption und Umsetzung werden zu einem transparenten Projektpreis vereinbart. Notwendige externe Leistungen wie Domain und Hosting verursachen eigene laufende Kosten. Eine zusätzliche Betreuung ist optional und wird nur berechnet, wenn du sie möchtest.",
      },
      {
        question: "Was passiert mit meiner Domain und dem Hosting?",
        answer:
          "Domain und Hosting sollten auf deinen Namen laufen, damit du unabhängig bleibst. JaMoKo unterstützt bei Auswahl, Einrichtung und Veröffentlichung und erklärt dir verständlich, welche Zugänge und Kosten dazugehören.",
      },
      {
        question: "Wird meine Website bei Google gefunden?",
        answer:
          "Die technische und inhaltliche Basis für lokale Auffindbarkeit wird sauber angelegt. Dazu gehören verständliche Seiteninhalte, Metadaten, mobile Optimierung und eine klare Struktur. Eine bestimmte Google-Position kann seriös nicht garantiert werden.",
      },
      {
        question: "Kann die Website später erweitert werden?",
        answer:
          "Ja. Zusätzliche Leistungen, Referenzen, Unterseiten oder Funktionen können ergänzt werden, wenn dein Betrieb wächst. Die mögliche Erweiterung berücksichtigen wir bereits bei der Planung.",
      },
    ],
  },
];

const reassurance = [
  "Unverbindliches Erstgespräch",
  "Transparenter Projektumfang",
  "Direkter Ansprechpartner",
];

export default function FAQ() {
  return (
    <>
      <SEO
        title="Häufige Fragen zu Websites von JaMoKo"
        description="Antworten zu Ablauf, Dauer, Kosten, Inhalten, Hosting und Erweiterungen einer JaMoKo Mini-Site für lokale Betriebe."
        url="https://jamoko.de/faq"
      />

      <main className="overflow-hidden bg-[#001821] text-white">
        <section
          id="hero"
          className="relative border-b border-white/10 px-6 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 h-[30rem] w-[42rem] -translate-x-1/2 rounded-full bg-[#E5C58B]/[0.07] blur-[130px]"
          />

          <div className="relative mx-auto grid max-w-6xl items-end gap-10 lg:grid-cols-[1fr_0.72fr] lg:gap-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#E5C58B]">
                Häufige Fragen
              </p>
              <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                Erst verstehen.
                <span className="block text-white/38">Dann entscheiden.</span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/62">
                Hier findest du klare Antworten zu Zusammenarbeit, Gestaltung
                und Technik. Ohne Kleingedrucktes und ohne unnötige
                Fachbegriffe.
              </p>
            </div>

            <div className="rounded-3xl border border-[#E5C58B]/20 bg-[#E5C58B]/[0.06] p-6 sm:p-7">
              <p className="text-sm font-medium text-white/75">
                Was du von Anfang an erwarten kannst:
              </p>
              <ul className="mt-5 space-y-3">
                {reassurance.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm text-white/58"
                  >
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#E5C58B]/15 text-[#E5C58B]">
                      <Check className="h-3 w-3" strokeWidth={2.5} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="px-6 py-24 sm:px-8 sm:py-32">
          <div className="mx-auto max-w-6xl space-y-24 sm:space-y-28">
            {faqGroups.map((group, groupIndex) => (
              <section
                key={group.title}
                aria-labelledby={`faq-group-${groupIndex}`}
                className="grid gap-10 lg:grid-cols-[0.68fr_1.32fr] lg:gap-20"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#E5C58B]">
                    0{groupIndex + 1}
                  </p>
                  <h2
                    id={`faq-group-${groupIndex}`}
                    className="mt-4 text-2xl font-semibold tracking-[-0.02em] sm:text-3xl"
                  >
                    {group.title}
                  </h2>
                  <p className="mt-4 max-w-sm leading-relaxed text-white/48">
                    {group.description}
                  </p>
                </div>

                <div className="divide-y divide-white/10 border-y border-white/10">
                  {group.items.map((item) => (
                    <details key={item.question} className="group py-6">
                      <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-lg font-medium text-white/82 marker:content-none">
                        <span>{item.question}</span>
                        <span
                          aria-hidden="true"
                          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/12 text-xl font-light leading-none text-[#E5C58B] transition duration-300 group-open:rotate-45 group-open:border-[#E5C58B]/40"
                        >
                          +
                        </span>
                      </summary>
                      <p className="max-w-2xl pr-10 pt-5 leading-relaxed text-white/52">
                        {item.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>

        <section className="border-t border-white/10 px-6 py-24 sm:px-8 sm:py-28">
          <div className="mx-auto flex max-w-6xl flex-col justify-between gap-10 rounded-[2rem] border border-[#E5C58B]/20 bg-[#E5C58B]/[0.06] p-8 sm:p-12 lg:flex-row lg:items-center">
            <div className="flex max-w-2xl gap-5">
              <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#E5C58B]/12 text-[#E5C58B] sm:flex">
                <MessageCircle className="h-5 w-5" strokeWidth={1.7} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#E5C58B]">
                  Noch etwas offen?
                </p>
                <h2 className="mt-4 text-2xl font-semibold tracking-[-0.02em] sm:text-3xl">
                  Deine Frage darf persönlich sein.
                </h2>
                <p className="mt-4 leading-relaxed text-white/52">
                  Schreib kurz, worum es geht. Du bekommst eine verständliche
                  Einschätzung, auch wenn noch nicht alle Details feststehen.
                </p>
              </div>
            </div>

            <Link
              to="/kontakt"
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-[#E5C58B] px-6 py-3 text-sm font-semibold text-[#001821] transition hover:-translate-y-0.5 hover:bg-[#efd49f]"
            >
              Frage stellen
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
