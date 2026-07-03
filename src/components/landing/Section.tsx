import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  children: ReactNode;
  className?: string;
};

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  className = "",
}: SectionProps) {
  return (
    <section id={id} className={`px-4 py-16 sm:px-6 md:py-24 lg:px-8 ${className}`}>
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          {eyebrow ? (
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.14em] text-calm-gold">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="text-3xl font-semibold tracking-tight text-calm-ink sm:text-4xl">
            {title}
          </h2>
          {intro ? (
            <p className="mt-5 text-lg leading-8 text-calm-muted">{intro}</p>
          ) : null}
        </div>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
