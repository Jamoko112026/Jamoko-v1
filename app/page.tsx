import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Mail } from "lucide-react";
import { Hero } from "@/components/landing/Hero";
import { ConceptPlaceholder } from "@/components/landing/ConceptPlaceholder";
import { StructuredData, homePageJsonLd } from "./structured-data";

export const metadata: Metadata = {
  title: { absolute: "JaMoKo – Websites & Digitalbegleitung" },
  description:
    "Websites, digitale Sichtbarkeit und Digitalbegleitung für lokale Unternehmen. Wir hören zu, ordnen und finden Lösungen, die zu deinem Alltag passen.",
  alternates: {
    canonical: "https://jamoko.de",
  },
  openGraph: {
    title: "JaMoKo – Websites & Digitalbegleitung",
    description:
      "Websites, digitale Sichtbarkeit und Digitalbegleitung für lokale Unternehmen. Wir hören zu, ordnen und finden Lösungen, die zu deinem Alltag passen.",
    url: "https://jamoko.de",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "JaMoKo – Websites & Digitalbegleitung",
      },
    ],
  },
};

const whySteps = [
  { title: "Schildern", text: "Was beschäftigt dich?" },
  { title: "Sortieren", text: "Was ist wirklich wichtig?" },
  { title: "Entscheiden", text: "Was passt zu deinem Alltag?" },
  { title: "Umsetzen", text: "Wir machen es konkret." },
];

