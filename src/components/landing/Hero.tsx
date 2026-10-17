import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Monitor, Compass, Settings, FolderOpen, Sprout, MapPin } from "lucide-react";
import styles from "./Hero.module.css";

const situations = [
  { icon: Monitor, label: "Meine Website bringt wenig Anfragen", href: "/mini-site" },
  { icon: Compass, label: "Ich verliere digital den Überblick", href: "#digitalbegleitung" },
  { icon: Settings, label: "Ich mache zu viel von Hand", href: "/digital-kompass" },
];
const services = [
  { icon: Monitor, title: "Eine Website, die zu dir passt", text: "Verständlich. Persönlich. Leicht zu nutzen.", href: "/mini-site" },
  { icon: FolderOpen, title: "Mehr Ordnung im Alltag", text: "Dateien, Werkzeuge und Abläufe sinnvoll sortieren.", href: "#digitalbegleitung" },
  { icon: Sprout, title: "Ein klarer nächster Schritt", text: "Gemeinsam herausfinden, was du wirklich brauchst.", href: "/digital-kompass" },
];

export function Hero() {
  return (
    <section id="hero" className={styles.section}>
      <div className={styles.hero}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Websites &amp; persönliche Digitalbegleitung</p>
          <h1>Digital soll dir <span>Arbeit abnehmen.</span></h1>
          <p className={styles.intro}>Ich bin Mo. Ich helfe dir, Klarheit zu schaffen, passende Lösungen zu finden und sie umzusetzen.</p>
          <div className={styles.actions}>
            <a className={styles.primary} href="#kontakt">Lass uns sprechen <ArrowRight size={18} aria-hidden="true" /></a>
            <Link className={styles.secondary} href="/digital-kompass">Digital-Kompass starten</Link>
          </div>
          <p className={styles.local}><MapPin size={19} aria-hidden="true" /> Persönlich aus Hamburg · Klar und verständlich</p>
        </div>
        <div className={styles.visual}>
          <Image src="/hero/jamoko-workspace-hamburg.webp" alt="" fill priority sizes="(min-width: 1024px) 50vw, 100vw" className={styles.photo} />
          <div className={styles.situations}>
            <h2>Was beschäftigt dich gerade?</h2>
            <div className={styles.situationList}>
              {situations.map(({ icon: Icon, label, href }) => (
                <Link key={label} href={href}><Icon size={23} aria-hidden="true" /><span>{label}</span><ArrowRight size={17} aria-hidden="true" /></Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.help}>
        <h2>Wo würde etwas mehr Klarheit helfen?</h2>
        <div className={styles.cards}>
          {services.map(({ icon: Icon, title, text, href }) => (
            <Link className={styles.card} key={title} href={href}>
              <Icon size={36} aria-hidden="true" />
              <div><h3>{title}</h3><p>{text}</p></div>
              <ArrowRight className={styles.cardArrow} size={20} aria-hidden="true" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
