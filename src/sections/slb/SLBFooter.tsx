import { Link } from "react-router-dom";

export default function SLBFooter() {
  return (
    <footer
      className="
        border-t
        py-10
        px-6
        text-sm
        text-white/70
      "
      style={{
        background: "linear-gradient(180deg, var(--sl-olive-dark), var(--sl-bg-deep))",
        borderColor: "var(--sl-border)",
      }}
    >
      {/* CONTENT */}
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">

        {/* COMPANY */}
        <div className="text-center md:text-left leading-relaxed">
          <div className="font-semibold text-white">
            SL BauTec GmbH
          </div>
          <div className="text-white/60">
            Barsbüttel · Hamburg & Schleswig-Holstein
          </div>
        </div>

        {/* LEGAL */}
        <div className="flex gap-8">
          <Link
            to="/slb/impressum"
            className="hover:text-[var(--sl-accent-main)] transition-colors"
          >
            Impressum
          </Link>

          <Link
            to="/slb/datenschutz"
            className="hover:text-[var(--sl-accent-main)] transition-colors"
          >
            Datenschutz
          </Link>

          <Link
            to="/slb/rechtliche-hinweise"
            className="hover:text-[var(--sl-accent-main)] transition-colors"
          >
            Rechtliche Hinweise
          </Link>
        </div>

      </div>

      {/* BOTTOM LINE */}
      <div className="mt-6 text-center text-xs text-white/40">
        © {new Date().getFullYear()} SL BauTec GmbH · Alle Rechte vorbehalten
      </div>

    </footer>
  );
}
