import type { Metadata } from "next";
import { ProductPreview } from "@/components/landing/ProductPreview";
import Link from "next/link";
import { ArrowRight, BookOpen, Check, MessageCircle, Pause, Sparkles } from "lucide-react";

const contactHref = `mailto:moin@jamoko.de?subject=${encodeURIComponent("Interviewbegleiter gemeinsam ausprobieren")}&body=${encodeURIComponent("Moin Mo,\n\nich möchte den Interviewbegleiter mit dir ausprobieren.\nIch führe diese Art von Gesprächen: \nEinen eigenen Leitfaden habe ich: \n\nViele Grüße")}`;

export const metadata: Metadata = {
  title: "Interviewbegleiter für Coaching & Beratung",
  description: "Deine Fragen auf übersichtlichen Gesprächskarten. Für Coaching, Beratung und Interviews – mit Notizen, Pausenanker und persönlichem Einstieg mit Mo.",
  alternates: { canonical: "https://jamoko.de/interviewbegleiter" },
  openGraph: {
    title: "Deine Fragen im Blick. Dein Gegenüber im Mittelpunkt.",
    description: "Der JaMoKo Interviewbegleiter. Bring deinen Leitfaden mit und probiere ihn gemeinsam mit Mo aus.",
    url: "https://jamoko.de/interviewbegleiter",
    images: [{ url: "/interviewbegleiter/social/linkedin.png", width: 1200, height: 630, alt: "JaMoKo Interviewbegleiter – Deine Fragen im Blick" }],
  },
};

const features = [
  { icon: MessageCircle, title: "Dein eigener Leitfaden", text: "Lege Fragen und Nachfragen an, ändere die Reihenfolge und speichere bewährte Abläufe als Vorlage." },
  { icon: Pause, title: "Nach einer Pause weiterfinden", text: "Merke dir die aktuelle Stelle. Der Pausenanker führt dich zurück zu deiner Gesprächskarte." },
  { icon: BookOpen, title: "Gedanken festhalten", text: "Sammle Notizen und offene Themen. Halte zum Abschluss Ergebnisse und nächste Schritte fest." },
];

