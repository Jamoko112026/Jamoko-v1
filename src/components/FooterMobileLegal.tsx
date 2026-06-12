import { Link } from "react-router-dom";

export default function FooterMobileLegal() {
  return (
    <footer className="
      bg-[#001821]
      text-white/80
      px-5
      py-16
      text-sm
      md:hidden
      border-t border-white/10
    ">

      {/* Brand + Contact */}
      <div className="flex flex-col gap-2 text-center">
        <div className="font-medium text-white">
          JaMoKo – Community First
        </div>

        <div className="text-white/70">
          Jan-Moritz Koch · Hamburg
        </div>

        <div className="flex flex-col gap-1">
          <a
            href="mailto:moin@jamoko.de"
            className="hover:text-white transition"
          >
            moin@jamoko.de
          </a>

          <a
            href="tel:+4917682032127"
            className="hover:text-white transition"
          >
            0176 82032127
          </a>
        </div>

        <div className="text-xs text-white/50 mt-2">
          Einzelunternehmen · Kleinunternehmer (§19 UStG)
        </div>
      </div>

      {/* Legal Links */}
      <div className="flex justify-center gap-6 mt-6 text-sm">
        <Link to="/impressum" className="hover:text-white transition">
          Impressum
        </Link>

        <Link to="/datenschutz" className="hover:text-white transition">
          Datenschutz
        </Link>

        <Link to="/agb" className="hover:text-white transition">
          AGB
        </Link>
      </div>

    </footer>
  );
}