type HomeProject = {
  title: string;
  category: string;
  linkLabel?: string;
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
    category: "Lokaler Service · Kundenprojekt",
    description:
      "Ein eigenständiger Webauftritt mit echten Werkstattfotos und klaren Kontaktwegen – geprägt von der Graffiti-Garage in Altona.",
    image: "/ard/case-study/graffiti-garage-aussenansicht-1448.webp",
    alt: "Graffiti-Fassade des Altonaer Reifendienstes in Hamburg-Altona",
    href: "/projekte/altonaer-reifendienst",
    linkLabel: "Projekt ansehen",
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
        {project.linkLabel ? (
          <span className="jmk-light-link mt-5 inline-flex text-sm font-semibold">
            {project.linkLabel}
          </span>
        ) : null}
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

function ProblemSection() {
  return (
    <div className="max-w-3xl">
      <h2 className="jmk-light-heading text-3xl font-light leading-tight sm:text-4xl md:text-5xl">
        Manchmal weißt du nur: So wie jetzt soll es nicht bleiben.
      </h2>
      <p className="jmk-light-copy mt-6 leading-relaxed">
        Die Website passt nicht mehr. Dateien liegen verteilt, Kalender laufen
        nebeneinander und vorhandene Werkzeuge helfen nicht richtig. Neue
        digitale Möglichkeiten sind schwer einzuordnen.
      </p>
      <p className="jmk-light-copy mt-4 leading-relaxed">
        Du musst daraus noch keinen fertigen Auftrag formulieren.
      </p>
      <p className="jmk-light-heading mt-6 font-medium">
        Genau da können wir anfangen.
      </p>
    </div>
  );
}

function ServicesSection() {
  return (
    <div>
      <h2 className="jmk-light-heading mb-14 text-3xl font-light leading-tight sm:text-4xl md:mb-16 md:text-5xl">
        Was brauchst du gerade?
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        <article className="jmk-card-light flex flex-col rounded-3xl border p-7 sm:p-8">
          <h3 className="jmk-light-heading text-2xl font-medium">
            Websites &amp; digitale Sichtbarkeit
          </h3>
          <p className="jmk-light-heading mt-5 text-lg">
            Deine Arbeit ist gut. Deine Website sollte das zeigen.
          </p>
          <p className="jmk-light-copy mb-8 mt-4 leading-relaxed">
            Ruhige, klare Websites für lokale Unternehmen, die verständlich
            zeigen, wer sie sind, was sie anbieten und wie man sie erreicht.
          </p>
          <Link href="/mini-site" className="jmk-light-link mt-auto inline-flex items-center gap-2 text-sm font-semibold">
            JaMoKo Website ansehen
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </article>
        <article id="digitalbegleitung" className="jmk-card-light flex scroll-mt-24 flex-col rounded-3xl border p-7 sm:p-8">
          <h3 className="jmk-light-heading text-2xl font-medium">Digitalbegleitung</h3>
          <p className="jmk-light-heading mt-5 text-lg">Digital darf einfacher werden.</p>
          <p className="jmk-light-copy mb-8 mt-4 leading-relaxed">
            Accounts, Dateien, Kalender und digitale Werkzeuge so ordnen, dass sie
            zu deiner Arbeit passen. Gemeinsam finden wir heraus, was dich im
            Alltag aufhält, vereinfachen Strukturen und setzen sinnvolle Lösungen
            verständlich um.
          </p>
          <a href="#digital-check" className="jmk-light-link mt-auto inline-flex items-center gap-2 text-sm font-semibold">
            Zum Digital-Check
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </article>
      </div>
    </div>
  );
}

function MethodSection() {
  return (
    <div>
      <h2 className="mb-14 text-3xl font-light leading-tight text-white sm:text-4xl md:mb-16 md:text-5xl">
        Erst verstehen. Dann umsetzen.
      </h2>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {whySteps.map((item) => (
          <article key={item.title} className="rounded-3xl border border-white/10 bg-white/[0.025] p-7">
            <h3 className="text-lg font-medium text-white">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/70">{item.text}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

function DigitalCheckSection() {
  return (
    <section id="digital-check" className="scroll-mt-24 border-y border-white/10 bg-white/[0.025] px-6 py-24 sm:px-8 md:py-32 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#E5C58B]">JaMoKo Digital-Check</p>
          <h2 className="text-3xl font-light leading-tight text-white sm:text-4xl md:text-5xl">
            Du weißt noch nicht, wo du anfangen sollst?
          </h2>
          <p className="mt-6 leading-relaxed text-white/75">
            Beim JaMoKo Digital-Check schauen wir gemeinsam auf deinen digitalen
            Arbeitsalltag. Wir sortieren die wichtigsten Baustellen und halten
            fest, was jetzt, danach und später sinnvoll ist.
          </p>
          <p className="mt-4 leading-relaxed text-white/75">
            Wenn du danach selbst weitermachen möchtest, ist das völlig in Ordnung.
          </p>
          <Link href="/kontakt" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#E5C58B] px-7 py-4 text-sm font-semibold text-[#001821] transition hover:-translate-y-0.5 hover:bg-[#efd49f]">
            Digital-Check anfragen
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function HaltungSection() {
  return (
    <div className="max-w-3xl">
      <h2 className="jmk-light-heading text-3xl font-light leading-tight sm:text-4xl md:text-5xl">
        Erst Mensch. Dann Lösung.
      </h2>
      <p className="jmk-light-copy mt-6 leading-relaxed">
        JaMoKo verbindet Menschen, Prozesse und digitale Lösungen – persönlich
        und verständlich. Nicht jedes Unternehmen braucht mehr Tools. Manchmal
        braucht es eine neue Website. Manchmal mehr Ordnung. Und manchmal reicht
        es, Dinge wieder einfacher zu machen.
      </p>
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
              Ob Website, Dateien, Kalender oder digitale Werkzeuge: Erzähl uns
              einfach kurz von deinem Betrieb und davon, was du verändern
              möchtest. Du musst die Lösung noch nicht kennen.
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
        <section className="jmk-section-light jmk-section-paper">
          <div className="jmk-section-content mx-auto max-w-6xl px-6 py-24 sm:px-8 md:py-32 lg:py-20">
            <ProblemSection />
          </div>
        </section>
        <section className="jmk-section-light jmk-section-mist">
          <div className="jmk-section-content mx-auto max-w-6xl px-6 py-24 sm:px-8 md:py-32">
            <ServicesSection />
          </div>
        </section>
        <section className="mx-auto max-w-6xl px-6 py-24 sm:px-8 md:py-32 lg:py-20">
          <MethodSection />
        </section>
        <DigitalCheckSection />
        <section className="jmk-section-light jmk-section-mist">
          <div className="jmk-section-content mx-auto max-w-6xl px-6 py-24 sm:px-8 md:py-32">
            <ProjectsSection />
          </div>
        </section>
        <section className="border-y border-white/10 bg-white/[0.025]">
          <PricingSection />
        </section>
        <section className="jmk-section-light jmk-section-paper">
          <div className="jmk-section-content mx-auto max-w-6xl px-6 py-24 sm:px-8 md:py-32 lg:py-20">
            <HaltungSection />
          </div>
        </section>
        <ContactSection />
      </AmbientPage>
    </>
  );
}
