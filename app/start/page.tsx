import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Compass,
  Eye,
  ListChecks,
  MessageCircle,
  Route,
  Wrench,
} from "lucide-react";
import { DigitalStartForm } from "@/components/landing/DigitalStartForm";

export const metadata: Metadata = {
  title: "Digitale Orientierung für Selbstständige",
  description:
    "Du musst die digitale Lösung noch nicht kennen. JaMoKo hilft dir, deine Situation zu sortieren und den nächsten sinnvollen Schritt zu finden.",
  alternates: {
    canonical: "https://jamoko.de/start",
  },
  openGraph: {
    title: "Du musst die Lösung noch nicht kennen · JaMoKo",
    description:
      "Digitale Themen persönlich sortieren, verständlich entscheiden und sinnvoll umsetzen.",
    url: "https://jamoko.de/start",
    images: [
      {
        url: "/start-og.jpg",
        width: 1200,
        height: 630,
        alt: "JaMoKo – digitale Orientierung und persönliche Umsetzung",
      },
    ],
  },
};

const situations = [
  {
    title: "Etwas passt nicht mehr",
    text: "Dein digitaler Auftritt ist in die Jahre gekommen, aber du weißt noch nicht, ob eine Überarbeitung reicht.",
  },
  {
    title: "Die Empfehlungen widersprechen sich",
    text: "Website-Baukasten, WordPress, Social Media oder Automatisierung – jeder empfiehlt etwas anderes.",
  },
  {
    title: "Digitale Aufgaben bleiben liegen",
    text: "Im Alltag fehlt die Zeit, dich einzuarbeiten und herauszufinden, was wirklich wichtig ist.",
  },
  {
    title: "Gute Arbeit wird noch nicht sichtbar",
    text: "Menschen erkennen online noch nicht klar genug, was dich ausmacht und warum sie dir vertrauen können.",
  },
  {
    title: "Die Idee ist da, der Weg noch nicht",
    text: "Du kannst das Ziel ungefähr beschreiben, aber noch nicht die passende Lösung oder den Anfang.",
  },
];

const steps = [
  {
    number: "01",
    title: "Schildern",
    text: "Du erzählst mit deinen eigenen Worten, was dich beschäftigt. Technische Begriffe brauchst du nicht.",
    icon: MessageCircle,
  },
  {
    number: "02",
    title: "Sortieren",
    text: "Ich schaue auf das Vorhandene, erkenne Zusammenhänge und ordne die offenen Fragen.",
    icon: ListChecks,
  },
  {
    number: "03",
    title: "Entscheiden",
    text: "Wir gleichen Ziel und Möglichkeiten ab. Danach kennst du den nächsten sinnvollen Schritt.",
    icon: Route,
  },
  {
    number: "04",
    title: "Umsetzen",
    text: "Wenn es für beide Seiten passt, können wir die passende Lösung anschließend gemeinsam entwickeln.",
    icon: Wrench,
  },
];

const outcomes = [
  "Einen vorhandenen digitalen Auftritt gezielt verbessern",
  "Eine neue Website oder Landingpage entwickeln",
  "Angebote und Inhalte verständlicher strukturieren",
  "Die lokale oder digitale Sichtbarkeit stärken",
  "Wiederkehrende Abläufe vereinfachen",
  "Zunächst einen klaren Fahrplan erstellen",
];

