import LegalLayout, { useTitle } from "./LegalLayout";
import { ORG } from "../org";

export default function Impressum() {
  useTitle("Impressum · Jamoko");
  const telHref = "tel:" + ORG.phone.replace(/\s+/g, "").replace("+", "00");
  return (
    <LegalLayout title="Impressum">
      <section className="rounded-2xl border border-white/10 bg-white/5 p-5">
        <h2 className="mb-2 text-lg font-semibold">Anbieter</h2>
        <p><strong>{ORG.name}</strong><br/>{ORG.owner}</p>
        <p>{ORG.street} · {ORG.zip} {ORG.city}<br/>{ORG.country}</p>
        <p>Telefon: <a className="text-teal-300 underline-offset-2 hover:underline" href={telHref}>{ORG.phone}</a></p>
        <p>E‑Mail: <a className="text-teal-300 underline-offset-2 hover:underline" href={`mailto:${ORG.email}`}>{ORG.email}</a></p>
        <p>Web: <a className="text-teal-300 underline-offset-2 hover:underline" href={ORG.website}>{ORG.website}</a></p>
      </section>

      <section className="rounded-2xl border border-white/10 bg-white/5 p-5">
        <h2 className="mb-2 text-lg font-semibold">Vertretungsberechtigt</h2>
        <p>{ORG.owner}</p>
      </section>

      <section className="rounded-2xl border border-white/10 bg-white/5 p-5">
        <h2 className="mb-2 text-lg font-semibold">Umsatzsteuer‑ID</h2>
        <p>{ORG.vat ? ORG.vat : "– derzeit nicht angegeben –"}</p>
      </section>

      <section className="rounded-2xl border border-white/10 bg-white/5 p-5">
        <h2 className="mb-2 text-lg font-semibold">Inhaltlich verantwortlich (§ 55 Abs. 2 RStV)</h2>
        <p>{ORG.owner}, {ORG.street}, {ORG.zip} {ORG.city}</p>
      </section>

      <section className="rounded-2xl border border-white/10 bg-white/5 p-5 space-y-3">
        <h2 className="text-lg font-semibold">Haftung für Inhalte</h2>
        <p>Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte nach den allgemeinen Gesetzen verantwortlich. 
        Nach §§ 8 bis 10 TMG sind wir nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen.</p>
      </section>

      <section className="rounded-2xl border border-white/10 bg-white/5 p-5 space-y-3">
        <h2 className="text-lg font-semibold">Haftung für Links</h2>
        <p>Für Inhalte externer Seiten übernehmen wir keine Gewähr. Für verlinkte Inhalte ist stets der jeweilige Anbieter verantwortlich.</p>
      </section>

      <section className="rounded-2xl border border-white/10 bg-white/5 p-5 space-y-3">
        <h2 className="text-lg font-semibold">Urheberrecht</h2>
        <p>Die Inhalte dieser Seiten unterliegen dem deutschen Urheberrecht. Vervielfältigungen außerhalb der Grenzen des Urheberrechts bedürfen der Zustimmung.</p>
      </section>

      <footer className="pt-2 text-sm text-white/60">Rechtsvorlage ohne Gewähr; bitte je nach Geschäftsform prüfen/ergänzen. © {ORG.name}</footer>
    </LegalLayout>
  );
}
