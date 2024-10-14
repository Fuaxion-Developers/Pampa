// app/components/Categories.tsx

'use client';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Categories.module.css';
import Link from 'next/link';
import { getCategories } from '@/helpers/products.helper';
import { ICategory } from '@/types';

var settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
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
  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    const getCategory = async () => {
      const categories: ICategory[] = await getCategories();
      setCategories(categories);
    };

    getCategory();
  }, []);

  return (
    <div className="slider-container">
      <h2 className="ml-12 font-semibold text-xl">CATEGORÍAS</h2>
      <div className="m-8 ">
        <Slider {...settings}>
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex gap-8 justify-center p-4 text-whiteD-100"
            >
              <Link href={`/categories/${category.name}`}>
                <div className="bg-brownD-200 p-3 relative rounded">
                  <p className="text-center font-semibold text-xl">
                    {category.name}
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
