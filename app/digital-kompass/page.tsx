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
      <h1 className="mt-5 text-4xl font-semibold tracking-tight text-calm-ink sm:text-5xl">Zu viel im Kopf. Zu viele Zettel. Wo fangen wir an?</h1>
      <p className="mt-6 text-lg leading-8 text-calm-muted">Du suchst Unterlagen, musst an offene Angebote denken oder fragst dich, ob deine Website überhaupt Kunden bringt? Beantworte fünf einfache Fragen. Danach weißt du, welcher nächste Schritt deinen Alltag leichter machen könnte.</p>
      <p className="mt-5 text-sm font-medium text-calm-gold">Kostenlos · etwa 5 Minuten · ohne Anmeldung</p>
      <DigitalKompass />
      <noscript><p className="mt-6 text-calm-ink">Der interaktive Check benötigt JavaScript. Alternativ kannst du dein Anliegen direkt mit Mo besprechen.</p></noscript>
      <p className="mt-8 text-calm-muted">Lieber direkt sprechen? <Link href="/kontakt" className="text-calm-gold underline">Kontakt zu JaMoKo</Link></p>
    </div>
  </section>;
}
