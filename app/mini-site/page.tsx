import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  HeartHandshake,
  MapPin,
  MessageCircle,
  SearchCheck,
  Smartphone,
  Store,
  Wrench,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Mini-Website Hamburg",
  description:
    "Die JaMoKo Mini-Website ist ein klarer Start für lokale Unternehmen in Hamburg. Ruhig, mobil verständlich und später erweiterbar.",
  alternates: {
    canonical: "https://jamoko.de/mini-site",
  },
  openGraph: {
    title: "Mini-Website Hamburg · JaMoKo",
    description:
      "Klein starten, klar wachsen: Mini-Websites für lokale Unternehmen, Handwerker und Dienstleister.",
    url: "https://jamoko.de/mini-site",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "JaMoKo Mini-Website Hamburg",
      },
    ],
  },
};

const audiences = [
  {
    title: "Lokale Unternehmen",
    text: "Für Unternehmen, die online gefunden werden und klar erklären möchten, was sie anbieten.",
    icon: Store,
  },
  {
    title: "Handwerk",
    text: "Für gute Arbeit, die Vertrauen braucht und nicht durch laute Gestaltung erklärt werden muss.",
    icon: Wrench,
  },
  {
    title: "Dienstleister",
    text: "Für Angebote, bei denen Vertrauen entsteht, bevor ein Gespräch beginnt.",
    icon: HeartHandshake,
  },
  {
    title: "Selbstständige",
    text: "Für persönliche Arbeit, bei der Haltung, Angebot und Kontakt nah zusammengehören.",
    icon: MessageCircle,
  },
  {
    title: "Läden & Gastronomie",
    text: "Für Orte, bei denen Öffnungszeiten, Standort und erster Eindruck schnell stimmen müssen.",
    icon: MapPin,
  },
];

const visitorBenefits = [
  "Besucher verstehen schneller, was du anbietest.",
  "Sie finden Kontakt, Standort und nächste Schritte ohne Umwege.",
  "Die Seite bleibt auf dem Handy lesbar und ruhig bedienbar.",
  "Wichtige Fragen werden beantwortet, bevor jemand anruft oder schreibt.",
];

const timeline = [
  {
    title: "Verstehen",
    text: "Wir klären, was dein Unternehmen ausmacht und was Besucher wissen müssen.",
  },
  {
    title: "Sortieren",
    text: "Angebot, Inhalte und Kontaktwege werden in eine einfache Reihenfolge gebracht.",
  },
  {
    title: "Schreiben",
    text: "Texte werden ruhig formuliert, ohne Fachsprache und ohne Übertreibung.",
  },
  {
    title: "Gestalten",
    text: "Die Seite bekommt eine klare Form, die zu deinem Unternehmen passt.",
  },
  {
    title: "Umsetzen",
    text: "Die Mini-Website wird mobil sauber aufgebaut und technisch geprüft.",
  },
  {
    title: "Starten",
    text: "Nach der Freigabe geht die Seite online und kann später weiter wachsen.",
  },
];

const services = [
  {
    title: "Struktur",
    text: "Besucher finden schneller, was wichtig ist und welcher Schritt als Nächstes kommt.",
  },
  {
    title: "Texte",
    text: "Dein Angebot wird verständlich, ohne Fachsprache und ohne Übertreibung.",
  },
  {
    title: "Design",
    text: "Der Auftritt wirkt ruhig, passend und schafft einen verlässlichen ersten Eindruck.",
  },
  {
    title: "Kontakt",
    text: "Menschen wissen schneller, wie sie dich erreichen und was sie dafür brauchen.",
  },
];

