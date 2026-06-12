import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Uli Glaser Design",
    category: "Goldschmiede · Referenz",
    description:
      "Tradition, Handwerkskunst und zwei Standorte in einem klaren digitalen Auftritt.",
    image: "/cases/uli-glaser/Jamoko_Referenz_UliGlaser_Hero.png",
    alt: "Website von Uli Glaser Design",
    to: "/cases/uli-glaser",
  },
  {
    title: "Altonaer Reifendienst",
    category: "Lokaler Service · Demo",
    description:
      "Leistungen, Preise und Kontaktwege schnell erfassbar für Menschen unterwegs.",
    image: "/ard/Hero_1920w_ARDlook.jpg",
    alt: "Website-Demo für einen lokalen Reifendienst",
    to: "/demos/reifendienst",
  },
  {
    title: "Physiotherapie",
    category: "Praxis · Demo",
    description:
      "Eine ruhige Nutzerführung vom ersten Eindruck bis zur persönlichen Anfrage.",
    image: "/physio/physio_hero.jpg",
    alt: "Website-Demo für eine Physiotherapiepraxis",
    to: "/demos/physio",
  },
];

export default function DemoSection() {
  return (
    <div id="beispiele">
      <div className="mb-14 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#E5C58B]">
            Ausgewählte Projekte
          </p>
          <h2 className="text-3xl font-light leading-tight text-white sm:text-4xl md:text-5xl">
            So wird Qualität
            <span className="block text-white/40">digital sichtbar.</span>
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-white/45 md:text-right">
          Jeder Auftritt folgt dem Unternehmen, nicht einer fertigen Schablone.
          Klar in der Struktur, eigenständig in der Wirkung.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Link
            key={project.title}
            to={project.to}
            className={`group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] transition duration-300 hover:-translate-y-1 hover:border-[#E5C58B]/35 hover:bg-white/[0.045] ${
              index === 0 ? "md:col-span-2 lg:col-span-1" : ""
            }`}
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-[#06252f]">
              <img
                src={project.image}
                alt={project.alt}
                loading="lazy"
                className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001821]/80 via-transparent to-transparent" />
              <span className="absolute left-5 top-5 rounded-full border border-white/15 bg-[#001821]/75 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-white/70 backdrop-blur-md">
                {project.category}
              </span>
            </div>

            <div className="p-6">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-medium text-white">
                  {project.title}
                </h3>
                <ArrowUpRight
                  className="h-5 w-5 shrink-0 text-[#E5C58B] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </div>
              <p className="mt-3 text-sm leading-relaxed text-white/50">
                {project.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
