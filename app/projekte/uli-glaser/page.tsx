import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Gem,
  MessageCircle,
  SearchCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Uli Glaser Design Case Study",
  description:
    "Case Study zu Uli Glaser Design: klare Nutzerführung, mobile Optimierung und ruhige Website-Modernisierung.",
  alternates: {
    canonical: "https://jamoko.de/projekte/uli-glaser",
  },
  openGraph: {
    title: "Uli Glaser Design Case Study · JaMoKo",
    description:
      "Wie JaMoKo einen bestehenden Auftritt für feine Handwerksarbeit klarer und mobiler gemacht hat.",
    url: "https://jamoko.de/projekte/uli-glaser",
    images: [
      {
        url: "/cases/uli-glaser/Jamoko_Referenz_UliGlaser_Hero.png",
        width: 1200,
        height: 630,
        alt: "Uli Glaser Design Case Study",
      },
    ],
  },
};

const overviewCards = [
  {
    label: "Kunde",
    value: "Uli Glaser Design",
    text: "Goldschmiede mit feiner Handwerksarbeit und persönlicher Beratung.",
  },
  {
    label: "Branche",
    value: "Schmuck & Handwerk",
    text: "Ein sensibler Bereich, in dem Vertrauen und Details viel ausmachen.",
  },
  {
    label: "Leistungen",
    value: "Konzept, Design, Umsetzung",
    text: "Struktur, visuelle Modernisierung, technische Umsetzung und Prüfung.",
  },
  {
    label: "Status",
    value: "Live",
    text: "Die Seite ist veröffentlicht und als Referenz nutzbar.",
  },
];

const timelineSteps = [
  {
    title: "Analyse",
    text: "Bestehende Inhalte, Seitenstruktur und Nutzerwege wurden ruhig geprüft.",
  },
  {
    title: "Konzept",
    text: "Die neue Struktur wurde auf Orientierung, Lesbarkeit und Kontaktaufnahme ausgerichtet.",
  },
  {
    title: "Abstimmung",
    text: "Inhalte, Bildwirkung und technische Fragen wurden mit klaren Verantwortlichkeiten geklärt.",
  },
  {
    title: "Umsetzung",
    text: "Design und Technik wurden schrittweise aufgebaut, ohne die vorhandene Substanz zu verlieren.",
  },
  {
    title: "Qualitätssicherung",
    text: "Mobile Darstellung, Inhalte, Bilder und Kontaktwege wurden vor dem Livegang geprüft.",
  },
  {
    title: "Livegang",
    text: "Die Seite wurde sauber veröffentlicht und für die weitere Nutzung vorbereitet.",
  },
];

const improvements = [
  "klarere Struktur",
  "bessere Lesbarkeit",
  "moderne Gestaltung",
  "mobile Optimierung",
  "ruhiger Gesamteindruck",
  "technische Grundlage verbessert",
];

