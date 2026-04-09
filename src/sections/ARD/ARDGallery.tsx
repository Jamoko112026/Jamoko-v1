import { useState } from "react";

export default function ARDGallery() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const images = [
    "Hero_1920w_ARDlook.jpg",
    "Felgen_1920w_ARDlook.jpg",
    "ReifenLicht_1920w_ARDlook.jpg",
    "Werkzeugwand_1920w_ARDlook.jpg",
    "ReifenPerspektive_1920w_ARDlook.jpg",
    "Halle_1920w_ARDlook.jpg",
  ];

  return (
    <section className="py-24 px-6 bg-white text-[#0A1F35]">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-2xl md:text-3xl font-light mb-12 text-center">
          Einblicke in die Werkstatt
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <div
              key={i}
              className="cursor-pointer overflow-hidden rounded-2xl group"
              onClick={() => setActiveImage(img)}
            >
              <img
                src={`/ard/${img}`}
                alt=""
                className="w-full h-[260px] object-cover transition duration-500 group-hover:scale-[1.03]"
              />
            </div>
          ))}
        </div>

        {/* LIGHTBOX */}
        {activeImage && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6"
            onClick={() => setActiveImage(null)}
          >
            <img
              src={`/ard/${activeImage}`}
              alt=""
              className="max-w-full max-h-full rounded-xl shadow-2xl"
            />
          </div>
        )}

      </div>
    </section>
  );
}