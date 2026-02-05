import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import HeaderSLB from "@/components/HeaderSLB";

// SLB Theme
import "@/assets/themes/slb_theme.css";

export default function SLBLayout() {
  useEffect(() => {
    document.documentElement.classList.add("brand-slb");
    return () => {
      document.documentElement.classList.remove("brand-slb");
    };
  }, []);

  return (
    <div className="theme-sl min-h-screen flex flex-col">
      <HeaderSLB />

      <main className="flex-1 relative z-10">
        <Outlet />
      </main>
    </div>
  );
}
