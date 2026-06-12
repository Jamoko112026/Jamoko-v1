import SEO from "@/components/SEO";
import {
  ArrowUpRight,
  Check,
  FileText,
  Layers3,
  MessageSquareText,
  Smartphone,
} from "lucide-react";
import { Link } from "react-router-dom";
import planningImage from "../assets/sparten/bau-b2b.jpg";

const measures = [
  {
    icon: Layers3,
    number: "01",
    title: "Leistungen geordnet",
    text: "Das technische Angebot wurde auf verständliche Kernbereiche reduziert und logisch gegliedert.",
  },
  {
    icon: FileText,
    number: "02",
    title: "Inhalte präzisiert",
    text: "Kurze, belastbare Texte erklären Kompetenz und Arbeitsweise ohne unnötige Fachsprache.",
  },
  {
    icon: Smartphone,
    number: "03",
    title: "Kontaktwege vereinfacht",
    text: "Projektanfragen sind auch auf Mobilgeräten schnell erreichbar und klar vorbereitet.",
  },
];

const results = [
  "Leistungen schneller erfassbar",
  "Ruhiger, professioneller Gesamteindruck",
  "Klare Führung bis zur Projektanfrage",
  "Technisch glaubwürdige Markenwirkung",
];

export default function SLBautec() {
  return (
    <>
      <SEO
        title="SL BauTec · Referenz von Jamoko"
        description="Digitale Struktur und Webdesign für SL BauTec: klar, technisch und vertrauensbildend."
        url="https://jamoko.de/cases/sl-bautec"
      />

      <main className="overflow-hidden bg-[#141E2A] text-white">
        <section className="relative px-6 pb-24 pt-16 sm:px-8 md:pb-32 md:pt-24">
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <div className="absolute -left-40 top-0 h-[30rem] w-[30rem] rounded-full bg-[#F28C28]/10 blur-3xl" />
            <div className="absolute -right-48 top-1/3 h-[32rem] w-[32rem] rounded-full bg-[#1AC7A4]/8 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-6xl">
            <div className="grid items-end gap-10 lg:grid-cols-[1.15fr_0.85fr]">
              <div>
                <div className="mb-7 flex items-center gap-4">
                  <img
                    src="/slb-logo.png"
                    alt="SL BauTec"
                    className="h-12 w-auto rounded-lg bg-white p-2"
                  />
                  <span className="text-xs font-semibold uppercase tracking-[0.26em] text-[#F28C28]">
                    Referenz · B2B &amp; Tiefbau
                  </span>
                </div>

                <h1 className="max-w-4xl text-4xl font-light leading-[1.06] tracking-tight sm:text-6xl lg:text-7xl">
                  Technische Kompetenz.
                  <span className="block text-white/35">
                    Digital klar vermittelt.
                  </span>
                </h1>
              </div>

              <div className="max-w-xl lg:justify-self-end">
                <p className="text-lg font-light leading-relaxed text-white/60 md:text-xl">
                  Ein strukturierter Unternehmensauftritt für ein spezialisiertes
                  Tiefbauunternehmen aus dem Raum Hamburg.
                </p>
                <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3 text-sm text-white/35">
                  <span>Positionierung</span>
                  <span>Informationsarchitektur</span>
                  <span>Webdesign</span>
                </div>
              </div>
            </div>

            <div className="relative mt-14 overflow-hidden rounded-[2rem] border border-white/10 bg-[#0F1720] shadow-2xl shadow-black/30">
              <img
                src={planningImage}
                alt="Technische Planung als Bild für das Projekt SL BauTec"
                className="aspect-[16/8] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#141E2A]/85 via-[#141E2A]/20 to-transparent" />
              <div className="absolute bottom-0 left-0 max-w-xl p-7 sm:p-10">
                <p className="text-xs uppercase tracking-[0.24em] text-[#F28C28]">
                  Die Leitidee
                </p>
                <p className="mt-4 text-2xl font-light leading-snug sm:text-3xl">
                  Substanz sichtbar machen, ohne das Unternehmen zu
                  überinszenieren.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#0F1720]/60 px-6 py-24 sm:px-8 md:py-32">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-24">
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.26em] text-[#F28C28]">
                Ausgangssituation
              </p>
              <h2 className="text-3xl font-light leading-tight sm:text-4xl md:text-5xl">
                Fachlich stark.
                <span className="block text-white/35">
                  Digital noch nicht klar genug.
                </span>
              </h2>
            </div>

            <div className="space-y-6 text-base leading-relaxed text-white/60 md:text-lg">
              <p>
                SL BauTec ist auf anspruchsvolle Arbeiten im Tiefbau
                spezialisiert. Die vorhandene digitale Darstellung bildete
                diese Erfahrung und Professionalität jedoch noch nicht in einer
                klaren, schnell verständlichen Struktur ab.
              </p>
              <p>
                Leistungen, Arbeitsweise und Kontakt mussten so geordnet werden,
                dass Auftraggeber die relevanten Informationen ohne Umwege
                erfassen können.
              </p>
              <div className="border-l border-[#F28C28]/70 pl-6 text-white/85">
                Ziel war ein Auftritt, der Verlässlichkeit vermittelt, bevor das
                erste persönliche Gespräch stattfindet.
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-24 sm:px-8 md:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="mb-14 max-w-2xl md:mb-16">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.26em] text-[#F28C28]">
                Umgesetzte Maßnahmen
              </p>
              <h2 className="text-3xl font-light leading-tight sm:text-4xl md:text-5xl">
                Weniger Komplexität.
                <span className="block text-white/35">Mehr Orientierung.</span>
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {measures.map(({ icon: Icon, number, title, text }) => (
                <article
                  key={number}
                  className="flex min-h-80 flex-col rounded-3xl border border-white/10 bg-white/[0.025] p-7 transition hover:border-[#F28C28]/30 hover:bg-white/[0.04] sm:p-8"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm tracking-[0.2em] text-[#F28C28]">
                      {number}
                    </span>
                    <Icon className="h-5 w-5 text-white/25" aria-hidden="true" />
                  </div>
                  <div className="mt-auto">
                    <h3 className="text-xl font-medium">{title}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-white/45">
                      {text}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 pb-24 sm:px-8 md:pb-32">
          <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#0F1720] lg:grid-cols-[0.9fr_1.1fr]">
            <div className="p-7 sm:p-10 lg:p-14">
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#F28C28]">
                Digitale Struktur
              </p>
              <h2 className="mt-5 text-3xl font-light leading-tight sm:text-4xl">
                Von der Leistung direkt zur qualifizierten Anfrage.
              </h2>
              <p className="mt-6 leading-relaxed text-white/50">
                Die Seitenlogik führt von einer verständlichen Einordnung des
                Unternehmens über konkrete Leistungsbereiche bis zu einem klaren
                Kontaktweg.
              </p>
              <div className="mt-9 flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                <MessageSquareText
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#1AC7A4]"
                  aria-hidden="true"
                />
                <p className="text-sm leading-relaxed text-white/55">
                  Weniger allgemeine Anfragen, mehr Kontext für das erste
                  Projektgespräch.
                </p>
              </div>
            </div>

            <div className="border-t border-white/10 bg-[#182434] p-5 sm:p-8 lg:border-l lg:border-t-0">
              <div className="h-full rounded-2xl border border-white/10 bg-[#141E2A] p-5 shadow-xl sm:p-7">
                <div className="flex items-center gap-2 border-b border-white/10 pb-4">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#F28C28]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                  <span className="ml-auto text-[10px] uppercase tracking-[0.2em] text-white/25">
                    SL BAUTEC
                  </span>
                </div>

                <div className="py-8">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#F28C28]">
                    Tiefbau · Hamburg
                  </p>
                  <h3 className="mt-4 max-w-md text-3xl font-light leading-tight">
                    Verlässliche Lösungen für anspruchsvolle Bauprojekte.
                  </h3>
                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    {["Leistungen", "Unternehmen", "Projekte", "Kontakt"].map(
                      (item) => (
                        <div
                          key={item}
                          className="rounded-xl border border-white/10 bg-white/[0.025] px-4 py-5 text-sm text-white/55"
                        >
                          {item}
                        </div>
                      )
                    )}
                  </div>
                  <div className="mt-6 h-11 w-40 rounded-full bg-[#F28C28]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#0F1720]/60 px-6 py-24 sm:px-8 md:py-32">
          <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-24">
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.26em] text-[#F28C28]">
                Ergebnis
              </p>
              <h2 className="text-3xl font-light leading-tight sm:text-4xl md:text-5xl">
                Ein Auftritt,
                <span className="block text-white/35">
                  der Stabilität ausstrahlt.
                </span>
              </h2>
            </div>

            <div>
              <p className="text-lg font-light leading-relaxed text-white/60 md:text-xl">
                Die neue Struktur übersetzt technische Kompetenz in eine
                zugängliche, seriöse Nutzererfahrung. Auftraggeber finden
                schneller zu den relevanten Leistungen und wissen, wie ein
                Projektgespräch gestartet werden kann.
              </p>
              <ul className="mt-9 grid gap-4 sm:grid-cols-2">
                {results.map((result) => (
                  <li
                    key={result}
                    className="flex items-center gap-3 text-sm text-white/65"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F28C28]/10 text-[#F28C28]">
                      <Check className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                    {result}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="px-6 py-24 sm:px-8 md:py-32">
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-[#F28C28] px-7 py-16 text-[#141E2A] sm:px-12 md:py-20 lg:px-20">
            <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-3xl">
                <p className="mb-5 text-xs font-semibold uppercase tracking-[0.26em] text-[#141E2A]/60">
                  B2B-Projekt
                </p>
                <h2 className="text-3xl font-light leading-tight sm:text-4xl md:text-5xl">
                  Soll Ihre Website Kompetenz genauso klar vermitteln?
                </h2>
                <p className="mt-6 max-w-2xl leading-relaxed text-[#141E2A]/70">
                  Wir entwickeln einen Auftritt, der komplexe Leistungen
                  verständlich macht und professionell zur Anfrage führt.
                </p>
              </div>

              <Link
                to="/kontakt"
                className="inline-flex w-fit items-center gap-3 rounded-full bg-[#141E2A] px-7 py-4 text-sm font-medium text-white transition hover:-translate-y-1"
              >
                Projekt besprechen
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
