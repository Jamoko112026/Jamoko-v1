import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Handshake,
  Mail,
  MessageCircle,
  SearchCheck,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { Hero } from "@/components/landing/Hero";
import { ConceptPlaceholder } from "@/components/landing/ConceptPlaceholder";
import { StructuredData, homePageJsonLd } from "./structured-data";

export const metadata: Metadata = {
  title: "JaMoKo – Websites für Handwerksbetriebe",
  description:
    "Klare Websites für Handwerksbetriebe und lokale Unternehmen – persönlich begleitet von der Struktur bis zur Veröffentlichung.",
  alternates: {
    canonical: "https://jamoko.de",
  },
  openGraph: {
    title: "JaMoKo – Websites für Handwerksbetriebe",
    description:
      "Klare Websites für Handwerksbetriebe und lokale Unternehmen – persönlich begleitet von der Struktur bis zur Veröffentlichung.",
    url: "https://jamoko.de",
    images: [
      {
        url: "/og-image-v2.png",
        width: 1200,
        height: 630,
        alt: "JaMoKo – Websites für Handwerksbetriebe",
      },
    ],
  },
};

const trustItems = [
  {
    title: "Schnell verstanden",
    text: "Deine Kunden erkennen, was du anbietest und wie sie dich erreichen.",
    icon: Clock3,
  },
  {
    title: "Persönlich entwickelt",
    text: "Wir hören zu und entwickeln die Website gemeinsam mit dir.",
    icon: Handshake,
  },
  {
    title: "Auf jedem Gerät",
    text: "Deine Website funktioniert klar und angenehm auf Smartphone, Tablet und Desktop.",
    icon: Smartphone,
  },
];

