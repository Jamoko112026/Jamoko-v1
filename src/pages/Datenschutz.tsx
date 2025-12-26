// src/pages/Datenschutz.tsx
import GlowBackground from "../components/backgrounds/GlowBackground";

export default function Datenschutz() {
  return (
    <GlowBackground>
      <div className="max-w-3xl mx-auto px-6 py-24 text-jamoko-text">
        <h1 className="text-3xl font-headline text-[#E5C58B] mb-8">
          Datenschutzerklärung
        </h1>

        <div className="space-y-4 text-sm leading-relaxed text-jamoko-text/80">
          <p>
            Der Schutz deiner persönlichen Daten ist mir wichtig.
            Personenbezogene Daten werden auf dieser Website nur im notwendigen
            Umfang verarbeitet.
          </p>

          <p>
            <strong>Verantwortlicher</strong><br />
            Jan-Moritz Koch<br />
            JaMoKo – Community First<br />
            E-Mail:{" "}
            <a
              href="mailto:moin@jamoko.de"
              className="text-[#1AC7A4] hover:text-[#E5C58B] transition-colors"
            >
              moin@jamoko.de
            </a>
          </p>

          <p>
            <strong>Hosting</strong><br />
            Diese Website wird bei Netlify, Inc. gehostet.
            Beim Besuch der Website werden durch den Hosting-Anbieter automatisch
            Informationen (z. B. IP-Adresse, Browsertyp, Uhrzeit)
            in sogenannten Server-Logfiles erhoben.
            Diese Daten dienen ausschließlich der technischen Sicherheit
            und werden nicht mit anderen Datenquellen zusammengeführt.
          </p>

          <p>
            <strong>Kontaktaufnahme</strong><br />
            Wenn du mir per Formular oder E-Mail Anfragen sendest,
            werden deine Angaben zur Bearbeitung der Anfrage gespeichert.
            Diese Daten gebe ich nicht ohne deine Einwilligung weiter.
          </p>

          <p>
            <strong>Deine Rechte</strong><br />
            Du hast jederzeit das Recht auf Auskunft, Berichtigung
            oder Löschung deiner gespeicherten personenbezogenen Daten.
          </p>
        </div>
      </div>
    </GlowBackground>
  );
}