export default function InterviewbegleiterPage() {
  return (
    <div className="v3-page v3-special">
      <section className="v3-page-header mx-auto max-w-6xl px-6 pb-16 pt-14 sm:px-8 md:pb-24 md:pt-20">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E5C58B]">JaMoKo Interviewbegleiter · Begleitete Testphase</p>
        <div className="mt-8 grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.13] tracking-tight text-white sm:text-5xl">Deine Fragen im Blick.<br /><span className="text-[#E5C58B]">Dein Gegenüber im Mittelpunkt.</span></h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/75">Behalte im Gespräch den Überblick: Deine Fragen stehen auf einzelnen Karten. Notizen hältst du direkt dazu fest. Nach einer Pause findest du zur letzten Karte zurück und kannst mit deinem Gegenüber weitersprechen.</p>
            <p className="mt-4 text-sm leading-relaxed text-white/65">Für Coaches, Beratende und Menschen, die Interviews oder moderierte Gespräche führen.</p>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <a href={contactHref} className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#E5C58B] px-6 py-3 font-semibold text-[#001821] hover:bg-[#efd49f]">Mit mir ausprobieren <ArrowRight size={18} aria-hidden="true" /></a>
              <Link href="/interviewbegleiter/anleitung" className="inline-flex min-h-12 items-center gap-2 text-sm text-white underline decoration-white/40 underline-offset-4">So funktioniert’s</Link>
            </div>
            <p className="mt-5 text-sm text-white/65">Ich richte deinen Leitfaden mit dir ein. Gemeinsam schauen wir, ob er zu deinem Alltag passt. — Mo</p>
          </div>
          <figure className="min-w-0">
            <ProductPreview label="Interviewbegleiter – Gesprächskarten" src="/interviewbegleiter/karten.webp" width={1363} height={936} imageClassName="w-full rounded-2xl border border-[#E5C58B]/30 shadow-2xl" priority sizes="(max-width: 1023px) 100vw, 550px" alt="Beispielkarte Möglichkeiten mit der Frage Was würdest du dir wünschen und aufklappbaren Nachfragen" />
            <figcaption className="mt-3 text-xs leading-relaxed text-jamoko-text-dim">Einblick in die App. Alle gezeigten Gesprächsinhalte sind fiktive Beispiele.</figcaption>
          </figure>
        </div>
      </section>

      <section className="jmk-section-light jmk-section-paper">
        <div className="jmk-section-content mx-auto max-w-6xl px-6 py-16 sm:px-8 md:py-24">
          <p className="jmk-light-eyebrow text-xs font-semibold uppercase tracking-[0.2em]">Deine Arbeitsweise bleibt der Ausgangspunkt</p>
          <h2 className="jmk-light-heading mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">Du bringst die Erfahrung mit.<br />Die Karten geben Orientierung.</h2>
          <p className="jmk-light-copy mt-5 max-w-2xl text-lg leading-relaxed">Nutze deine eigenen Fragen oder starte mit einer Vorlage. Auf dem iPad kannst du einzelne Karten im Fokus öffnen oder den Leitfaden als Übersicht nutzen.</p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {features.map(({ icon: Icon, title, text }) => <article key={title} className="jmk-card-light rounded-3xl border p-7"><Icon className="text-[#067563]" size={26} aria-hidden="true" /><h3 className="jmk-light-heading mt-5 text-xl font-semibold">{title}</h3><p className="jmk-light-copy mt-3 leading-relaxed">{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <figure className="min-w-0">
            <ProductPreview label="Interviewbegleiter – KI-Studio" src="/interviewbegleiter/ki-studio.webp" width={1348} height={926} imageClassName="w-full rounded-2xl border border-white/15" sizes="(max-width: 1023px) 100vw, 550px" alt="KI-Studio mit Auswahlfeldern für Namen, Notizen und Transkript sowie einer Prüfung vor dem Weitergeben" />
            <figcaption className="mt-3 text-xs text-jamoko-text-dim">Optionales KI-Studio. Du wählst die Inhalte für deinen Auftrag aus.</figcaption>
          </figure>
          <div>
            <Sparkles className="text-[#E5C58B]" size={28} aria-hidden="true" />
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Mit deiner KI weiterdenken.</h2>
            <p className="mt-5 text-lg leading-relaxed text-white/75">Lass dir zum Beispiel weitere Fragen vorschlagen. Das KI-Studio bereitet einen Auftrag vor, den du in deiner KI bearbeiten kannst. Die Antwort prüfst du vor der Übernahme.</p>
            <ul className="mt-6 space-y-3 text-white/75">
              {["Du entscheidest, welche Inhalte du weitergibst.", "Namen in Freitexten prüfst du selbst.", "Die Gesprächskarten funktionieren auch ohne KI."].map(text => <li key={text} className="flex gap-3"><Check size={19} className="mt-0.5 shrink-0 text-[#1AC7A4]" aria-hidden="true" />{text}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="jmk-section-light jmk-section-mist" id="ausprobieren">
        <div className="jmk-section-content mx-auto max-w-6xl px-6 py-16 sm:px-8 md:py-24">
          <h2 className="jmk-light-heading text-3xl font-semibold tracking-tight sm:text-4xl">Der Einstieg? Ein Gespräch mit mir.</h2>
          <p className="jmk-light-copy mt-5 max-w-2xl text-lg leading-relaxed">Du musst dich nicht allein durch eine neue App arbeiten. Wir beginnen mit einem Ablauf, den du schon kennst.</p>
          <ol className="mt-10 grid gap-8 md:grid-cols-3">
            {[
              ["Deinen Alltag verstehen", "Welche Gespräche führst du? Wo fehlt dir gerade eine gute Übersicht? Für den Einstieg reichen fiktive Inhalte."],
              ["Deinen Leitfaden einrichten", "Wir übertragen einige deiner Fragen und schauen uns Karten, Notizen und Pausenanker gemeinsam an."],
              ["Gemeinsam ausprobieren", "Du testest einen Gesprächsablauf. Danach besprechen wir, was hilfreich war und was noch fehlt."],
            ].map(([title, text], index) => <li key={title}><span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#001821] font-semibold text-[#E5C58B]">{index + 1}</span><h3 className="jmk-light-heading mt-4 text-xl font-semibold">{title}</h3><p className="jmk-light-copy mt-3 leading-relaxed">{text}</p></li>)}
          </ol>
          <div className="mt-10 flex flex-wrap items-center gap-6"><a href={contactHref} className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#001821] px-6 py-3 font-semibold text-white hover:bg-[#12343d]">Mit Mo ausprobieren <ArrowRight size={18} aria-hidden="true" /></a><Link href="/interviewbegleiter/anleitung" className="jmk-light-link inline-flex min-h-12 items-center gap-2 underline underline-offset-4">Anleitung lesen <BookOpen size={17} aria-hidden="true" /></Link></div>
          <p className="jmk-light-copy mt-4 text-sm">Der Button öffnet eine vorbereitete E-Mail an moin@jamoko.de. Du sendest sie selbst ab.</p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16 sm:px-8 md:py-24">
        <h2 className="text-3xl font-semibold text-white">Gut zu wissen</h2>
        <div className="mt-8 space-y-3">
          {[
            ["Kann ich meine eigenen Fragen verwenden?", "Ja. Karten und Nachfragen sind bearbeitbar. Bewährte Leitfäden kannst du als Vorlage für weitere Gespräche speichern."],
            ["Ist der Interviewbegleiter schon frei verfügbar?", "Die App ist in einer begleiteten Testphase. Ein offener Zugang und ein fertiges Verkaufsangebot sind noch nicht eingerichtet. Schreib mir, wenn du sie mit mir kennenlernen möchtest."],
            ["Wie werden Gesprächsinhalte gespeichert?", "Die App arbeitet zunächst im jeweiligen Browser. Ein persönlicher Cloud-Speicher ist optional. Sichere wichtige Inhalte zusätzlich per Export; Audioaufnahmen bleiben lokal und werden separat gesichert. Im gemeinsamen Einstieg klären wir die Einstellungen."],
            ["Ist das ein Therapieangebot?", "Der Interviewbegleiter ist ein Werkzeug zur Gesprächsstrukturierung. Er stellt keine Diagnosen und gibt keine Behandlungsempfehlungen. Eine Eignung für den Einsatz mit sensiblen Klientendaten ist damit nicht zugesagt."],
          ].map(([question, answer]) => <details key={question} className="rounded-2xl border border-white/15 bg-white/[0.03] p-5"><summary className="cursor-pointer text-lg font-semibold leading-relaxed text-white">{question}</summary><p className="mt-4 leading-relaxed text-white/75">{answer}</p></details>)}
        </div>
        <Link href="/kontakt" className="mt-8 inline-flex min-h-12 items-center gap-2 text-[#E5C58B] underline underline-offset-4">Eine andere Frage? Schreib mir. <ArrowRight size={17} aria-hidden="true" /></Link>
      </section>
    </div>
  );
}
