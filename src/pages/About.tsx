import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Check,
  HeartHandshake,
  Lightbulb,
  MessageCircle,
  MoveRight,
  Wrench,
} from "lucide-react";

import SEO from "@/components/SEO";
import workspaceImage from "@/assets/jamoko/hero/jamoko_hero_workspace_v1.jpeg";

const values = [
  {
    icon: Lightbulb,
    title: "Klarheit vor Effekten",
    text: "Eine Website muss nicht laut sein. Sie muss verständlich machen, wer du bist, was du anbietest und warum man dir vertrauen kann.",
  },
  {
    icon: HeartHandshake,
    title: "Persönlich statt anonym",
    text: "Du sprichst direkt mit dem Menschen, der zuhört, mitdenkt und umsetzt. Ohne Ticketsystem und ohne unnötige Schleifen.",
  },
  {
    icon: Wrench,
    title: "Technik, die entlastet",
    text: "Gute Technik hält sich im Hintergrund. Sie soll dir Arbeit abnehmen und zuverlässig funktionieren, nicht neue Baustellen schaffen.",
  },
];

const process = [
  {
    number: "01",
    title: "Zuhören",
    text: "Wir klären, was dein Betrieb wirklich braucht und was wir bewusst weglassen können.",
  },
  {
    number: "02",
    title: "Ordnen",
    text: "Aus deinen Leistungen, deiner Haltung und deinen Zielen entsteht eine klare Struktur.",
  },
  {
    number: "03",
    title: "Umsetzen",
    text: "Ich gestalte und entwickle die Seite konzentriert, transparent und in enger Abstimmung mit dir.",
  },
];

const goodFit = [
  "Du möchtest deine Arbeit ehrlich und professionell zeigen.",
  "Du schätzt klare Absprachen und einen direkten Ansprechpartner.",
  "Du willst eine Website, die langfristig Ruhe in dein Marketing bringt.",
  "Du suchst eine durchdachte Lösung statt möglichst vieler Funktionen.",
];

