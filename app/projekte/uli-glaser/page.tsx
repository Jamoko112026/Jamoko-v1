import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Gem,
  MapPin,
  MessageCircle,
  SearchCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Uli Glaser Design",
  description:
    "Case Study zu Uli Glaser Design: ein ruhiger Website-Auftritt für feine Handwerkskunst, klare Standorte und nachvollziehbare Kontaktwege.",
  alternates: {
    canonical: "https://jamoko.de/projekte/uli-glaser",
  },
};

const facts = [
  "Goldschmiede und Schmuckdesign",
  "Zwei Standorte sichtbar gemacht",
  "Fokus auf Vertrauen und Orientierung",
];

const approachSteps = [
  {
    title: "Inhalte sortieren",
    text: "Zuerst wurde geklärt, welche Informationen für neue Besucher wichtig sind: Arbeit, Haltung, Standorte und Kontakt.",
  },
  {
    title: "Handwerk zeigen",
    text: "Die Bildsprache sollte nicht dekorieren, sondern die Ruhe und Sorgfalt der Goldschmiede nachvollziehbar machen.",
  },
  {
    title: "Wege vereinfachen",
    text: "Standorte, Bewertungen und Kontaktmöglichkeiten wurden so platziert, dass Menschen schneller den nächsten Schritt finden.",
  },
];

const results = [
  {
    title: "Klarerer erster Eindruck",
    text: "Besucher verstehen schneller, wofür Uli Glaser Design steht und welche Qualität hinter der Arbeit steckt.",
  },
  {
    title: "Bessere Orientierung",
    text: "Die beiden Standorte sind sichtbar, ohne die Seite unruhig oder kleinteilig wirken zu lassen.",
  },
  {
    title: "Mehr Vertrauen vor dem Kontakt",
    text: "Bilder, Bewertungen und die Geschichte des Betriebs stützen die Entscheidung, persönlich anzufragen.",
  },
];

const insights = [
  "Bei hochwertigem Handwerk muss eine Website nicht laut wirken. Sie muss präzise sein.",
  "Standorte, Leistungen und Vertrauen gehören nah zusammen, damit Besucher nicht suchen müssen.",
  "Gute Zusammenarbeit entsteht, wenn Inhalt, Gestaltung und Technik Schritt für Schritt geklärt werden.",
];

function Divider() {
  return (
    <div
      className="mx-auto h-px max-w-6xl bg-gradient-to-r from-transparent via-white/10 to-transparent"
      aria-hidden="true"
    />
  );
}

