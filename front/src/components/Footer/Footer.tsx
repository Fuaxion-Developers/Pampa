// import Image from 'next/image';
// import Link from 'next/link';
// import React from 'react';

// const Footer = () => {
//   return (
//     <div className="backdrop-blur-sm bg-black/50 text-whiteD-100">
//       <div className="p-6 md:p-12 flex flex-col md:flex-row justify-between">
//         <div className="flex flex-col md:flex-row gap-6 md:gap-12">
//           <div>
//             <h2 className="text-xl md:text-3xl ">Información</h2>
//             <Link href="/about">
//               <p className="cursor-pointer">Sobre Nosotros</p>
//             </Link>
//             <Link href="#">
//               <p className="cursor-pointer">Contacto</p>
//             </Link>
//             <p>Buscar</p>
//           </div>
//         </div>
//         <div className="mt-6 md:mt-0 flex justify-center md:justify-end">
//           <Image
//             src="https://res.cloudinary.com/dkobjvdgn/image/upload/v1726763595/Pampa_chico_2_a64puq.svg"
//             alt="Logo"
//             width={200}
//             height={200}
//           />
//         </div>
//       </div>
//       <div className="border-t-2 p-6 md:p-12 flex flex-col md:flex-row justify-center md:justify-between items-center">
//         <p className="mt-2 md:mt-0">
//           <Link href="/">PAMPA </Link>
//           &copy; 2024 - <Link href="#">Hecho por Fuaxion</Link>
//         </p>
//       <div className="flex justify-center md:justify-end gap-4 mt-6 md:mt-0 mr-0 md:mr-[6%]">
//         <Link href="#" rel="noopener noreferrer" target="_blank">
//           <Image
//             src="https://res.cloudinary.com/dkobjvdgn/image/upload/v1726677834/icons8-facebook_fnzvbg.svg"
//             alt="Facebook Logo"
//             width={30}
//             height={30}
//           />
//         </Link>
//         <Link href="#" rel="noopener noreferrer" target="_blank">
//           <Image
//             src="https://res.cloudinary.com/dkobjvdgn/image/upload/v1726677909/icons8-instagram_agiq0v.svg"
//             alt="Instagram Logo"
//             width={30}
//             height={30}
//           />
//         </Link>
//         <Link
//           href="mailto:decosellospampa@gmail.com"
//           rel="noopener noreferrer"
//           target="_blank"
//         >
//           <Image
//             src="https://res.cloudinary.com/dkobjvdgn/image/upload/v1726677999/icons8-gmail-nuevo_x5z5gn.svg"
//             alt="Gmail Logo"
//             width={30}
//             height={30}
//           />
//         </Link>
//       </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;


import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div className="backdrop-blur-sm bg-black text-white">
      <div className="p-6 md:p-12 flex flex-col md:flex-row justify-between">
        <div className="flex flex-col md:flex-row gap-6 md:gap-12">
          <div>
            <h2 className="text-xl md:text-3xl ">Información</h2>
            <Link href="/about">
              <p className="cursor-pointer">Sobre Nosotros</p>
            </Link>
            <Link href="#">
              <p className="cursor-pointer">Contacto</p>
            </Link>
            <p>Buscar</p>
          </div>
        </div>
        <div className="mt-6 md:mt-0 flex justify-center md:justify-end">
          <Image
            src="https://res.cloudinary.com/dkobjvdgn/image/upload/v1730223476/logo_pampa_limpio_jbvtkk.svg"
            alt="Logo"
            width={200}
            height={200}
          />
        </div>
      </div>
      <div className="border-t-2 p-6 md:p-12 flex flex-col md:flex-row justify-center md:justify-between items-center">
        <p className="mt-2 md:mt-0">
          <Link href="/">PAMPA </Link>
          &copy; 2024 - <Link href="#">Hecho por Fuaxion</Link>
        </p>
      <div className="flex justify-center md:justify-end gap-4 mt-6 md:mt-0 mr-0 md:mr-[6%]">
        <Link href="#" rel="noopener noreferrer" target="_blank">
          <Image
            src="https://res.cloudinary.com/dkobjvdgn/image/upload/v1726677834/icons8-facebook_fnzvbg.svg"
            alt="Facebook Logo"
            width={30}
            height={30}
          />
        </Link>
        <Link href="#" rel="noopener noreferrer" target="_blank">
          <Image
            src="https://res.cloudinary.com/dkobjvdgn/image/upload/v1726677909/icons8-instagram_agiq0v.svg"
            alt="Instagram Logo"
            width={30}
            height={30}
          />
        </Link>
        <Link
          href="mailto:decosellospampa@gmail.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image
            src="https://res.cloudinary.com/dkobjvdgn/image/upload/v1726677999/icons8-gmail-nuevo_x5z5gn.svg"
            alt="Gmail Logo"
            width={30}
            height={30}
          />
        </Link>
      </div>
      </div>
    </div>
  );
};

export default Footer;
