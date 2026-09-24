import type { Metadata } from 'next';
import Link from 'next/link';
import { DigitalKompass } from '@/components/landing/kompass/DigitalKompass';

export const metadata: Metadata = {
  title: 'Digital-Kompass – dein nächster sinnvoller Schritt',
  description: 'Kostenloser Selbstcheck für kleine Betriebe: digitale Ordnung, Aufgaben, Anfragen, Kennzahlen, Routinen und Website. Dein Ergebnis ohne Anmeldung.',
  alternates: { canonical: 'https://jamoko.de/digital-kompass' },
  openGraph: { title: 'Digital-Kompass · JaMoKo', description: 'Fünf Fragen zu deinem digitalen Arbeitsalltag. Verständliche nächste Schritte ohne Anmeldung.', url: 'https://jamoko.de/digital-kompass' },
};
export default function DigitalKompassPage() {
  return <section className="px-4 py-14 sm:px-6 md:py-20">
    <div className="mx-auto max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-widest text-calm-gold">JaMoKo Digital-Kompass</p>
      <h1 className="mt-5 text-4xl font-semibold tracking-tight text-calm-ink sm:text-5xl">Was würde deinen digitalen Alltag leichter machen?</h1>
      <p className="mt-6 text-lg leading-8 text-calm-muted">Für Selbstständige und kleine Betriebe: Finde heraus, wo du anfangen kannst – von Kundenanfragen bis zu Kennzahlen. Du bekommst konkrete Schritte, die auch mit vorhandenen Werkzeugen funktionieren.</p>
      <p className="mt-5 text-sm font-medium text-calm-gold">Kostenlos · etwa 5 Minuten pro Thema · Ergebnis ohne E-Mail-Adresse</p>
      <DigitalKompass />
      <noscript><p className="mt-6 text-calm-ink">Der interaktive Check benötigt JavaScript. Alternativ kannst du dein Anliegen direkt mit Mo besprechen.</p></noscript>
      <p className="mt-8 text-calm-muted">Lieber direkt sprechen? <Link href="/kontakt" className="text-calm-gold underline">Kontakt zu JaMoKo</Link></p>
    </div>
  </section>;
}
