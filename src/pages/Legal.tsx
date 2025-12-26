import React from "react";
import { Link } from "react-router-dom";

export default function Legal() {
  return (
    <section className="container py-12 text-jamoko-text">
      <h1 className="h-wide mb-6">Impressum & Datenschutz</h1>

      <div className="space-y-8 leading-relaxed">
        <div>
          <h2 className="h-narrow text-jamoko-gold">Angaben gemäß § 5 TMG</h2>
          <p>
            JaMoKo – Community First<br />
            Jan-Moritz Koch<br />
            Hainbuchenweg 2<br />
            22299 Hamburg<br />
            Deutschland
          </p>
          <p>
            Telefon: 0176 820 32127<br />
            E-Mail: 
            <a
              href="mailto:moin@jamoko.de"
              className="text-jamoko-teal hover:underline"
            >
              moin@jamoko.de
            </a>
            <br />
            Website: 
            <a
              href="https://jamoko.de"
              className="text-jamoko-teal hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://jamoko.de
            </a>
          </p>
        </div>

        <div>
          <h2 className="h-narrow text-jamoko-gold">Umsatzsteuer-ID</h2>
          <p>
            Wird nachgereicht, sobald das Gewerbe steuerlich vollständig
            registriert ist.
          </p>
        </div>

        <div>
          <h2 className="h-narrow text-jamoko-gold">Haftung für Inhalte</h2>
          <p>
            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt.
            Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
            können wir jedoch keine Gewähr übernehmen.
          </p>
        </div>

        <div>
          <h2 className="h-narrow text-jamoko-gold">Datenschutz</h2>
          <p>
            Die Nutzung unserer Website ist in der Regel ohne Angabe
            personenbezogener Daten möglich. Soweit auf unseren Seiten
            personenbezogene Daten (z. B. Name, Anschrift oder E-Mail-Adressen)
            erhoben werden, erfolgt dies stets auf freiwilliger Basis. Diese
            Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte
            weitergegeben.
          </p>
          <p>
            Weitere Details finden Sie in unserer vollständigen{" "}
            <Link
              to="/privacy"
              className="text-jamoko-teal hover:underline"
            >
              Datenschutzerklärung
            </Link>
            .
          </p>
        </div>

        <div>
          <h2 className="h-narrow text-jamoko-gold">Verantwortlich für den Inhalt</h2>
          <p>
            Jan-Moritz Koch<br />
            E-Mail: 
            <a
              href="mailto:moin@jamoko.de"
              className="text-jamoko-teal hover:underline"
            >
              moin@jamoko.de
            </a>
          </p>
        </div>
      </div>

      <p className="mt-12 text-sm opacity-70">
        © {new Date().getFullYear()} JaMoKo – Community First. Alle Rechte vorbehalten.
      </p>
    </section>
  );
}
