"use client";

import type { FormEvent } from "react";
import Link from "next/link";
import { Mail, Send } from "lucide-react";

const inputClass =
  "mt-2 w-full rounded-xl border border-[#102A33]/15 bg-white px-4 py-3.5 text-base text-[#102A33] placeholder:text-[#38545E]/55 focus:border-[#067563] focus:outline-none focus:ring-2 focus:ring-[#1AC7A4]/20";

function getField(formData: FormData, name: string) {
  return String(formData.get(name) ?? "").trim();
}

export function DigitalStartForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = getField(formData, "name");
    const activity = getField(formData, "activity");
    const email = getField(formData, "email");
    const phone = getField(formData, "phone");
    const situation = getField(formData, "situation");
    const goal = getField(formData, "goal");
    const link = getField(formData, "link");

    const subject = `Digitale Situation von ${name || "jamoko.de/start"}`;
    const body = [
      `Name: ${name}`,
      `Unternehmen oder Tätigkeit: ${activity}`,
      `E-Mail: ${email}`,
      `Telefon: ${phone || "nicht angegeben"}`,
      `Vorhandener Link: ${link || "nicht angegeben"}`,
      "",
      "Was beschäftigt mich gerade?",
      situation,
      "",
      "Was soll sich verbessern?",
      goal || "noch offen",
    ].join("\n");

    window.location.href = `mailto:moin@jamoko.de?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] border border-[#102A33]/10 bg-white p-6 shadow-[0_24px_80px_rgba(0,24,33,0.12)] sm:p-9"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-semibold text-[#102A33]">
          Dein Name
          <input
            className={inputClass}
            name="name"
            autoComplete="name"
            required
            placeholder="Wie darf ich dich ansprechen?"
          />
        </label>
        <label className="block text-sm font-semibold text-[#102A33]">
          Unternehmen oder Tätigkeit
          <input
            className={inputClass}
            name="activity"
            autoComplete="organization"
            placeholder="Was machst du?"
          />
        </label>
        <label className="block text-sm font-semibold text-[#102A33]">
          E-Mail
          <input
            className={inputClass}
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="name@beispiel.de"
          />
        </label>
        <label className="block text-sm font-semibold text-[#102A33]">
          Telefon <span className="font-normal text-[#38545E]">(optional)</span>
          <input
            className={inputClass}
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="Wenn du lieber telefonierst"
          />
        </label>
      </div>

      <label className="mt-5 block text-sm font-semibold text-[#102A33]">
        Was beschäftigt dich gerade?
        <textarea
          className={`${inputClass} min-h-36 resize-y`}
          name="situation"
          required
          placeholder="Was funktioniert nicht mehr, ist unklar oder soll sich verändern?"
        />
      </label>

      <label className="mt-5 block text-sm font-semibold text-[#102A33]">
        Was soll sich verbessern?{" "}
        <span className="font-normal text-[#38545E]">(optional)</span>
        <textarea
          className={`${inputClass} min-h-28 resize-y`}
          name="goal"
          placeholder="Woran würdest du merken, dass wir auf dem richtigen Weg sind?"
        />
      </label>

      <label className="mt-5 block text-sm font-semibold text-[#102A33]">
        Vorhandener Link{" "}
        <span className="font-normal text-[#38545E]">(optional)</span>
        <input
          className={inputClass}
          name="link"
          type="text"
          inputMode="url"
          autoCapitalize="none"
          placeholder="Website, LinkedIn-Profil oder etwas anderes"
        />
      </label>

      <button
        type="submit"
        className="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#001821] px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#013542] sm:w-auto"
      >
        <Send className="h-4 w-4" aria-hidden="true" />
        E-Mail an Mo vorbereiten
      </button>

      <div className="mt-5 flex items-start gap-3 text-sm leading-6 text-[#38545E]">
        <Mail className="mt-1 h-4 w-4 shrink-0 text-[#067563]" aria-hidden="true" />
        <p>
          Danach öffnet sich dein Mailprogramm. Du kannst alles noch einmal
          prüfen, bevor du die Nachricht sendest. Es entsteht kein Auftrag. Mehr
          zum Umgang mit deinen Angaben steht im{" "}
          <Link
            href="/datenschutz"
            className="font-semibold text-[#067563] underline-offset-4 hover:underline"
          >
            Datenschutz
          </Link>
          .
        </p>
      </div>
    </form>
  );
}
