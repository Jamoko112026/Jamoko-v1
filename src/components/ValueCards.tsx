import { MessageCircleMore, SearchCheck, Sparkles } from "lucide-react";

const items = [
  {
    icon: SearchCheck,
    title: "Vertrauen auf den ersten Blick",
    text: "Besucher erkennen sofort, wer du bist, was du anbietest und warum sie bei dir richtig sind.",
  },
  {
    icon: Sparkles,
    title: "Weniger Zeit für Erklärungen",
    text: "Deine Website beantwortet die wichtigsten Fragen bereits vor dem ersten Kontakt.",
  },
  {
    icon: MessageCircleMore,
    title: "Mehr passende Anfragen",
    text: "Menschen verstehen dein Angebot besser und melden sich gezielter bei dir.",
  },
];

export default function ValueCards() {
  return (
    <div>
      <div className="mb-14 max-w-2xl md:mb-16">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#E5C58B]">
          Was eine gute Website verändert
        </p>
        <h2 className="text-3xl font-light leading-tight text-white sm:text-4xl md:text-5xl">
          Nicht lauter werden.
          <span className="block text-white/40">Sondern klarer.</span>
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {items.map(({ icon: Icon, title, text }) => (
          <article
            key={title}
            className="rounded-3xl border border-white/10 bg-white/[0.025] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#1AC7A4]/25 hover:bg-white/[0.045] sm:p-8"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#1AC7A4]/20 bg-[#1AC7A4]/5 text-[#1AC7A4]">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <h3 className="mt-8 text-lg font-medium text-white">{title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/50">{text}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
