// src/sections/services/MiniSite/Onboarding.tsx

export default function OnboardingSection() {
  return (
    <section className="w-full py-24 px-6 bg-[#001821] relative overflow-hidden">
      {/* Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-jamoko-gold/10 to-jamoko-teal/10 blur-3xl opacity-30 pointer-events-none"></div>

      <div className="relative max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-jamoko-gold mb-16 text-center drop-shadow-lg">
          Dein Weg zur JaMoKo Mini-Site
        </h2>

        <div className="space-y-12">
          <Step
            number="1"
            title="Kennenlern-Gespräch (15 Minuten)"
            text="Wir klären Ziele, Wirkung, Erwartungen und welches Paket zu dir passt."
          />
          <Step
            number="2"
            title="Material Onboarding"
            text="Du sendest Logo, Fotos, Stichpunkte zu Leistungen, Kontaktinfos, Öffnungszeiten & Social Links. Wenn dir etwas fehlt – ich erstelle alles für dich."
          />
          <Step
            number="3"
            title="Design-Preview (Tag 1–2)"
            text="Startseiten-Layout, Hero, Farben, Typografie und Beispiel-Sektionen. 1 Feedbackrunde."
          />
          <Step
            number="4"
            title="Komplette Umsetzung"
            text="Ich baue alle Abschnitte: Hero, Offer, Preview, Features, Prozess, Pricing, Testimonials, FAQ, CTA, Kontakt."
          />
          <Step
            number="5"
            title="Abnahme"
            text="Du prüfst alles und bekommst 1–2 Korrekturrunden je nach Paket."
          />
          <Step
            number="6"
            title="Go-Live"
            text="Domain verbinden, Deploy, SSL, Weiterleitungen, SEO-Basics. Deine Seite geht online."
          />
          <Step
            number="7"
            title="Übergabe"
            text="Zugangsdaten, Mini-Tutorial, Datei-Export für Social Media & Branding."
          />
          <Step
            number="8"
            title="Nachbetreuung"
            text="Optional: Updates, Google Business Profil, neue Sektionen, Fotopakete."
          />
        </div>

        <h3 className="text-3xl font-semibold text-jamoko-teal mt-20 mb-6 text-center">
          Was ich von dir benötige
        </h3>

        <ul className="text-left list-disc list-inside text-jamoko-text-dim space-y-2 max-w-xl mx-auto">
          <li>Logo (falls vorhanden)</li>
          <li>6–10 Fotos (Team, Räume, Leistungen)</li>
          <li>Stichpunkte zu deinen Angeboten</li>
          <li>Adresse, Kontaktinfos, Öffnungszeiten</li>
          <li>Social-Media-Links</li>
        </ul>
      </div>
    </section>
  );
}

function Step({ number, title, text }: { number: string; title: string; text: string }) {
  return (
    <div className="flex gap-6">
      <div className="text-jamoko-gold text-4xl font-bold min-w-[40px]">{number}</div>
      <div>
        <h3 className="text-2xl font-semibold text-white">{title}</h3>
        <p className="text-jamoko-text-dim mt-1">{text}</p>
      </div>
    </div>
  );
}
