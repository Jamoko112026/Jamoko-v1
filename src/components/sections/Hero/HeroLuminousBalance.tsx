export default function HeroLuminousBalance() {
  return (
    <div className="relative px-6 text-center">

      {/* Glow Hintergrund (sanft, oben links → unten rechts) */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-jamoko-gold blur-[120px]" />
        <div className="absolute top-20 right-0 w-96 h-96 rounded-full bg-jamoko-teal blur-[160px]" />
      </div>

      {/* Content */}
     <div className="relative max-w-4xl mx-auto py-14 md:py-20">

        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
          <span className="text-jamoko-gold block">Digitale Ruhe.</span>
          <span className="text-jamoko-teal block mt-2">
            Spürbare Wirkung.
          </span>
        </h1>

        <p className="mt-10 text-lg text-jamoko-text-dim max-w-2xl mx-auto leading-relaxed">
          Der klare, moderne und ruhige Weg zu einem professionellen Online-Auftritt, 
          der Kunden wirklich erreicht.
        </p>
      </div>
    </div>
  );
}
