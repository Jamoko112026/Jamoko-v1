export default function ValueCards() {
  const items = [
    {
      title: "Vertrauen auf den ersten Blick",
      text: "Besucher erkennen sofort, wer du bist, was du anbietest und warum sie bei dir richtig sind.",
    },
    {
      title: "Weniger Zeit für Erklärungen",
      text: "Deine Website beantwortet die wichtigsten Fragen bereits vor dem ersten Kontakt.",
    },
    {
      title: "Mehr passende Anfragen",
      text: "Menschen verstehen dein Angebot besser und melden sich gezielter bei dir.",
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
      {items.map((item, i) => (
        <div
          key={i}
          className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm transition duration-300 hover:bg-white/[0.04] hover:-translate-y-1"
        >
          <h3 className="text-lg text-jamoko-gold mb-3">
            {item.title}
          </h3>

          <p className="text-white/60 text-sm leading-relaxed">
            {item.text}
          </p>
        </div>
      ))}
    </div>
  );
}