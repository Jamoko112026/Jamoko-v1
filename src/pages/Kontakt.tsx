import { FormEvent, useState } from "react";
import { ORG } from "../org";
import { useTitle } from "../legal/LegalLayout";

export default function Kontakt() {
  useTitle("Kontakt · Jamoko");
  const [sent, setSent] = useState(false);

  // For static hosts: Netlify-ready form
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    if (typeof window !== "undefined" && "fetch" in window) {
      // Let Netlify handle normally; no JS hijack
    }
    setSent(true);
  };

  const telHref = "tel:" + ORG.phone.replace(/\s+/g, "").replace("+", "00");

  return (
    <div className="min-h-[76vh] w-full px-4 sm:px-6 md:px-8 py-10 text-white bg-[#0b0f12]">
      <main className="mx-auto w-full max-w-4xl space-y-6">
        <header className="space-y-2">
          <h1 className="text-2xl font-bold tracking-tight">Kontakt</h1>
          <p className="text-sm text-white/60">Direkt, ruhig, persönlich – melde dich kurz und wir machen’s konkret.</p>
        </header>

        <section className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h2 className="mb-2 text-lg font-semibold">Direkter Kontakt</h2>
            <p><strong>{ORG.name}</strong></p>
            <p>{ORG.owner}</p>
            <p>{ORG.street}, {ORG.zip} {ORG.city}, {ORG.country}</p>
            <p>Telefon: <a className="text-teal-300 underline-offset-2 hover:underline" href={telHref}>{ORG.phone}</a></p>
            <p>E‑Mail: <a className="text-teal-300 underline-offset-2 hover:underline" href={`mailto:${ORG.email}`}>{ORG.email}</a></p>
            <p>Web: <a className="text-teal-300 underline-offset-2 hover:underline" href={ORG.website}>{ORG.website}</a></p>
            <hr className="my-4 border-white/10" />
            <p className="text-white/70 text-sm">Bevorzugt: kurze E‑Mail mit Stichpunkten (Ziel, Deadline, Materialien).</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h2 className="mb-2 text-lg font-semibold">Nachricht senden</h2>
            {sent ? (
              <p className="text-teal-300">Danke! Wenn das Formular aktiv ist, erhältst du eine Bestätigung. Alternativ: E‑Mail an <a className="underline" href={`mailto:${ORG.email}`}>{ORG.email}</a>.</p>
            ) : (
              <form name="kontakt" method="POST" data-netlify="true" onSubmit={onSubmit}>
                <input type="hidden" name="form-name" value="kontakt" />
                <p className="hidden"><label>Firma <input name="company" /></label></p>
                <p className="mb-3">
                  <label className="mb-1 block text-sm font-semibold">Dein Name *</label>
                  <input name="name" required className="w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-white" />
                </p>
                <p className="mb-3">
                  <label className="mb-1 block text-sm font-semibold">E‑Mail *</label>
                  <input name="email" type="email" required className="w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-white" />
                </p>
                <p className="mb-3">
                  <label className="mb-1 block text-sm font-semibold">Nachricht *</label>
                  <textarea name="message" required className="min-h-[140px] w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-white" />
                </p>
                <p className="mb-3 text-sm">
                  <label><input type="checkbox" required className="mr-2" /> Ich habe die <a className="text-teal-300 underline-offset-2 hover:underline" href="/datenschutz" rel="noopener">Datenschutzhinweise</a> gelesen.</label>
                </p>
                <button type="submit" className="inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-tr from-[#E5C58B] to-[#1AC7A4] px-4 py-2 font-bold text-[#0b0f12]">Senden</button>
                <p className="mt-2 text-xs text-white/60">Alternativ: E‑Mail an <a className="underline" href={`mailto:${ORG.email}`}>{ORG.email}</a></p>
              </form>
            )}
          </div>
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <h2 className="mb-2 text-lg font-semibold">Standort</h2>
          <p>{ORG.street}, {ORG.zip} {ORG.city}</p>
          <p className="text-white/60 text-sm">Hinweis: Termin nach Vereinbarung.</p>
        </section>
      </main>
    </div>
  );
}
