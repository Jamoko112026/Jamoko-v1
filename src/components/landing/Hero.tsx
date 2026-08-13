import Link from "next/link";
import { ArrowRight, CheckCircle2, Eye } from "lucide-react";

const trustItems = [
  "Für Handwerk, Dienstleister und lokale Unternehmen",
  "Direkte persönliche Zusammenarbeit",
  "Klare Website ohne Agentur-Floskeln",
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-[#001821] px-6 pb-28 pt-14 sm:px-8 sm:pt-20 md:pb-36 md:pt-28"
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div className="absolute -left-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-[#E5C58B]/10 blur-3xl" />
        <div className="absolute -right-48 top-32 h-[32rem] w-[32rem] rounded-full bg-[#1AC7A4]/10 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#E5C58B]/30 to-transparent" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 md:gap-16 lg:grid-cols-[1.06fr_0.94fr]">
        <div className="lg:pb-4">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-[#E5C58B] sm:text-sm">
            Webdesign für lokale Unternehmen
          </p>
          <h1 className="max-w-3xl text-[2.55rem] font-light leading-[1.06] tracking-normal text-white sm:text-5xl md:text-6xl">
            Deine Arbeit ist gut.
            <span className="block text-[#E5C58B]">
              Deine Website sollte das zeigen.
            </span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg font-light leading-8 text-white/70 md:text-xl md:leading-9">
            Du kennst dein Geschäft. Wir bringen auf den Punkt, was dich ausmacht
            – und bauen daraus eine klare Website, auf der Menschen schnell
            verstehen, warum sie bei dir richtig sind.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#E5C58B] px-7 py-4 text-sm font-semibold text-[#001821] transition hover:-translate-y-0.5 hover:bg-[#efd49f] focus:outline-none focus:ring-2 focus:ring-[#E5C58B] focus:ring-offset-4 focus:ring-offset-[#001821]"
            >
              Kostenlos kennenlernen
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#beispiele"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-4 text-sm font-medium text-white/80 transition hover:border-white/30 hover:bg-white/5 hover:text-white"
            >
              Projekte ansehen
              <Eye className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm leading-6 text-white/70">
            {trustItems.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <CheckCircle2
                  className="h-4 w-4 text-[#1AC7A4]"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-md sm:max-w-lg lg:justify-self-end">
          <div
            className="absolute -inset-8 rounded-full bg-[#E5C58B]/10 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#012631]/80 p-3 shadow-[0_28px_90px_rgba(0,0,0,0.26)] backdrop-blur-xl">
            <div className="mb-3 flex items-center gap-2 px-2 py-1">
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#1AC7A4]/50" />
              <span className="ml-auto text-[10px] tracking-[0.18em] text-white/70">
                JAMOKO.DE
              </span>
            </div>

            <div className="rounded-[1.25rem] border border-white/5 bg-[#001821] p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[0.24em] text-[#E5C58B]">
                Klarer erster Eindruck
              </p>
              <h2 className="mt-5 text-3xl font-light leading-tight text-white sm:text-4xl">
                Dein Angebot.
                <span className="block text-white/40">Schneller verstanden.</span>
              </h2>

              <div className="mt-8 space-y-3">
                <div className="h-2.5 w-full rounded-full bg-white/10" />
                <div className="h-2.5 w-4/5 rounded-full bg-white/10" />
                <div className="h-2.5 w-3/5 rounded-full bg-white/10" />
              </div>

              <div className="mt-9 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-[#E5C58B]/20 bg-[#E5C58B]/5 p-4">
                  <span className="block text-2xl font-light text-[#E5C58B]">
                    01
                  </span>
                  <span className="mt-1 block text-xs text-white/70">
                    Leistung verstehen
                  </span>
                </div>
                <div className="rounded-xl border border-[#1AC7A4]/20 bg-[#1AC7A4]/5 p-4">
                  <span className="block text-2xl font-light text-[#1AC7A4]">
                    02
                  </span>
                  <span className="mt-1 block text-xs text-white/70">
                    Kontakt aufnehmen
                  </span>
                </div>
              </div>
            </div>
          </div>

          <Link
            href="/projekte"
            className="absolute -bottom-6 left-4 right-4 flex items-center justify-between rounded-2xl border border-white/10 bg-[#052a35]/95 px-5 py-4 text-sm text-white/70 shadow-xl backdrop-blur-xl transition hover:border-[#E5C58B]/30 hover:text-white sm:left-auto sm:right-6 sm:w-72"
          >
            <span>
              <span className="block text-xs uppercase tracking-[0.18em] text-[#E5C58B]">
                Neues Konzept
              </span>
              <span className="mt-1 block">Goldschmiede</span>
            </span>
            <ArrowRight
              className="h-4 w-4 text-[#E5C58B]"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
