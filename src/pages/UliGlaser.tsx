import { ArrowUpRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

const measures = [
  {
    number: "01",
    title: "Positionierung geschärft",
    text: "Tradition, persönliche Beratung und individuelle Handwerkskunst wurden zu einer klaren digitalen Erzählung verbunden.",
  },
  {
    number: "02",
    title: "Inhalte neu geordnet",
    text: "Produkte, Materialien, Standorte und Serviceangebote sind heute schnell erfassbar und führen gezielt zum Gespräch.",
  },
  {
    number: "03",
    title: "Vertrauen sichtbar gemacht",
    text: "Echte Einblicke, Kundenstimmen und die Geschichte des Familienunternehmens geben der Marke Persönlichkeit und Tiefe.",
  },
];

const galleryImages = [
  {
    src: "/cases/uli-glaser/Jamoko_Referenz_UliGlaser_Story.png",
    alt: "Story-Bereich der Website von Uli Glaser Design",
    label: "Markengeschichte",
    className: "lg:col-span-7",
  },
  {
    src: "/cases/uli-glaser/Jamoko_Referenz_UliGlaser_Standorte.png",
    alt: "Standort-Auswahl für Hamburg und Erfurt",
    label: "Standortführung",
    className: "lg:col-span-5",
  },
  {
    src: "/cases/uli-glaser/Jamoko_Referenz_UliGlaser_Reviews.png",
    alt: "Kundenbewertungen auf der Website von Uli Glaser Design",
    label: "Kundenstimmen",
    className: "lg:col-span-5",
  },
  {
    src: "/cases/uli-glaser/Jamoko_Referenz_UliGlaser_Erfurt.png",
    alt: "Standortseite des Juweliergeschäfts in Erfurt",
    label: "Tradition in Erfurt",
    className: "lg:col-span-7",
  },
];

export default function UliGlaser() {
  return (
    <main className="overflow-hidden bg-[#001821] text-white">
      <section className="relative px-6 pb-24 pt-24 sm:px-8 md:pb-32 md:pt-32">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
        >
          <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-[#E5C58B]/10 blur-3xl" />
          <div className="absolute right-0 top-1/3 h-px w-1/2 bg-gradient-to-l from-[#E5C58B]/30 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-6xl">
          <div className="mb-14 grid items-end gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-[#E5C58B] sm:text-sm">
                Referenz · Website &amp; Positionierung
              </p>
              <h1 className="max-w-4xl text-4xl font-light leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                Uli Glaser
                <span className="block text-white/45">Design</span>
              </h1>
            </div>

            <div className="max-w-xl lg:justify-self-end">
              <p className="text-lg font-light leading-relaxed text-white/70 md:text-xl">
                Ein digitaler Auftritt, der feine Handwerkskunst, gelebte
                Tradition und persönliche Beratung in eine klare Form bringt.
              </p>
              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/45">
                <span>Strategie</span>
                <span>Webdesign</span>
                <span>Entwicklung</span>
              </div>
            </div>
          </div>

          <div className="relative rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-2 shadow-2xl shadow-black/30 sm:rounded-[2rem] sm:p-4">
            <div className="overflow-hidden rounded-[1.1rem] bg-[#071f28] sm:rounded-[1.4rem]">
              <img
                src="/cases/uli-glaser/Jamoko_Referenz_UliGlaser_Hero.png"
                alt="Neuer Website-Auftritt von Uli Glaser Design"
                className="aspect-[1.46/1] w-full object-cover object-top"
              />
            </div>
            <div
              className="absolute -bottom-px left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#E5C58B]/70 to-transparent"
              aria-hidden="true"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025] px-6 py-24 sm:px-8 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[#E5C58B]">
              Ausgangssituation
            </p>
            <h2 className="text-3xl font-light leading-tight sm:text-4xl md:text-5xl">
              Viel Substanz.
              <span className="block text-white/45">
                Noch keine klare digitale Bühne.
              </span>
            </h2>
          </div>

          <div className="space-y-6 text-base leading-relaxed text-white/65 md:text-lg">
            <p>
              Uli Glaser Design steht für individuell gefertigten Schmuck,
              persönliche Beratung und eine Familientradition, die bis ins Jahr
              1910 zurückreicht. Der bestehende Webauftritt konnte diese
              besondere Verbindung noch nicht konsequent vermitteln.
            </p>
            <p>
              Gleichzeitig mussten zwei Standorte, ein umfangreiches
              Leistungsspektrum und unterschiedliche Zugänge zur Marke in einer
              ruhigen, intuitiven Struktur zusammenfinden.
            </p>
            <div className="border-l border-[#E5C58B]/60 pl-6 text-white/90">
              Das Ziel: Die Qualität des persönlichen Erlebnisses auch digital
              spürbar machen.
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 sm:px-8 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 max-w-2xl md:mb-20">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[#E5C58B]">
              Umgesetzte Maßnahmen
            </p>
            <h2 className="text-3xl font-light leading-tight sm:text-4xl md:text-5xl">
              Klarheit für eine Marke,
              <span className="block text-white/45">
                die von Details lebt.
              </span>
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {measures.map((measure) => (
              <article
                key={measure.number}
                className="group flex min-h-80 flex-col rounded-3xl border border-white/10 bg-white/[0.035] p-7 transition-colors duration-300 hover:border-[#E5C58B]/35 hover:bg-white/[0.055] sm:p-8"
              >
                <span className="text-sm tracking-[0.2em] text-[#E5C58B]">
                  {measure.number}
                </span>
                <div className="mt-auto">
                  <h3 className="mb-4 text-xl font-medium">
                    {measure.title}
                  </h3>
                  <p className="leading-relaxed text-white/55">
                    {measure.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 sm:px-8 md:pb-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 flex flex-col justify-between gap-6 sm:flex-row sm:items-end md:mb-16">
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[#E5C58B]">
                Screenshot Galerie
              </p>
              <h2 className="text-3xl font-light sm:text-4xl md:text-5xl">
                Ausgewählte Einblicke
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-white/45 sm:text-right">
              Eine konsistente Designsprache über Geschichte, Standorte und
              vertrauensbildende Inhalte hinweg.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-12">
            {galleryImages.map((image) => (
              <figure
                key={image.src}
                className={`${image.className} group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035]`}
              >
                <div className="overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="aspect-[1.46/1] w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  />
                </div>
                <figcaption className="flex items-center justify-between border-t border-white/10 px-6 py-5">
                  <span className="text-sm text-white/65">{image.label}</span>
                  <ArrowUpRight
                    className="h-4 w-4 text-[#E5C58B]"
                    aria-hidden="true"
                  />
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025] px-6 py-24 sm:px-8 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-24">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[#E5C58B]">
              Ergebnis
            </p>
            <h2 className="text-3xl font-light leading-tight sm:text-4xl md:text-5xl">
              Ein Auftritt mit
              <span className="block text-[#E5C58B]">Haltung und Wärme.</span>
            </h2>
          </div>

          <div>
            <p className="mb-9 text-lg font-light leading-relaxed text-white/70 md:text-xl">
              Die neue Website macht auf den ersten Blick verständlich, wofür
              Uli Glaser Design steht. Sie verbindet die Hamburger
              Goldschmiedekunst mit der Erfurter Familientradition und führt
              Menschen vom ersten Eindruck bis zum persönlichen Gespräch.
            </p>
            <ul className="grid gap-4 sm:grid-cols-2">
              {[
                "Klare Positionierung",
                "Intuitive Nutzerführung",
                "Starke Standortstruktur",
                "Mehr sichtbares Vertrauen",
              ].map((result) => (
                <li
                  key={result}
                  className="flex items-center gap-3 text-sm text-white/75"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E5C58B]/10 text-[#E5C58B]">
                    <Check className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  {result}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 sm:px-8 md:py-32">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-[#E5C58B] px-7 py-16 text-[#001821] sm:px-12 md:py-20 lg:px-20">
          <div
            className="pointer-events-none absolute -right-20 -top-36 h-96 w-96 rounded-full border border-[#001821]/15"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -right-8 -top-20 h-72 w-72 rounded-full border border-[#001821]/15"
            aria-hidden="true"
          />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[#001821]/60">
                Ihr Projekt
              </p>
              <h2 className="text-3xl font-light leading-tight sm:text-4xl md:text-5xl">
                Was soll Ihre Website über Ihre Arbeit erzählen?
              </h2>
              <p className="mt-6 max-w-2xl leading-relaxed text-[#001821]/70">
                Lassen Sie uns gemeinsam einen digitalen Auftritt entwickeln,
                der Qualität nicht nur behauptet, sondern erlebbar macht.
              </p>
            </div>

            <Link
              to="/kontakt"
              className="inline-flex w-fit items-center gap-3 rounded-full bg-[#001821] px-7 py-4 text-sm font-medium text-white transition-transform duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#001821] focus:ring-offset-4 focus:ring-offset-[#E5C58B]"
            >
              Projekt besprechen
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
