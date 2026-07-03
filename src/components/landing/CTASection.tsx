import Link from "next/link";
import { Mail } from "lucide-react";

type CTASectionProps = {
  title: string;
  text: string;
  buttonLabel: string;
  buttonHref: string;
};

export function CTASection({
  title,
  text,
  buttonLabel,
  buttonHref,
}: CTASectionProps) {
  return (
    <section className="px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-lg border border-white/10 bg-calm-panel px-6 py-12 text-calm-paper sm:px-10 md:py-16">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {title}
          </h2>
          <p className="mt-5 text-lg leading-8 text-calm-paper/75">{text}</p>
          <Link
            href={buttonHref}
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-calm-gold px-5 py-3 text-sm font-semibold text-calm-navy transition hover:bg-calm-green"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            {buttonLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
