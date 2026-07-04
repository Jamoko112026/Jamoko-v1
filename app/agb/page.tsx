import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "AGB",
  description:
    "Allgemeine Hinweise zu Angeboten, Leistungen und Zusammenarbeit mit JaMoKo in Hamburg.",
  alternates: {
    canonical: "https://jamoko.de/agb",
  },
  openGraph: {
    title: "AGB · JaMoKo",
    description:
      "Allgemeine Hinweise zu Angeboten und Zusammenarbeit mit JaMoKo.",
    url: "https://jamoko.de/agb",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "JaMoKo AGB",
      },
    ],
  },
};

const sections = [
  {
    title: "Individuelle Vereinbarungen",
    text: "Für Projekte gelten die individuell vereinbarten Angebote, Leistungsbeschreibungen und Absprachen.",
  },
  {
    title: "Leistungsumfang",
    text: "Vor dem Start wird geklärt, welche Seiten, Inhalte, Funktionen und Abstimmungen enthalten sind.",
  },
  {
    title: "Mitwirkung",
    text: "Damit ein Projekt ruhig vorankommt, werden benötigte Inhalte, Zugänge oder Rückmeldungen gemeinsam abgestimmt.",
  },
  {
    title: "Änderungen",
    text: "Wenn sich der Umfang verändert, wird dies nachvollziehbar besprochen, bevor zusätzlicher Aufwand entsteht.",
  },
];

export default function AgbPage() {
  return (
    <div className="relative overflow-hidden">
      <section className="px-6 py-16 sm:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#E5C58B]">
              Rechtliches
            </p>
            <h1 className="mt-5 text-4xl font-light leading-tight text-white sm:text-5xl md:text-6xl">
              AGB
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/58">
              Diese Seite gibt einen einfachen Überblick. Maßgeblich sind die
              konkreten Vereinbarungen im jeweiligen Angebot.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 sm:px-8 md:pb-28">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2">
          {sections.map((section) => (
            <article
              key={section.title}
              className="rounded-3xl border border-white/10 bg-white/[0.025] p-7"
            >
              <h2 className="text-xl font-medium text-white">
                {section.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-white/58">
                {section.text}
              </p>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-6xl rounded-[2rem] border border-[#E5C58B]/30 bg-[#E5C58B] px-7 py-12 text-[#001821] sm:px-10 md:py-14">
          <h2 className="max-w-3xl text-3xl font-light leading-tight">
            Fragen zur Zusammenarbeit?
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-[#001821]/65">
            Dann klären wir sie vor dem Start ruhig und verständlich.
          </p>
          <Link
            href="/kontakt"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#001821] px-7 py-4 text-sm font-medium text-white transition hover:-translate-y-0.5"
          >
            Kontakt aufnehmen
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
