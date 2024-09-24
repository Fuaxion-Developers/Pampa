'use client';
import Image from 'next/image';
import React from 'react';
import styles from '@/components/prueba.module.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const clients = [
  {
    text: 'me encanto los sellos',
    image:
      'https://res.cloudinary.com/dkobjvdgn/image/upload/v1726583172/samples/two-ladies.jpg',
    author: 'Gama',
    ranking: '5',
  },
  {
    text: 'me encanto los sellos',
    image:
      'https://res.cloudinary.com/dkobjvdgn/image/upload/v1726583172/samples/two-ladies.jpg',
    author: 'Gama',
    ranking: '5',
  },
  {
    text: 'me encanto los sellos',
    image:
      'https://res.cloudinary.com/dkobjvdgn/image/upload/v1726583172/samples/two-ladies.jpg',
    author: 'Gama',
    ranking: '5',
  },
  {
    text: 'me encanto los sellos',
    image:
      'https://res.cloudinary.com/dkobjvdgn/image/upload/v1726583172/samples/two-ladies.jpg',
    author: 'Gama',
    ranking: '5',
  },
  {
    text: 'me encanto los sellos',
    image:
      'https://res.cloudinary.com/dkobjvdgn/image/upload/v1726583172/samples/two-ladies.jpg',
    author: 'Gama',
    ranking: '5',
  },
  {
    text: 'me encanto los sellos',
    image:
      'https://res.cloudinary.com/dkobjvdgn/image/upload/v1726583172/samples/two-ladies.jpg',
    author: 'Gama',
    ranking: '5',
  },
  {
    text: 'me encanto los sellos',
    image:
      'https://res.cloudinary.com/dkobjvdgn/image/upload/v1726583172/samples/two-ladies.jpg',
    author: 'Gama',
    ranking: '5',
  },
];
const settings = {
  dots: true,
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  pauseOnHover: true,
   responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
};
const Recomendations = () => {
  return (
    <div>
      <h2 className="m-8 mb-16 font-semibold text-xl border-b border-black">
        Nuestros clientes nos recomiendan
      </h2>
      <div className='m-8 gap-12 '>
        <Slider {...settings}>
          {clients.map((client, index) => {
            return (
              <div key={index} className="flex gap-8 justify-center m-12 p-4">
                <div className=" bg-whiteD-200 p-3 relative">
                  <Image
                    className="rounded-full absolute left-1/2 transform -translate-x-1/2 -top-10" // Centrar imagen
                    width="100"
                    height="100"
                    src={client.image}
                    alt="circled-user-female-skin-type-1-2"
                  />
                  <div className="border-4 border-white p-8 space-y-3">
                    {/* Espacio adicional para evitar que el texto se superponga */}
                    <p className="text-center font-semibold text-xl">
                      {client.author}
                    </p>
                    <p className="text-center">{client.text}</p>
                    <div className="flex justify-center">
                      {[...Array(5)].map((_, starIndex) => (
                        <Image
                          key={starIndex}
                          width="20"
                          height="20"
                          src="https://res.cloudinary.com/dkobjvdgn/image/upload/v1726846247/star_24dp_927363_FILL0_wght400_GRAD0_opsz24_yx8q9v.svg"
                          alt={`Estrella ${starIndex}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Recomendations;
