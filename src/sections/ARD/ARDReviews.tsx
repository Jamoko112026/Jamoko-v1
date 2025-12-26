// src/sections/ARD/ARDReviews.tsx

export default function ARDReviews() {
  const reviews = [
    {
      text: "Sehr schneller Service, fairer Preis und super freundlich.",
      name: "M. Schneider",
    },
    {
      text: "Reifenwechsel innerhalb von 20 Minuten. Absolut empfehlenswert.",
      name: "M. Hartmann",
    },
    {
      text: "Sehr ordentlicher Betrieb. Einlagerung klappt perfekt.",
      name: "A. Fischer",
    },
  ];

  return (
    <section className="py-20 px-6 bg-[#0A1F35] text-white">
      <h3 className="text-2xl text-center mb-10">Kundenbewertungen</h3>

      <div className="space-y-6 max-w-3xl mx-auto">
        {reviews.map((r, i) => (
          <div
            key={i}
            className="border border-white/20 rounded-xl p-5 bg-white/5"
          >
            <p className="text-yellow-300">⭐️⭐️⭐️⭐️⭐️</p>
            <p className="mt-2 text-[#E2EAF1]">{r.text}</p>
            <p className="text-[#A8C7E6] text-sm mt-2">– {r.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
