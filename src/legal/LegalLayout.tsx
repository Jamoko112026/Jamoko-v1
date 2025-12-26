import { ReactNode, useEffect } from "react";

export function useTitle(title: string) {
  useEffect(() => {
    const prev = document.title;
    document.title = title;
    return () => { document.title = prev; };
  }, [title]);
}

export default function LegalLayout({ title, children }: { title: string; children: ReactNode; }) {
  useTitle(title);
  return (
    <div className="min-h-[76vh] w-full px-4 sm:px-6 md:px-8 py-10 text-white bg-[#0b0f12]">
      <main className="mx-auto w-full max-w-4xl space-y-6">
        <header className="space-y-2">
          <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
          <p className="text-sm text-white/60">Ruhiger Minimal‑Look · Text‑Header ohne Logo</p>
        </header>
        <div className="space-y-6">{children}</div>
      </main>
    </div>
  );
}
