import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Datenschutz",
  description:
    "Datenschutzhinweise von JaMoKo – kurz und verständlich zusammengefasst.",
  alternates: {
    canonical: "https://jamoko.de/datenschutz",
  },
  openGraph: {
    title: "Datenschutz · JaMoKo",
    description:
      "Datenschutzhinweise von JaMoKo für Website-Besuch und Kontaktaufnahme.",
    url: "https://jamoko.de/datenschutz",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "JaMoKo Datenschutz",
      },
    ],
  },
};

const privacySections = [
  {
    title: "Verantwortlicher",
    text: "JaMoKo – Community First, Jan-Moritz („Mo“) Koch, Hainbuchenweg 2, 22299 Hamburg. E-Mail: moin@jamoko.de.",
  },
  {
    title: "Zwecke und Rechtsgrundlagen",
    text: "Wir verarbeiten Daten zur Bereitstellung der Website, zur Bearbeitung von Kontaktanfragen und zur sicheren technischen Auslieferung.",
  },
  {
    title: "Server-Logs und Hosting",
    text: "Beim Aufruf der Website können technische Daten wie IP-Adresse, Zeitstempel, angefragte Ressource und User-Agent verarbeitet werden.",
  },
  {
    title: "Cookies und Analyse",
    text: "Derzeit setzen wir keine Analyse- oder Tracking-Cookies ein. Technisch notwendige Cookies dienen nur der Funktionalität.",
  },
  {
    title: "Kontaktformular",
    text: "Wenn du uns kontaktierst, nutzen wir deine Angaben zur Beantwortung deiner Anfrage. Die Daten werden nicht ohne Einwilligung weitergegeben.",
  },
  {
    title: "Deine Rechte",
    text: "Du hast Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit und Widerspruch.",
  },
];

export default function DatenschutzPage() {
  return (
    <div className="relative overflow-hidden">
      <section className="px-6 py-16 sm:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#E5C58B]">
              Rechtliches
            </p>
            <h1 className="mt-5 text-4xl font-light leading-tight text-white sm:text-5xl md:text-6xl">
              Datenschutz
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/58">
              Diese Hinweise erklären kurz, welche Daten beim Besuch der Website
              oder bei einer Kontaktaufnahme verarbeitet werden können.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 sm:px-8 md:pb-28">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2">
          {privacySections.map((section) => (
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

        <div className="mx-auto mt-10 max-w-6xl rounded-3xl border border-white/10 bg-white/[0.025] p-7">
          <h2 className="text-xl font-medium text-white">Hinweis</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-white/58">
            Diese Seite ersetzt keine Rechtsberatung. Wenn neue Dienste,
            Formulare oder Analysewerkzeuge eingebunden werden, müssen die
            Datenschutzhinweise entsprechend geprüft und ergänzt werden.
          </p>
          <Link
            href="/kontakt"
            className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#E5C58B] transition hover:text-[#efd49f]"
          >
            Frage zum Datenschutz stellen
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
