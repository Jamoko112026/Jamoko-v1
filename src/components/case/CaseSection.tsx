interface CaseSectionProps {
  title: string;
  children: React.ReactNode;
}

export default function CaseSection({ title, children }: CaseSectionProps) {
  return (
    <section className="relative py-24 bg-[#001821] text-white">
      <div className="max-w-5xl mx-auto px-6">
        
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          {title}
        </h2>

        {/* SLB Accent Line */}
        <div className="w-20 h-1 bg-orange-500 mb-10" />

        <div className="text-lg text-gray-300 leading-relaxed space-y-6">
          {children}
        </div>

      </div>
    </section>
  );
}