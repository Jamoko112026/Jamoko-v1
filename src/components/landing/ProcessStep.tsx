import type { ReactNode } from "react";

type ProcessStepProps = {
  number: string;
  title: string;
  children: ReactNode;
};

export function ProcessStep({ number, title, children }: ProcessStepProps) {
  return (
    <article className="grid gap-4 border-t border-white/10 py-6 sm:grid-cols-[4rem_1fr]">
      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-calm-gold text-sm font-semibold text-calm-navy">
        {number}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-calm-ink">{title}</h3>
        <p className="mt-2 leading-7 text-calm-muted">{children}</p>
      </div>
    </article>
  );
}
