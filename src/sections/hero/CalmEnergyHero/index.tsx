import "./glow.css";

export default function CalmEnergyHero() {
  return (
    <section className="glow-hero w-full h-[70vh] flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-6xl md:text-7xl font-semibold text-jamoko-gold mb-6 drop-shadow-xl">
        CalmEnergyHero
      </h1>
      <p className="text-xl text-jamoko-text-dim max-w-2xl mx-auto drop-shadow-md">
        Ruhiger Glow. Moderne Energie. Spürbare Wirkung.
      </p>
    </section>
  );
}
