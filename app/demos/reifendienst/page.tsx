import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Demo Reifendienst",
  description:
    "Demo-Landingpage für einen lokalen Reifendienst im ruhigen JaMoKo-Stil.",
  robots: {
    index: false,
    follow: false,
  },
};

const points = [
  "Leistungen schnell verständlich machen",
  "Preise und Kontaktwege übersichtlich führen",
  "Mobil nutzbar für Menschen unterwegs",
];

export default function ReifendienstDemoPage() {
  return (
    <div className="relative overflow-hidden">
      <section className="px-6 py-16 sm:px-8 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#E5C58B]">
              Demo
            </p>
            <h1 className="mt-5 text-4xl font-light leading-tight text-white sm:text-5xl md:text-6xl">
              Website-Demo für einen lokalen Reifendienst.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/58">
              Diese Demo zeigt, wie ein lokaler Servicebetrieb Leistungen,
              Preise und Kontaktwege klarer darstellen kann.
            </p>
            <Link
              href="/kontakt"
              className="mt-9 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#E5C58B] px-6 py-3 text-sm font-semibold text-[#001821] transition hover:-translate-y-0.5 hover:bg-[#efd49f]"
            >
              Ähnliches Projekt besprechen
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-[#06252f]">
            <Image
              src="/ard/Hero_1920w_ARDlook.jpg"
              alt="Demo-Ansicht für einen lokalen Reifendienst"
              fill
              priority
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#001821]/80 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025] px-6 py-16 sm:px-8 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
          {points.map((point) => (
            <article
              key={point}
              className="rounded-3xl border border-white/10 bg-white/[0.025] p-7"
            >
              <CheckCircle2
                className="h-5 w-5 text-[#1AC7A4]"
                aria-hidden="true"
              />
              <h2 className="mt-6 text-lg font-medium text-white">{point}</h2>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
