"use client";

import type { FormEvent } from "react";
import { Send } from "lucide-react";

const inputClass =
  "mt-2 w-full rounded-md border border-white/10 bg-calm-navy/60 px-4 py-3 text-calm-ink placeholder:text-calm-muted/55 focus:border-calm-gold focus:outline-none focus:ring-2 focus:ring-calm-gold/20";

function getField(formData: FormData, name: string) {
  return String(formData.get(name) ?? "").trim();
}

export function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = getField(formData, "name");
    const email = getField(formData, "email");
    const message = getField(formData, "message");

    const subject = `Website-Anfrage von ${name || "JaMoKo.de"}`;
    const body = [
      `Name: ${name}`,
      `E-Mail: ${email}`,
      "",
      "Nachricht:",
      message,
    ].join("\n");

    window.location.href = `mailto:moin@jamoko.de?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-lg border border-white/10 bg-calm-panel p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-calm-ink">
          Name
          <input
            className={inputClass}
            name="name"
            autoComplete="name"
            required
            placeholder="Dein Name"
          />
        </label>
        <label className="block text-sm font-medium text-calm-ink">
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
      </div>

      <label className="mt-5 block text-sm font-medium text-calm-ink">
        Nachricht
        <textarea
          className={`${inputClass} min-h-44 resize-y`}
          name="message"
          required
          placeholder="Worum geht es?"
        />
      </label>

      <p className="mt-5 text-sm leading-6 text-calm-muted">
        Alternativ direkt per E-Mail an{" "}
        <a
          className="font-medium text-calm-gold underline-offset-4 hover:underline"
          href="mailto:moin@jamoko.de"
        >
          moin@jamoko.de
        </a>
      </p>

      <button
        type="submit"
        className="mt-7 inline-flex items-center gap-2 rounded-md bg-calm-gold px-5 py-3 text-sm font-semibold text-calm-navy transition hover:bg-calm-green"
      >
        <Send className="h-4 w-4" aria-hidden="true" />
        Nachricht vorbereiten
      </button>
    </form>
  );
}
