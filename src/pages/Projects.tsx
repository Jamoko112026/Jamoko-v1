import { ArrowUpRight, Check, FlaskConical } from "lucide-react";
import { Link } from "react-router-dom";

import SEO from "@/components/SEO";
import slBautecImage from "@/assets/sparten/bau-b2b.jpg";

const references = [
  {
    title: "Uli Glaser Design",
    category: "Goldschmiede · Hamburg & Erfurt",
    description:
      "Tradition, individuelle Handwerkskunst und persönliche Beratung in einem hochwertigen digitalen Auftritt.",
    image: "/cases/uli-glaser/Jamoko_Referenz_UliGlaser_Hero.png",
    alt: "Website-Referenz für Uli Glaser Design",
    to: "/cases/uli-glaser",
    services: ["Positionierung", "Webdesign", "Entwicklung"],
  },
  {
    title: "SL BauTec",
    category: "Tiefbau · B2B",
    description:
      "Ein klar strukturierter Unternehmensauftritt, der technische Kompetenz schnell verständlich vermittelt.",
    image: slBautecImage,
    alt: "Website-Referenz für SL BauTec",
    to: "/cases/sl-bautec",
    services: ["Informationsarchitektur", "Webdesign", "Kontaktführung"],
  },
];

const concepts = [
  {
    title: "Altonaer Reifendienst",
    category: "Lokaler Service",
    description:
      "Leistungen, Preise und direkte Kontaktwege für Menschen unterwegs klar geordnet.",
    image: "/ard/Hero_1920w_ARDlook.jpg",
    alt: "Website-Konzept für einen lokalen Reifendienst",
    to: "/demos/reifendienst",
  },
  {
    title: "Physiotherapie",
    category: "Praxis & Gesundheit",
    description:
      "Eine ruhige Nutzerführung, die Vertrauen schafft und den Weg zur Terminanfrage vereinfacht.",
    image: "/physio/physio_hero.jpg",
    alt: "Website-Konzept für eine Physiotherapiepraxis",
    to: "/demos/physio",
  },
  {
    title: "Sushi Hamburg",
    category: "Gastronomie",
    description:
      "Ein atmosphärischer Auftritt mit klarer Angebotskommunikation und direkter Bestellführung.",
    image: "/sushi/jamoko_sushi_hero_v1.jpg",
    alt: "Website-Konzept für einen Sushi-Lieferdienst",
    to: "/demos/sushi",
  },
];

export default function Projects() {
  return (
    <>
      <SEO
        title="Webdesign-Referenzen und Projekte | JaMoKo"
        description="Ausgewählte Webdesign-Referenzen und Branchenkonzepte von JaMoKo für Handwerk, lokale Dienstleister, Praxen und Gastronomie."
        url="https://jamoko.de/projekte"
      />

      <main className="overflow-hidden bg-[#001821] text-white">
        <section
          id="hero"
          className="relative border-b border-white/10 px-6 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 h-[34rem] w-[48rem] -translate-x-1/2 rounded-full bg-[#E5C58B]/[0.08] blur-[140px]"
          />

          <div className="relative mx-auto grid max-w-6xl items-end gap-10 lg:grid-cols-[1fr_0.65fr] lg:gap-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#E5C58B]">
                Projekte
              </p>
              <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.08] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                Gute Arbeit verdient einen{" "}
                <span className="text-[#E5C58B]">klaren Auftritt.</span>
              </h1>
            </div>

            <p className="max-w-xl text-lg leading-relaxed text-white/58">
              Jede Seite folgt dem Betrieb, seinen Kundinnen und Kunden und dem
              Ziel des Projekts. Hier findest du echte Referenzen und
              ausgewählte Branchenkonzepte.
            </p>
          </div>
        </section>

        <section className="px-6 py-24 sm:px-8 sm:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#E5C58B]">
                  Echte Referenzen
                </p>
                <h2 className="mt-5 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                  Für Unternehmen umgesetzt.
                </h2>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-white/45 md:text-right">
                Von der inhaltlichen Ordnung bis zur technischen Umsetzung:
                reale Projekte mit individuellen Anforderungen.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {references.map((project) => (
                <Link
                  key={project.title}
                  to={project.to}
                  className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.025] transition duration-300 hover:-translate-y-1 hover:border-[#E5C58B]/35"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#06252f]">
                    <img
                      src={project.image}
                      alt={project.alt}
                      className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.025]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#001821]/85 via-transparent to-transparent" />
                    <span className="absolute left-5 top-5 rounded-full border border-white/15 bg-[#001821]/75 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#E5C58B] backdrop-blur-md">
                      Referenz
                    </span>
                  </div>

                  <div className="p-7 sm:p-8">
                    <div className="flex items-start justify-between gap-5">
                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-white/38">
                          {project.category}
                        </p>
                        <h3 className="mt-3 text-2xl font-semibold">
                          {project.title}
                        </h3>
                      </div>
                      <ArrowUpRight className="h-5 w-5 shrink-0 text-[#E5C58B] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>

                    <p className="mt-5 max-w-xl leading-relaxed text-white/52">
                      {project.description}
                    </p>

                    <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs text-white/38">
                      {project.services.map((service) => (
                        <li key={service} className="flex items-center gap-2">
                          <Check className="h-3.5 w-3.5 text-[#1AC7A4]" />
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.025] px-6 py-24 sm:px-8 sm:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="mb-14 grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
              <div>
                <div className="flex items-center gap-3 text-[#E5C58B]">
                  <FlaskConical className="h-4 w-4" strokeWidth={1.7} />
                  <p className="text-xs font-semibold uppercase tracking-[0.3em]">
                    Branchenkonzepte
                  </p>
                </div>
                <h2 className="mt-5 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                  So könnte Klarheit in deiner Branche aussehen.
                </h2>
              </div>
              <p className="text-sm leading-relaxed text-white/45 lg:text-right">
                Diese Demos sind frei entwickelte Gestaltungskonzepte und keine
                veröffentlichten Kundenprojekte. Sie zeigen mögliche Struktur,
                Sprache und Wirkung.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {concepts.map((project) => (
                <Link
                  key={project.title}
                  to={project.to}
                  className="group overflow-hidden rounded-3xl border border-white/10 bg-[#001821]/70 transition duration-300 hover:-translate-y-1 hover:border-[#E5C58B]/30"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#001821]/90 via-[#001821]/10 to-transparent" />
                    <span className="absolute left-5 top-5 rounded-full border border-white/15 bg-[#001821]/70 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-white/65 backdrop-blur-md">
                      Konzept-Demo
                    </span>
                  </div>

                  <div className="p-6">
                    <p className="text-xs uppercase tracking-[0.18em] text-[#E5C58B]/70">
                      {project.category}
                    </p>
                    <div className="mt-3 flex items-start justify-between gap-4">
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                      <ArrowUpRight className="h-5 w-5 shrink-0 text-[#E5C58B] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-white/48">
                      {project.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-24 sm:px-8 sm:py-32">
          <div className="mx-auto flex max-w-6xl flex-col justify-between gap-8 rounded-[2rem] bg-[#E5C58B] p-8 text-[#001821] sm:p-12 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#001821]/55">
                Dein Projekt
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-4xl">
                Welche Qualität soll deine Website sichtbar machen?
              </h2>
              <p className="mt-4 leading-relaxed text-[#001821]/68">
                Erzähl kurz von deinem Betrieb. Gemeinsam finden wir heraus,
                welche Struktur und welcher Umfang sinnvoll sind.
              </p>
            </div>

            <Link
              to="/kontakt"
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-[#001821] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#07303d]"
            >
              Projekt besprechen
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
