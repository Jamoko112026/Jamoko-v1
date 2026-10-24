import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section id="hero" aria-labelledby="hero-title" className={styles.section}>
      <div className={styles.media}>
        <Image
          src="/hero/jamoko-hamburg-hero-v3.png"
          alt="Blick über den Hamburger Hafen mit Elbphilharmonie, Schiffen und Containerkränen unter einem weiten Wolkenhimmel."
          fill
          priority
          sizes="100vw"
          className={styles.photo}
        />
      </div>
      <div className={styles.inner}>
        <div className={styles.masthead}>
          <p className={styles.eyebrow}>JaMoKo · Aus Hamburg</p>
          <p className={styles.principle}>Erst Mensch, dann Marke, dann Mechanik.</p>
        </div>

        <h1 id="hero-title" className={styles.title}>
          Menschen verstehen.
          <span>Digitales verbinden.</span>
        </h1>

        <div className={styles.composition}>
          <div className={styles.copy}>
            <p className={styles.intro}>
              JaMoKo verbindet Menschen, Prozesse und digitale Möglichkeiten.
            </p>
            <nav className={styles.paths} aria-label="Leistungswege">
              <Link className={styles.path} href="/mini-site">
                <span className={styles.pathNumber} aria-hidden="true">01</span>
                <span className={styles.pathCopy}>
                  <span className={styles.pathTitle}>Websites &amp; digitale Sichtbarkeit</span>
                  <span className={styles.pathDescription}>Deine Arbeit verständlich zeigen.</span>
                </span>
                <ArrowRight className={styles.pathArrow} size={26} aria-hidden="true" />
              </Link>
              <a className={styles.path} href="#digitalbegleitung">
                <span className={styles.pathNumber} aria-hidden="true">02</span>
                <span className={styles.pathCopy}>
                  <span className={styles.pathTitle}>Digitalbegleitung</span>
                  <span className={styles.pathDescription}>Mehr Ordnung in deinen digitalen Alltag bringen.</span>
                </span>
                <ArrowRight className={styles.pathArrow} size={26} aria-hidden="true" />
              </a>
            </nav>
            <Link className={styles.compass} href="/digital-kompass">
              Noch offen, wo du anfangen sollst?
              <span>
                Zum Digital-Kompass <ArrowRight size={18} aria-hidden="true" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
