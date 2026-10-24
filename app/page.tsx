import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProductPreview } from "@/components/landing/ProductPreview";
import { Hero } from "@/components/landing/Hero";
import { StructuredData, homePageJsonLd } from "./structured-data";
import introStyles from "./HomeIntro.module.css";
import styles from "./Home.module.css";

export const metadata: Metadata = {
  title: { absolute: "JaMoKo – Websites & Digitalbegleitung" },
  description:
    "Websites, digitale Sichtbarkeit und Digitalbegleitung für lokale Unternehmen. Wir hören zu, ordnen und finden Lösungen, die zu deinem Alltag passen.",
  alternates: {
    canonical: "https://jamoko.de",
  },
  openGraph: {
    title: "JaMoKo – Websites & Digitalbegleitung",
    description:
      "Websites, digitale Sichtbarkeit und Digitalbegleitung für lokale Unternehmen. Wir hören zu, ordnen und finden Lösungen, die zu deinem Alltag passen.",
    url: "https://jamoko.de",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "JaMoKo – Websites & Digitalbegleitung",
      },
    ],
  },
};

const calendlyUrl =
  "https://calendly.com/moin-jamoko/jamoko-mini-site-kennenlernen-15-min";

function ProblemSection() {
  return (
    <section className={introStyles.section} aria-labelledby="ausgangslage-title" data-no-reveal>
      <div className={introStyles.inner}>
        <p className={introStyles.eyebrow}><span aria-hidden="true">02 /</span> Dein Ausgangspunkt</p>
        <h2 id="ausgangslage-title" className={introStyles.title}>
          <span>Manchmal weißt du nur:</span> So wie jetzt soll es nicht bleiben.
        </h2>
        <ul className={introStyles.signals}>
          <li>Die Website passt nicht mehr.</li>
          <li>Dateien und Kalender liegen verteilt.</li>
          <li>Neue digitale Möglichkeiten sind schwer einzuordnen.</li>
        </ul>
        <p className={introStyles.closing}>Du musst die Lösung noch nicht kennen.</p>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className={`${styles.band} ${styles.servicesBand}`} aria-labelledby="services-title">
      <div className={styles.inner}>
        <p className={styles.eyebrow}>03 / Zwei Wege. Ein Ausgangspunkt.</p>
        <h2 id="services-title" className={styles.heading}>Was brauchst du gerade?</h2>
        <div className={styles.services}>
          <article className={styles.serviceWebsite}>
            <p className={styles.index}>01 / Sichtbar werden</p>
            <h3>Websites &amp;<br />digitale Sichtbarkeit</h3>
            <p>Eine klare Website, die zeigt, wer du bist, was du anbietest und wie man dich erreicht.</p>
            <Link className={styles.textLink} href="/mini-site">JaMoKo Website ansehen <ArrowRight size={19} aria-hidden="true" /></Link>
            <div id="pricing" className={styles.offer}>
              <p className={styles.price}>ab 1.490 €</p>
              <p>Bis zu 5 Inhaltsseiten · 1 gebündelte Korrekturrunde</p>
              <p className={styles.terms}>In der Regel 2–3 Wochen nach vollständigem Onboarding.<br />50 % zum Start · 50 % zum Abschluss.</p>
              <Link className={styles.textLink} href="/preise">Leistungsumfang &amp; Preise <ArrowRight size={19} aria-hidden="true" /></Link>
            </div>
          </article>
          <article id="digitalbegleitung" className={styles.serviceDigital}>
            <p className={styles.index}>02 / Klarheit gewinnen</p>
            <h3>Digitalbegleitung</h3>
            <p>Dateien, Kalender und Werkzeuge so ordnen, dass sie zu deiner Arbeit passen. Gemeinsam vereinfachen wir Strukturen und setzen sinnvolle Lösungen verständlich um.</p>
            <div id="digital-check" className={styles.check}>
              <h4>Der JaMoKo Digital-Check</h4>
              <p>Wir schauen gemeinsam auf deinen digitalen Arbeitsalltag und sortieren, was jetzt, danach und später sinnvoll ist.</p>
              <p className={styles.note}>Danach kannst du auch selbst weitermachen.</p>
              <Link className={styles.goldButton} href="/kontakt">Digital-Check anfragen <ArrowRight size={18} aria-hidden="true" /></Link>
            </div>
          </article>
        </div>
        <div className={styles.serviceLinks}>
          <Link href="/start#vorgehen">Erst verstehen. Dann umsetzen. <ArrowRight size={17} aria-hidden="true" /></Link>
          <Link href="/ueber-jamoko">Die Haltung hinter JaMoKo <ArrowRight size={17} aria-hidden="true" /></Link>
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section id="beispiele" className={`${styles.band} ${styles.paper} ${styles.projectsBand}`} aria-labelledby="projects-title">
      <div className={styles.inner}>
        <p className={styles.eyebrow}>04 / Arbeit, die sichtbar wird</p>
        <div className={styles.sectionHead}>
          <h2 id="projects-title" className={styles.heading}>Jeder Betrieb ist anders.<br /><span>Seine Website auch.</span></h2>
          <Link className={styles.textLink} href="/projekte">Alle Beispiele ansehen <ArrowRight size={19} aria-hidden="true" /></Link>
        </div>
        <Link href="/projekte/altonaer-reifendienst" className={styles.projectFeatured}>
          <figure>
            <div className={styles.projectImage}>
              <Image src="/ard/case-study/graffiti-garage-aussenansicht-1448.webp" alt="Graffiti-Fassade des Altonaer Reifendienstes in Hamburg-Altona" fill sizes="(min-width: 1440px) 1280px, (min-width: 768px) 92vw, 100vw" />
            </div>
            <figcaption className={styles.projectCaption}>
              <div><p className={styles.index}>Kundenprojekt · Hamburg-Altona</p><h3>Altonaer Reifendienst</h3></div>
              <p>Ein eigenständiger Webauftritt mit echten Werkstattfotos und klaren Kontaktwegen.<span className={styles.textLink}>Fallstudie ansehen <ArrowRight size={19} aria-hidden="true" /></span></p>
            </figcaption>
          </figure>
        </Link>
        <div className={styles.projectNotes}>
          <Link href="/demos/physio" className={styles.projectDemo}>
            <div className={styles.demoImage}><Image src="/physio/physio_hero.jpg" alt="Website-Demo für eine Physiotherapiepraxis" fill sizes="(min-width: 768px) 240px, 112px" /></div>
            <div><p className={styles.index}>Demo · keine Kundenreferenz</p><h3>Physiotherapie</h3><span className={styles.textLink}>Demo ansehen <ArrowRight size={18} aria-hidden="true" /></span></div>
          </Link>
          <article className={styles.concept}>
            <p className={styles.index}>Konzept · keine Kundenreferenz</p><h3>Goldschmiede</h3>
            <p>Ein digitaler Auftritt für Handwerkskunst und persönliche Beratung.</p>
          </article>
        </div>
      </div>
    </section>
  );
}

