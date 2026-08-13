import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  HeartHandshake,
  MessageCircle,
  SearchCheck,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "JaMoKo Preise – Website ab 1.490 €",
  description:
    "Klare Website-Angebote für lokale Betriebe, Handwerker und Selbstständige. Bis zu 5 Inhaltsseiten, persönliche Umsetzung und transparenter Projektumfang ab 1.490 €.",
  alternates: {
    canonical: "https://jamoko.de/preise",
  },
  openGraph: {
    title: "JaMoKo Preise – Website ab 1.490 €",
    description:
      "Klare Website-Angebote für lokale Betriebe, Handwerker und Selbstständige. Bis zu 5 Inhaltsseiten, persönliche Umsetzung und transparenter Projektumfang ab 1.490 €.",
    url: "https://jamoko.de/preise",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "JaMoKo Website für lokale Betriebe",
      },
    ],
  },
};

const includedFeatures = [
  "Bis zu 5 Inhaltsseiten",
  "Individuelles Design passend zu deinem Betrieb",
  "Hilfe bei Struktur und Texten",
  "Optimiert für Smartphone, Tablet und Desktop",
  "Technische SEO-Grundlagen",
  "Kontakt, Öffnungszeiten und wichtige Unternehmensinfos",
  "Impressum und Datenschutz technisch eingebunden",
  "1 gebündelte Korrekturrunde",
  "Veröffentlichung und Übergabe",
];

const trustCards = [
  {
    title: "Persönlich",
    text: "Du sprichst direkt mit der Person, die dein Projekt versteht und umsetzt.",
    icon: HeartHandshake,
  },
  {
    title: "Verständlich",
    text: "Wir erklären Entscheidungen so, dass du sie nachvollziehen kannst.",
    icon: MessageCircle,
  },
  {
    title: "Transparent",
    text: "Du weißt vor dem Start, worum es geht und was enthalten ist.",
    icon: SearchCheck,
  },
  {
    title: "Nachhaltig",
    text: "Wir bauen nichts ein, was später nur Aufwand macht.",
    icon: ShieldCheck,
  },
];

function SectionHeading({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#E5C58B]">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-light leading-tight text-white sm:text-4xl">
        {title}
      </h2>
      {intro ? (
        <p className="mt-5 text-base leading-8 text-white/58">{intro}</p>
      ) : null}
    </div>
  );
}

function TextSection({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="px-6 py-20 sm:px-8 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
        <SectionHeading eyebrow={eyebrow} title={title} />
        <div className="space-y-5 text-base leading-8 text-white/58">
          {children}
        </div>
      </div>
    </section>
  );
}

export default function PricingPage() {
  return (
    <div className="relative overflow-hidden">
      <section className="px-6 py-16 sm:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#E5C58B]">
              Klare Leistung
            </p>
            <h1 className="mt-5 text-4xl font-light leading-tight text-white sm:text-5xl md:text-6xl">
              Du weißt vorher, was du bekommst.
              <span className="block text-white/40">Und was es kostet.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/58">
              Eine kompakte Unternehmenswebsite mit klar definiertem Umfang.
              Wenn dein Projekt mehr braucht, besprechen wir das vor dem Start.
            </p>
            <Link
              href="/kontakt"
              className="mt-9 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#E5C58B] px-6 py-3 text-sm font-semibold text-[#001821] transition hover:-translate-y-0.5 hover:bg-[#efd49f]"
            >
              Kostenlos kennenlernen
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <TextSection eyebrow="Transparenz" title="Ein klarer Rahmen vor dem Start">
        <p>
          Vor Projektstart halten wir fest, welche Leistungen enthalten sind
          und welche Inhalte wir gemeinsam umsetzen. Es gibt keine versteckten
          Pakete.
        </p>
        <p>
          Eine gebündelte Korrekturrunde ist enthalten. Zusätzliche
          Anforderungen besprechen wir vorab separat; neue Wünsche nach der
          Abnahme gelten als Erweiterung.
        </p>
      </TextSection>

      <section className="border-y border-white/10 bg-white/[0.025] px-6 py-20 sm:px-8 md:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Angebot"
            title="JaMoKo Website"
            intro="Für lokale Betriebe, Handwerker und Selbstständige"
          />

          <article className="mt-12 grid gap-10 rounded-3xl border border-[#E5C58B]/60 bg-[#E5C58B]/[0.07] p-7 shadow-[0_20px_70px_rgba(229,197,139,0.08)] sm:p-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
            <div>
              <p className="text-4xl font-light text-[#E5C58B] sm:text-5xl">
                ab 1.490 €
              </p>
              <div className="mt-8 space-y-4 border-t border-white/10 pt-8 text-sm leading-7 text-white/60">
                <p>In der Regel 2–3 Wochen nach vollständigem Onboarding</p>
                <p>50 % zum Start · 50 % zum Abschluss</p>
              </div>
              <Link
                href="/kontakt"
                className="mt-8 inline-flex min-h-11 w-fit items-center justify-center gap-2 rounded-full bg-[#E5C58B] px-5 py-2.5 text-sm font-semibold text-[#001821] transition hover:-translate-y-0.5 hover:bg-[#efd49f]"
              >
                Kostenlos kennenlernen
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <ul className="space-y-4">
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-3 text-sm text-white/62">
                  <CheckCircle2
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#1AC7A4]"
                    aria-hidden="true"
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-8 md:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Vertrauen"
            title="Was du bei JaMoKo erwarten kannst"
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {trustCards.map(({ title, text, icon: Icon }) => (
              <article
                key={title}
                className="rounded-3xl border border-white/10 bg-white/[0.025] p-7"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#1AC7A4]/20 bg-[#1AC7A4]/5 text-[#1AC7A4]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h2 className="mt-8 text-xl font-medium text-white">
                  {title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-white/52">
                  {text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025] px-6 py-20 sm:px-8 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            eyebrow="Zusätzlicher Bedarf"
            title="Wenn dein Projekt mehr braucht"
            intro="Manche Vorhaben gehen über den klar definierten Standardumfang hinaus."
          />
          <div className="text-base leading-8 text-white/58">
            <p>
              Shops, komplexe Buchungssysteme, individuelle Web-Apps,
              umfangreiche Migrationen oder laufende Betreuung besprechen wir
              separat vor Projektstart.
            </p>
          </div>
        </div>
      </section>

      <TextSection eyebrow="Preisrahmen" title="Was vereinbart ist, bleibt klar.">
        <p>
          Der Umfang steht vor Projektstart fest. So weißt du, welche Leistungen
          zum Angebot gehören und welche Kosten entstehen.
        </p>
        <p>
          Zusätzliche Anforderungen werden vorab separat besprochen. Eine
          gebündelte Korrekturrunde ist enthalten.
        </p>
        <p>
          Neue Wünsche nach der Abnahme behandeln wir als Erweiterung und
          stimmen den zusätzlichen Aufwand mit dir ab.
        </p>
      </TextSection>

      <section className="px-6 py-20 sm:px-8 md:py-28">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-[#E5C58B]/30 bg-[#E5C58B] px-7 py-12 text-[#001821] sm:px-10 md:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#001821]/55">
            Nächster Schritt
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-light leading-tight sm:text-4xl">
            Kostenlos kennenlernen
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-[#001821]/65">
            In etwa 15 Minuten klären wir kostenlos, was dein Betrieb braucht
            und ob die JaMoKo Website der richtige nächste Schritt ist.
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
  );
}
