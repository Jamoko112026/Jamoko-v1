import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Jan-Moritz Koch – persönlich vorgestellt",
  description:
    "Lernen Sie Jan-Moritz Koch kennen: persönlicher Ansprechpartner hinter JaMoKo und Entwickler ruhiger, verständlicher Websites in Hamburg.",
  alternates: {
    canonical: "https://jamoko.de/mo",
  },
  openGraph: {
    title: "Jan-Moritz Koch · JaMoKo",
    description:
      "Der persönliche Ansprechpartner hinter JaMoKo – ruhig, direkt und verständlich.",
    url: "https://jamoko.de/mo",
    images: [
      {
        url: "/og-image-v2.png",
        width: 1200,
        height: 630,
        alt: "Jan-Moritz Koch – JaMoKo",
      },
    ],
  },
};

const principles = [
  "Ich höre zuerst zu.",
  "Ich sortiere, bevor ich gestalte.",
  "Ich erkläre Entscheidungen verständlich.",
  "Ich sage auch, was nicht gebraucht wird.",
];

export default function MoPage() {
  return (
    <div className="relative overflow-hidden">
      <section id="hero" className="px-6 py-20 sm:px-8 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.18fr_0.82fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#E5C58B]">
              Persönlich vorgestellt
            </p>
            <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.08] tracking-[-0.035em] text-white sm:text-5xl md:text-6xl">
              Moin, ich bin Jan-Moritz Koch.
              <span className="mt-3 block font-light text-[#E5C58B]">
                Die meisten nennen mich Mo.
              </span>
            </h1>
            <div className="mt-8 max-w-3xl space-y-5 text-lg leading-8 text-white/70 md:text-xl md:leading-9">
              <p>
                Ich entwickle in Hamburg ruhige, verständliche Websites für
                kleine Unternehmen und Selbstständige.
              </p>
              <p>
                Menschen sollen schnell erkennen, ob sie mit ihrem Anliegen
                richtig sind – und wie der nächste Schritt aussieht.
              </p>
            </div>
          </div>

          <aside className="relative rounded-[2rem] border border-[#E5C58B]/25 bg-white/[0.035] p-7 sm:p-9">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-[#E5C58B]/20 bg-[#001821]">
              <Image
                src="/mo-portrait-v1.webp"
                alt="Jan-Moritz Koch, persönlicher Ansprechpartner bei JaMoKo"
                fill
                priority
                sizes="(min-width: 1024px) 32vw, (min-width: 640px) 70vw, 100vw"
                className="object-cover object-center"
              />
            </div>
            <p className="mt-8 text-xl font-semibold text-white">
              Jan-Moritz Koch
            </p>
            <p className="mt-2 leading-relaxed text-white/62">
              Kaufmann im E-Commerce · Webdesign · digitale Projekte
            </p>
            <div className="mt-7 flex items-center gap-3 border-t border-white/10 pt-6 text-sm text-white/62">
              <MapPin className="h-4 w-4 text-[#1AC7A4]" aria-hidden="true" />
              Hamburg
            </div>
          </aside>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025] px-6 py-16 sm:px-8 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-4xl rounded-[2rem] border border-[#1AC7A4]/20 bg-[#1AC7A4]/[0.055] px-7 py-9 sm:px-10">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#1AC7A4]">
              Falls Sie über meinen Brief hier sind
            </p>
            <p className="mt-5 text-xl leading-9 text-white/78 sm:text-2xl">
              Die Beobachtung in Ihrem Brief stammt von mir. Ich habe mir Ihre
              Website selbst angesehen – nicht automatisiert und nicht als
              Teil einer Massenaktion.
            </p>
          </div>
        </div>
      </section>

      <section className="jmk-section-light jmk-section-paper px-6 py-20 sm:px-8 md:py-28">
        <div className="jmk-section-content mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <p className="jmk-light-eyebrow text-xs font-semibold uppercase tracking-[0.28em]">
              Mein Weg
            </p>
            <h2 className="jmk-light-heading mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
              Digitales verständlich machen.
            </h2>
          </div>
          <div className="jmk-light-copy space-y-6 text-lg leading-9">
            <p>
              Meine Ausbildung zum Kaufmann im E-Commerce habe ich 2025
              abgeschlossen. Bei JaMoKo verbinde ich dieses Wissen mit
              Webdesign und der praktischen Arbeit an digitalen Projekten.
            </p>
            <p>
              Ich habe JaMoKo aufgebaut, weil ich immer wieder sehe: Menschen
              leisten gute Arbeit, aber online wird sie nicht so verständlich
              sichtbar, wie sie es verdient. Gleichzeitig wird digitale Arbeit
              schnell unnötig kompliziert und belastend.
            </p>
            <p>
              Ich möchte beides zusammenbringen: gute Arbeit sichtbar machen
              und digitale Aufgaben so ordnen, dass sie für die Menschen
              dahinter überschaubar werden. Dabei kann ich persönlich und
              unabhängig arbeiten – nah an den Unternehmen und ohne unnötige
              Umwege.
            </p>
            <p>
              Mich interessiert nicht, wie eine Website möglichst groß oder
              technisch klingt. Mich interessiert, ob ein Mensch sich darauf
              zurechtfindet, Vertrauen fasst und eine gute Entscheidung treffen
              kann.
            </p>
            <p>
              Deshalb beginnt meine Arbeit nicht mit Farben oder Effekten,
              sondern mit Zuhören, Ordnen und verständlichen Fragen.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-8 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#E5C58B]">
              Zusammenarbeit
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Direkt mit mir. Ohne Agenturapparat.
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/65">
              Wer mit JaMoKo arbeitet, spricht vom ersten Gespräch bis zur
              fertigen Website mit mir. Das hält Wege kurz und Entscheidungen
              nachvollziehbar.
            </p>
          </div>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {principles.map((principle) => (
              <li
                key={principle}
                className="flex items-start gap-4 rounded-3xl border border-white/10 bg-white/[0.025] p-6 text-lg text-white/75"
              >
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#1AC7A4]/10 text-[#1AC7A4]">
                  <Check className="h-4 w-4" aria-hidden="true" />
                </span>
                {principle}
              </li>
            ))}
          </ul>

          <Link
            href="/projekte"
            className="mt-9 inline-flex items-center gap-2 text-sm font-semibold text-[#E5C58B] transition hover:text-white"
          >
            Ausgewählte Projekte ansehen
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="px-6 pb-20 sm:px-8 md:pb-28">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-[#E5C58B]/30 bg-[#E5C58B] px-7 py-12 text-[#001821] sm:px-10 md:px-14 md:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#001821]/55">
            Persönlich erreichbar
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl">
            Sie möchten meine Beobachtung kurz besprechen?
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#001821]/68">
            Ein unverbindliches Gespräch dauert etwa 15 Minuten. Dafür müssen
            Sie nichts vorbereiten.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[#001821] px-7 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Kontakt aufnehmen
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a
              href="mailto:moin@jamoko.de"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-[#001821]/25 px-7 py-4 text-sm font-semibold text-[#001821] transition hover:border-[#001821]/50"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              moin@jamoko.de
            </a>
            <a
              href="tel:+4917682032127"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-[#001821]/25 px-7 py-4 text-sm font-semibold text-[#001821] transition hover:border-[#001821]/50"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              0176 82032127
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