const growthOptions = [
  "weitere Seiten für Leistungen oder Standorte",
  "Referenzen, Projekte oder Bildergalerien",
  "bessere lokale Sichtbarkeit",
  "zusätzliche Kontakt- oder Anfragewege",
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

export default function MiniSitePage() {
  return (
    <div className="relative overflow-hidden">
      <section className="px-6 py-16 sm:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#E5C58B]">
              Mini-Website
            </p>
            <h1 className="mt-5 text-4xl font-light leading-tight text-white sm:text-5xl md:text-6xl">
              Klein starten.
              <span className="block text-white/40">Klar wachsen.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/58">
              Eine JaMoKo Mini-Website ist ein ruhiger digitaler Startpunkt. Sie
              erklärt, wer du bist, was du anbietest und wie Menschen dich
              erreichen. Für lokale Unternehmen in Hamburg und darüber hinaus.
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

      <TextSection eyebrow="Einordnung" title="Warum Mini-Website">
        <p>
          Nicht jedes Unternehmen braucht zum Start eine große Website. Oft
          braucht es zuerst einen klaren Ort, an dem Besucher verstehen, worum
          es geht.
        </p>
        <p>
          Eine Mini-Website sammelt die wichtigsten Informationen: Angebot,
          Vertrauen, Standort und Kontakt. Nicht mehr als nötig. Aber genug, um
          eine gute Entscheidung leichter zu machen.
        </p>
        <p>
          Sie ist besonders dann sinnvoll, wenn ein Betrieb sichtbar werden
          möchte, ohne sofort ein großes Projekt daraus zu machen.
        </p>
        <p>
          Wenn du vorher wissen möchtest, wie JaMoKo Preise einordnet, findest
          du eine ruhige Übersicht auf der{" "}
          <Link
            href="/preise"
            className="font-semibold text-[#E5C58B] transition hover:text-[#efd49f]"
          >
            Preiseseite
          </Link>
          .
        </p>
      </TextSection>

      <section className="border-y border-white/10 bg-white/[0.025] px-6 py-20 sm:px-8 md:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Für wen"
            title="Fünf typische Startpunkte"
            intro="Die Mini-Website passt zu Unternehmen, die verständlich sichtbar werden möchten und einen ruhigen Einstieg suchen."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {audiences.map(({ title, text, icon: Icon }) => (
              <article
                key={title}
                className="rounded-3xl border border-white/10 bg-white/[0.025] p-7"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#1AC7A4]/20 bg-[#1AC7A4]/5 text-[#1AC7A4]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h2 className="mt-8 text-lg font-medium text-white">
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

      <section className="px-6 py-20 sm:px-8 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            eyebrow="Besucher"
            title="Nutzen für Besucher"
            intro="Eine gute Mini-Website denkt nicht zuerst an Seitenumfang. Sie denkt an Menschen, die gerade eine schnelle, klare Antwort suchen."
          />
          <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-7 sm:p-8">
            <ul className="space-y-4">
              {visitorBenefits.map((item) => (
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

      <section className="border-y border-white/10 bg-white/[0.025] px-6 py-20 sm:px-8 md:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Ablauf"
            title="Eine ruhige Timeline"
            intro="Die Mini-Website entsteht in kleinen, nachvollziehbaren Schritten. So bleibt der Aufwand überschaubar und jede Entscheidung verständlich."
          />

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {timeline.map((step, index) => (
              <article
                key={step.title}
                className="rounded-3xl border border-white/10 bg-white/[0.025] p-7"
              >
                <div className="mb-10 flex items-center justify-between">
                  <span className="text-sm tracking-[0.2em] text-[#E5C58B]">
                    0{index + 1}
                  </span>
                  <SearchCheck
                    className="h-4 w-4 text-white/20"
                    aria-hidden="true"
                  />
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

      <section className="px-6 py-20 sm:px-8 md:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Leistungen"
            title="Was eine Mini-Website enthält"
            intro="Der genaue Umfang richtet sich nach deinem Unternehmen. Diese vier Bereiche bilden meist die Grundlage."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-3xl border border-white/10 bg-white/[0.025] p-7"
              >
                <Smartphone
                  className="h-5 w-5 text-[#E5C58B]"
                  aria-hidden="true"
                />
                <h2 className="mt-8 text-xl font-medium text-white">
                  {service.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-white/52">
                  {service.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025] px-6 py-20 sm:px-8 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            eyebrow="Weiterentwicklung"
            title="Kann die Website später wachsen?"
            intro="Ja. Eine Mini-Website ist kein Ende. Sie ist ein sauberer Anfang."
          />
          <div className="space-y-6 text-base leading-8 text-white/58">
            <p>
              Wenn dein Unternehmen wächst, kann die Website mitwachsen. Neue
              Leistungen, Referenzen, Standorte oder Kontaktwege lassen sich
              später ergänzen.
            </p>
            <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-7 sm:p-8">
              <ul className="space-y-4">
                {growthOptions.map((item) => (
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
        </div>
      </section>

      <section className="px-6 py-16 sm:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <blockquote className="rounded-[2rem] border border-[#E5C58B]/30 bg-[#E5C58B]/[0.07] px-7 py-12 sm:px-10 md:px-14 md:py-16">
            <p className="max-w-4xl text-3xl font-light leading-tight text-white sm:text-4xl md:text-5xl">
              Eine Mini-Website ist keine kleine Lösung.
            </p>
            <p className="mt-8 max-w-3xl text-3xl font-light leading-tight text-[#E5C58B] sm:text-4xl md:text-5xl">
              Sie ist eine klare Lösung.
            </p>
          </blockquote>
        </div>
      </section>

      <section className="px-6 pb-20 sm:px-8 md:pb-28">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-[#E5C58B]/30 bg-[#E5C58B] px-7 py-12 text-[#001821] sm:px-10 md:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#001821]/55">
            Kennenlernen
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-light leading-tight sm:text-4xl">
            Kostenlos kennenlernen
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-[#001821]/65">
            In einem kurzen Gespräch klären wir, ob eine Mini-Website der
            richtige nächste Schritt ist und welche Inhalte wirklich wichtig
            sind.
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
