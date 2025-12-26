// src/sections/ARD/ARDPrices.tsx

export default function ARDPrices() {
  return (
    <section className="py-20 px-6 bg-white text-[#0A1F35]">
      <h3 className="text-2xl text-center mb-10">Preise</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">

        <div className="border border-gray-200 rounded-2xl p-6 shadow">
          <h4 className="text-xl mb-3">Basis</h4>
          <ul className="space-y-2 mb-4">
            <li>Reifenwechsel (PKW)</li>
            <li>Profilcheck</li>
            <li>Luftdruckservice</li>
          </ul>
          <p className="text-2xl font-semibold">30 €</p>
        </div>

        <div className="border border-gray-200 rounded-2xl p-6 shadow">
          <h4 className="text-xl mb-3">Komfort</h4>
          <ul className="space-y-2 mb-4">
            <li>Reifenwechsel</li>
            <li>Einlagerung (1 Saison)</li>
          </ul>
          <p className="text-2xl font-semibold">ab 70 €</p>
        </div>

        <div className="border border-gray-200 rounded-2xl p-6 shadow">
          <h4 className="text-xl mb-3">Premium</h4>
          <ul className="space-y-2 mb-4">
            <li>Einlagerung</li>
            <li>Felgenreinigung Premium</li>
            <li>WhatsApp-Erinnerungsservice</li>
          </ul>
          <p className="text-2xl font-semibold">ab 95 €</p>
        </div>

      </div>
    </section>
  );
}
