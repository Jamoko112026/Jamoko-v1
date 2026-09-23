import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";

const liveUrl = "https://altonaerreifendienst.de/";
const imagePath = "/ard/case-study";

export const metadata: Metadata = {
  title: "Altonaer Reifendienst – Website als Kundenprojekt",
  description:
    "Einblicke in die Website für die Altonaer Reifendienst GmbH: Graffiti-Garage, echte Werkstattfotos, klare Kontaktwege und belegbare technische Verbesserungen.",
  alternates: {
    canonical: "https://jamoko.de/projekte/altonaer-reifendienst",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Altonaer Reifendienst – ein Kundenprojekt von JaMoKo",
    description:
      "Von der Graffiti-Garage zum eigenständigen Webauftritt: Gestaltung, Umsetzung und technische Ergebnisse für einen lokalen Betrieb in Hamburg-Altona.",
    url: "https://jamoko.de/projekte/altonaer-reifendienst",
    type: "article",
    locale: "de_DE",
    siteName: "JaMoKo",
    images: [{
      url: `${imagePath}/social.jpg`,
      width: 1200,
      height: 675,
      alt: "Die bunte Graffiti-Garage des Altonaer Reifendienstes",
    }],
  },
};

const workshopPhotos = [
  {
    file: "halle-1280.webp",
    alt: "Werkstatthalle mit freier Rampe, roten Stützen und Reifenstapeln",
    caption: "Die Werkstatt in der Norderreihe 59.",
  },
  {
    file: "reifenservice-1280.webp",
    alt: "Mitarbeiter beim Reifenservice an einem Fahrzeug zwischen den Hebebühnen",
    caption: "Ein Einblick in die tägliche Arbeit.",
  },
  {
    file: "werkzeugwand-1280.webp",
    alt: "Reifen auf mehreren Ebenen eines Lagerregals in der Werkstatt",
    caption: "Details aus dem Werkstattalltag.",
  },
];

const implementation = [
  {
    title: "Leistungen auf einen Blick",
    text: "Reifenwechsel, Montage und Auswuchten, Reifen und Felgen sowie der Luftdruckcheck haben klar benannte Bereiche. Häufige Fragen ergänzen die Orientierung.",
  },
  {
    title: "Der direkte Weg zur Werkstatt",
    text: "Öffnungszeiten, Adresse und Telefonnummer stehen zusammen. Ein Anruf lässt sich direkt starten; ein Routenlink führt zur Wegbeschreibung.",
  },
  {
    title: "Bewertungen und mobile Nutzung",
    text: "Ein eigener Bereich verweist auf Google-Bewertungen. Navigation, Bilder und Inhaltsblöcke passen sich an Smartphone, Tablet und Desktop an.",
  },
];

const technicalResults = [
  {
    title: "Acht Fotos, passend zum Bildschirm",
    text: "Die Kundenwebsite verwendet acht Motive als responsive WebP-Dateien. Unterschiedliche Bildbreiten und verzögertes Laden der weiteren Fotos vermeiden unnötig große Bildabrufe.",
  },
  {
    title: "Inhalte direkt im HTML",
    text: "Startseite, Impressum und Datenschutz enthalten jeweils eigene Titel, Beschreibungen, Inhalte und Canonical-URLs bereits im ausgelieferten HTML.",
  },
  {
    title: "Eindeutige Fehlerseiten",
    text: "Unbekannte URLs liefern HTTP 404 und eine Fehlerseite mit noindex. So werden fehlende Seiten nicht als reguläre Startseite ausgegeben.",
  },
  {
    title: "Lesbar auf kleinen Bildschirmen",
    text: "Überarbeitete mobile Textumbrüche halten auch längere Überschriften innerhalb des Bildschirms und machen die Inhalte leichter lesbar.",
  },
];

