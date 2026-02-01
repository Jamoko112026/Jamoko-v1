import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import HeaderSLB from "@/components/HeaderSLB";

// SLB Theme
import "@/assets/themes/slb_theme.css";

export default function SLBLayout() {

  useEffect(() => {
    document.documentElement.classList.add("brand-slb");
    return () => document.documentElement.classList.remove("brand-slb");
  }, []);

  return (
   <div className="theme-sl min-h-screen">

      <HeaderSLB />

      {/* SLB Content */}
      <main className="flex-1">
        <Outlet />
      </main>

    </div>
  );
}
