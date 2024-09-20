import Image from 'next/image';
import React from 'react';

const Recomendations = () => {
  return (
    <div>
      <h2  className='m-8 mb-16 font-semibold text-xl border-b border-black'>Nuestros clientes nos recomiendan</h2>
      <div className="grid grid-cols-4 gap-8 justify-center m-8">
        <div className=" bg-whiteD-200 p-3 relative">
          {' '}
          {/* Posición relativa al contenedor */}
          <Image
            className="rounded-full absolute left-1/2 transform -translate-x-1/2 -top-10" // Centrar imagen
            width="100"
            height="100"
            src="https://res.cloudinary.com/dkobjvdgn/image/upload/v1726583172/samples/two-ladies.jpg"
            alt="circled-user-female-skin-type-1-2"
          />
          <div className="border-4 border-white p-8 space-y-3">
            {/* Espacio adicional para evitar que el texto se superponga */}
            <p className="text-center font-semibold text-xl">John Doe</p>
            <p className="text-center">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Veritatis nostrum cupiditate quas tempora vero velit dicta.
            </p>
            <div className="flex justify-center">
              <Image
                width="20"
                height="200"
                src="https://res.cloudinary.com/dkobjvdgn/image/upload/v1726846247/star_24dp_927363_FILL0_wght400_GRAD0_opsz24_yx8q9v.svg"
                alt=""
              />
              <Image
                width="20"
                height="200"
                src="https://res.cloudinary.com/dkobjvdgn/image/upload/v1726846247/star_24dp_927363_FILL0_wght400_GRAD0_opsz24_yx8q9v.svg"
                alt=""
              />
              <Image
                width="20"
                height="200"
                src="https://res.cloudinary.com/dkobjvdgn/image/upload/v1726846247/star_24dp_927363_FILL0_wght400_GRAD0_opsz24_yx8q9v.svg"
                alt=""
              />
              <Image
                width="20"
                height="200"
                src="https://res.cloudinary.com/dkobjvdgn/image/upload/v1726846247/star_24dp_927363_FILL0_wght400_GRAD0_opsz24_yx8q9v.svg"
                alt=""
              />
              <Image
                width="20"
                height="200"
                src="https://res.cloudinary.com/dkobjvdgn/image/upload/v1726846247/star_24dp_927363_FILL0_wght400_GRAD0_opsz24_yx8q9v.svg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className=" bg-whiteD-200 p-3 relative">
          {' '}
          {/* Posición relativa al contenedor */}
          <Image
            className="rounded-full absolute left-1/2 transform -translate-x-1/2 -top-10" // Centrar imagen
            width="100"
            height="100"
            src="https://res.cloudinary.com/dkobjvdgn/image/upload/v1726583172/samples/two-ladies.jpg"
            alt="circled-user-female-skin-type-1-2"
          />
          <div className="border-4 border-white p-8 space-y-3">
            {/* Espacio adicional para evitar que el texto se superponga */}
            <p className="text-center font-semibold text-xl">John Doe</p>
            <p className="text-center">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Veritatis nostrum cupiditate quas tempora vero velit dicta.
            </p>
            <div className="flex justify-center">
              <Image
                width="20"
                height="200"
                src="https://res.cloudinary.com/dkobjvdgn/image/upload/v1726846247/star_24dp_927363_FILL0_wght400_GRAD0_opsz24_yx8q9v.svg"
                alt=""
              />
              <Image
                width="20"
                height="200"
                src="https://res.cloudinary.com/dkobjvdgn/image/upload/v1726846247/star_24dp_927363_FILL0_wght400_GRAD0_opsz24_yx8q9v.svg"
                alt=""
              />
              <Image
                width="20"
                height="200"
                src="https://res.cloudinary.com/dkobjvdgn/image/upload/v1726846247/star_24dp_927363_FILL0_wght400_GRAD0_opsz24_yx8q9v.svg"
                alt=""
              />
              <Image
                width="20"
                height="200"
                src="https://res.cloudinary.com/dkobjvdgn/image/upload/v1726846247/star_24dp_927363_FILL0_wght400_GRAD0_opsz24_yx8q9v.svg"
                alt=""
              />
              <Image
                width="20"
                height="200"
                src="https://res.cloudinary.com/dkobjvdgn/image/upload/v1726846247/star_24dp_927363_FILL0_wght400_GRAD0_opsz24_yx8q9v.svg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className=" bg-whiteD-200 p-3 relative">
          {' '}
          {/* Posición relativa al contenedor */}
          <Image
            className="rounded-full absolute left-1/2 transform -translate-x-1/2 -top-10" // Centrar imagen
            width="100"
            height="100"
            src="https://res.cloudinary.com/dkobjvdgn/image/upload/v1726583172/samples/two-ladies.jpg"
            alt="circled-user-female-skin-type-1-2"
          />
          <div className="border-4 border-white p-8 space-y-3">
            {/* Espacio adicional para evitar que el texto se superponga */}
            <p className="text-center font-semibold text-xl">John Doe</p>
            <p className="text-center">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Veritatis nostrum cupiditate quas tempora vero velit dicta.
            </p>
            <div className="flex justify-center">
              <Image
                width="20"
                height="200"
                src="https://res.cloudinary.com/dkobjvdgn/image/upload/v1726846247/star_24dp_927363_FILL0_wght400_GRAD0_opsz24_yx8q9v.svg"
                alt=""
              />
              <Image
                width="20"
                height="200"
                src="https://res.cloudinary.com/dkobjvdgn/image/upload/v1726846247/star_24dp_927363_FILL0_wght400_GRAD0_opsz24_yx8q9v.svg"
                alt=""
              />
              <Image
                width="20"
                height="200"
                src="https://res.cloudinary.com/dkobjvdgn/image/upload/v1726846247/star_24dp_927363_FILL0_wght400_GRAD0_opsz24_yx8q9v.svg"
                alt=""
              />
              <Image
                width="20"
                height="200"
                src="https://res.cloudinary.com/dkobjvdgn/image/upload/v1726846247/star_24dp_927363_FILL0_wght400_GRAD0_opsz24_yx8q9v.svg"
                alt=""
              />
              <Image
                width="20"
                height="200"
                src="https://res.cloudinary.com/dkobjvdgn/image/upload/v1726846247/star_24dp_927363_FILL0_wght400_GRAD0_opsz24_yx8q9v.svg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className=" bg-whiteD-200 p-3 relative">
          {' '}
          {/* Posición relativa al contenedor */}
          <Image
            className="rounded-full absolute left-1/2 transform -translate-x-1/2 -top-10" // Centrar imagen
            width="100"
            height="100"
            src="https://res.cloudinary.com/dkobjvdgn/image/upload/v1726583172/samples/two-ladies.jpg"
            alt="circled-user-female-skin-type-1-2"
          />
          <div className="border-4 border-white p-8 space-y-3">
            {/* Espacio adicional para evitar que el texto se superponga */}
            <p className="text-center font-semibold text-xl">John Doe</p>
            <p className="text-center">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Veritatis nostrum cupiditate quas tempora vero velit dicta.
            </p>
            <div className="flex justify-center">
              <Image
                width="20"
                height="200"
                src="https://res.cloudinary.com/dkobjvdgn/image/upload/v1726846247/star_24dp_927363_FILL0_wght400_GRAD0_opsz24_yx8q9v.svg"
                alt=""
              />
              <Image
                width="20"
                height="200"
                src="https://res.cloudinary.com/dkobjvdgn/image/upload/v1726846247/star_24dp_927363_FILL0_wght400_GRAD0_opsz24_yx8q9v.svg"
                alt=""
              />
              <Image
                width="20"
                height="200"
                src="https://res.cloudinary.com/dkobjvdgn/image/upload/v1726846247/star_24dp_927363_FILL0_wght400_GRAD0_opsz24_yx8q9v.svg"
                alt=""
              />
              <Image
                width="20"
                height="200"
                src="https://res.cloudinary.com/dkobjvdgn/image/upload/v1726846247/star_24dp_927363_FILL0_wght400_GRAD0_opsz24_yx8q9v.svg"
                alt=""
              />
              <Image
                width="20"
                height="200"
                src="https://res.cloudinary.com/dkobjvdgn/image/upload/v1726846247/star_24dp_927363_FILL0_wght400_GRAD0_opsz24_yx8q9v.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recomendations;