const galleryImages = [
  {
    src: "/cases/uli-glaser/Jamoko_Referenz_UliGlaser_Hero.png",
    alt: "Startbereich der Website von Uli Glaser Design",
    title: "Startbereich",
  },
  {
    src: "/cases/uli-glaser/Jamoko_Referenz_UliGlaser_Story.png",
    alt: "Story-Bereich der Website von Uli Glaser Design",
    title: "Geschichte und Haltung",
  },
  {
    src: "/cases/uli-glaser/Jamoko_Referenz_UliGlaser_Standorte.png",
    alt: "Standortbereich der Website von Uli Glaser Design",
    title: "Standorte",
  },
  {
    src: "/cases/uli-glaser/Jamoko_Referenz_UliGlaser_Reviews.png",
    alt: "Bewertungsbereich der Website von Uli Glaser Design",
    title: "Vertrauen",
  },
  {
    src: "/cases/uli-glaser/Jamoko_Referenz_UliGlaser_Erfurt.png",
    alt: "Standortansicht Erfurt auf der Website von Uli Glaser Design",
    title: "Standort Erfurt",
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
  children: React.ReactNode;
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

export default function UliGlaserCasePage() {
  return (
    <div className="relative overflow-hidden">
      <section className="px-6 py-16 sm:px-8 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
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
              Uli Glaser Design: ein klarer Auftritt für feine Handwerksarbeit.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/58">
              Die bestehende Website sollte modernisiert, besser geführt und
              technisch weiterentwickelt werden. Ziel war ein ruhiger Auftritt,
              der die Qualität der Arbeit sichtbar macht und Kontakt leichter
              macht.
            </p>
            <Link
              href="/kontakt"
              className="mt-9 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#E5C58B] px-6 py-3 text-sm font-semibold text-[#001821] transition hover:-translate-y-0.5 hover:bg-[#efd49f]"
            >
              Projekt besprechen
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025]">
            <div className="relative aspect-[4/3] bg-[#06252f]">
              <Image
                src="/cases/uli-glaser/Jamoko_Referenz_UliGlaser_Hero.png"
                alt="Hero-Screenshot der Website von Uli Glaser Design"
                fill
                priority
                sizes="(min-width: 1024px) 54vw, 100vw"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001821]/80 via-transparent to-transparent" />
            </div>
            <div className="border-t border-white/10 p-5 text-sm text-white/50 sm:p-6">
              Hero-Screenshot der modernisierten Website
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025] px-6 py-14 sm:px-8 md:py-16">
        <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {overviewCards.map((card) => (
            <article
              key={card.label}
              className="rounded-3xl border border-white/10 bg-white/[0.025] p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#E5C58B]">
                {card.label}
              </p>
              <h2 className="mt-4 text-xl font-medium text-white">
                {card.value}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-white/50">
                {card.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <TextSection
        eyebrow="Ausgangssituation"
        title="Ein bestehender Auftritt sollte ruhiger und klarer werden."
      >
        <p>
          Ausgangspunkt war eine bestehende Website mit gewachsenen Inhalten.
          Die Substanz war vorhanden, aber die Nutzerführung sollte einfacher
          werden.
        </p>
        <p>
          Gewünscht war eine Modernisierung, die die vorhandenen Informationen
          nicht verwirft, sondern besser ordnet. Gleichzeitig sollte die
          technische Grundlage weiterentwickelt werden, damit die Seite sauberer
          gepflegt und zuverlässiger genutzt werden kann.
        </p>
      </TextSection>

      <Divider />

      <TextSection
        eyebrow="Herausforderung"
        title="Bestehendes übernehmen und trotzdem neu führen."
      >
        <p>
          Die vorhandenen Inhalte sollten übernommen und verständlicher
          eingebettet werden. Dabei ging es nicht um einen harten Bruch, sondern
          um eine moderne Gestaltung, die zur ruhigen Wirkung der Marke passt.
        </p>
        <p>
          Wichtig waren mobile Optimierung, klare technische Entscheidungen und
          eine saubere Abstimmung mit einer externen Agentur. Damit die Arbeit
          nachvollziehbar bleibt, mussten Zuständigkeiten, Inhalte und
          Umsetzungsschritte früh geklärt werden.
        </p>
      </TextSection>

      <section className="border-y border-white/10 bg-white/[0.025] px-6 py-20 sm:px-8 md:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Vorgehensweise"
            title="Sechs Schritte vom Bestand zum Livegang."
            intro="Die Zusammenarbeit wurde bewusst einfach gehalten: verstehen, sortieren, abstimmen, umsetzen, prüfen und veröffentlichen."
          />

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {timelineSteps.map((step, index) => (
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

      <section className="px-6 py-20 sm:px-8 md:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Ergebnis"
            title="Ein Auftritt mit mehr Ordnung und besserer Lesbarkeit."
            intro="Die wichtigsten Verbesserungen liegen nicht in lauten Effekten, sondern in Struktur, Ruhe und technischer Verlässlichkeit."
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {improvements.map((item) => (
              <article
                key={item}
                className="flex min-h-28 gap-4 rounded-3xl border border-white/10 bg-white/[0.025] p-6"
              >
                <CheckCircle2
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#1AC7A4]"
                  aria-hidden="true"
                />
                <h3 className="text-lg font-medium leading-snug text-white">
                  {item}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      <section className="px-6 py-20 sm:px-8 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#E5C58B]">
              Erkenntnisse
            </p>
            <h2 className="mt-4 text-3xl font-light leading-tight text-white sm:text-4xl">
              Was wir aus diesem Projekt gelernt haben
            </h2>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-7 sm:p-8">
            <SearchCheck
              className="h-5 w-5 text-[#1AC7A4]"
              aria-hidden="true"
            />
            <p className="mt-6 text-base leading-8 text-white/58">
              Gute Kommunikation spart später viele Schleifen. Wenn Inhalte,
              Verantwortlichkeiten und technische Entscheidungen früh sauber
              geplant werden, entsteht eine Lösung, die nicht nur zum Livegang
              funktioniert, sondern auch danach verständlich bleibt.
            </p>
            <p className="mt-5 text-base leading-8 text-white/58">
              Gerade bei gewachsenen Websites hilft ein ruhiger Prozess:
              Bestehendes ernst nehmen, klare Entscheidungen treffen und nur das
              ändern, was die Seite wirklich verständlicher macht.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025] px-6 py-20 sm:px-8 md:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Galerie"
            title="Vorbereitete Screenshots aus dem Projekt."
            intro="Die Galerie zeigt zentrale Bereiche der Website und ist so angelegt, dass weitere Ansichten später einfach ergänzt werden können."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {galleryImages.map((image, index) => (
              <article
                key={image.src}
                className={`overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] ${
                  index === 0 ? "md:col-span-2" : ""
                }`}
              >
                <div
                  className={`relative bg-[#06252f] ${
                    index === 0 ? "aspect-[16/9]" : "aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes={
                      index === 0
                        ? "(min-width: 768px) 72rem, 100vw"
                        : "(min-width: 768px) 50vw, 100vw"
                    }
                    className="object-cover object-top"
                  />
                </div>
                <div className="border-t border-white/10 p-6">
                  <h3 className="text-lg font-medium text-white">
                    {image.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-8 md:py-28">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-[#E5C58B]/30 bg-[#E5C58B] px-7 py-12 text-[#001821] sm:px-10 md:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#001821]/55">
            Abschluss
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-light leading-tight sm:text-4xl">
            Du planst ebenfalls eine neue Website?
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-[#001821]/65">
            Dann klären wir gemeinsam, was übernommen werden kann, was besser
            sortiert werden sollte und welche technische Grundlage sinnvoll ist.
          </p>
          <Link
            href="/kontakt"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#001821] px-7 py-4 text-sm font-medium text-white transition hover:-translate-y-0.5"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Projekt besprechen
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
