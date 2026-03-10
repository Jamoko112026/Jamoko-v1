import Reveal from "@/components/Reveal"

export default function CaseStudy({
  title,
  problem,
  solution,
  result
}: any) {
  return (
    <section className="section-lg container-narrow">

      <Reveal>
        <h2 className="text-3xl mb-6">{title}</h2>
      </Reveal>

      <Reveal>
        <div className="jmk-bubble jmk-bubble-glow mb-6">
          <h3 className="jmk-bubble-title">Problem</h3>
          <p className="jmk-bubble-text">{problem}</p>
        </div>
      </Reveal>

      <Reveal>
        <div className="jmk-bubble jmk-bubble-glow mb-6">
          <h3 className="jmk-bubble-title">Lösung</h3>
          <p className="jmk-bubble-text">{solution}</p>
        </div>
      </Reveal>

      <Reveal>
        <div className="jmk-bubble jmk-bubble-glow">
          <h3 className="jmk-bubble-title">Ergebnis</h3>
          <p className="jmk-bubble-text">{result}</p>
        </div>
      </Reveal>

    </section>
  )
}