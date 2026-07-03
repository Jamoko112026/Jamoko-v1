import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";
import { ContactForm } from "@/components/landing/ContactForm";
import { StructuredData, contactPageJsonLd } from "../structured-data";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Nimm direkt Kontakt mit JaMoKo auf. Ruhige Mini-Websites für lokale Unternehmen aus Hamburg.",
  alternates: {
    canonical: "https://jamoko.de/kontakt",
  },
};

export default function ContactPage() {
  return (
    <>
      <StructuredData data={contactPageJsonLd} />
      <section className="px-4 py-14 sm:px-6 md:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.14em] text-calm-gold">
              Kontakt
            </p>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-calm-ink sm:text-5xl">
              Direkter Kontakt
            </h1>
            <p className="mt-6 text-lg leading-8 text-calm-muted">
              Erzähl mir kurz, was deine Website leisten soll. Ein paar Sätze
              zu deinem Betrieb, deinem Angebot und deinem Ziel reichen völlig
              aus.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
            <aside className="space-y-5">
              <div className="rounded-lg border border-white/10 bg-calm-panel p-6">
                <Mail className="h-5 w-5 text-calm-gold" aria-hidden="true" />
                <h2 className="mt-4 text-lg font-semibold text-calm-ink">
                  Kontaktinformationen
                </h2>
                <a
                  href="mailto:moin@jamoko.de"
                  className="mt-4 block text-calm-gold underline-offset-4 hover:underline"
                >
                  moin@jamoko.de
                </a>
                <p className="mt-3 text-calm-muted">
                  Antwort persönlich und ohne Verkaufsdruck.
                </p>
              </div>
              <div className="rounded-lg border border-white/10 bg-calm-panel p-6">
                <MapPin className="h-5 w-5 text-calm-blue" aria-hidden="true" />
                <h2 className="mt-4 text-lg font-semibold text-calm-ink">
                  Standort
                </h2>
                <p className="mt-4 text-calm-muted">Hamburg</p>
              </div>
            </aside>

            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