export default function About() {
  return (
    <>
      <SEO
        title="Über JaMoKo – Persönliche Websites mit Klarheit"
        description="JaMoKo entwickelt ruhige, klare Websites für lokale Betriebe – persönlich, durchdacht und ohne unnötigen Technikstress."
        url="https://jamoko.de/about"
      />

      <main className="overflow-hidden bg-[#001821] text-white">
        <section
          id="hero"
          className="relative border-b border-white/10 px-6 pb-24 pt-16 sm:px-8 sm:pb-32 sm:pt-24"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-[#E5C58B]/[0.08] blur-[130px]"
          />

          <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-20">
            <div>
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-[#E5C58B]">
                Über JaMoKo
              </p>

              <h1 className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                Gute digitale Arbeit beginnt mit{" "}
                <span className="text-[#E5C58B]">Zuhören.</span>
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/68 sm:text-xl">
                Ich helfe lokalen Betrieben, ihre Qualität sichtbar zu machen –
                mit klaren Websites, ehrlicher Beratung und Technik, die sich
                angenehm unaufgeregt anfühlt.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/kontakt"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#E5C58B] px-6 py-3 text-sm font-semibold text-[#001821] transition hover:bg-[#f0d7a8]"
                >
                  Persönlich kennenlernen
                  <ArrowUpRight className="h-4 w-4" />
                </Link>

                <Link
                  to="/cases/uli-glaser"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#E5C58B]/60 hover:text-[#E5C58B]"
                >
                  Ein Projekt ansehen
                  <MoveRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="mt-12 flex items-center gap-4 border-t border-white/10 pt-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#E5C58B]/40 bg-[#E5C58B]/10 text-sm font-semibold text-[#E5C58B]">
                  JMK
                </div>
                <div>
                  <p className="font-semibold text-white">Jan-Moritz Koch</p>
                  <p className="mt-0.5 text-sm text-white/50">
                    Gründer & direkter Ansprechpartner
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-5 rounded-[2.25rem] border border-[#E5C58B]/10"
              />
              <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-2 shadow-2xl shadow-black/20">
                <img
                  src={workspaceImage}
                  alt="Ruhiger, heller Arbeitsplatz von JaMoKo"
                  className="aspect-[4/3] w-full rounded-[1.35rem] object-cover"
                />
                <div className="absolute inset-x-2 bottom-2 rounded-b-[1.35rem] bg-gradient-to-t from-[#001821] via-[#001821]/65 to-transparent px-6 pb-6 pt-20">
                  <p className="max-w-sm text-sm leading-relaxed text-white/75">
                    Weniger Ablenkung. Mehr Konzentration auf das, was deinem
                    Betrieb wirklich weiterhilft.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-24 sm:px-8 sm:py-32">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#E5C58B]">
                Meine Haltung
              </p>
              <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-4xl">
                Vom Handwerk zur digitalen Klarheit.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-relaxed text-white/65">
              <p>
                Viele Jahre im Handwerk haben mir gezeigt, worauf es in einer
                guten Zusammenarbeit ankommt: zuhören, sauber arbeiten,
                verbindlich sein und Verantwortung für das Ergebnis
                übernehmen.
              </p>
              <p>
                Genau diese Haltung prägt JaMoKo. Ich entwickle Websites nicht
                als digitale Dekoration, sondern als verlässliches Werkzeug
                für Menschen, die jeden Tag gute Arbeit leisten.
              </p>
              <p className="border-l-2 border-[#E5C58B] pl-6 font-medium text-white">
                Nicht lauter werden. Klarer werden.
              </p>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.025] px-6 py-24 sm:px-8 sm:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#E5C58B]">
                Was mir wichtig ist
              </p>
              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                Gute Zusammenarbeit braucht keine großen Worte.
              </h2>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {values.map(({ icon: Icon, title, text }) => (
                <article
                  key={title}
                  className="rounded-3xl border border-white/10 bg-[#001821]/70 p-7 transition duration-300 hover:-translate-y-1 hover:border-[#E5C58B]/35"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#E5C58B]/10 text-[#E5C58B]">
                    <Icon className="h-5 w-5" strokeWidth={1.7} />
                  </div>
                  <h3 className="mt-7 text-xl font-semibold">{title}</h3>
                  <p className="mt-4 leading-relaxed text-white/58">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-24 sm:px-8 sm:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#E5C58B]">
                  Zusammenarbeit
                </p>
                <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-4xl">
                  Ein klarer Weg vom ersten Gespräch bis zur fertigen Seite.
                </h2>
                <p className="mt-6 leading-relaxed text-white/58">
                  Du weißt jederzeit, wo wir stehen, was als Nächstes passiert
                  und welche Entscheidung gerade wichtig ist.
                </p>
              </div>

              <div className="divide-y divide-white/10 border-y border-white/10">
                {process.map((step) => (
                  <div
                    key={step.number}
                    className="grid gap-4 py-7 sm:grid-cols-[4rem_10rem_1fr] sm:items-start"
                  >
                    <span className="text-sm font-semibold text-[#E5C58B]">
                      {step.number}
                    </span>
                    <h3 className="text-lg font-semibold">{step.title}</h3>
                    <p className="leading-relaxed text-white/58">{step.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-24 sm:px-8 sm:pb-32">
          <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[2rem] border border-[#E5C58B]/20 bg-[#E5C58B]/[0.06] lg:grid-cols-2">
            <div className="p-8 sm:p-12 lg:p-14">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#E5C58B]">
                Das passt gut
              </p>
              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.03em]">
                Wir sollten sprechen, wenn …
              </h2>

              <ul className="mt-8 space-y-5">
                {goodFit.map((item) => (
                  <li key={item} className="flex gap-3 text-white/68">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E5C58B]/15 text-[#E5C58B]">
                      <Check className="h-3 w-3" strokeWidth={2.5} />
                    </span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col justify-between border-t border-[#E5C58B]/15 bg-[#E5C58B] p-8 text-[#001821] sm:p-12 lg:border-l lg:border-t-0 lg:p-14">
              <MessageCircle className="h-9 w-9" strokeWidth={1.5} />
              <div className="mt-16">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#001821]/55">
                  Erstes Gespräch
                </p>
                <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-4xl">
                  Lass uns in Ruhe über dein Projekt sprechen.
                </h2>
                <p className="mt-5 max-w-md leading-relaxed text-[#001821]/70">
                  Unverbindlich, verständlich und ohne Verkaufsshow. Wir finden
                  gemeinsam heraus, ob und wie JaMoKo dich unterstützen kann.
                </p>
                <Link
                  to="/kontakt"
                  className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#001821] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#07303d]"
                >
                  Gespräch anfragen
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
