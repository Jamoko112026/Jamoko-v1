// src/sections/ARD/ARDGallery.tsx

export default function ARDGallery() {
  const images = [
    "Hero_1920w_ARDlook.jpg",
    "Felgen_1920w_ARDlook.jpg",
    "ReifenLicht_1920w_ARDlook.jpg",
    "Werkzeugwand_1920w_ARDlook.jpg",
    "ReifenPerspektive_1920w_ARDlook.jpg",
    "Halle_1920w_ARDlook.jpg",
    "Felgen_1920w_ARDlook.jpg",
    "ReifenLicht_1920w_ARDlook.jpg",
    "Werkzeugwand_1920w_ARDlook.jpg",
  ];

  return (
    <section className="py-20 px-6 bg-[#0A1F35] text-white">
      <h2 className="text-3xl font-light text-center mb-10">
        Einblicke in die Werkstatt
      </h2>

      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 max-w-6xl mx-auto space-y-4">
        {images.map((img, i) => (
          <img
            key={i}
            src={`/ard/${img}`}
            alt={img}
            className="w-full rounded-xl shadow-md mb-4 break-inside-avoid object-cover"
          />
        ))}
      </div>
    </section>
  );
}
