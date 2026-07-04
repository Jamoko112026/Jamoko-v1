import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Preise",
  description:
    "Faire Einstiegspakete für JaMoKo Mini-Sites. Klarer Umfang, persönliche Abstimmung und keine unnötig großen Pakete.",
  alternates: {
    canonical: "https://jamoko.de/preise",
  },
};

const packages = [
  {
    title: "Mini-Site Start",
    text: "Für Betriebe, die eine klare erste Website brauchen und schnell verständlich online sein möchten.",
    features: [
      "Kompakter Seitenumfang",
      "Klare Angebotsstruktur",
      "Mobil optimiert",
      "Kontaktbereich mit den wichtigsten Wegen",
    ],
  },
  {
    title: "Mini-Site Plus",
    text: "Für Betriebe, die mehr erklären möchten, zum Beispiel Leistungen, Referenzen oder mehrere Schwerpunkte.",
    features: [
      "Mehr Raum für Inhalte",
      "Referenzen oder Vertrauenselemente",
      "Saubere interne Verlinkung",
      "Gemeinsame Priorisierung vor dem Start",
    ],
    highlight: true,
  },
];

const notes = [
  {
    title: "Fairer Einstieg",
    text: "Der Umfang richtet sich nach dem, was dein Betrieb wirklich braucht. Nicht nach einem künstlich großen Paket.",
  },
  {
    title: "Klar vor dem Start",
    text: "Vor der Umsetzung ist verständlich, welche Seiten, Inhalte und Kontaktwege enthalten sind.",
  },
  {
    title: "Persönlich betreut",
    text: "Du arbeitest direkt mit Mo. Kurze Wege, ruhige Abstimmung, keine anonyme Agenturschleife.",
  },
];

export default function PricingPage() {
  return (
    <div className="relative overflow-hidden">
      <section className="px-6 py-16 sm:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#E5C58B]">
              Preise
            </p>
            <h1 className="mt-5 text-4xl font-light leading-tight text-white sm:text-5xl md:text-6xl">
              Faire Einstiegspakete für klare Websites.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/58">
              Nicht jedes lokale Unternehmen braucht eine große Website. Deshalb
              startet JaMoKo mit überschaubaren Paketen, die vor allem eins tun:
              dein Angebot verständlich sichtbar machen.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/kontakt"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#E5C58B] px-6 py-3 text-sm font-semibold text-[#001821] transition hover:-translate-y-0.5 hover:bg-[#efd49f]"
              >
                Projekt besprechen
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/mini-site"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white/75 transition hover:border-white/30 hover:bg-white/5 hover:text-white"
              >
                Mini-Site verstehen
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 sm:px-8 md:pb-28">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          {packages.map((item) => (
            <article
              key={item.title}
              className={`relative rounded-3xl border p-7 sm:p-9 ${
                item.highlight
                  ? "border-[#E5C58B]/60 bg-[#E5C58B]/[0.07] shadow-[0_20px_70px_rgba(229,197,139,0.08)]"
                  : "border-white/10 bg-white/[0.025]"
              }`}
            >
              {item.highlight ? (
                <span className="absolute -top-3 left-7 rounded-full bg-[#E5C58B] px-3 py-1 text-xs font-medium text-[#001821]">
                  Häufig passend
                </span>
              ) : null}
              <h2 className="text-2xl font-medium text-white">{item.title}</h2>
              <p className="mt-4 leading-relaxed text-white/54">{item.text}</p>
              <div className="my-7 h-px bg-white/10" />
              <ul className="space-y-3">
                {item.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm text-white/60">
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-[#1AC7A4]"
                      aria-hidden="true"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025] px-6 py-16 sm:px-8 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#E5C58B]">
              Einordnung
            </p>
            <h2 className="mt-4 text-3xl font-light leading-tight text-white sm:text-4xl">
              Der Preis folgt dem Umfang.
              <span className="block text-white/40">Nicht andersherum.</span>
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {notes.map((note) => (
              <article
                key={note.title}
                className="rounded-3xl border border-white/10 bg-white/[0.025] p-7"
              >
                <h2 className="text-lg font-medium text-white">{note.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-white/50">
                  {note.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-8 md:py-28">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-[#E5C58B]/30 bg-[#E5C58B] px-7 py-12 text-[#001821] sm:px-10 md:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#001821]/55">
            Nächster Schritt
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-light leading-tight sm:text-4xl">
            Lass uns dein Projekt kurz besprechen.
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-[#001821]/65">
            Danach lässt sich ehrlich sagen, welcher Umfang sinnvoll ist und
            welcher eher nicht.
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
