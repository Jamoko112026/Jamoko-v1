export default function ValueCards() {
  const items = [
    {
      title: "Klarer Aufbau",
      text: "Besucher verstehen sofort, worum es geht – ohne sich durchzudenken."
    },
    {
      title: "Echte Wirkung",
      text: "Deine Seite wirkt ruhig, klar und passt zu dem, was du anbietest."
    },
    {
      title: "Weniger erklären müssen",
      text: "Menschen kommen besser vorbereitet – und die richtigen melden sich."
    }
  ]

  return (
    <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
      {items.map((item, i) => (
        <div
          key={i}
          className="
            p-6 rounded-2xl
            border border-white/10
            bg-white/[0.02]
            backdrop-blur-sm
            transition duration-300
            hover:bg-white/[0.04]
            hover:translate-y-[-4px]
          "
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
  )
}