// import Image from 'next/image';
// import React from 'react'

// const Intro = () => {
//   return (
//     <div>
//       <section className="w-full h-[83vh] backdrop-blur-md  p-8 text-center ">
//         <Image
//           src="https://res.cloudinary.com/dkobjvdgn/image/upload/v1730223476/logo_pampa_limpio_jbvtkk.svg"
//           alt="Pampa Sellos Logo"
//           width={600}
//           height={200}
//           className="mx-auto mb-6 mt-8"
//         />
//         <p className="text-xl text-white mb-8">
//           Sellos decorativos-Plantillas-Accesorios | Compra mayorista a partir
//           de $80,000
//         </p>
//         <button className="bg-yellow-400 text-black hover:bg-yellow-500 transition-colors text-lg px-8 py-3 rounded-full">
//           Explorar Productos
//         </button>
//       </section>
//     </div>
//   );
// }

// export default Intro



import React from 'react';
import Image from 'next/image';

function Intro() {
  return (
    <div className=" h-[100vh] min-h-screen bg-cover bg-center bg-no-repeat flex flex-col"
    style={{
      backgroundImage: "url('https://res.cloudinary.com/dkobjvdgn/image/upload/v1730075868/PortadaPampa_gfsegd.png')"
    }}>
        <div className=" h-[100vh] w-full p-4 md:p-4 text-center bg-black/60 backdrop-blur-md flex flex-col justify-center items-center mt-10">
      <Image
        src="https://res.cloudinary.com/dkobjvdgn/image/upload/v1730223476/logo_pampa_limpio_jbvtkk.svg"
        alt="Pampa Sellos Logo"
        width={200}
        height={200}
        className="mx-auto mb-6 md:mb-6  w-3/4 md:w-[40%] lg:w-[40%]"
      />
      <p className="text-sm  md:text-base lg:text-2xl text-white mb-6 md:mb-8">
        Sellos decorativos - Plantillas - Accesorios | Compra mayorista a partir de $80,000
      </p>
      <button className="bg-yellow-400 text-black hover:bg-yellow-500 transition-colors text-base md:text-lg lg:text-xl px-6 md:px-8 py-2 md:py-3 rounded-full">
        Explorar Productos
      </button>
     
    </div>
    </div>
    
  );
}

export default Intro;
