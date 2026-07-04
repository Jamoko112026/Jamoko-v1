import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, HeartHandshake, MapPin, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Über JaMoKo",
  description:
    "Über Mo und JaMoKo: ruhiges Webdesign aus Hamburg, Community First und klare digitale Sichtbarkeit für lokale Unternehmen.",
  alternates: {
    canonical: "https://jamoko.de/ueber-jamoko",
  },
};

const values = [
  {
    title: "Erst Mensch",
    text: "Eine gute Website beginnt nicht bei Technik, sondern beim Verstehen des Menschen und seiner Arbeit.",
  },
  {
    title: "Dann Marke",
    text: "Der Auftritt soll wiedererkennbar sein, ohne laut zu werden oder künstlich groß zu wirken.",
  },
  {
    title: "Dann Mechanik",
    text: "Struktur, SEO und Technik dienen dem Ziel: Besucher sollen sich gut zurechtfinden und leichter Kontakt aufnehmen.",
  },
];

const focus = [
  "lokale Betriebe verständlich sichtbar machen",
  "Angebote ruhig sortieren",
  "Vertrauen durch klare Sprache stärken",
  "Kontaktaufnahme einfach halten",
];

export default function AboutJamokoPage() {
  return (
    <div className="relative overflow-hidden">
      <section className="px-6 py-16 sm:px-8 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_0.75fr] lg:items-end">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#E5C58B]">
              Über JaMoKo
            </p>
            <h1 className="mt-5 text-4xl font-light leading-tight text-white sm:text-5xl md:text-6xl">
              Ruhige Websites für echte lokale Arbeit.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/58">
              Ich bin Mo. Mit JaMoKo helfe ich lokalen Unternehmen, Handwerkern
              und Dienstleistern, online klarer sichtbar zu werden, ohne sich zu
              verstellen.
            </p>
          </div>
          <aside className="rounded-3xl border border-white/10 bg-white/[0.025] p-7 sm:p-8">
            <MapPin className="h-5 w-5 text-[#E5C58B]" aria-hidden="true" />
            <h2 className="mt-5 text-xl font-medium text-white">
              Aus Hamburg. Für lokale Nähe.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/50">
              JaMoKo arbeitet persönlich, direkt und mit Blick für Betriebe, die
              im Alltag gute Arbeit leisten.
            </p>
          </aside>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025] px-6 py-16 sm:px-8 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#E5C58B]">
              Haltung
            </p>
            <h2 className="mt-4 text-3xl font-light leading-tight text-white sm:text-4xl">
              Community First.
              <span className="block text-white/40">Nicht Show First.</span>
            </h2>
            <p className="mt-6 leading-relaxed text-white/55">
              Viele kleine Unternehmen brauchen keine laute Bühne. Sie brauchen
              eine Website, die verständlich macht, warum man ihnen vertrauen
              kann.
            </p>
          </div>
          <div className="grid gap-4">
            {values.map((value) => (
              <article
                key={value.title}
                className="rounded-3xl border border-white/10 bg-white/[0.025] p-6"
              >
                <h2 className="text-lg font-medium text-white">
                  {value.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-white/50">
                  {value.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-8 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#E5C58B]">
              Fokus
            </p>
            <h2 className="mt-4 text-3xl font-light leading-tight text-white sm:text-4xl">
              Klarheit entsteht durch Weglassen.
            </h2>
            <p className="mt-6 leading-relaxed text-white/55">
              JaMoKo sucht nicht nach dem lautesten Effekt, sondern nach der
              einfachsten Form, in der dein Angebot verstanden wird.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-7 sm:p-8">
            <ul className="space-y-4">
              {focus.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-white/62">
                  <HeartHandshake
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

      <section className="px-6 pb-20 sm:px-8 md:pb-28">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-[#E5C58B]/30 bg-[#E5C58B] px-7 py-12 text-[#001821] sm:px-10 md:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#001821]/55">
            Kennenlernen
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-light leading-tight sm:text-4xl">
            Wenn dein Betrieb klarer sichtbar werden soll, sprechen wir darüber.
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-[#001821]/65">
            Ohne Verkaufsdruck. Mit einem ehrlichen Blick darauf, was deine
            Website wirklich leisten sollte.
          </p>
          <Link
            href="/kontakt"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#001821] px-7 py-4 text-sm font-medium text-white transition hover:-translate-y-0.5"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Kontakt aufnehmen
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