function ToolsSection() {
  return (
    <section className={`${styles.band} ${styles.toolsBand}`} aria-labelledby="tools-title">
      <div className={styles.inner}>
        <p className={styles.eyebrow}>05 / Digitale Werkzeuge</p>
        <h2 id="tools-title" className={styles.heading}>Orientierung im Alltag.</h2>
        <div className={styles.tools}>
          <article className={styles.compass}>
            <p className={styles.index}>Für den ersten Überblick</p><h3>Digital-Kompass</h3>
            <figure className={styles.toolImage}>
              <ProductPreview label="Digital-Kompass" src="/digital-kompass/vorschau.webp" width={828} height={758} sizes="(min-width: 768px) 32vw, 100vw" alt="Digital-Kompass: Auswahl aus sechs Themen für den digitalen Arbeitsalltag" />
              <figcaption className={styles.note}>Digital-Kompass · Themenauswahl</figcaption>
            </figure>
            <p>Wähle eines von sechs Alltagsthemen und beantworte fünf Fragen. Du bekommst einen konkreten nächsten Schritt – kostenlos und ohne Anmeldung.</p>
            <Link className={styles.textLink} href="/digital-kompass">Digital-Kompass öffnen <ArrowRight size={19} aria-hidden="true" /></Link>
          </article>
          <article className={styles.interview}>
            <div><p className={styles.index}>Begleitete Testphase</p><h3>Interviewbegleiter</h3>
              <figure className={styles.toolImage}>
                <ProductPreview label="Interviewbegleiter" src="/interviewbegleiter/karten.webp" width={1363} height={936} sizes="(min-width: 1024px) 38vw, (min-width: 768px) 45vw, 100vw" alt="Fiktives Gesprächsbeispiel im JaMoKo Interviewbegleiter" />
                <figcaption className={styles.note}>Interviewbegleiter · Gesprächskarte mit fiktivem Inhalt</figcaption>
              </figure>
              <p>Für Beratung und Interviews: Behalte deine Fragen im Blick, halte Notizen fest und finde nach einer Pause zur richtigen Stelle zurück.</p>
              <p className={styles.note}>Persönlicher Einstieg. Noch kein offener App-Zugang.</p>
              <Link className={styles.textLink} href="/interviewbegleiter">Interviewbegleiter kennenlernen <ArrowRight size={19} aria-hidden="true" /></Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="kontakt" className={`${styles.band} ${styles.contact}`} aria-labelledby="contact-title">
      <div className={styles.inner}>
        <p className={styles.eyebrow}>06 / Einfach anfangen</p>
        <h2 id="contact-title" className={styles.heading}>Moin sagen <span>reicht.</span></h2>
        <p className={styles.contactIntro}>Erzähl uns kurz von deinem Betrieb und davon, was du verändern möchtest.</p>
        <div className={styles.contactActions}>
          <Link href="/kontakt" className={styles.goldButton}>Kontakt aufnehmen <ArrowRight size={18} aria-hidden="true" /></Link>
          <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className={styles.textLink}>Kostenlos kennenlernen <ArrowRight size={18} aria-hidden="true" /></a>
        </div>
        <a className={styles.email} href="mailto:moin@jamoko.de">moin@jamoko.de <ArrowRight aria-hidden="true" /></a>
        <div className={styles.contactMeta}>
          <a href="https://wa.me/4917682032127" target="_blank" rel="noopener noreferrer">WhatsApp schreiben</a><a href="tel:017682032127">0176 8203 2127</a><p>Das erste Kennenlernen dauert etwa 15 Minuten und ist kostenlos.</p>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return <><StructuredData data={homePageJsonLd} /><div className={styles.home}><Hero /><ProblemSection /><ServicesSection /><ProjectsSection /><ToolsSection /><ContactSection /></div></>;
}
