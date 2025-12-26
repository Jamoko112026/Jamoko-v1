// src/pages/Impressum.tsx
import GlowBackground from "../components/backgrounds/GlowBackground";

export default function Impressum() {
  return (
    <GlowBackground>
      <div className="max-w-3xl mx-auto px-6 py-24 text-jamoko-text">
        <h1 className="text-3xl font-headline text-[#E5C58B] mb-8">
          Impressum
        </h1>

        <div className="space-y-4 text-sm leading-relaxed text-jamoko-text/80">
          <p>
            Angaben gemäß § 5 TMG
          </p>

          <p>
            <strong>JaMoKo – Community First</strong><br />
            Jan-Moritz Koch<br />
            Hainbuchenweg 2<br />
            22299 Hamburg<br />
            Deutschland
          </p>

          <p>
            E-Mail:{" "}
            <a
              href="mailto:moin@jamoko.de"
              className="text-[#1AC7A4] hover:text-[#E5C58B] transition-colors"
            >
              moin@jamoko.de
            </a>
          </p>

          <p>
            Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:<br />
            Jan-Moritz Koch
          </p>
        </div>
      </div>
    </GlowBackground>
  );
}
