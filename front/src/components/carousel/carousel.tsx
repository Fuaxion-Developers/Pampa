'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prevIndex => (prevIndex + 1) % totalSlides);
    }, 5000); // Cambia cada 5 segundos
    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <div
      id="indicators-carousel"
      className="relative w-full"
      data-carousel="static"
    >
      {/* Carousel wrapper */}
      <div className="h-48 md:h-72 overflow-hidden">
        {/* Item 1 */}
        <div
          className={`absolute block w-full transition-opacity duration-700 ease-in-out ${
            activeIndex === 0 ? 'opacity-100' : 'opacity-0'
          }`}
          data-carousel-item="active"
        >
          <Image
            className="relative mx-auto my-auto h-48 md:h-72"
            src="/imagenes/banner1.png"
            alt="Producto 1"
            width={1300}
            height={1300}
          />
        </div>
        {/* Item 2 */}
        <div
          className={`absolute block w-full transition-opacity duration-700 ease-in-out ${
            activeIndex === 1 ? 'opacity-100' : 'opacity-0'
          }`}
          data-carousel-item="active"
        >
          <Image
            className="relative mx-auto my-auto h-48 md:h-72"
            src="/imagenes/banner.png"
            alt="Producto 2"
            width={1300}
            height={1300}
          />
        </div>
        {/* Item 3 */}
        <div
          className={`absolute block w-full transition-opacity duration-700 ease-in-out ${
            activeIndex === 2 ? 'opacity-100' : 'opacity-0'
          }`}
          data-carousel-item="active"
        >
          <Image
            className="relative mx-auto my-auto h-48 md:h-72"
            src="/imagenes/portada3.png"
            alt="Producto 3"
            width={1300}
            height={1300}
          />
        </div>
      </div>

      {/* Controles del slider debajo del carousel */}
      <div className="flex justify-center mt-4">
        <button
          type="button"
          className="inline-flex items-center justify-center w-8 h-8 md:w-10 md:h-10 border rounded-full bg-gray-200 border-gray-300 mx-2"
          onClick={() =>
            setActiveIndex((activeIndex - 1 + totalSlides) % totalSlides)
          }
          data-carousel-prev
        >
          <svg
            className="w-3 h-3 md:w-4 md:h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </button>
        <button
          type="button"
          className="inline-flex items-center justify-center w-8 h-8 md:w-10 md:h-10 border rounded-full bg-gray-200 border-gray-300 mx-2"
          onClick={() => setActiveIndex((activeIndex + 1) % totalSlides)}
          data-carousel-next
        >
          <svg
            className="w-3 h-3 md:w-4 md:h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </button>
      </div>

      {/* Indicadores del slider */}
      <div className="absolute z-30 flex space-x-3 bottom-5 left-1/2 transform -translate-x-1/2">
        {[...Array(totalSlides)].map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              activeIndex === index ? 'bg-white' : 'bg-gray-300'
            }`}
            aria-current={activeIndex === index ? 'true' : 'false'}
            aria-label={`Slide ${index + 1}`}
            onClick={() => setActiveIndex(index)}
            data-carousel-slide-to={index}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
