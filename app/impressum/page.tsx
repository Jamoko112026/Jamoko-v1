import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Impressum",
  description:
    "Impressum von JaMoKo – Webdesign Hamburg für lokale Betriebe, Handwerker, Dienstleister und Selbstständige.",
  alternates: {
    canonical: "https://jamoko.de/impressum",
  },
  openGraph: {
    title: "Impressum · JaMoKo",
    description: "Rechtliche Angaben zu JaMoKo – Community First.",
    url: "https://jamoko.de/impressum",
    images: [
      {
        url: "/og-image-v2.png",
        width: 1200,
        height: 630,
        alt: "JaMoKo Impressum",
      },
    ],
  },
};

const legalSections = [
  {
    title: "Anbieter",
    content: [
      "JaMoKo – Community First",
      "Jan-Moritz („Mo“) Koch",
      "Hainbuchenweg 2 · 22299 Hamburg",
      "Deutschland",
    ],
  },
  {
    title: "Vertretungsberechtigt",
    content: ["Jan-Moritz („Mo“) Koch"],
  },
  {
    title: "Umsatzsteuer-ID",
    content: ["Derzeit nicht angegeben."],
  },
  {
    title: "Inhaltlich verantwortlich",
    content: ["Jan-Moritz („Mo“) Koch, Hainbuchenweg 2, 22299 Hamburg"],
  },
];

export default function ImpressumPage() {
  return (
    <div className="v3-page relative overflow-hidden">
      <section className="v3-page-header px-6 py-16 sm:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--jamoko-gold)]">
              Rechtliches
            </p>
            <h1 className="mt-5 text-4xl font-light leading-tight text-jamoko-text sm:text-5xl md:text-6xl">
              Impressum
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-jamoko-text-dim">
              Angaben gemäß den rechtlichen Informationspflichten.
            </p>
          </div>
        </div>
      </section>

      <section className="v3-paper px-6 pb-20 sm:px-8 md:pb-28">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2">
          {legalSections.map((section) => (
            <article
              key={section.title}
              className="v3-fact rounded-3xl border border-white/10 bg-white/[0.025] p-7"
            >
              <h2 className="text-xl font-medium text-jamoko-text">
                {section.title}
              </h2>
              <div className="mt-4 space-y-2 text-sm leading-7 text-jamoko-text-dim">
                {section.content.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </article>
          ))}

          <article className="v3-fact rounded-3xl border border-white/10 bg-white/[0.025] p-7">
            <Mail className="h-5 w-5 text-[var(--jamoko-gold)]" aria-hidden="true" />
            <h2 className="mt-5 text-xl font-medium text-jamoko-text">Kontakt</h2>
            <div className="mt-4 space-y-3 text-sm leading-7 text-jamoko-text-dim">
              <a
                href="mailto:moin@jamoko.de"
                className="flex items-center gap-3 text-[var(--jamoko-gold)] transition hover:text-[#efd49f]"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                moin@jamoko.de
              </a>
              <a
                href="tel:+4917682032127"
                className="flex items-center gap-3 text-jamoko-text-dim transition hover:text-jamoko-text"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                +49 176 82032127
              </a>
              <a
                href="https://jamoko.de"
                className="inline-flex text-jamoko-text-dim transition hover:text-jamoko-text"
              >
                https://jamoko.de
              </a>
            </div>
          </article>

          <article className="v3-fact rounded-3xl border border-white/10 bg-white/[0.025] p-7">
            <h2 className="text-xl font-medium text-jamoko-text">
              Haftung und Urheberrecht
            </h2>
            <div className="mt-4 space-y-4 text-sm leading-7 text-jamoko-text-dim">
              <p>
                Als Diensteanbieter sind wir für eigene Inhalte auf diesen
                Seiten nach den allgemeinen Gesetzen verantwortlich.
              </p>
              <p>
                Externe Links führen zu Inhalten Dritter. Für diese Inhalte ist
                der jeweilige Anbieter verantwortlich.
              </p>
              <p>
                Die Inhalte dieser Website unterliegen dem deutschen
                Urheberrecht.
              </p>
            </div>
          </article>
        </div>

        <div className="mx-auto mt-10 max-w-6xl">
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--jamoko-gold)] transition hover:text-[#efd49f]"
          >
            Rückfragen zum Impressum
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
