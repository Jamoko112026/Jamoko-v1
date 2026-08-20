import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ConceptPlaceholder } from "@/components/landing/ConceptPlaceholder";

export const metadata: Metadata = {
  title: "Projekte, Demos und Konzepte",
  description:
    "JaMoKo zeigt klar gekennzeichnete Konzeptprojekte und Demos für lokale Unternehmen, Handwerk und persönliche Dienstleistungen.",
  alternates: {
    canonical: "https://jamoko.de/projekte",
  },
  openGraph: {
    title: "Projekte, Demos und Konzepte · JaMoKo",
    description:
      "Klar gekennzeichnete Konzeptprojekte und Demos für lokale Unternehmen, Handwerk und Dienstleistung.",
    url: "https://jamoko.de/projekte",
    images: [
      {
        url: "/og-image-v2.png",
        width: 1200,
        height: 630,
        alt: "Website-Beispiele, Demos und Konzepte von JaMoKo",
      },
    ],
  },
};

type Project = {
  title: string;
  industry: string;
  description: string;
  status: "Konzept" | "Demo" | "In Arbeit";
} &
  (
    | {
        concept: "goldsmith" | "consulting";
        image?: never;
        alt?: never;
        href?: never;
      }
    | {
        image: string;
        alt: string;
        href?: string;
        concept?: never;
      }
  );

const projects: Project[] = [
  {
    title: "Goldschmiede",
    industry: "Branche · Konzept",
    description:
      "Ein ruhiger digitaler Auftritt, der Handwerkskunst, persönliche Beratung und individuelle Schmuckstücke verständlich verbindet.",
    status: "Konzept",
    concept: "goldsmith",
  },
  {
    title: "SL Bautec",
    industry: "Bau · B2B",
    description:
      "Ein vorbereiteter Auftritt für ein Bauunternehmen, bei dem Leistungen, Vertrauen und direkte Anfragen klarer geführt werden.",
    status: "In Arbeit",
    image: "/slb-logo.png",
    alt: "SL Bautec Logo als Projektvorschau",
  },
  {
    title: "Beratungspraxis",
    industry: "Persönliche Dienstleistung · Konzept",
    description:
      "Ein vertrauensvoller Auftritt mit klarer Leistungsübersicht und einem einfachen Weg zum ersten Gespräch.",
    status: "Konzept",
    concept: "consulting",
  },
  {
    title: "Altonaer Reifendienst",
    industry: "Lokaler Service · Demo",
    description:
      "Leistungen, Preise und Kontaktwege schnell erfassbar für Menschen unterwegs.",
    status: "Demo",
    image: "/ard/Hero_1920w_ARDlook.jpg",
    alt: "Website-Demo für einen lokalen Reifendienst",
    href: "/demos/reifendienst",
  },
  {
    title: "Physiotherapie",
    industry: "Praxis · Demo",
    description:
      "Eine ruhige Nutzerführung vom ersten Eindruck bis zur persönlichen Anfrage.",
    status: "Demo",
    image: "/physio/physio_hero.jpg",
    alt: "Website-Demo für eine Physiotherapiepraxis",
    href: "/demos/physio",
  },
];

const statusStyles: Record<string, string> = {
  Demo: "border-[#1AC7A4]/30 bg-[#1AC7A4]/10 text-[#1AC7A4]",
  "In Arbeit": "border-[#E5C58B]/35 bg-[#E5C58B]/10 text-[#E5C58B]",
  Konzept: "border-white/15 bg-white/10 text-white/70",
};

export default function ProjectsPage() {
  return (
    <div className="relative overflow-hidden">
      <section className="px-6 py-16 sm:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#E5C58B]">
              Portfolio
            </p>
            <h1 className="mt-5 text-4xl font-light leading-tight text-white sm:text-5xl md:text-6xl">
              Unsere Projekte
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/58">
              Ausgewählte Projekte zeigen, wie wir Unternehmen dabei
              unterstützen, klarer, ruhiger und digital sichtbarer zu werden.
            </p>
            <p className="mt-8 max-w-3xl rounded-2xl border border-[#E5C58B]/25 bg-[#E5C58B]/[0.06] p-5 leading-relaxed text-white/75 sm:p-6">
              Konzeptprojekte zeigen, wie JaMoKo digitale Auftritte für
              unterschiedliche Branchen entwickeln kann. Sie sind keine
              Kundenreferenzen.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 sm:px-8 md:pb-28">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] transition duration-300 hover:-translate-y-1 hover:border-[#E5C58B]/30 hover:bg-white/[0.045]"
            >
              <div className="flex w-full flex-col">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#06252f]">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.alt}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className={`h-full w-full transition-transform duration-700 group-hover:scale-[1.03] ${
                        project.title === "SL Bautec"
                          ? "object-contain p-12"
                          : "object-cover object-top"
                      }`}
                    />
                  ) : (
                    <ConceptPlaceholder
                      variant={project.concept ?? "goldsmith"}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001821]/82 via-transparent to-transparent" />
                  <span
                    className={`absolute left-5 top-5 rounded-full border px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] backdrop-blur-md ${
                      statusStyles[project.status]
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-7 sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E5C58B]">
                    {project.industry}
                  </p>
                  <h2 className="mt-4 text-2xl font-medium text-white">
                    {project.title}
                  </h2>
                  <p className="mt-4 flex-1 leading-relaxed text-white/70">
                    {project.description}
                  </p>

                  {project.href ? (
                    <Link
                      href={project.href}
                      className="mt-8 inline-flex min-h-11 w-fit items-center justify-center gap-2 rounded-full bg-[#E5C58B] px-5 py-2.5 text-sm font-semibold text-[#001821] transition hover:-translate-y-0.5 hover:bg-[#efd49f]"
                    >
                      Demo ansehen
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025] px-6 py-20 sm:px-8 md:py-28">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-[#E5C58B]/30 bg-[#E5C58B] px-7 py-12 text-[#001821] sm:px-10 md:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#001821]/55">
            Nächster Schritt
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-light leading-tight sm:text-4xl">
            Du möchtest dein Projekt hier wiederfinden?
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-[#001821]/65">
            Dann sprechen wir darüber, was dein Betrieb online klarer zeigen
            sollte und welcher Umfang dafür sinnvoll ist.
          </p>
          <Link
            href="/kontakt"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#001821] px-7 py-4 text-sm font-medium text-white transition hover:-translate-y-0.5"
          >
            Projekt besprechen
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
