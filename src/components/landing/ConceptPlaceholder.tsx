import { Gem, MessagesSquare } from "lucide-react";

type ConceptPlaceholderProps = {
  variant: "goldsmith" | "consulting";
};

export function ConceptPlaceholder({ variant }: ConceptPlaceholderProps) {
  const Icon = variant === "goldsmith" ? Gem : MessagesSquare;

  return (
    <div
      className="relative flex h-full w-full items-center justify-center overflow-hidden bg-[#06252f]"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_28%,rgba(229,197,139,0.24),transparent_38%),radial-gradient(circle_at_78%_72%,rgba(26,199,164,0.18),transparent_42%)]" />
      <div className="absolute -left-12 top-1/2 h-36 w-36 -translate-y-1/2 rounded-full border border-[#E5C58B]/20" />
      <div className="absolute -right-10 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full border border-[#1AC7A4]/15" />
      <div className="relative flex h-24 w-24 items-center justify-center rounded-[2rem] border border-[#E5C58B]/30 bg-[#001821]/70 shadow-[0_18px_55px_rgba(229,197,139,0.12)] backdrop-blur-sm">
        <Icon className="h-10 w-10 text-[#E5C58B]" strokeWidth={1.25} />
      </div>
    </div>
  );
}
