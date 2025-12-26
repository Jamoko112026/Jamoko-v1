export default function ContactForm() {
  return (
    <section id="kontakt" className="py-32 px-6 bg-[#001821]">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-headline text-[#E5C58B] mb-6">
          Kontakt
        </h2>

        <p className="text-jamoko-text/80 mb-12">
          Schreib mir kurz dein Anliegen. Ruhig, direkt und unverbindlich.
        </p>

        <form
          name="kontakt"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          className="space-y-6 text-left"
        >
          {/* Netlify Pflichtfelder */}
          <input type="hidden" name="form-name" value="kontakt" />
          <input type="hidden" name="bot-field" />

          <div>
            <label className="block text-sm mb-2">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full rounded-lg bg-[#001821] border border-jamoko-teal/30 px-4 py-3 text-jamoko-text focus:outline-none focus:border-jamoko-gold"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">E-Mail</label>
            <input
              type="email"
              name="email"
              required
              className="w-full rounded-lg bg-[#001821] border border-jamoko-teal/30 px-4 py-3 text-jamoko-text focus:outline-none focus:border-jamoko-gold"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Nachricht</label>
            <textarea
              name="message"
              rows={5}
              required
              className="w-full rounded-lg bg-[#001821] border border-jamoko-teal/30 px-4 py-3 text-jamoko-text focus:outline-none focus:border-jamoko-gold"
            />
          </div>

          <button
            type="submit"
            className="mt-4 inline-flex items-center justify-center rounded-full bg-[#E5C58B] px-8 py-3 font-medium text-[#001821] hover:bg-[#1AC7A4] transition"
          >
            Anfrage senden
          </button>

          <p className="text-xs text-jamoko-text/60 pt-4">
            Deine Anfrage wird vertraulich behandelt.
          </p>
        </form>
      </div>
    </section>
  );
}
