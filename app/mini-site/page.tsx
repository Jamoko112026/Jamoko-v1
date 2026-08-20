import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  HeartHandshake,
  MessageCircle,
  Store,
  Wrench,
} from "lucide-react";

export const metadata: Metadata = {
  title: "JaMoKo Website – Webdesign für lokale Unternehmen",
  description:
    "Klare Websites für lokale Betriebe, Handwerker und Selbstständige. Individuell gestaltet, mobil optimiert und persönlich umgesetzt.",
  alternates: {
    canonical: "https://jamoko.de/mini-site",
  },
  openGraph: {
    title: "JaMoKo Website – Webdesign für lokale Unternehmen",
    description:
      "Klare Websites für lokale Betriebe, Handwerker und Selbstständige. Individuell gestaltet, mobil optimiert und persönlich umgesetzt.",
    url: "https://jamoko.de/mini-site",
    images: [
      {
        url: "/og-image-v2.png",
        width: 1200,
        height: 630,
        alt: "JaMoKo Website für lokale Unternehmen",
      },
    ],
  },
};

const audiences = [
  {
    title: "Lokale Unternehmen",
    text: "Für Betriebe, die ihr Angebot verständlich zeigen und direkt erreichbar sein möchten.",
    icon: Store,
  },
  {
    title: "Handwerk",
    text: "Für gute Arbeit, die online genauso klar und vertrauenswürdig wirken soll.",
    icon: Wrench,
  },
  {
    title: "Selbstständige",
    text: "Für persönliche Arbeit, bei der Angebot, Haltung und Kontakt zusammenpassen müssen.",
    icon: HeartHandshake,
  },
];

const includedItems = [
  "Persönliches Kennenlernen",
  "Strukturiertes Onboarding",
  "Seiten- und Inhaltsstruktur",
  "Individuelles Design passend zu deinem Betrieb",
  "Unterstützung bei Struktur und Texten",
  "Umsetzung bis zu 5 Inhaltsseiten",
  "Responsive Darstellung für Smartphone, Tablet und Desktop",
  "Kontaktmöglichkeiten und wichtige Unternehmensinformationen",
  "Technische SEO-Grundlagen",
  "Seitentitel und Meta-Descriptions",
  "Technische Einbindung von Impressum und Datenschutz",
  "Veröffentlichung",
  "Übergabe",
  "Abschließende Qualitätsprüfung",
];

const processSteps = [
  {
    title: "Zuhören",
    text: "Du erzählst uns, wie dein Betrieb wirklich funktioniert.",
  },
  {
    title: "Sortieren",
    text: "Wir finden heraus, was deine Kunden verstehen müssen.",
  },
  {
    title: "Umsetzen",
    text: "Wir bauen daraus eine klare Website, die zu deinem Betrieb passt.",
  },
];

const offerDetails = [
  {
    title: "Bis zu 5 Inhaltsseiten",
    text: "Genug Raum für Angebot, Vertrauen, Kontakt und wichtige Informationen.",
  },
  {
    title: "2–3 Wochen",
    text: "In der Regel nach vollständigem Onboarding.",
  },
  {
    title: "1 Korrekturrunde",
    text: "Eine gebündelte Korrekturrunde ist im Angebot enthalten.",
  },
  {
    title: "Klare Zahlung",
    text: "50 % zum Start · 50 % zum Abschluss",
  },
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

export default function JamokoWebsitePage() {
  return (
    <div className="relative overflow-hidden">
      <section className="px-6 py-16 sm:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#E5C58B]">
              JaMoKo Website
            </p>
            <h1 className="mt-5 text-4xl font-light leading-tight text-white sm:text-5xl md:text-6xl">
              Deine Arbeit ist gut.
              <span className="block text-white/40">
                Deine Website sollte das zeigen.
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/58">
              Du kennst dein Geschäft. Wir bringen auf den Punkt, was dich
              ausmacht – und bauen daraus eine klare Website, auf der Menschen
              schnell verstehen, warum sie bei dir richtig sind.
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

      <TextSection
        eyebrow="Einfach statt kompliziert"
        title="Du brauchst keine komplizierte Website."
      >
        <p>
          Menschen wollen schnell wissen, was du machst, ob du zu ihnen passt
          und wie sie dich erreichen. Genau darauf konzentrieren wir uns.
        </p>
      </TextSection>

      <section className="border-y border-white/10 bg-white/[0.025] px-6 py-20 sm:px-8 md:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Für wen"
            title="Für lokale Betriebe, Handwerker und Selbstständige"
            intro="Für Unternehmen, die ihre Arbeit klar zeigen und den nächsten Schritt einfach machen möchten."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
            eyebrow="Leistungsumfang"
            title="Was enthalten ist"
            intro="Der Standardumfang ist klar definiert und auf einen ruhigen, verständlichen Auftritt ausgerichtet."
          />
          <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-7 sm:p-8">
            <ul className="space-y-4">
              {includedItems.map((item) => (
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
            eyebrow="Arbeitsweise"
            title="Zuhören. Sortieren. Umsetzen."
            intro="Drei klare Schritte führen von deinem Wissen über den Betrieb zu einer Website, die deine Kunden verstehen."
          />

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, index) => (
              <article
                key={step.title}
                className="rounded-3xl border border-white/10 bg-white/[0.025] p-7"
              >
                <div className="mb-10">
                  <span className="text-sm tracking-[0.2em] text-[#E5C58B]">
                    0{index + 1}
                  </span>
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
            eyebrow="Angebot"
            title="JaMoKo Website"
            intro="Ein klarer Rahmen für lokale Betriebe, Handwerker und Selbstständige."
          />
          <p className="mt-8 text-4xl font-light text-[#E5C58B] sm:text-5xl">
            ab 1.490 €
          </p>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {offerDetails.map((detail) => (
              <article
                key={detail.title}
                className="rounded-3xl border border-white/10 bg-white/[0.025] p-7"
              >
                <h2 className="text-xl font-medium text-white">
                  {detail.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-white/52">
                  {detail.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025] px-6 py-20 sm:px-8 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            eyebrow="Zusätzlicher Bedarf"
            title="Wenn dein Projekt mehr braucht"
            intro="Manche Vorhaben gehen über den klar definierten Standardumfang hinaus."
          />
          <div className="space-y-6 text-base leading-8 text-white/58">
            <p>
              Shops, komplexe Buchungssysteme, individuelle Web-Apps,
              umfangreiche Migrationen oder laufende Betreuung besprechen wir
              separat vor Projektstart.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <blockquote className="rounded-[2rem] border border-[#E5C58B]/30 bg-[#E5C58B]/[0.07] px-7 py-12 sm:px-10 md:px-14 md:py-16">
            <p className="max-w-4xl text-3xl font-light leading-tight text-white sm:text-4xl md:text-5xl">
              Deine Arbeit verdient einen Auftritt,
            </p>
            <p className="mt-8 max-w-3xl text-3xl font-light leading-tight text-[#E5C58B] sm:text-4xl md:text-5xl">
              der sie klar und ehrlich zeigt.
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
            In einem kurzen Gespräch klären wir, was dein Betrieb braucht und
            ob die JaMoKo Website der richtige nächste Schritt ist.
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
