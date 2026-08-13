import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import {
  ArrowRight,
  HeartHandshake,
  MessageCircle,
  SearchCheck,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Über JaMoKo",
  description:
    "Warum es JaMoKo gibt: Webdesign Hamburg mit ruhiger Zusammenarbeit, klarer Sprache und digitaler Sichtbarkeit für lokale Unternehmen.",
  alternates: {
    canonical: "https://jamoko.de/ueber-jamoko",
  },
  openGraph: {
    title: "Über JaMoKo · Webdesign Hamburg",
    description:
      "Erst Mensch, dann Marke, dann Mechanik. Die Haltung hinter JaMoKo.",
    url: "https://jamoko.de/ueber-jamoko",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Über JaMoKo",
      },
    ],
  },
};

const workingValues = [
  {
    title: "Persönlich",
    text: "Ein Ansprechpartner.",
    icon: HeartHandshake,
  },
  {
    title: "Verständlich",
    text: "Keine unnötigen Fachbegriffe.",
    icon: MessageCircle,
  },
  {
    title: "Transparent",
    text: "Nachvollziehbare Entscheidungen.",
    icon: SearchCheck,
  },
  {
    title: "Nachhaltig",
    text: "Lösungen, die langfristig funktionieren.",
    icon: ShieldCheck,
  },
];

function Divider() {
  return (
    <div
      className="mx-auto h-px max-w-6xl bg-gradient-to-r from-transparent via-white/10 to-transparent"
      aria-hidden="true"
    />
  );
}

