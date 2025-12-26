// src/sections/ARD/ARDContact.tsx

export default function ARDContact() {
  return (
    <section className="py-20 px-6 text-center bg-white text-[#0A1F35]">
      <h3 className="text-2xl mb-6">Kontakt</h3>

      <p className="text-lg leading-relaxed mb-6">
        Altonaer Reifendienst<br />
        Hainbuchenweg 2, Hamburg-Altona<br />
        Telefon: <a href="tel:+4940434993" className="underline">040 434 993</a><br />
        WhatsApp: <a href="https://wa.me/" className="underline">Jetzt schreiben</a>
      </p>

      <div className="flex justify-center gap-4">
        <a
          href="https://wa.me/"
          className="bg-[#0A1F35] text-white px-6 py-3 rounded-xl font-semibold"
        >
          WhatsApp Termin
        </a>
      </div>
    </section>
  );
}
