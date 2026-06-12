import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Kennenlernen",
    text: "Wir klären Angebot, Zielgruppe und was deine Website für dich leisten soll.",
  },
  {
    number: "02",
    title: "Konzept & Vorschau",
    text: "Du siehst früh, wie Struktur, Inhalte und Gestaltung zusammenspielen.",
  },
  {
    number: "03",
    title: "Umsetzung & Go-Live",
    text: "Nach deiner Freigabe optimiere ich alles für Mobilgeräte und bringe die Seite online.",
  },
];

export default function ProcessSection() {
  return (
    <div>
      <div className="mx-auto mb-14 max-w-2xl text-center md:mb-16">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#E5C58B]">
          Zusammenarbeit
        </p>
        <h2 className="text-3xl font-light text-white sm:text-4xl md:text-5xl">
          Klarer Prozess.
          <span className="block text-white/40">Wenig Aufwand für dich.</span>
        </h2>
        <p className="mt-6 leading-relaxed text-white/55">
          Du kennst dein Geschäft. Ich übersetze seine Qualität in einen
          verständlichen digitalen Auftritt.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {steps.map((step, index) => (
          <article
            key={step.number}
            className="relative rounded-3xl border border-white/10 bg-white/[0.025] p-7 sm:p-8"
          >
            <div className="mb-14 flex items-center justify-between">
              <span className="text-sm tracking-[0.2em] text-[#E5C58B]">
                {step.number}
              </span>
              {index < steps.length - 1 && (
                <ArrowRight
                  className="hidden h-4 w-4 text-white/20 lg:block"
                  aria-hidden="true"
                />
              )}
            </div>
            <h3 className="text-xl font-medium text-white">{step.title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-white/50">
              {step.text}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