function CaseSection({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="px-6 py-20 sm:px-8 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#E5C58B]">
            {eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-light leading-tight text-white sm:text-4xl">
            {title}
          </h2>
        </div>
        <div className="text-base leading-8 text-white/58">{children}</div>
      </div>
    </section>
  );
}

export default function UliGlaserCasePage() {
  return (
    <div className="relative overflow-hidden">
      <section className="px-6 py-16 sm:px-8 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.94fr_1.06fr] lg:items-center">
          <div>
            <Link
              href="/projekte"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#E5C58B] transition hover:text-[#efd49f]"
            >
              Projekte
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.28em] text-[#E5C58B]">
              Case Study
            </p>
            <h1 className="mt-5 text-4xl font-light leading-tight text-white sm:text-5xl md:text-6xl">
              Uli Glaser Design ruhig und klar sichtbar machen.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/58">
              Eine Website für feine Handwerkskunst braucht keine laute Bühne.
              Sie braucht Struktur, gute Bilder und einen nachvollziehbaren Weg
              vom ersten Eindruck bis zur Anfrage.
            </p>
            <ul className="mt-8 space-y-3">
              {facts.map((fact) => (
                <li key={fact} className="flex gap-3 text-sm text-white/58">
                  <CheckCircle2
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#1AC7A4]"
                    aria-hidden="true"
                  />
                  <span>{fact}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/kontakt"
              className="mt-9 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#E5C58B] px-6 py-3 text-sm font-semibold text-[#001821] transition hover:-translate-y-0.5 hover:bg-[#efd49f]"
            >
              Ähnliches Projekt besprechen
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025]">
            <div className="relative aspect-[4/3] bg-[#06252f]">
              <Image
                src="/cases/uli-glaser/Jamoko_Referenz_UliGlaser_Hero.png"
                alt="Website-Ansicht von Uli Glaser Design"
                fill
                priority
                sizes="(min-width: 1024px) 52vw, 100vw"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001821]/80 via-transparent to-transparent" />
            </div>
            <div className="grid gap-4 p-6 sm:grid-cols-3">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#E5C58B]">
                  Bereich
                </p>
                <p className="mt-2 text-sm text-white/58">Handwerk</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#E5C58B]">
                  Fokus
                </p>
                <p className="mt-2 text-sm text-white/58">Vertrauen</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#E5C58B]">
                  Ziel
                </p>
                <p className="mt-2 text-sm text-white/58">Kontakt erleichtern</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      <CaseSection eyebrow="Ausgangssituation" title="Ein Betrieb mit viel Substanz.">
        <p>
          Uli Glaser Design steht für Schmuck, Goldschmiedekunst und persönliche
          Beratung. Die digitale Präsenz sollte diese Qualität verständlich
          zeigen, ohne die Arbeit künstlich größer oder lauter wirken zu lassen.
        </p>
        <p className="mt-5">
          Wichtig war eine Seite, die neuen Besuchern Orientierung gibt:
          Was wird angeboten? Wo findet man den Betrieb? Wie entsteht Vertrauen,
          bevor ein persönlicher Kontakt zustande kommt?
        </p>
      </CaseSection>

      <section className="border-y border-white/10 bg-white/[0.025] px-6 py-16 sm:px-8 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          <div className="relative min-h-[320px] overflow-hidden rounded-3xl border border-white/10 bg-[#06252f]">
            <Image
              src="/cases/uli-glaser/Jamoko_Referenz_UliGlaser_Story.png"
              alt="Detailansicht der Story-Sektion von Uli Glaser Design"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover object-top"
            />
          </div>
          <div className="relative min-h-[320px] overflow-hidden rounded-3xl border border-white/10 bg-[#06252f]">
            <Image
              src="/cases/uli-glaser/Jamoko_Referenz_UliGlaser_Standorte.png"
              alt="Standortbereich der Website von Uli Glaser Design"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover object-top"
            />
          </div>
        </div>
      </section>

      <CaseSection eyebrow="Herausforderung" title="Hochwertigkeit erklären, ohne Druck aufzubauen.">
        <p>
          Bei handwerklicher Arbeit entsteht Vertrauen oft durch Details:
          Material, Erfahrung, Beratung und ein Gefühl für Menschen. Eine
          Website muss diese Punkte ordnen, ohne sie in Verkaufsrhetorik zu
          verwandeln.
        </p>
        <p className="mt-5">
          Dazu kam die Aufgabe, mehrere Kontakt- und Standortinformationen
          sichtbar zu machen. Die Seite sollte praktisch sein, aber nicht wie
          ein Verzeichnis wirken.
        </p>
      </CaseSection>

      <Divider />

      <section className="px-6 py-20 sm:px-8 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#E5C58B]">
              Vorgehensweise
            </p>
            <h2 className="mt-4 text-3xl font-light leading-tight text-white sm:text-4xl">
              Schritt für Schritt.
              <span className="block text-white/40">Ohne unnötige Schleifen.</span>
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {approachSteps.map((step, index) => (
              <article
                key={step.title}
                className="rounded-3xl border border-white/10 bg-white/[0.025] p-7"
              >
                <div className="mb-10 flex items-center justify-between">
                  <span className="text-sm tracking-[0.2em] text-[#E5C58B]">
                    0{index + 1}
                  </span>
                  <Gem className="h-4 w-4 text-white/20" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-medium text-white">{step.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-white/50">
                  {step.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025] px-6 py-16 sm:px-8 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#E5C58B]">
              Ergebnis
            </p>
            <h2 className="mt-4 text-3xl font-light leading-tight text-white sm:text-4xl">
              Ein Auftritt, der Qualität leise trägt.
            </h2>
            <div className="mt-8 grid gap-4">
              {results.map((result) => (
                <article
                  key={result.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.025] p-6"
                >
                  <h3 className="text-lg font-medium text-white">
                    {result.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/50">
                    {result.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
          <div className="relative min-h-[420px] overflow-hidden rounded-3xl border border-white/10 bg-[#06252f]">
            <Image
              src="/cases/uli-glaser/Jamoko_Referenz_UliGlaser_Reviews.png"
              alt="Bewertungsbereich der Website von Uli Glaser Design"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover object-top"
            />
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-8 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#E5C58B]">
              Erkenntnisse
            </p>
            <h2 className="mt-4 text-3xl font-light leading-tight text-white sm:text-4xl">
              Klarheit entsteht durch gute Reihenfolge.
            </h2>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-7 sm:p-8">
            <ul className="space-y-4">
              {insights.map((insight) => (
                <li key={insight} className="flex gap-3 text-sm text-white/62">
                  <SearchCheck
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#1AC7A4]"
                    aria-hidden="true"
                  />
                  <span>{insight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 sm:px-8 md:pb-28">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative min-h-[340px] overflow-hidden rounded-3xl border border-white/10 bg-[#06252f]">
            <Image
              src="/cases/uli-glaser/Jamoko_Referenz_UliGlaser_Erfurt.png"
              alt="Standortansicht Erfurt auf der Website von Uli Glaser Design"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover object-top"
            />
          </div>
          <div className="rounded-[2rem] border border-[#E5C58B]/30 bg-[#E5C58B] px-7 py-12 text-[#001821] sm:px-10 md:py-16">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#001821]/55">
              Abschluss
            </p>
            <h2 className="mt-4 text-3xl font-light leading-tight sm:text-4xl">
              Du möchtest dein Projekt ähnlich ruhig und klar aufbauen?
            </h2>
            <p className="mt-5 max-w-2xl leading-relaxed text-[#001821]/65">
              Dann schauen wir gemeinsam auf Angebot, Zielgruppe und die
              Informationen, die für deine Besucher wirklich zählen.
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
        </div>
      </section>
    </div>
  );
}
