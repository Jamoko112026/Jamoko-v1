// src/pages/JamokoCockpit.tsx

import GlowBackground from "../components/backgrounds/GlowBackground";
import GlowDivider from "../components/GlowDivider";
import JamokoLaunchCountdown from "../components/JamokoLaunchCountdown"; 
import DailyEnergyPremium from "../components/DailyEnergyPremium"; // ⭐ PREMIUM LEVEL 2

export default function JamokoCockpit() {
  return (
    <GlowBackground className="min-h-screen text-jamoko-text px-6 py-32">

      {/* ------------------ HEADER ------------------ */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h1 className="text-4xl md:text-5xl font-bold text-jamoko-gold mb-4">
          JaMoKo Cockpit – v1
        </h1>
        <p className="text-jamoko-text-dim text-lg leading-relaxed mb-6">
          Deine tägliche Startseite für Struktur, Fokus und ruhige Klarheit.
        </p>

        {/* ⭐ LAUNCH COUNTDOWN */}
        <JamokoLaunchCountdown />

        {/* ⭐ PREMIUM ENERGY SYSTEM */}
        <div className="mt-12">
          <DailyEnergyPremium />
        </div>
      </div>

      <GlowDivider />

      {/* ------------------ SECTION: HEUTE ------------------ */}
      <section className="max-w-5xl mx-auto py-20">
        <h2 className="text-3xl text-jamoko-gold font-semibold mb-6">Heute – Fokus</h2>

        <div className="space-y-4 text-jamoko-text-dim">
          <p>→ Mini-Site Landingpage vorbereiten</p>
          <p>→ Kontaktseite schöner machen</p>
          <p>→ Glow-Farben konsistent fixen</p>
        </div>
      </section>

      <GlowDivider />

      {/* ------------------ SECTION: STAND ------------------ */}
      <section className="max-w-5xl mx-auto py-20">
        <h2 className="text-3xl text-jamoko-gold font-semibold mb-6">Aktueller Stand</h2>

        <div className="space-y-6 text-jamoko-text-dim">

          <div>
            <h3 className="text-xl text-jamoko-gold mb-2">Technik</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>React + TypeScript + Tailwind + Vite</li>
              <li>Routing steht komplett</li>
              <li>Legal/Impressum fertig</li>
              <li>Mini-Site System vollständig importiert</li>
              <li>App.tsx braucht finalen Clean-up</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl text-jamoko-gold mb-2">Design</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Glow Gold → Teal als Hauptlook</li>
              <li>Luminous Balance + Symbiotic Merge Visuals</li>
              <li>Kontaktseite optisch noch schwach</li>
              <li>Kraken-Visuals aktiv</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl text-jamoko-gold mb-2">Automationen</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>MoSystem (msort, mbatch, mdrop, mbackup…)</li>
              <li>Autosort aktiv</li>
              <li>Trello Sync pausiert bis 01.01.2026</li>
            </ul>
          </div>

        </div>
      </section>

      <GlowDivider />

      {/* ------------------ SECTION: NÄCHSTE STEPS ------------------ */}
      <section className="max-w-5xl mx-auto py-20">
        <h2 className="text-3xl text-jamoko-gold font-semibold mb-6">Nächste Schritte</h2>

        <ul className="list-disc list-inside text-jamoko-text-dim space-y-2">
          <li>MiniSite Landingpage finalisieren</li>
          <li>Kontaktseite neu gestalten</li>
          <li>Glow-Theme vereinheitlichen</li>
          <li>Header/ Footer finalisieren</li>
          <li>ARD Galerie v1 erstellen</li>
          <li>Brandbook – Kapitel 1–3</li>
        </ul>
      </section>

      <GlowDivider />

      {/* ------------------ SECTION: ASSETS ------------------ */}
      <section className="max-w-5xl mx-auto py-20">
        <h2 className="text-3xl text-jamoko-gold font-semibold mb-6">Wichtige Assets</h2>

        <ul className="list-disc list-inside text-jamoko-text-dim space-y-2">
          <li>Moodboard Luminous Balance v1–v2</li>
          <li>Symbiotic Merge (Cinematic)</li>
          <li>Kraken SVG + Gold Kraken</li>
          <li>App-Visitenkarte Template</li>
          <li>Leistungsarchitektur v2 (PDF)</li>
          <li>Über-mich Text</li>
          <li>Timeline PDFs</li>
        </ul>
      </section>

      <GlowDivider />

      {/* ------------------ SECTION: PERSÖNLICHE VISION ------------------ */}
      <section className="max-w-5xl mx-auto py-20 pb-40">
        <h2 className="text-3xl text-jamoko-gold font-semibold mb-6">
          Persönliche Vision
        </h2>

        <p className="text-jamoko-text-dim leading-relaxed text-lg">
          „Frieden im Kopf und Kraft fürs Eigene.“  
          <br />
          Calm-Energy als Kern — eine Marke, die Klarheit, Ruhe und Wirkung verbindet.
        </p>
      </section>

    </GlowBackground>
  );
}
