'use client';
import Image from 'next/image';
import React from 'react';
import styles from '@/components/prueba.module.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';

const categories = [
  {
    categoria: 'Alto releive',
    link: '/products/alto_relieve',
  },
  {
    categoria: 'Bajo releive',
    link: '/products/bajo_relieve',
  },
  {
    categoria: 'Accesorios',
    link: '/products/accesorios',
  },
  {
    categoria: 'Navidad 24/25',
    link: '#',
  },
  {
    categoria: 'Vegetales(VG)',
    link: '#',
  },
  {
    categoria: 'Verduras (VD)',
    link: '#',
  },
  {
    categoria: 'Sets',
    link: '#',
  },
  {
    categoria: 'Sin stock',
    link: '#',
  },
  {
    categoria: 'Palafrases',
    link: '#',
  },
  {
    categoria: 'Numerador',
    link: '#',
  },
  {
    categoria: 'Celebraciones',
    link: '#',
  },
  {
    categoria: 'Oron',
    link: '#',
  },
];

const settings = {
  dots: true,
  infinite: false,
  slidesToShow: 5,
  slidesToScroll: 5,
  autoplay: false,
  autoplaySpeed: 1500,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Categories = () => {
  return (
    <div>
      <h2 className="ml-12 font-semibold text-xl ">CATEGORÍAS</h2>
      <div className="m-8">
        <Slider {...settings}>
          {categories.map((category, index) => (
            <div key={index} className="flex gap-8 justify-center p-4 text-whiteD-100">
              <Link href={category.link}>
                <div className="bg-brownD-200 p-3 relative rounded">
                  <p className="text-center font-semibold text-xl">
                    {category.categoria}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Categories;
