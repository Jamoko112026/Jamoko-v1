import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Interviewbegleiter: die einfache Anleitung",
  description: "In fünf Schritten zum ersten Gespräch: Leitfaden anlegen, Karten nutzen, nach einer Pause weiterfinden und Ergebnisse festhalten.",
  alternates: { canonical: "https://jamoko.de/interviewbegleiter/anleitung" },
};

const steps = [
  { title: "Ein Gespräch anlegen", text: "Öffne die App mit deinem eingerichteten Zugang. Wähle „+ Neues Interview“, dann zum Beispiel „Offenes Gespräch“. Trage Thema und Ziel ein. Tippe auf „Interview anlegen“. Für den ersten Versuch reichen ausgedachte Inhalte." },
  { title: "Deine Fragen vorbereiten", text: "Passe die Karten an deinen Leitfaden an. Pro Karte gibt es eine Leitfrage und ergänzende Nachfragen. Beginne mit wenigen Karten. Mit „Mit dem Interview beginnen →“ wechselst du ins Gespräch." },
  { title: "Eine Karte nach der anderen nutzen", text: "Öffne die Karte, die gerade passt. Mit „Fokus öffnen ↗“ siehst du sie einzeln. „↙ Übersicht“ bringt dich zurück. Du kannst Nachfragen abhaken und Notizen ergänzen. Du musst nicht jede Frage stellen." },
  { title: "Eine Pause machen und weiterfinden", text: "Nutze „Gespräch unterbrechen“ oder „Diese Stelle merken“. Mit „Zur gemerkten Karte →“ kommst du zurück. Themen, die später dran sind, kannst du im „Themenspeicher & Kartenziel“ festhalten." },
  { title: "Das Gespräch abschließen", text: "Gehe zu „3 · Nachbereiten“. Halte Ergebnisse und nächste Schritte fest. Mit „Als abgeschlossen markieren“ schließt du den Ablauf ab. Bei Bedarf kannst du ein „Folgegespräch“ anlegen oder deinen Leitfaden als Vorlage speichern." },
];

export default function InterviewbegleiterAnleitungPage() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-6 pb-14 pt-12 sm:px-8 md:pt-20">
        <Link href="/interviewbegleiter" className="inline-flex min-h-12 items-center gap-2 text-sm text-[#E5C58B]"><ArrowLeft size={16} aria-hidden="true" /> Zum Interviewbegleiter</Link>
        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-[#E5C58B]">Die einfache Anleitung</p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">Dein erstes Gespräch.<br />Schritt für Schritt.</h1>
        <p className="mt-6 text-lg leading-relaxed text-white/75">Die Karten helfen dir, deinen Leitfaden im Blick zu behalten. Für den Anfang brauchst du nur ein Thema und ein paar Fragen. KI und Audioaufnahme sind optional.</p>
        <p className="mt-4 text-sm leading-relaxed text-white/65">Die App ist in einer begleiteten Testphase. Deinen Einstieg und Zugang klären wir persönlich.</p>
      </section>
      <section className="jmk-section-light jmk-section-paper">
        <div className="jmk-section-content mx-auto max-w-3xl px-6 py-16 sm:px-8">
          <h2 className="jmk-light-heading text-3xl font-semibold">In fünf Schritten ausprobieren</h2>
          <ol className="mt-10 space-y-10">
            {steps.map(({ title, text }, index) => <li key={title} className="flex gap-5"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#001821] font-semibold text-[#E5C58B]">{index + 1}</span><div><h3 className="jmk-light-heading text-xl font-semibold">{title}</h3><p className="jmk-light-copy mt-3 leading-relaxed">{text}</p></div></li>)}
          </ol>
        </div>
      </section>
      <section className="mx-auto max-w-3xl px-6 py-16 sm:px-8">
        <h2 className="text-3xl font-semibold text-white">Wenn du mehr nutzen möchtest</h2>
        <div className="mt-8 space-y-8 text-white/75">
          <div><h3 className="text-xl font-semibold text-[#E5C58B]">Sichern und auf einem anderen Gerät arbeiten</h3><p className="mt-3 leading-relaxed">Unter „Speicher & Hilfe“ findest du „JSON-Sicherung“ und „Verschlüsselte Sicherung“. Speichere die Datei an einem Ort, den du wiederfindest. Mit „Sicherung einlesen“ kannst du sie später übernehmen. Das Passwort einer verschlüsselten Sicherung brauchst du beim Einlesen.</p><p className="mt-3 leading-relaxed">Der lokale Speicher gehört zum jeweiligen Browser. Für den Wechsel zwischen Geräten gibt es optional „Persönlichen Speicher aktivieren“. Audioaufnahmen werden damit nicht synchronisiert. Sichere wichtige Inhalte zusätzlich als Datei.</p></div>
          <div><h3 className="text-xl font-semibold text-[#E5C58B]">Audio aufnehmen</h3><p className="mt-3 leading-relaxed">Öffne „Audioaufnahme“. Kläre vor jeder Aufnahme die Zustimmung aller Beteiligten, bestätige sie und wähle „Aufnahme starten“. Mit „Aufnahme beenden“ stoppst du. Erlaube den Mikrofonzugriff, falls dein Browser danach fragt. Die Aufnahme bleibt lokal; lade sie separat herunter. Eine automatische Verschriftlichung ist nicht enthalten.</p></div>
          <div><h3 className="text-xl font-semibold text-[#E5C58B]">Mit deiner KI arbeiten</h3><p className="mt-3 leading-relaxed">Öffne „KI-Studio“ und „1 · Auftrag erstellen“. Wähle, was deine KI tun soll und welche Inhalte sie dafür bekommen darf. Prüfe den Auftrag, bevor du ihn weitergibst. Freitexte werden nicht automatisch anonymisiert. Für die Rückgabe eines Leitfadens oder einer Auswertung kannst du die vorgesehene JSON-Antwort unter „2 · Antwort übernehmen“ einfügen, mit „Antwort prüfen“ ansehen und anschließend bestätigen.</p></div>
        </div>
        <div className="mt-12 rounded-3xl border border-[#E5C58B]/30 bg-[#E5C58B]/5 p-7"><h2 className="text-2xl font-semibold text-white">Du hängst an einer Stelle?</h2><p className="mt-4 leading-relaxed text-white/75">Schreib mir, bei welchem Schritt du bist und was du auf dem Bildschirm siehst. Lass Namen und vertrauliche Gesprächsinhalte dabei weg.</p><Link href="/kontakt" className="mt-5 inline-flex min-h-12 items-center gap-2 font-semibold text-[#E5C58B]">Mo fragen <ArrowRight size={17} aria-hidden="true" /></Link></div>
      </section>
    </>
  );
}
