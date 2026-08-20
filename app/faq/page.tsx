import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { StructuredData, faqPageJsonLd } from "../structured-data";
import { faqItems } from "./faq-data";

export const metadata: Metadata = {
  title: "FAQ – Fragen zur JaMoKo Website",
  description:
    "Antworten zu Preis, Umfang, Ablauf, Projektlaufzeit, Korrekturrunde und Zusammenarbeit mit JaMoKo.",
  alternates: {
    canonical: "https://jamoko.de/faq",
  },
  openGraph: {
    title: "FAQ – Fragen zur JaMoKo Website",
    description:
      "Antworten zu Preis, Umfang, Ablauf, Projektlaufzeit, Korrekturrunde und Zusammenarbeit mit JaMoKo.",
    url: "https://jamoko.de/faq",
    images: [
      {
        url: "/og-image-v2.png",
        width: 1200,
        height: 630,
        alt: "JaMoKo FAQ",
      },
    ],
  },
};

export default function FaqPage() {
  return (
    <>
      <StructuredData data={faqPageJsonLd} />
      <div className="relative overflow-hidden">
        <section className="px-6 py-16 sm:px-8 md:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#E5C58B]">
                FAQ
              </p>
              <h1 className="mt-5 text-4xl font-light leading-tight text-white sm:text-5xl md:text-6xl">
                Häufige Fragen
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/58">
                Kurze Antworten auf Fragen zu Websites, Preisen und der
                Zusammenarbeit mit JaMoKo in Hamburg.
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 pb-20 sm:px-8 md:pb-28">
          <div className="mx-auto max-w-6xl space-y-4">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="group rounded-3xl border border-white/10 bg-white/[0.025] p-6 open:border-[#E5C58B]/35 open:bg-white/[0.045]"
              >
                <summary className="flex cursor-pointer items-start justify-between gap-6 text-left text-lg font-medium text-white">
                  <span>{item.question}</span>
                  <span className="mt-1 text-[#E5C58B] transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-5 max-w-3xl text-sm leading-7 text-white/55">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>

          <div className="mx-auto mt-12 max-w-6xl rounded-[2rem] border border-[#E5C58B]/30 bg-[#E5C58B] px-7 py-12 text-[#001821] sm:px-10 md:py-14">
            <h2 className="max-w-3xl text-3xl font-light leading-tight">
              Deine Frage ist nicht dabei?
            </h2>
            <p className="mt-5 max-w-2xl leading-relaxed text-[#001821]/65">
              Schreib kurz, worum es geht. Eine einfache Frage reicht völlig
              aus.
            </p>
            <Link
              href="/kontakt"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#001821] px-7 py-4 text-sm font-medium text-white transition hover:-translate-y-0.5"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Kostenlos kennenlernen
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
