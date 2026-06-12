import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import SEO from "@/components/SEO";

export default function NotFound() {
  return (
    <>
      <SEO
        title="Seite nicht gefunden | JaMoKo"
        description="Die angeforderte Seite wurde nicht gefunden."
        url="https://jamoko.de/404"
        noIndex
      />

      <main
        id="hero"
        className="relative flex min-h-[70vh] items-center overflow-hidden bg-[#001821] px-6 py-24 text-white sm:px-8"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[28rem] w-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E5C58B]/[0.08] blur-[130px]"
        />

        <div className="relative mx-auto w-full max-w-4xl text-center">
          <p className="text-sm font-semibold tracking-[0.3em] text-[#E5C58B]">
            404
          </p>
          <h1 className="mt-6 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl md:text-6xl">
            Diese Seite ist nicht mehr hier.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/52">
            Vielleicht wurde sie verschoben oder der Link war nicht ganz
            vollständig. Über die Startseite und die Projekte findest du
            schnell zurück.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#E5C58B] px-6 py-3 text-sm font-semibold text-[#001821] transition hover:bg-[#efd49f]"
            >
              <ArrowLeft className="h-4 w-4" />
              Zur Startseite
            </Link>
            <Link
              to="/projekte"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white/75 transition hover:border-[#E5C58B]/40 hover:text-white"
            >
              Projekte ansehen
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
