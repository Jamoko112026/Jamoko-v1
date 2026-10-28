import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Klick & Durch – JaMoKo Referenz",
  alternates: { canonical: "https://jamoko.de/referenzen/klick-und-durch" },
  description:
    "Klick & Durch zeigt beispielhaft, wie JaMoKo einen digitalen Auftritt klar, persönlich und verständlich aufbaut.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function KlickUndDurchReferencePage() {
  return (
    <div className="v3-page relative overflow-hidden">
      <section className="px-6 py-20 sm:px-8 md:py-28">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--jamoko-gold)]">
            JaMoKo Referenz
          </p>

          <h1 className="mt-5 text-4xl font-light leading-tight text-jamoko-text sm:text-5xl md:text-6xl">
            Klick & Durch
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-jamoko-text-dim">
            Eine kleine Referenz dafür, wie JaMoKo versucht, einen digitalen
            Auftritt so aufzubauen, dass Menschen schnell verstehen, was ein
            Angebot besonders macht und wer dahintersteht.
          </p>

          <p className="mt-5 max-w-2xl leading-7 text-jamoko-text-dim">
            Nicht als Vorlage für andere Betriebe – sondern als Einblick in
            unsere Arbeitsweise.
          </p>

          <a
            href="https://klick-und-durch-demo.jamoko-1799.chatgpt.site"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#E5C58B] px-6 py-3 text-sm font-semibold text-[#001821] transition hover:-translate-y-0.5 hover:bg-[#efd49f]"
          >
            Demo ansehen
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>

          <div className="mt-16 border-t border-white/10 pt-8">
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 text-sm text-jamoko-text-dim transition hover:text-jamoko-text"
            >
              Eigenes Projekt besprechen
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
