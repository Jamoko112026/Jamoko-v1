import Header from "@/components/Header";
import FooterGlass from "@/components/FooterGlass";
import FooterMobileLegal from "@/components/FooterMobileLegal";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import { Outlet } from "react-router-dom";

export default function JamokoLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-[#001821] text-jamoko-text">

      <Header />

      <main className="flex-1 pt-24 pb-28">
        <Outlet />
      </main>

      <div className="hidden md:block">
        <FooterGlass />
      </div>

      <div className="md:hidden">
        <StickyMobileCTA />
        <FooterMobileLegal />
      </div>

    </div>
  );
}
