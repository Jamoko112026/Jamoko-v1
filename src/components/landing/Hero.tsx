import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Phone } from "lucide-react";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section id="hero" aria-labelledby="hero-title" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Websites &amp; Digitalbegleitung · Hamburg</p>
          <h1 id="hero-title" className={styles.title}>
            Deine Website soll dir <span>Arbeit abnehmen.</span>
          </h1>
          <p className={styles.intro}>
            Wir bauen und verbessern Websites für kleine Betriebe. Und wir kümmern uns darum,
            dass Anfragen, Termine und E-Mails auch bei dir im Alltag zusammenpassen.
          </p>
          <div className={styles.actions}>
            <Link className={styles.primary} href="/kontakt">Projekt besprechen</Link>
            <Link className={styles.secondary} href="/mini-site#bestehende-website">
              Bestehende Website verbessern
            </Link>
          </div>
          <Link className={styles.digital} href="#digitalbegleitung">Zur Digitalbegleitung</Link>
        </div>

        <aside className={styles.example} aria-labelledby="hero-example-title">
          <div className={styles.media}>
            <Image
              src="/hero/jamoko-hamburg-hero-v3.png"
              alt=""
              fill
              sizes="(min-width: 1400px) 530px, (min-width: 850px) 40vw, 90vw"
              className={styles.photo}
            />
          </div>
          <div className={styles.caption}>
            <p className={styles.exampleLabel}>Aus der Praxis · Hausmeisterservice</p>
            <p id="hero-example-title" className={styles.exampleTitle}>Zwei Termine, zwei Wege.</p>
          </div>
          <dl className={styles.routes}>
            <div className={styles.route}>
              <dt><Phone size={19} aria-hidden="true" /> Rückruf</dt>
              <dd>15 Minuten · direkt buchbar</dd>
            </div>
            <div className={styles.route}>
              <dt><CalendarDays size={20} aria-hidden="true" /> Besichtigung</dt>
              <dd>30 Minuten · persönlich bestätigt</dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  );
}
