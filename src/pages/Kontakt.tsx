import SEO from "@/components/SEO";
import {
  ArrowUpRight,
  Check,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";
import { ORG } from "../org";

const inputClass =
  "w-full rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3.5 text-white outline-none transition placeholder:text-white/25 focus:border-[#E5C58B]/50 focus:bg-white/[0.055] focus:ring-2 focus:ring-[#E5C58B]/10";

export default function Kontakt() {
  useTitle("Kontakt · Jamoko");
  const [searchParams] = useSearchParams();
  const sent = searchParams.get("success") === "1";
  const telHref = `tel:${ORG.phone.replace(/\s+/g, "")}`;

  return (
    <>
      <SEO
        title="Kontakt · Jamoko Webdesign Hamburg"
        description="Besprich dein Website-Projekt direkt mit Jamoko. Persönlich, unverbindlich und ohne Verkaufsdruck."
        url="https://jamoko.de/kontakt"
      />

      <main className="relative overflow-hidden bg-[#001821] px-6 pb-24 pt-16 text-white sm:px-8 md:pb-32 md:pt-24">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -left-48 top-0 h-[32rem] w-[32rem] rounded-full bg-[#E5C58B]/10 blur-3xl" />
          <div className="absolute -right-48 top-1/3 h-[30rem] w-[30rem] rounded-full bg-[#1AC7A4]/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl">
          <header className="max-w-3xl">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-[#E5C58B]">
              Kontakt
            </p>
            <h1 className="text-4xl font-light leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Erzähl mir kurz,
              <span className="block text-white/40">
                was deine Website leisten soll.
              </span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg font-light leading-relaxed text-white/60">
              Du brauchst noch kein fertiges Konzept. Ein paar Stichpunkte zu
              deinem Unternehmen, deinem Ziel und dem gewünschten Zeitraum
              reichen für den Anfang.
            </p>
          </header>

          <div className="mt-16 grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:gap-12">
            <aside className="space-y-6">
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 sm:p-8">
                <h2 className="text-xl font-medium">Direkt erreichbar</h2>
                <p className="mt-3 text-sm leading-relaxed text-white/45">
                  Wähle einfach den Kanal, der für dich am angenehmsten ist.
                </p>

                <div className="mt-8 space-y-3">
                  <a
                    href={`mailto:${ORG.email}`}
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 p-4 transition hover:border-[#E5C58B]/30 hover:bg-white/[0.035]"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E5C58B]/10 text-[#E5C58B]">
                      <Mail className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-xs text-white/35">E-Mail</span>
                      <span className="mt-0.5 block text-sm text-white/80">
                        {ORG.email}
                      </span>
                    </span>
                    <ArrowUpRight
                      className="ml-auto h-4 w-4 text-white/25 transition group-hover:text-[#E5C58B]"
                      aria-hidden="true"
                    />
                  </a>

                  <a
                    href="https://wa.me/4917682032127"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 p-4 transition hover:border-[#1AC7A4]/30 hover:bg-white/[0.035]"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#1AC7A4]/10 text-[#1AC7A4]">
                      <MessageCircle className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-xs text-white/35">WhatsApp</span>
                      <span className="mt-0.5 block text-sm text-white/80">
                        Kurze Nachricht senden
                      </span>
                    </span>
                    <ArrowUpRight
                      className="ml-auto h-4 w-4 text-white/25 transition group-hover:text-[#1AC7A4]"
                      aria-hidden="true"
                    />
                  </a>

                  <a
                    href={telHref}
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 p-4 transition hover:border-white/25 hover:bg-white/[0.035]"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/5 text-white/70">
                      <Phone className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-xs text-white/35">Telefon</span>
                      <span className="mt-0.5 block text-sm text-white/80">
                        {ORG.phone}
                      </span>
                    </span>
                  </a>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                  <Clock3
                    className="h-5 w-5 shrink-0 text-[#E5C58B]"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="text-sm font-medium">Schnelle Rückmeldung</h3>
                    <p className="mt-1 text-sm leading-relaxed text-white/40">
                      Meist innerhalb von 24 Stunden an Werktagen.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                  <MapPin
                    className="h-5 w-5 shrink-0 text-[#1AC7A4]"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="text-sm font-medium">Aus Hamburg</h3>
                    <p className="mt-1 text-sm leading-relaxed text-white/40">
                      Persönlich vor Ort oder unkompliziert per Video.
                    </p>
                  </div>
                </div>
              </div>
            </aside>

            <section className="rounded-[2rem] border border-white/10 bg-[#012631]/65 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-9">
              {sent ? (
                <div className="flex min-h-[32rem] flex-col items-center justify-center text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#1AC7A4]/10 text-[#1AC7A4]">
                    <Check className="h-7 w-7" aria-hidden="true" />
                  </span>
                  <h2 className="mt-7 text-3xl font-light">
                    Danke für deine Nachricht.
                  </h2>
                  <p className="mt-4 max-w-md leading-relaxed text-white/50">
                    Deine Anfrage ist angekommen. Ich melde mich so bald wie
                    möglich persönlich bei dir.
                  </p>
                  <Link
                    to="/"
                    className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm text-white/70 transition hover:border-white/30 hover:text-white"
                  >
                    Zurück zur Startseite
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#E5C58B]">
                      Projektanfrage
                    </p>
                    <h2 className="mt-3 text-2xl font-light sm:text-3xl">
                      Worum geht es bei dir?
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-white/45">
                      Pflichtfelder sind mit * markiert.
                    </p>
                  </div>

                  <form
                    name="kontakt"
                    method="POST"
                    action="/kontakt?success=1"
                    data-netlify="true"
                    netlify-honeypot="bot-field"
                    className="space-y-5"
                  >
                    <input type="hidden" name="form-name" value="kontakt" />
                    <p className="hidden">
                      <label>
                        Dieses Feld nicht ausfüllen:
                        <input name="bot-field" />
                      </label>
                    </p>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <label className="block">
                        <span className="mb-2 block text-sm text-white/70">
                          Dein Name *
                        </span>
                        <input
                          name="name"
                          autoComplete="name"
                          required
                          className={inputClass}
                        />
                      </label>

                      <label className="block">
                        <span className="mb-2 block text-sm text-white/70">
                          E-Mail *
                        </span>
                        <input
                          name="email"
                          type="email"
                          autoComplete="email"
                          required
                          className={inputClass}
                        />
                      </label>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <label className="block">
                        <span className="mb-2 block text-sm text-white/70">
                          Unternehmen
                        </span>
                        <input
                          name="company"
                          autoComplete="organization"
                          className={inputClass}
                        />
                      </label>

                      <label className="block">
                        <span className="mb-2 block text-sm text-white/70">
                          Worum geht es? *
                        </span>
                        <select name="project" required className={inputClass}>
                          <option value="">Bitte auswählen</option>
                          <option value="Neue Website">Neue Website</option>
                          <option value="Website überarbeiten">
                            Website überarbeiten
                          </option>
                          <option value="Referenzseite">Referenzseite</option>
                          <option value="Noch unsicher">Noch unsicher</option>
                        </select>
                      </label>
                    </div>

                    <label className="block">
                      <span className="mb-2 block text-sm text-white/70">
                        Erzähl mir kurz von deinem Projekt *
                      </span>
                      <textarea
                        name="message"
                        required
                        rows={7}
                        placeholder="Was bietest du an? Was soll sich durch die neue Website verbessern?"
                        className={`${inputClass} resize-y`}
                      />
                    </label>

                    <label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-white/50">
                      <input
                        type="checkbox"
                        name="consent"
                        value="accepted"
                        required
                        className="mt-1 h-4 w-4 rounded border-white/20 accent-[#E5C58B]"
                      />
                      <span>
                        Ich habe die{" "}
                        <Link
                          to="/datenschutz"
                          className="text-[#E5C58B] underline-offset-4 hover:underline"
                        >
                          Datenschutzhinweise
                        </Link>{" "}
                        gelesen und stimme der Verarbeitung meiner Angaben zur
                        Bearbeitung der Anfrage zu.
                      </span>
                    </label>

                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#E5C58B] px-7 py-4 text-sm font-semibold text-[#001821] transition hover:bg-[#efd49f] focus:outline-none focus:ring-2 focus:ring-[#E5C58B] focus:ring-offset-4 focus:ring-offset-[#012631]"
                    >
                      Nachricht senden
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </button>

                    <p className="text-center text-xs text-white/30">
                      Keine Newsletter-Anmeldung · Keine Weitergabe deiner Daten
                    </p>
                  </form>
                </>
              )}
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
