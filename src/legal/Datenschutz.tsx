import LegalLayout from "./LegalLayout";
import { ORG } from "../org";

export default function Datenschutz() {
  return (
    <LegalLayout title="Datenschutzhinweise">
      <section className="rounded-2xl border border-white/10 bg-white/5 p-5">
        <h2 className="mb-2 text-lg font-semibold">1. Verantwortlicher</h2>
        <p><strong>{ORG.name}</strong><br/>{ORG.owner}<br/>{ORG.street}, {ORG.zip} {ORG.city} ({ORG.country})<br/>
        E‑Mail: <a className="text-teal-300 underline-offset-2 hover:underline" href={`mailto:${ORG.email}`}>{ORG.email}</a></p>
      </section>

      <section className="rounded-2xl border border-white/10 bg-white/5 p-5">
        <h2 className="mb-2 text-lg font-semibold">2. Zwecke & Rechtsgrundlagen</h2>
        <ul className="list-disc pl-5 space-y-1 text-white/90">
          <li>Bereitstellung der Website (Art. 6 Abs. 1 lit. f DSGVO)</li>
          <li>Kontaktanfragen (Art. 6 Abs. 1 lit. b/f DSGVO)</li>
          <li>Optionale Formulare (z. B. Netlify-Form): Verarbeitung der eingegebenen Daten</li>
        </ul>
      </section>

      <section className="rounded-2xl border border-white/10 bg-white/5 p-5">
        <h2 className="mb-2 text-lg font-semibold">3. Server‑Logs & Hosting</h2>
        <p>Beim Aufruf der Seiten verarbeitet der Hosting‑Provider u. a. IP‑Adresse, Zeitstempel, Ressource, Referrer, User‑Agent zur technischen Bereitstellung und Sicherheit.</p>
      </section>

      <section className="rounded-2xl border border-white/10 bg-white/5 p-5">
        <h2 className="mb-2 text-lg font-semibold">4. Cookies & Analysen</h2>
        <p>Aktuell setzen wir keine Analyse‑ oder Tracking‑Cookies ein. Technisch notwendige Cookies dienen ausschließlich der Funktionalität.</p>
      </section>

      <section className="rounded-2xl border border-white/10 bg-white/5 p-5">
        <h2 className="mb-2 text-lg font-semibold">5. Kontaktformular</h2>
        <p>Bei Nutzung des Formulars verarbeiten wir Name, E‑Mail und Nachricht zur Bearbeitung der Anfrage (Honeypot‑Prüfung). Alternativ E‑Mail senden.</p>
      </section>

      <section className="rounded-2xl border border-white/10 bg-white/5 p-5">
        <h2 className="mb-2 text-lg font-semibold">6. Auftragsverarbeitung / Dritte</h2>
        <p>Bei eingesetzten Dienstleistern bestehen AV‑Verträge gem. Art. 28 DSGVO. Übermittlungen in Drittländer nur bei geeigneten Garantien.</p>
      </section>

      <section className="rounded-2xl border border-white/10 bg-white/5 p-5">
        <h2 className="mb-2 text-lg font-semibold">7. Speicherdauer</h2>
        <p>Daten werden nur so lange verarbeitet, wie es für die genannten Zwecke erforderlich ist oder gesetzliche Pflichten bestehen.</p>
      </section>

      <section className="rounded-2xl border border-white/10 bg-white/5 p-5">
        <h2 className="mb-2 text-lg font-semibold">8. Deine Rechte</h2>
        <ul className="list-disc pl-5 space-y-1 text-white/90">
          <li>Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit</li>
          <li>Widerspruch (Art. 21 DSGVO)</li>
          <li>Beschwerde bei einer Aufsichtsbehörde (z. B. HmbBfDI)</li>
        </ul>
      </section>

      <section className="rounded-2xl border border-white/10 bg-white/5 p-5">
        <h2 className="mb-2 text-lg font-semibold">9. Sicherheit</h2>
        <p>Wir treffen technische und organisatorische Maßnahmen zum Schutz vor Verlust, Manipulation und unberechtigtem Zugriff.</p>
      </section>

      <section className="rounded-2xl border border-white/10 bg-white/5 p-5">
        <h2 className="mb-2 text-lg font-semibold">10. Änderungen</h2>
        <p>Wir passen diese Hinweise an, wenn Dienste oder Rechtslagen sich ändern. Die aktuelle Fassung erscheint auf dieser Seite.</p>
      </section>

      <footer className="pt-2 text-sm text-white/60">Vorlage ohne Rechtsberatung – bitte an tatsächliche Dienste anpassen. © {ORG.name}</footer>
    </LegalLayout>
  );
}
