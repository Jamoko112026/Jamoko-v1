// src/layouts/JamokoLayout.tsx

import Header from "@/components/Header";
import FooterGlass from "@/components/FooterGlass";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import { Outlet } from "react-router-dom";

export default function JamokoLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-[#001821] text-jamoko-text relative overflow-x-hidden">

      {/* ===== GLOBAL LIGHT SYSTEM ===== */}
      <div className="pointer-events-none fixed inset-0 z-0">

        <div className="absolute -top-40 left-[-10%] w-[70vw] h-[70vh] bg-[radial-gradient(circle,rgba(229,197,139,0.10),transparent_60%)]" />

        <div className="absolute top-[30%] right-[-10%] w-[60vw] h-[60vh] bg-[radial-gradient(circle,rgba(26,199,164,0.08),transparent_60%)]" />

      </div>

      {/* ===== HEADER ===== */}
      <div className="relative z-20">
        <Header />
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <main className="relative z-10 flex-1 pt-24">

        <Outlet />

      </main>

      {/* ===== GLOBAL FOOTER ===== */}
      <div className="relative z-10">
        <FooterGlass />
      </div>

      {/* ===== MOBILE CTA ===== */}
      <div className="relative z-10 md:hidden">
        <StickyMobileCTA />
      </div>

    </div>
  );
}
