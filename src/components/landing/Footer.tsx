import Link from "next/link";
import { ArrowRight, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const contact = {
  name: "JaMoKo – Community First",
  zip: "22299",
  city: "Hamburg",
  email: "moin@jamoko.de",
  phone: "+49 176 82032127",
};

const footerNavItems = [
  { label: "Mini-Site", href: "/minisite" },
  { label: "Projekte", href: "/projekte" },
  { label: "Preise", href: "/pricing" },
  { label: "Über JaMoKo", href: "/about" },
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
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#00141c] text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#E5C58B]/45 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-56 left-1/2 h-96 w-[44rem] -translate-x-1/2 rounded-full bg-[#E5C58B]/[0.055] blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20 lg:px-20">
        <div className="grid gap-14 border-b border-white/10 pb-14 sm:pb-16 lg:grid-cols-[1.25fr_0.75fr_0.8fr] lg:gap-20">
          <div>
            <Link
              href="/"
              aria-label="JaMoKo Startseite"
              className="inline-flex items-center gap-3"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#E5C58B]/25 bg-[#E5C58B]/5 text-sm font-semibold text-[#E5C58B]">
                J
              </span>
              <span>
                <span className="block text-sm font-semibold tracking-[0.08em]">
                  JaMoKo
                </span>
                <span className="block text-[9px] uppercase tracking-[0.2em] text-white/35">
                  Webdesign Hamburg
                </span>
              </span>
            </Link>

            <h2 className="mt-8 max-w-lg text-2xl font-semibold leading-tight tracking-[-0.025em] sm:text-3xl">
              Ruhige Websites für Betriebe, die gute Arbeit leisten.
            </h2>
            <p className="mt-5 max-w-lg leading-relaxed text-white/48">
              Persönlich entwickelt, klar strukturiert und technisch
              zuverlässig. Damit deine Qualität auch digital verständlich wird.
            </p>
            <Link
              href="/kontakt"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#E5C58B] px-6 py-3 text-sm font-semibold text-[#001821] transition hover:-translate-y-0.5 hover:bg-[#efd49f]"
            >
              Projekt besprechen
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <nav aria-label="Footer Navigation">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#E5C58B]">
              Entdecken
            </p>
            <ul className="mt-6 space-y-3">
              {footerNavItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex py-1 text-sm text-white/52 transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#E5C58B]">
              Direkt erreichbar
            </p>
            <address className="mt-6 space-y-4 not-italic">
              <a
                href={`mailto:${contact.email}`}
                className="flex items-start gap-3 text-sm text-white/55 transition hover:text-white"
              >
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#E5C58B]" />
                {contact.email}
              </a>
              <a
                href="tel:+4917682032127"
                className="flex items-start gap-3 text-sm text-white/55 transition hover:text-white"
              >
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#E5C58B]" />
                {contact.phone}
              </a>
              <div className="flex items-start gap-3 text-sm text-white/55">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#E5C58B]" />
                <span>
                  {contact.zip} {contact.city}
                </span>
              </div>
            </address>

            <div className="mt-7 flex gap-3">
              {socialItems.map(({ label, href, icon: Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/48 transition hover:border-[#E5C58B]/35 hover:text-[#E5C58B]"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 pt-7 text-xs text-white/32 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {contact.name}
          </p>
          <nav aria-label="Rechtliche Hinweise">
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {legalItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition hover:text-white/70"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
