export default function ARDDemoGallery() {
  return (
    <section className="py-20 px-6 text-center">

      <h2 className="text-2xl md:text-3xl font-light mb-12">
        Einblicke
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">

        <div className="aspect-[4/3] bg-white/10 rounded-xl" />
        <div className="aspect-[4/3] bg-white/10 rounded-xl" />
        <div className="aspect-[4/3] bg-white/10 rounded-xl" />

      </div>

    </section>
  );
}