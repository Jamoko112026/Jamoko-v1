// src/components/Layout.tsx
import Header from "./Header";
import FooterGlass from "./FooterGlass";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#001821] text-jamoko-text antialiased">
      
      {/* Fixed Header */}
      <Header />

      {/* Page Wrapper mit automatischem Offset */}
      <main className="pt-28 space-y-32">
        {children}
      </main>

      <FooterGlass />
    </div>
  );
}