const questions = [
  {
    title: "Muss ich schon genau wissen, was ich brauche?",
    text: "Nein. Eine ungefähre Beschreibung deiner Situation reicht aus. Gemeinsam finden wir heraus, welche Fragen zuerst beantwortet werden sollten.",
  },
  {
    title: "Entwickelt JaMoKo nur Websites?",
    text: "Nein. Eine Website kann Teil der Lösung sein. Genauso können Inhalte, Sichtbarkeit, digitale Abläufe oder zunächst eine klare Entscheidungsgrundlage im Mittelpunkt stehen.",
  },
  {
    title: "Kostet das erste Kennenlernen etwas?",
    text: "Ein erstes kurzes Kennenlernen ist unverbindlich. Bevor eine kostenpflichtige Arbeit beginnt, erhältst du eine klare Beschreibung der Leistung und der Kosten.",
  },
  {
    title: "Muss ich mich technisch auskennen?",
    text: "Nein. Wir sprechen über deine Arbeit, deine Ziele und die aktuelle Situation. Die technischen Fragen übersetze und ordne ich für dich.",
  },
];

export default function DigitalStartPage() {
  return (
    <div className="relative overflow-hidden">
      <section id="hero" className="relative px-6 pb-20 pt-16 sm:px-8 md:pb-28 md:pt-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-[58%] top-10 h-[32rem] w-[32rem] rounded-full bg-[#1AC7A4]/10 blur-[120px]"
        />
        <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.18fr_0.82fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#E5C58B]">
              Dein digitaler Einstieg bei JaMoKo
            </p>
            <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-5xl md:text-6xl">
              Du musst noch nicht wissen,
              <span className="mt-2 block font-light text-[#E5C58B]">
                welche Lösung du brauchst.
              </span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/72 md:text-xl md:leading-9">
              Wenn Website, Sichtbarkeit oder digitale Abläufe unübersichtlich
              geworden sind, sortieren wir zuerst deine Situation – und finden
              anschließend den nächsten sinnvollen Schritt.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="#situation"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#E5C58B] px-7 py-3.5 text-sm font-semibold text-[#001821] transition hover:-translate-y-0.5 hover:bg-[#efd49f]"
              >
                Meine Situation schildern
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#vorgehen"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-white/80 transition hover:border-white/35 hover:text-white"
              >
                So funktioniert es
              </a>
            </div>
            <p className="mt-5 text-sm text-white/55">
              Unverbindlich · persönlich · ohne Vorbereitung
            </p>
          </div>

          <aside className="relative rounded-[2rem] border border-[#E5C58B]/25 bg-white/[0.035] p-7 sm:p-9">
            <div className="absolute -right-3 -top-3 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#1AC7A4]/25 bg-[#001821] text-[#1AC7A4]">
              <Compass className="h-6 w-6" aria-hidden="true" />
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#1AC7A4]">
              Ein guter Anfang
            </p>
            <h2 className="mt-5 text-2xl font-semibold leading-tight text-white sm:text-3xl">
              Womit sollen wir anfangen?
            </h2>
            <ul className="mt-7 space-y-4">
              {["Etwas passt nicht mehr.", "Ich möchte sichtbarer werden.", "Ich habe eine Idee, aber noch keinen Weg."].map(
                (item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 border-b border-white/10 pb-4 text-base leading-7 text-white/72 last:border-0 last:pb-0"
                  >
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#E5C58B]" />
                    {item}
                  </li>
                ),
              )}
            </ul>
            <p className="mt-7 border-t border-white/10 pt-6 text-sm leading-6 text-white/55">
              Jeder dieser Sätze reicht für ein erstes Gespräch.
            </p>
          </aside>
        </div>
      </section>

      <section
        id="ausgangslage"
        className="jmk-section-light jmk-section-paper px-6 py-20 sm:px-8 md:py-28"
      >
        <div className="jmk-section-content mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="jmk-light-eyebrow text-xs font-semibold uppercase tracking-[0.28em]">
              Vielleicht erkennst du dich wieder
            </p>
            <h2 className="jmk-light-heading mt-4 text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
              Oft fehlt nicht das nächste Werkzeug.
              <span className="jmk-light-heading-muted mt-2 block font-light">
                Es fehlt zuerst ein klarer Blick.
              </span>
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {situations.map((situation, index) => (
              <article
                key={situation.title}
                className={`jmk-card-light rounded-3xl border p-6 sm:p-7 ${
                  index === situations.length - 1 ? "md:col-span-2" : ""
                }`}
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#067563]/10 text-[#067563]">
                    <Eye className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="jmk-light-heading text-lg font-semibold">
                      {situation.title}
                    </h3>
                    <p className="jmk-light-copy mt-2 leading-7">
                      {situation.text}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <blockquote className="mt-10 rounded-[2rem] border border-[#765A22]/25 bg-[#E5C58B]/20 px-7 py-8 text-xl font-semibold leading-8 text-[#102A33] sm:px-10 sm:text-2xl sm:leading-9">
            Nicht jede digitale Baustelle braucht sofort eine neue Website.
          </blockquote>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-8 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div className="rounded-[2rem] border border-[#1AC7A4]/25 bg-[#1AC7A4]/[0.055] p-7 sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#1AC7A4]">
              Ein Beispiel aus der Praxis
            </p>
            <p className="mt-6 text-2xl font-semibold leading-9 text-white">
              Eine technische Frage – und das eigentliche Thema dahinter.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Am Anfang standen drei Möglichkeiten.
            </h2>
            <div className="mt-7 space-y-5 text-lg leading-8 text-white/68">
              <p>
                Eine selbstständige Immobilienmaklerin wollte wissen, ob sie
                ihre vorhandene Wix-Website überarbeiten, die Lösung ihres
                Immobiliennetzwerks nutzen oder einen neuen, unabhängigen
                Auftritt entwickeln sollte.
              </p>
              <p>
                Im Gespräch wurde deutlich: Es ging nicht nur um die Wahl eines
                Systems. Es ging um Unabhängigkeit, Vertrauen, technische
                Entlastung und darum, ihre Arbeit digital so darzustellen, wie
                sie tatsächlich arbeitet.
              </p>
              <p>
                Erst diese Fragen machen aus mehreren technischen Möglichkeiten
                eine nachvollziehbare Entscheidung. Deshalb beginnt JaMoKo nicht
                mit einem Werkzeug, sondern mit dem Menschen und seiner
                Situation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="vorgehen"
        className="jmk-section-light jmk-section-mist px-6 py-20 sm:px-8 md:py-28"
      >
        <div className="jmk-section-content mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="jmk-light-eyebrow text-xs font-semibold uppercase tracking-[0.28em]">
              So gehen wir vor
            </p>
            <h2 className="jmk-light-heading mt-4 text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
              Erst verstehen. Dann entscheiden.
            </h2>
          </div>

          <ol className="mt-12 grid gap-5 md:grid-cols-2">
            {steps.map(({ number, title, text, icon: Icon }) => (
              <li
                key={number}
                className="jmk-card-light rounded-3xl border p-7 sm:p-8"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs font-semibold tracking-[0.25em] text-[#765A22]">
                    {number}
                  </span>
                  <Icon className="h-5 w-5 text-[#067563]" aria-hidden="true" />
                </div>
                <h3 className="jmk-light-heading mt-8 text-2xl font-semibold">
                  {title}
                </h3>
                <p className="jmk-light-copy mt-3 leading-7">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-8 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#E5C58B]">
              Was daraus entstehen kann
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Die passende Lösung steht nicht vorher fest.
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/65">
              Manchmal muss nichts komplett neu gebaut werden. Manchmal braucht
              es einen bewussten Neuanfang. Entscheidend ist, dass die Lösung zu
              dir, deiner Arbeit und deinem Alltag passt.
            </p>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2">
            {outcomes.map((outcome) => (
              <li
                key={outcome}
                className="flex items-start gap-4 rounded-3xl border border-white/10 bg-white/[0.025] p-6 leading-7 text-white/72"
              >
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#1AC7A4]/10 text-[#1AC7A4]">
                  <Check className="h-4 w-4" aria-hidden="true" />
                </span>
                {outcome}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="jmk-section-light jmk-section-paper px-6 py-20 sm:px-8 md:py-28">
        <div className="jmk-section-content mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
          <div className="relative mx-auto w-full max-w-sm">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-[#765A22]/20 bg-[#001821] shadow-[0_24px_70px_rgba(16,42,51,0.16)]">
              <Image
                src="/mo-portrait-v1.webp"
                alt="Jan-Moritz Koch, persönlicher Ansprechpartner bei JaMoKo"
                fill
                sizes="(min-width: 1024px) 28vw, (min-width: 640px) 55vw, 100vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          <div>
            <p className="jmk-light-eyebrow text-xs font-semibold uppercase tracking-[0.28em]">
              Wer hinter JaMoKo steht
            </p>
            <h2 className="jmk-light-heading mt-4 text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
              Moin, ich bin Mo.
            </h2>
            <div className="jmk-light-copy mt-7 space-y-5 text-lg leading-8">
              <p>
                Ich möchte gute Arbeit sichtbar machen, Menschen digital
                entlasten und komplexe Themen verständlich ordnen.
              </p>
              <p>
                Dabei verbinde ich persönliche Gespräche mit Webentwicklung,
                Marketing, digitaler Organisation und einem praktischen Blick
                auf den Alltag eines Unternehmens.
              </p>
              <p>
                Du bekommst bei JaMoKo keinen anonymen Prozess. Du sprichst vom
                ersten Gedanken bis zur möglichen Umsetzung direkt mit mir.
              </p>
            </div>
            <Link
              href="/ueber-jamoko"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#067563] transition hover:text-[#102A33]"
            >
              Mehr über JaMoKo
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section
        id="situation"
        className="jmk-section-light jmk-section-mist scroll-mt-24 px-6 py-20 sm:px-8 md:py-28"
      >
        <div className="jmk-section-content mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div>
            <p className="jmk-light-eyebrow text-xs font-semibold uppercase tracking-[0.28em]">
              Einfach anfangen
            </p>
            <h2 className="jmk-light-heading mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
              Was möchtest du digital besser verstehen oder verändern?
            </h2>
            <p className="jmk-light-copy mt-6 text-lg leading-8">
              Beschreibe deine Situation mit deinen eigenen Worten. Einige
              Sätze reichen vollkommen aus. Ich schaue persönlich darauf und
              melde mich bei dir zurück.
            </p>
            <p className="mt-7 rounded-3xl border border-[#067563]/20 bg-[#067563]/[0.06] p-6 text-base leading-7 text-[#102A33]">
              Daraus entsteht noch kein Auftrag. Wir klären zuerst, ob ein
              kurzes gemeinsames Gespräch sinnvoll ist.
            </p>
          </div>

          <DigitalStartForm />
        </div>
      </section>

      <section className="px-6 py-20 sm:px-8 md:py-28">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#E5C58B]">
            Häufige Fragen
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Gut zu wissen, bevor du schreibst.
          </h2>

          <div className="mt-10 space-y-4">
            {questions.map((question) => (
              <details
                key={question.title}
                className="group rounded-3xl border border-white/10 bg-white/[0.025] px-6 py-5 open:border-[#E5C58B]/25 open:bg-white/[0.04] sm:px-7"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-6 text-lg font-semibold text-white">
                  {question.title}
                  <span className="text-2xl font-light text-[#E5C58B] transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-3xl pr-8 leading-7 text-white/65">
                  {question.text}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 sm:px-8 md:pb-28">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-[#E5C58B]/30 bg-[#E5C58B] px-7 py-12 text-[#001821] sm:px-10 md:px-14 md:py-16">
          <h2 className="max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl">
            Du musst nicht schon die Lösung kennen.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#001821]/68">
            Du brauchst nur einen guten Ausgangspunkt.
          </p>
          <a
            href="#situation"
            className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#001821] px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5"
          >
            Meine Situation schildern
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </section>
    </div>
  );
}