export default function AltonaerReifendienstPage() {
  return (
    // Keep the entire case study visible without viewport-triggered animations.
    <article data-no-reveal className="relative overflow-hidden">
      <section className="px-6 py-16 sm:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <Link href="/projekte" className="inline-flex min-h-11 items-center gap-2 text-sm text-white/70 transition hover:text-white">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Alle Projekte
          </Link>
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-[#E5C58B]">
            Kundenprojekt · Hamburg-Altona
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-light leading-tight text-white sm:text-5xl md:text-6xl">
            Altonaer Reifen&shy;dienst GmbH
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
            Eine Werkstatt mit eigenem Charakter. Eine Website, die ihn zeigt –
            mit der Graffiti-Garage als Ausgangspunkt, echten Fotos und klaren
            Wegen zu Leistungen und Kontakt.
          </p>
          <p className="mt-5 text-sm leading-7 text-white/70">
            Unternehmenswebsite · Konzept, Gestaltung und Entwicklung durch JaMoKo
          </p>
          <a href={liveUrl} className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#E5C58B] px-6 py-3 text-sm font-semibold text-[#001821] transition hover:bg-[#efd49f]">
            Live-Website ansehen
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
          <figure className="mt-12">
            <Image
              src={`${imagePath}/graffiti-garage-aussenansicht-1448.webp`}
              alt="Graffiti-Fassade des Altonaer Reifendienstes mit geöffnetem Garagentor in Hamburg-Altona"
              width={1448}
              height={1086}
              priority
              sizes="(min-width: 1216px) 1152px, (min-width: 640px) calc(100vw - 64px), calc(100vw - 48px)"
              className="h-auto w-full rounded-3xl border border-white/10"
            />
            <figcaption className="mt-4 text-sm leading-6 text-white/60">
              Die Graffiti-Garage am Wohlers Park – der sichtbare Bezugspunkt für den Webauftritt.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025] px-6 py-16 sm:px-8 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E5C58B]">Ausgangslage</p>
            <h2 className="mt-4 text-3xl font-light leading-tight text-white sm:text-4xl">Ein eigener Auftritt für den Betrieb.</h2>
            <p className="mt-6 leading-8 text-white/75">
              Die Altonaer Reifendienst GmbH brauchte einen eigenständigen,
              glaubwürdigen Webauftritt, der Werkstatt, Leistungen und Kontaktwege
              klar vermittelt. Der Charakter des Betriebs sollte auch online erkennbar sein.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E5C58B]">Ziel</p>
            <h2 className="mt-4 text-3xl font-light leading-tight text-white sm:text-4xl">Schnell verstehen, was wichtig ist.</h2>
            <p className="mt-6 leading-8 text-white/75">
              Das Ziel: die Grundlage für lokale Auffindbarkeit schaffen,
              Leistungen schnell erfassbar machen und die Nutzung unterwegs
              erleichtern. Dazu eine Gestaltung, die zur Werkstatt und zu ihrem
              Standort in Hamburg-Altona passt.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E5C58B]">Gestalterischer Bezug</p>
            <h2 className="mt-4 text-3xl font-light leading-tight text-white sm:text-4xl">Die Graffiti-Garage gibt den Ton an.</h2>
            <p className="mt-6 leading-8 text-white/75">
              Die auffällige Fassade ist der Ausgangspunkt für Farben, Bildwelt
              und Charakter der Kundenwebsite. Warme Orange-Akzente, dunkle
              Flächen und eine markante Schrift greifen ihre direkte, lebendige
              Wirkung auf. Das großflächige Garagenfoto macht den Ort schon beim
              ersten Blick erkennbar.
            </p>
          </div>
          <div className="mt-14 max-w-3xl">
            <h2 className="text-3xl font-light leading-tight text-white sm:text-4xl">Echte Werkstattfotos statt Stockbilder.</h2>
            <p className="mt-6 leading-8 text-white/75">
              Die Bilder zeigen die Räume, die Arbeit und die Details vor Ort.
              Sie geben einen konkreten Eindruck davon, was Besucherinnen und
              Besucher in der Werkstatt erwartet.
            </p>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {workshopPhotos.map((photo) => (
              <figure key={photo.file}>
                <Image
                  src={`${imagePath}/${photo.file}`}
                  alt={photo.alt}
                  width={1280}
                  height={960}
                  sizes="(min-width: 1216px) 368px, (min-width: 768px) 31vw, (min-width: 640px) calc(100vw - 64px), calc(100vw - 48px)"
                  className="h-auto w-full rounded-3xl border border-white/10"
                />
                <figcaption className="mt-4 text-sm leading-6 text-white/60">{photo.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025] px-6 py-16 sm:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E5C58B]">Umsetzung</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-light leading-tight text-white sm:text-4xl">Von der ersten Frage bis zur Anfahrt.</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {implementation.map((item) => (
              <div key={item.title} className="rounded-3xl border border-white/10 bg-white/[0.025] p-7">
                <h3 className="text-xl font-medium text-white">{item.title}</h3>
                <p className="mt-4 leading-7 text-white/75">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E5C58B]">Technische Ergebnisse</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-light leading-tight text-white sm:text-4xl">Weniger Bilddaten. Saubere Grundlagen.</h2>
          <div className="mt-8 rounded-3xl border border-[#1AC7A4]/30 bg-[#1AC7A4]/[0.06] p-7 sm:p-9">
            <p className="text-4xl font-light text-[#1AC7A4] sm:text-5xl">Rund 86 % kleiner</p>
            <p className="mt-4 max-w-3xl leading-8 text-white/80">
              Die größten WebP-Varianten der acht verwendeten Fotos umfassen
              zusammen rund 1,6 MB statt 11,5 MB für die Originaldateien.
            </p>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-white/60">
              Vergleich der Bilddateien der Kundenwebsite, nicht der gesamten
              Seitengröße oder Ladezeit. Auf kleineren Bildschirmen können
              kleinere Varianten ausgeliefert werden.
            </p>
          </div>
          <div className="mt-10 grid gap-x-12 gap-y-8 md:grid-cols-2">
            {technicalResults.map((item) => (
              <div key={item.title} className="border-t border-white/10 pt-6">
                <h3 className="text-xl font-medium text-white">{item.title}</h3>
                <p className="mt-4 leading-7 text-white/75">{item.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 max-w-3xl border-t border-white/10 pt-6 leading-7 text-white/75">
            Zur technischen Qualitätssicherung wurden Build, Codeprüfung,
            Browserdarstellung, Sitemap und robots.txt erfolgreich geprüft.
          </p>
        </div>
      </section>

      <section className="px-6 pb-20 sm:px-8 md:pb-28">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-[#E5C58B]/30 bg-[#E5C58B] px-7 py-12 text-[#001821] sm:px-10 md:py-16">
          <h2 className="max-w-3xl text-3xl font-light leading-tight sm:text-4xl">Eine Website, die zu deinem Betrieb passt.</h2>
          <p className="mt-5 max-w-2xl leading-8 text-[#001821]/75">
            Schau dir das Kundenprojekt an. Wenn du deinen eigenen Betrieb
            online klarer zeigen möchtest, sprechen wir über einen passenden Auftritt.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Link href="/kontakt" className="inline-flex min-h-12 items-center gap-3 rounded-full bg-[#001821] px-7 py-4 text-sm font-medium text-white transition hover:-translate-y-0.5">
              Website anfragen <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a href={liveUrl} className="inline-flex min-h-12 items-center gap-2 text-sm font-semibold underline underline-offset-4">
              Live-Website ansehen <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </article>
  );
}
