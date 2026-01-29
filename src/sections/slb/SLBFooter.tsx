import { Link } from "react-router-dom";

export default function SLBFooter() {
  return (
    <footer className="bg-[#0f1720] text-white/70 py-10 px-6 border-t border-white/5">

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm">

        {/* Company Info */}
        <div className="text-center md:text-left">
          <strong className="text-white">SL BauTec GmbH</strong><br />
          Barsbüttel · Hamburg & Schleswig-Holstein
        </div>

        {/* Legal Links */}
        <div className="flex gap-6">
          <Link
            to="/impressum"
            className="hover:text-[#f2b705] transition"
          >
            Impressum
          </Link>

          <Link
            to="/datenschutz"
            className="hover:text-[#f2b705] transition"
          >
            Datenschutz
          </Link>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="text-center text-xs text-white/40 mt-6">
        © {new Date().getFullYear()} SL BauTec GmbH
      </div>

    </footer>
  );
}
