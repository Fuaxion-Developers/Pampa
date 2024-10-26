'use client';
import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const clients = [
  {
    text: 'Excelente calidad, puntual el envio',
    author: 'Manuel Ochoa ',
    ranking:
      'https://res.cloudinary.com/dkobjvdgn/image/upload/v1726846247/star_24dp_927363_FILL0_wght400_GRAD0_opsz24_yx8q9v.svg',
    ranking_repeat: 4,
  },
  {
    text: 'Me encantaron los sellos',
    author: 'Matias Videla',
    ranking:
      'https://res.cloudinary.com/dkobjvdgn/image/upload/v1726846247/star_24dp_927363_FILL0_wght400_GRAD0_opsz24_yx8q9v.svg',
    ranking_repeat: 5,
  },
  {
    text: 'Me gusto mucho la calidad',
    author: 'Rafael Garcia',
    ranking:
      'https://res.cloudinary.com/dkobjvdgn/image/upload/v1726846247/star_24dp_927363_FILL0_wght400_GRAD0_opsz24_yx8q9v.svg',
    ranking_repeat: 3,
  },
  {
    text: 'Me encantaron los sellos',
    author: 'Mauricio Arce',
    ranking:
      'https://res.cloudinary.com/dkobjvdgn/image/upload/v1726846247/star_24dp_927363_FILL0_wght400_GRAD0_opsz24_yx8q9v.svg',
    ranking_repeat: 4,
  },
  {
    text: 'Me encantaron los sellos',
    author: 'Carlos Tunjano',
    ranking:
      'https://res.cloudinary.com/dkobjvdgn/image/upload/v1726846247/star_24dp_927363_FILL0_wght400_GRAD0_opsz24_yx8q9v.svg',
    ranking_repeat: 5,
  },
  
];

const settings = {
  dots: true,
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
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

const Recomendations = () => {
  return (
    <div className="m-8 p-4 bg-black/50 backdrop-blur-sm border rounded-xl">
      <h2 className="m-8 mb-16 font-semibold text-2xl text-center  border-black">
        Nuestros clientes nos recomiendan
      </h2>
      <div className="m-8">
        <Slider {...settings}>
          {clients.map((client, index) => (
            <div key={index} className="flex gap-8 justify-center p-4">
              <div className="bg-brownD-200 p-3 relative">
                <div className="border-4 border-whiteD-200 p-8 space-y-3">
                  <p className="text-center font-semibold text-xl">
                    {client.author}
                  </p>
                  <p className="text-center">{client.text}</p>
                  <div className="flex justify-center gap-1">
                    {/* Renderiza tantas estrellas como el valor de ranking_repeat */}
                    {Array(client.ranking_repeat)
                      .fill(0)
                      .map((_, i) => (
                        <Image
                          key={i}
                          width={20}
                          height={20}
                          src={client.ranking}
                          alt={`Estrella ${i + 1}`}
                        />
                      ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Recomendations;
