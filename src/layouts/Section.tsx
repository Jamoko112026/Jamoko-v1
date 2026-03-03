type Props = {
  id?: string;
  className?: string;
  children: React.ReactNode;
  max?: "md" | "lg" | "xl";
};

const maxMap = {
  md: "max-w-4xl",
  lg: "max-w-5xl",
  xl: "max-w-6xl",
};

export default function Section({
  id,
  className = "",
  children,
  max = "lg",
}: Props) {
  return (
    <section
      id={id}
      className={[
        "px-6",
        "py-20 md:py-28",
        "mx-auto",
        maxMap[max],
        className,
      ].join(" ")}
    >
      {children}
    </section>
  );
}