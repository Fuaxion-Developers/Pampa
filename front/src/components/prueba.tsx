'use client'
import Image from 'next/image';
import React from 'react';
import styles from '@/components/prueba.module.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const clients = [
  {
    text: 'me encanto los sellos',
    image: '',
    author: 'Gama',
    ranking: '5',
  },
  {
    text: 'me encanto los sellos',
    image: '',
    author: 'Gama',
    ranking: '5',
  },
  {
    text: 'me encanto los sellos',
    image: '',
    author: 'Gama',
    ranking: '5',
  },
  {
    text: 'me encanto los sellos',
    image: '',
    author: 'Gama',
    ranking: '5',
  },
  {
    text: 'me encanto los sellos',
    image: '',
    author: 'Gama',
    ranking: '5',
  },
];
var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
};
const Prueba = () => {
  return (
    <>
      <h2>clients</h2>
      <div>
        <Slider {...settings}>
          {clients.map((client, index) => {
            return (
              <div key={index} className={styles.testimonials}>
                <h3>{client.text}</h3>
                <div className={styles.author}>
                  <Image
                    src={client.image}
                    alt="Author"
                    width={30}
                    height={30}
                  />
                  <p>
                    {client.author}
                    <br />
                  </p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default Prueba;