const whySteps = [
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

type HomeProject = {
  title: string;
  category: string;
  description: string;
} &
  (
    | {
        image: string;
        alt: string;
        href: string;
        concept?: never;
      }
    | {
        concept: "goldsmith" | "consulting";
        image?: never;
        alt?: never;
        href?: never;
      }
  );

const projects: HomeProject[] = [
  {
    title: "Goldschmiede",
    category: "Handwerk · Konzept",
    description:
      "Ein ruhiger digitaler Auftritt, der Handwerkskunst, persönliche Beratung und individuelle Schmuckstücke verständlich verbindet.",
    concept: "goldsmith",
  },
  {
    title: "Altonaer Reifendienst",
    category: "Lokaler Service · Demo",
    description:
      "Leistungen, Preise und Kontaktwege schnell erfassbar für Menschen unterwegs.",
    image: "/ard/Hero_1920w_ARDlook.jpg",
    alt: "Website-Demo für einen lokalen Reifendienst",
    href: "/demos/reifendienst",
  },
  {
    title: "Physiotherapie",
    category: "Praxis · Demo",
    description:
      "Eine ruhige Nutzerführung vom ersten Eindruck bis zur persönlichen Anfrage.",
    image: "/physio/physio_hero.jpg",
    alt: "Website-Demo für eine Physiotherapiepraxis",
    href: "/demos/physio",
  },
];

const outcomes = [
  {
    title: "Vertrauen auf den ersten Blick",
    text: "Besucher erkennen sofort, wer du bist, was du anbietest und warum sie bei dir richtig sind.",
    icon: SearchCheck,
  },
  {
    title: "Weniger Zeit für Erklärungen",
    text: "Deine Website beantwortet die wichtigsten Fragen bereits vor dem ersten Kontakt.",
    icon: Sparkles,
  },
  {
    title: "Kontakt leichter machen",
    text: "Menschen verstehen dein Angebot und finden schnell den richtigen Weg, dich anzusprechen.",
    icon: MessageCircle,
  },
];

const pricingOffer = {
  title: "JaMoKo Website",
  price: "ab 1.490 €",
  subtitle: "Für lokale Betriebe, Handwerker und Selbstständige",
  features: [
    "Bis zu 5 Inhaltsseiten",
    "Individuelles Design passend zu deinem Betrieb",
    "Hilfe bei Struktur und Texten",
    "Optimiert für Smartphone, Tablet und Desktop",
    "Technische SEO-Grundlagen",
    "Kontakt, Öffnungszeiten und wichtige Unternehmensinfos",
    "Impressum und Datenschutz technisch eingebunden",
    "1 gebündelte Korrekturrunde",
    "Veröffentlichung und Übergabe",
  ],
  timeline: "In der Regel 2–3 Wochen nach vollständigem Onboarding",
  payment: "50 % zum Start · 50 % zum Abschluss",
};

const calendlyUrl =
  "https://calendly.com/moin-jamoko/jamoko-mini-site-kennenlernen-15-min";

function AmbientPage({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-jamoko-navy text-jamoko-text">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-jamoko-gold/15 via-transparent to-jamoko-teal/20 mix-blend-screen" />
      <div className="pointer-events-none absolute inset-0 bg-jamoko-navy opacity-60 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.035] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nNDAnIGhlaWdodD0nNDAnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHBhdGggZD0nTSAwIDIwIEMgMTUgMTUgMjUgMjUgNDAgMjAnIHN0cm9rZT0nI0U1QzU4Qicgc3Ryb2tlLXdpZHRoPScwLjcnIGZpbGw9J25vbmUnIG9wYWNpdHk9JzAuNScvPjwvc3ZnPg==')]" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

function TrustStrip() {
  return (
    <section className="border-b border-white/10 bg-white/[0.025]">
      <div className="mx-auto grid max-w-6xl px-6 sm:px-8 md:grid-cols-3">
        {trustItems.map(({ title, text, icon: Icon }, index) => (
          <div
            key={title}
            className={`flex gap-4 border-white/10 py-7 md:px-7 ${
              index > 0 ? "md:border-l" : "md:pl-0"
            } ${index === trustItems.length - 1 ? "md:pr-0" : ""}`}
          >
            <Icon
              className="mt-0.5 h-5 w-5 shrink-0 text-[#E5C58B]"
              aria-hidden="true"
            />
            <div>
              <h2 className="text-sm font-medium text-white/90">{title}</h2>
              <p className="mt-1 text-sm leading-relaxed text-white/70">
                {text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function HomeProjectCard({
  project,
  featured,
}: {
  project: HomeProject;
  featured: boolean;
}) {
  const cardClassName = `jmk-card-light group overflow-hidden rounded-3xl border transition duration-300 ${
    project.href ? "hover:-translate-y-1" : ""
  } ${featured ? "md:col-span-2 lg:col-span-1" : ""}`;

  const content = (
    <>
      <div className="relative aspect-[4/3] overflow-hidden bg-[#06252f]">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.alt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
          />
        ) : (
          <ConceptPlaceholder variant={project.concept ?? "goldsmith"} />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#001821]/80 via-transparent to-transparent" />
        <span className="absolute left-5 top-5 rounded-full border border-white/15 bg-[#001821]/75 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-white/70 backdrop-blur-md">
          {project.category}
        </span>
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="jmk-light-heading text-xl font-medium">
            {project.title}
          </h3>
          {project.href ? (
            <ArrowRight
              className="jmk-light-gold h-5 w-5 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          ) : null}
        </div>
        <p className="jmk-light-copy mt-3 text-sm leading-relaxed">
          {project.description}
        </p>
      </div>
    </>
  );

  return project.href ? (
    <Link href={project.href} className={cardClassName}>
      {content}
    </Link>
  ) : (
    <article className={cardClassName}>{content}</article>
  );
}

function ProjectsSection() {
  return (
    <div id="beispiele">
      <div className="mb-14 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <p className="jmk-light-eyebrow mb-4 text-xs font-semibold uppercase tracking-[0.28em]">
            So denken wir Websites
          </p>
          <h2 className="jmk-light-heading text-3xl font-light leading-tight sm:text-4xl md:text-5xl">
            Jeder Betrieb ist anders.
            <span className="jmk-light-heading-muted block">
              Seine Website sollte es auch sein.
            </span>
          </h2>
        </div>
        <p className="jmk-light-copy max-w-sm text-sm leading-relaxed md:text-right">
          Unsere Beispiele zeigen, wie unterschiedlich ein digitaler Auftritt
          aussehen kann, wenn er vom Betrieb ausgeht – und nicht vom Template.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <HomeProjectCard
            key={project.title}
            project={project}
            featured={index === 0}
          />
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/projekte"
          className="jmk-light-link inline-flex items-center gap-2 text-sm font-semibold transition"
        >
          Alle Beispiele ansehen
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}

function WhyJamokoSection() {
  return (
    <div>
      <div className="mb-14 max-w-2xl md:mb-16">
        <p className="jmk-light-eyebrow mb-4 text-xs font-semibold uppercase tracking-[0.28em]">
          Einfach statt kompliziert
        </p>
        <h2 className="jmk-light-heading text-3xl font-light leading-tight sm:text-4xl md:text-5xl">
          Du brauchst keine komplizierte Website.
          <span className="jmk-light-heading-muted block">
            Deine Kunden brauchen Klarheit.
          </span>
        </h2>
        <p className="jmk-light-copy mt-6 leading-relaxed">
          Menschen wollen schnell wissen, was du machst, ob du zu ihnen passt und
          wie sie dich erreichen. Genau darauf konzentrieren wir uns.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {whySteps.map((item) => (
          <article
            key={item.title}
            className="jmk-card-light rounded-3xl border p-7"
          >
            <h3 className="jmk-light-heading text-lg font-medium">
              {item.title}
            </h3>
            <p className="jmk-light-copy mt-3 text-sm leading-relaxed">
              {item.text}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}

function OutcomesSection() {
  return (
    <div>
      <div className="mb-14 max-w-2xl md:mb-16">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#E5C58B]">
          Was eine gute Website verändert
        </p>
        <h2 className="text-3xl font-light leading-tight text-white sm:text-4xl md:text-5xl">
          Nicht lauter werden.
          <span className="block text-white/70">Sondern klarer.</span>
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {outcomes.map(({ title, text, icon: Icon }) => (
          <article
            key={title}
            className="rounded-3xl border border-white/10 bg-white/[0.025] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#1AC7A4]/25 hover:bg-white/[0.045] sm:p-8"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#1AC7A4]/20 bg-[#1AC7A4]/5 text-[#1AC7A4]">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <h3 className="mt-8 text-lg font-medium text-white">{title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              {text}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}

function PricingSection() {
  return (
    <section
      id="pricing"
      className="relative mx-auto w-full max-w-6xl px-6 py-24 sm:px-8 md:py-32"
    >
      <div className="mx-auto mb-14 max-w-3xl text-center md:mb-16">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#E5C58B]">
          Klare Leistung
        </p>
        <h2 className="text-3xl font-light text-white sm:text-4xl md:text-5xl">
          Du weißt vorher, was du bekommst.
          <span className="block text-white/70">Und was es kostet.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-white/75">
          Eine kompakte Unternehmenswebsite mit klar definiertem Umfang. Wenn
          dein Projekt mehr braucht, besprechen wir das vor dem Start.
        </p>
      </div>

      <div className="mx-auto max-w-3xl">
        <PricingCard {...pricingOffer} />
      </div>
    </section>
  );
}

function PricingCard({
  title,
  price,
  subtitle,
  features,
  timeline,
  payment,
}: {
  title: string;
  price: string;
  subtitle: string;
  features: string[];
  timeline: string;
  payment: string;
}) {
  return (
    <div className="relative flex flex-col rounded-3xl border border-[#E5C58B]/60 bg-[#E5C58B]/[0.07] p-7 shadow-[0_20px_70px_rgba(229,197,139,0.08)] transition duration-300 hover:-translate-y-1 sm:p-9">
      <h3 className="text-xl font-medium text-white">{title}</h3>
      <p className="mt-2 text-sm text-white/70">{subtitle}</p>
      <div className="mt-7 text-4xl font-light text-[#E5C58B]">{price}</div>
      <div className="my-7 h-px bg-white/10" />
      <ul className="space-y-3 text-sm text-white/75">
        {features.map((feature) => (
          <li key={feature} className="flex gap-3">
            <CheckCircle2
              className="mt-0.5 h-4 w-4 shrink-0 text-[#1AC7A4]"
              aria-hidden="true"
            />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <div className="my-7 h-px bg-white/10" />
      <div className="mb-9 space-y-2 text-sm text-white/70">
        <p>{timeline}</p>
        <p>{payment}</p>
      </div>
      <a
        href={calendlyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-flex w-full items-center justify-center rounded-full bg-[#E5C58B] px-6 py-3.5 text-sm font-medium text-[#001821] transition hover:bg-[#efd49f]"
      >
        Kostenlos kennenlernen
      </a>
    </div>
  );
}

function ContactSection() {
  return (
    <section
      id="kontakt"
      className="relative overflow-hidden px-6 py-24 text-center sm:px-8 md:py-32"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute bottom-0 left-1/2 h-80 w-2/3 -translate-x-1/2 rounded-full bg-[#1AC7A4]/10 blur-3xl" />
      </div>
      <div className="relative z-10 mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-[#E5C58B]/30 bg-[#E5C58B] px-7 py-14 text-[#001821] sm:px-12 md:py-20 lg:px-20">
        <div
          className="pointer-events-none absolute -right-24 -top-40 h-96 w-96 rounded-full border border-[#001821]/15"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-8 -top-20 h-72 w-72 rounded-full border border-[#001821]/15"
          aria-hidden="true"
        />
        <div className="relative grid gap-10 text-left lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[#001821]/55">
              Einfach anfangen
            </p>
            <h2 className="text-3xl font-light leading-tight sm:text-4xl md:text-5xl">
              Moin sagen reicht.
            </h2>
            <p className="mt-6 max-w-2xl leading-relaxed text-[#001821]/65">
              Du musst noch nicht wissen, welche Seiten, Funktionen oder Technik
              du brauchst. Erzähl uns einfach kurz von deinem Betrieb und davon,
              was du verändern möchtest.
            </p>
          </div>
          <a
            href="mailto:moin@jamoko.de"
            className="inline-flex w-fit items-center gap-3 rounded-full bg-[#001821] px-7 py-4 text-sm font-medium text-white transition hover:-translate-y-0.5"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            Kostenlos kennenlernen
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
        <div className="relative mt-10 flex flex-col gap-4 border-t border-[#001821]/15 pt-7 text-sm text-[#001821]/60 sm:flex-row sm:items-center sm:gap-8">
          <a
            href="https://wa.me/4917682032127"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-[#001821]"
          >
            WhatsApp schreiben
          </a>
          <a
            href="tel:017682032127"
            className="flex items-center gap-2 transition hover:text-[#001821]"
          >
            0176 8203 2127
          </a>
          <span className="sm:ml-auto">
            Das erste Kennenlernen dauert etwa 15 Minuten und ist kostenlos.
          </span>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <StructuredData data={homePageJsonLd} />
      <AmbientPage>
        <Hero />
        <TrustStrip />
        <section className="jmk-section-light jmk-section-paper">
          <div className="jmk-section-content mx-auto max-w-6xl px-6 py-24 sm:px-8 md:py-32">
            <WhyJamokoSection />
          </div>
        </section>
        <section className="jmk-section-light jmk-section-mist">
          <div className="jmk-section-content mx-auto max-w-6xl px-6 py-24 sm:px-8 md:py-32">
            <ProjectsSection />
          </div>
        </section>
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <section className="py-24 md:py-32">
            <OutcomesSection />
          </section>
        </div>
        <section className="border-y border-white/10 bg-white/[0.025]">
          <PricingSection />
        </section>
        <ContactSection />
      </AmbientPage>
    </>
  );
}
