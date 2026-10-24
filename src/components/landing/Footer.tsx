import Link from "next/link";
import { Brand } from "./Brand";
import styles from "./Chrome.module.css";
import { ArrowRight, Instagram, Linkedin, Mail, Phone } from "lucide-react";

const contact = {
  name: "JaMoKo – Community First",
  zip: "22299",
  city: "Hamburg",
  email: "moin@jamoko.de",
  phone: "+49 176 82032127",
};

const footerNavItems = [
  { label: "Interviewbegleiter", href: "/interviewbegleiter" },
  { label: "Digital-Kompass", href: "/digital-kompass" },
  { label: "Website", href: "/mini-site" },
  { label: "Digitalbegleitung", href: "/#digitalbegleitung" },
  { label: "Projekte", href: "/projekte" },
  { label: "Preise", href: "/preise" },
  { label: "Über JaMoKo", href: "/ueber-jamoko" },
  { label: "Häufige Fragen", href: "/faq" },
];

const legalItems = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
  { label: "AGB", href: "/agb" },
];

const socialItems = [
  {
    label: "JaMoKo auf Instagram",
    href: "https://www.instagram.com/jamoko30",
    icon: Instagram,
  },
  {
    label: "JaMoKo auf LinkedIn",
    href: "https://www.linkedin.com/company/jamoko",
    icon: Linkedin,
  },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerGrid}>
          <div>
            <div className={styles.footerBrand}><Brand /></div>
            <h2>Digitale Lösungen, die zu deinem Alltag passen.</h2>
            <p className={styles.footerCopy}>Persönlich, verständlich und ohne mehr Technik als nötig.</p>
            <Link href="/kontakt" className={styles.footerLink}>Kostenlos kennenlernen <ArrowRight size={18} aria-hidden="true" /></Link>
          </div>
          <nav aria-label="Footer Navigation">
            <p className={styles.footerLabel}>Entdecken</p>
            <ul>{footerNavItems.map(item => <li key={item.href}><Link href={item.href}>{item.label}</Link></li>)}</ul>
          </nav>
          <div>
            <p className={styles.footerLabel}>Direkt erreichbar</p>
            <address>
              <a href={`mailto:${contact.email}`}><Mail size={18} aria-hidden="true" />{contact.email}</a>
              <a href="tel:+4917682032127"><Phone size={18} aria-hidden="true" />{contact.phone}</a>
              <p>{contact.zip} {contact.city}</p>
            </address>
            <div className={styles.social}>{socialItems.map(({label,href,icon:Icon}) => <a key={href} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}><Icon size={19} aria-hidden="true" /></a>)}</div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>© {new Date().getFullYear()} {contact.name}</p>
          <nav aria-label="Rechtliche Hinweise"><ul>{legalItems.map(item => <li key={item.href}><Link href={item.href}>{item.label}</Link></li>)}</ul></nav>
        </div>
      </div>
    </footer>
  );
}