function TextSection({
  eyebrow,
  title,
  children,
  muted = false,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
  muted?: boolean;
}) {
  return (
    <section
      className={`px-6 py-20 sm:px-8 md:py-28 ${
        muted ? "border-y border-white/10 bg-white/[0.025]" : ""
      }`}
    >
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#E5C58B]">
            {eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-light leading-tight text-white sm:text-4xl">
            {title}
          </h2>
        </div>
        <div className="space-y-6 text-lg leading-9 text-white/58">
          {children}
        </div>
      </div>
    </section>
  );
}

export default function AboutJamokoPage() {
  return (
    <div className="relative overflow-hidden">
      <section className="px-6 py-20 sm:px-8 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#E5C58B]">
              Über JaMoKo
            </p>
            <h1 className="mt-6 text-4xl font-light leading-tight text-white sm:text-5xl md:text-6xl">
              Warum es JaMoKo gibt.
            </h1>
            <div className="mt-8 max-w-3xl space-y-4 text-lg leading-8 text-white/60 md:text-xl md:leading-9">
              <p>Nicht jede gute Arbeit wird gesehen.</p>
              <p>
                JaMoKo hilft Unternehmen dabei, online so wahrgenommen zu
                werden, wie sie es verdienen: klar, ehrlich und verständlich.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      <TextSection
        eyebrow="Grundsatz"
        title="Erst Mensch. Dann Marke. Dann Mechanik."
      >
        <p>
          Bevor wir über Farben, Texte oder Suchmaschinen sprechen, möchten wir
          verstehen, wer hinter einem Unternehmen steht.
        </p>
        <p>Was treibt dich an?</p>
        <p>Wofür stehst du?</p>
        <p>Warum machst du deine Arbeit?</p>
        <p>
          Denn jede Website erzählt eine Geschichte. Unsere Aufgabe ist es,
          diese Geschichte sichtbar zu machen: klar, ehrlich und verständlich.
        </p>
      </TextSection>

      <TextSection eyebrow="Haltung" title="Community First" muted>
        <p>Community First ist für uns kein Werbespruch.</p>
        <p>Es ist unsere Art zu arbeiten.</p>
        <p>Wir glauben, dass gute Zusammenarbeit mit Zuhören beginnt.</p>
        <p>Mit Offenheit.</p>
        <p>Mit Ehrlichkeit.</p>
        <p>Mit Respekt.</p>
        <p>
          Erst wenn wir verstehen, was dein Unternehmen ausmacht, sprechen wir
          über die passende digitale Lösung.
        </p>
      </TextSection>

      <TextSection eyebrow="Klarheit" title="Weniger Lärm. Mehr Klarheit.">
        <p>Das Internet wird jeden Tag lauter.</p>
        <p>Mehr Animationen.</p>
        <p>Mehr Pop-ups.</p>
        <p>Mehr Versprechen.</p>
        <p>Wir gehen bewusst den anderen Weg.</p>
        <p>Wir gestalten Websites, die Orientierung geben.</p>
        <p>Die nicht beeindrucken wollen.</p>
        <p>Sondern verständlich machen.</p>
        <p>Denn Klarheit schafft Vertrauen.</p>
      </TextSection>

      <section className="px-6 py-16 sm:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <blockquote className="rounded-[2rem] border border-[#E5C58B]/30 bg-[#E5C58B]/[0.07] px-7 py-12 sm:px-10 md:px-14 md:py-16">
            <p className="max-w-4xl text-3xl font-light leading-tight text-white sm:text-4xl md:text-5xl">
              Eine gute Website beginnt nicht mit einer Idee.
            </p>
            <p className="mt-8 max-w-3xl text-xl leading-9 text-white/62">
              Sie beginnt mit echtem Interesse an den Menschen, für die sie
              entsteht.
            </p>
          </blockquote>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025] px-6 py-20 sm:px-8 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#E5C58B]">
              Zusammenarbeit
            </p>
            <h2 className="mt-4 text-3xl font-light leading-tight text-white sm:text-4xl">
              So arbeiten wir
            </h2>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {workingValues.map(({ title, text, icon: Icon }) => (
              <article
                key={title}
                className="rounded-3xl border border-white/10 bg-white/[0.025] p-7"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#1AC7A4]/20 bg-[#1AC7A4]/5 text-[#1AC7A4]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-8 text-xl font-medium text-white">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/52">
                  {text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <TextSection eyebrow="Überzeugung" title="Woran wir glauben">
        <p>
          Wir glauben, dass gute Zusammenarbeit nicht mit einem Angebot beginnt.
        </p>
        <p>Sie beginnt mit Verständnis.</p>
        <p>Nicht jede Idee muss sofort umgesetzt werden.</p>
        <p>Nicht jede Website muss groß sein.</p>
        <p>Nicht jedes Problem braucht eine komplizierte Lösung.</p>
        <p>Manchmal reicht Klarheit.</p>
        <p>Und genau dort beginnt für uns gute digitale Arbeit.</p>
      </TextSection>

      <TextSection
        eyebrow="Erwartung"
        title="Was du von JaMoKo erwarten kannst"
        muted
      >
        <p>Wenn wir zusammenarbeiten, bekommst du keine Standardlösung.</p>
        <p>Du bekommst einen Partner, der Fragen stellt.</p>
        <p>Der zuhört.</p>
        <p>Der Zusammenhänge erklärt.</p>
        <p>Und der auch sagt:</p>
        <p className="text-white/82">&quot;Das brauchen wir im Moment nicht.&quot;</p>
        <p>
          Denn unser Ziel ist nicht, möglichst viele Leistungen zu verkaufen.
        </p>
        <p>
          Unser Ziel ist, dass deine Website langfristig ihren Zweck erfüllt.
        </p>
      </TextSection>

      <section className="px-6 py-20 sm:px-8 md:py-32">
        <div className="mx-auto max-w-6xl">
          <p className="max-w-5xl text-4xl font-light leading-tight text-white sm:text-5xl md:text-6xl">
            Wir bauen keine Websites, damit Unternehmen einfach im Internet
            sind.
          </p>
          <p className="mt-8 max-w-5xl text-4xl font-light leading-tight text-[#E5C58B] sm:text-5xl md:text-6xl">
            Wir bauen Websites, damit Menschen verstehen, wer hinter einem
            Unternehmen steht.
          </p>
        </div>
      </section>

      <section className="px-6 pb-20 sm:px-8 md:pb-28">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-[#E5C58B]/30 bg-[#E5C58B] px-7 py-12 text-[#001821] sm:px-10 md:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#001821]/55">
            Kennenlernen
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-light leading-tight sm:text-4xl">
            Lass uns über dein Unternehmen sprechen.
          </h2>
          <div className="mt-6 max-w-2xl space-y-3 leading-relaxed text-[#001821]/65">
            <p>Nicht mit Verkaufsdruck.</p>
            <p>Nicht mit einer Präsentation.</p>
            <p>
              Sondern mit einem offenen Gespräch darüber, was dein Unternehmen
              wirklich braucht.
            </p>
          </div>
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
