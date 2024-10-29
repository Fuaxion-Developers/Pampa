import Image from 'next/image';
import React from 'react'

const Intro = () => {
  return (
    <div>
      <section className="w-full h-[83vh] backdrop-blur-md  p-8 text-center ">
        <Image
          src="https://res.cloudinary.com/dkobjvdgn/image/upload/v1730223476/logo_pampa_limpio_jbvtkk.svg"
          alt="Pampa Sellos Logo"
          width={600}
          height={200}
          className="mx-auto mb-6 mt-8"
        />
        <p className="text-xl text-white mb-8">
          Sellos decorativos-Plantillas-Accesorios | Compra mayorista a partir
          de $80,000
        </p>
        <button className="bg-yellow-400 text-black hover:bg-yellow-500 transition-colors text-lg px-8 py-3 rounded-full">
          Explorar Productos
        </button>
      </section>
    </div>
  );
}

export default Intro
