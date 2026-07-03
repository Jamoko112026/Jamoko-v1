import Link from "next/link";
import { ArrowRight } from "lucide-react";

type OfferCardProps = {
  title: string;
  subtitle: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
};

export function OfferCard({
  title,
  subtitle,
  description,
  ctaLabel,
  ctaHref,
}: OfferCardProps) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-white/10 bg-calm-panel p-6">
      <p className="text-sm font-medium text-calm-gold">{subtitle}</p>
      <h3 className="mt-3 text-xl font-semibold text-calm-ink">{title}</h3>
      <p className="mt-4 flex-1 leading-7 text-calm-muted">{description}</p>
      <Link
        href={ctaHref}
        className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-calm-gold underline-offset-4 hover:underline"
      >
        {ctaLabel}
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </article>
  );
}
