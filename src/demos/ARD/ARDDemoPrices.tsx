export default function ARDDemoPrices() {
  return (
    <section className="py-20 px-6 text-center bg-white/5">
      <h2 className="text-2xl md:text-3xl font-light mb-12">
        Preise (Beispiel)
      </h2>

      <div className="max-w-xl mx-auto space-y-4 text-white/70">

        <div className="flex justify-between border-b border-white/10 pb-2">
          <span>Reifenwechsel</span>
          <span>ab 30€</span>
        </div>

        <div className="flex justify-between border-b border-white/10 pb-2">
          <span>Einlagerung</span>
          <span>ab 40€</span>
        </div>

        <div className="flex justify-between">
          <span>Komplettservice</span>
          <span>ab 70€</span>
        </div>

      </div>
    </section>
  );
}