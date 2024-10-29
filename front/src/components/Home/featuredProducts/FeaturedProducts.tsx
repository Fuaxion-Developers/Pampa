import Image from 'next/image';
import React from 'react'

const FeaturedProducts = () => {
  return (
    <div>
      {/* Productos Destacados */}
      <section className=" backdrop-blur-md  p-8 ">
        <h2 className="text-3xl font-serif text-yellow-100 mb-6 text-center">
          CATEGORIAS DE SELLOS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map(item => (
            <div
              key={item}
              className="bg-white/5 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow"
            >
              <Image
                src="https://res.cloudinary.com/dkobjvdgn/image/upload/v1730225305/alto_relieve_jrs3mf.svg"
                alt={`Producto ${item}`}
                width={200}
                height={200}
                className="mx-auto mb-4 rounded-lg"
              />
              <h3 className="text-xl text-yellow-100 mb-2 text-center">
                Alto relieve{item}
              </h3>
              {/* <p className="text-white">Descripción breve del producto {item}.</p> */}
            </div>
          ))}
        </div>
      </section>
      ;
    </div>
  );
}

export default FeaturedProducts


