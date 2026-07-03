import type { ReactNode } from "react";

type FeatureCardProps = {
  title: string;
  description: string;
  icon: ReactNode;
};

export function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <article className="rounded-lg border border-white/10 bg-calm-panel p-6">
      <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-md bg-calm-sage text-calm-gold">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-calm-ink">{title}</h3>
      <p className="mt-3 leading-7 text-calm-muted">{description}</p>
    </article>
  );
}
