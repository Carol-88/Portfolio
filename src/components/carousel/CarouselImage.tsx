import React, { useState } from "react";

const images = [
  "img/dogs/dogs-1.webp",
  "img/dogs/dogs-2.webp",
  "img/dogs/dogs-3.webp",
  "img/dogs/dogs-4.webp",
  "img/dogs/dogs-5.webp",
  "img/dogs/dogs-6.webp",
  "img/dogs/dogs-7.webp",
  "img/dogs/dogs-8.webp",
  "img/dogs/dogs-9.webp",
  "img/dogs/dogs-10.webp",
  "img/dogs/dogs-11.webp",
  "img/dogs/dogs-12.webp",
  "img/dogs/dogs-13.webp",
  "img/dogs/dogs-14.webp",
  "img/dogs/dogs-15.webp",
  "img/dogs/dogs-16.webp",
  "img/dogs/dogs-17.webp",
  "img/dogs/dogs-18.webp",
  "img/dogs/dogs-19.webp",
  "img/dogs/dogs-20.webp",
  "img/dogs/dogs-21.webp",
  "img/dogs/dogs-22.webp",
  "img/dogs/dogs-23.webp",
  "img/dogs/dogs-24.webp",
];

const CarouselImage = ({ src, isActive }) => (
  <div
    className={`duration-700 ease-in-out ${
      isActive ? "block" : "hidden"
    } absolute w-full h-full`}
    data-carousel-item
  >
    <img
      src={src}
      className="absolute block w-auto h-auto max-w-full max-h-full mx-auto my-auto"
      alt="..."
    />
  </div>
);

// Componente para los botones de navegación del carrusel
const NavigationButton = ({ index, label, current }) => (
  <button
    type="button"
    aria-current={current ? "true" : "false"}
    aria-label={`${label} ${index + 1}`}
    data-carousel-slide-to={index}
  ></button>
);

export const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div
      id="default-carousel"
      className=" relative w-full z-10 p-8"
      data-carousel="slide"
    >
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {images.map((image, index) => (
          <CarouselImage
            key={index}
            src={image}
            isActive={index === activeIndex}
          />
        ))}
      </div>

      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {images.map((_, index) => (
          <NavigationButton
            key={index}
            index={index}
            label="Slide"
            current={index === activeIndex}
          />
        ))}
      </div>

      {/* Botones de navegación previo y siguiente */}
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handlePrevClick}
        data-carousel-prev
      >
        <img src="icons/prev.png" alt="prev image" />
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handleNextClick}
        data-carousel-next
      >
        <img src="icons/nextbtn.png" alt="next image" />
      </button>
    </div>
  );
};
