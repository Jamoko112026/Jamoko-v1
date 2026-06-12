import { Clock3, Handshake, Smartphone } from "lucide-react";

const trustItems = [
  {
    icon: Clock3,
    title: "Schnell startklar",
    text: "Überschaubarer Prozess statt monatelanger Abstimmung.",
  },
  {
    icon: Handshake,
    title: "Direkte Zusammenarbeit",
    text: "Ein Ansprechpartner vom ersten Gespräch bis zum Go-Live.",
  },
  {
    icon: Smartphone,
    title: "Für Mobilgeräte gedacht",
    text: "Klar lesbar und einfach bedienbar auf jedem Bildschirm.",
  },
];

export default function TrustStrip() {
  return (
    <section className="border-b border-white/10 bg-white/[0.025]">
      <div className="mx-auto grid max-w-6xl px-6 sm:px-8 md:grid-cols-3">
        {trustItems.map(({ icon: Icon, title, text }, index) => (
          <div
            key={title}
            className={`flex gap-4 border-white/10 py-7 md:px-7 ${
              index > 0 ? "md:border-l" : "md:pl-0"
            } ${index === trustItems.length - 1 ? "md:pr-0" : ""}`}
          >
            <Icon
              className="mt-0.5 h-5 w-5 shrink-0 text-[#E5C58B]"
              aria-hidden="true"
            />
            <div>
              <h2 className="text-sm font-medium text-white/90">{title}</h2>
              <p className="mt-1 text-sm leading-relaxed text-white/45">
                {text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
