import { useState } from "react";
import galleryBg from "../../img/gallery-bg.jpg";
import { galleryImages } from "../../data/galleryImages.js";

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null);

  const openModal = (i) => setActiveIndex(i);
  const closeModal = () => setActiveIndex(null);

  const nextImage = () =>
    setActiveIndex((i) => (i === galleryImages.length - 1 ? 0 : i + 1));

  const prevImage = () =>
    setActiveIndex((i) => (i === 0 ? galleryImages.length - 1 : i - 1));

  return (
    <div className="py-[3.5rem]">
      <h2 className="font-bebas text-[64px] text-white text-center mb-12">
        GALLERY
      </h2>

      {/* Maps + background */}
      <div className="grid lg:grid-cols-2 grid-cols-1">
        <div className="w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2903.360936276835!2d21.884542276534685!3d43.306703174771755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4755ba076b36ef0b%3A0x83c9a4c12b25aad5!2z0KXQvtGC0LXQuyDQotCw0LzQuCDRgNC10YHQuNC00LXQvdGB!5e0!3m2!1ssr!2srs!4v1761137259912!5m2!1ssr!2srs"
            className="w-full lg:h-full md:h-[250px] h-[250px] border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div
          className="bg-cover bg-no-repeat bg-center relative"
          style={{ backgroundImage: `url(${galleryBg})` }}
        >
          <div className="absolute bg-[#0b0016a7] w-full h-full top-0 left-0 z-0"></div>
          <div className="relative z-10 p-8 lg:p-[4rem]">
            <h3 className="font-bebas text-[32px] text-(--primary-color)">
              Tami Residence Conference Center, Nis
            </h3>
            <p className="text-white mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut,
              debitis et mollitia nesciunt numquam officiis placeat quidem
              soluta? Excepturi fugiat hic iure minima modi quos similique vel.
              Assumenda beatae commodi consectetur delectus, dicta dignissimos
              dolorem facilis ipsum iusto laborum obcaecati odio placeat
              possimus quae quam quibusdam quod sequi sint totam!
            </p>
          </div>
        </div>
      </div>

      {/* Gallery grid */}
      <div className="grid lg:grid-cols-4 grid-cols-2 overflow-hidden">
        {galleryImages.map((img, index) => (
          <img
            src={img}
            alt={index}
            key={index}
            onClick={() => openModal(index)}
            className="h-[200px] lg:h-[300px] w-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
          />
        ))}
      </div>

      {/* Modal */}
      {activeIndex !== null && (
        <div
          className="fixed inset-0 bg-black/60 flex justify-center items-center z-[2000]"
          onClick={closeModal}
        >
          {/* Close button */}
          <span
            className="absolute top-6 right-10 text-white text-[45px] cursor-pointer"
            onClick={closeModal}
          >
            &times;
          </span>

          {/* Prev */}
          <span
            className="absolute left-8 text-[60px] text-white cursor-pointer select-none"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
          >
            &#10094;
          </span>

          {/* Slika */}
          <img
            src={galleryImages[activeIndex]}
            className="max-w-[90%] max-h-[85%] object-contain"
            onClick={(e) => e.stopPropagation()}
            alt=""
          />

          {/* Next */}
          <span
            className="absolute right-8 text-[60px] text-white cursor-pointer select-none"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
          >
            &#10095;
          </span>
        </div>
      )}
    </div>
  );
}
