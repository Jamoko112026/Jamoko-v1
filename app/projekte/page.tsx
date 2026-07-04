import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Projekte",
  description:
    "Erste JaMoKo Referenzen und vorbereitete Projektkarten für lokale Betriebe, Handwerk und Dienstleister.",
  alternates: {
    canonical: "https://jamoko.de/projekte",
  },
};

const projects = [
  {
    title: "Uli Glaser Design",
    category: "Goldschmiede · Referenz",
    text: "Ein Auftritt für feine Handwerkskunst, zwei Standorte und eine klare Geschichte hinter der Arbeit.",
    image: "/cases/uli-glaser/Jamoko_Referenz_UliGlaser_Hero.png",
    alt: "Website-Ansicht der JaMoKo Referenz Uli Glaser Design",
    points: ["Handwerk sichtbar machen", "Standorte verständlich führen", "Vertrauen ruhig aufbauen"],
  },
  {
    title: "SL Bautec",
    category: "Bau · vorbereitete Referenz",
    text: "Eine Projektkarte für ein Bauunternehmen, das Leistungen sachlich erklären und direkte Anfragen erleichtern möchte.",
    image: "/slb-logo.png",
    alt: "SL Bautec Logo als vorbereitete Projektkarte",
    points: ["Leistungen klar ordnen", "Seriosität zeigen", "Kontaktwege vereinfachen"],
  },
];

const principles = [
  "Jede Seite beginnt mit dem, was Besucher wirklich wissen müssen.",
  "Design unterstützt Vertrauen, statt sich in den Vordergrund zu stellen.",
  "Kontaktwege bleiben sichtbar, einfach und ohne Umwege.",
];

export default function ProjectsPage() {
  return (
    <div className="relative overflow-hidden">
      <section className="px-6 py-16 sm:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#E5C58B]">
              Projekte
            </p>
            <h1 className="mt-5 text-4xl font-light leading-tight text-white sm:text-5xl md:text-6xl">
              Digitale Auftritte, die Arbeit verständlich zeigen.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/58">
              JaMoKo Projekte sind ruhig aufgebaut, klar formuliert und auf
              lokale Betriebe zugeschnitten. Erste Referenzen und vorbereitete
              Projektkarten zeigen die Richtung.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 sm:px-8 md:pb-28">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025]"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#06252f]">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className={`h-full w-full ${
                    project.title === "SL Bautec"
                      ? "object-contain p-12"
                      : "object-cover object-top"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001821]/82 via-transparent to-transparent" />
                <span className="absolute left-5 top-5 rounded-full border border-white/15 bg-[#001821]/75 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-white/70 backdrop-blur-md">
                  {project.category}
                </span>
              </div>
              <div className="p-7 sm:p-8">
                <h2 className="text-2xl font-medium text-white">
                  {project.title}
                </h2>
                <p className="mt-4 leading-relaxed text-white/54">
                  {project.text}
                </p>
                <ul className="mt-7 space-y-3">
                  {project.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm text-white/58">
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#1AC7A4]"
                        aria-hidden="true"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/kontakt"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#E5C58B] transition hover:text-[#efd49f]"
                >
                  Ähnliches Projekt besprechen
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025] px-6 py-16 sm:px-8 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#E5C58B]">
              Arbeitsweise
            </p>
            <h2 className="mt-4 text-3xl font-light leading-tight text-white sm:text-4xl">
              Erst verstehen.
              <span className="block text-white/40">Dann sichtbar machen.</span>
            </h2>
          </div>
          <div className="grid gap-4">
            {principles.map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-white/10 bg-white/[0.025] p-6 text-white/58"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-8 md:py-28">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-[#E5C58B]/30 bg-[#E5C58B] px-7 py-12 text-[#001821] sm:px-10 md:py-16">
          <h2 className="max-w-3xl text-3xl font-light leading-tight sm:text-4xl">
            Du möchtest, dass dein Betrieb ähnlich klar sichtbar wird?
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-[#001821]/65">
            Dann schauen wir gemeinsam, welche Inhalte, Bilder und Kontaktwege
            für deine Website wirklich wichtig sind.
          </p>
          <Link
            href="/kontakt"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#001821] px-7 py-4 text-sm font-medium text-white transition hover:-translate-y-0.5"
          >
            Kontakt aufnehmen
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
