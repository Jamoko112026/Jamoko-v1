export default function AlexandrosHero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center text-center px-6 overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/Jamoko_Alexandros_Hero_v1_2026-03-28.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center 25%",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-[#001821]/70" />

      {/* GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(229,197,139,0.25),transparent_60%)]" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-2xl">

        <h1 className="text-4xl md:text-5xl font-light mb-6 leading-tight">
          Ein kleiner Ort.<br />
          Ein Gericht.<br />
          Ein Mensch.
        </h1>

        <p className="text-lg md:text-xl text-white/70 mb-10">
          Wenn du hier bist, bist du wirklich da.
        </p>

      </div>
    </section>
  );
}