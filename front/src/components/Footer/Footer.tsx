import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div className="bg-brownD-100 text-whiteD-100">
      <div className="p-6 md:p-12 flex flex-col md:flex-row justify-between">
        <div className="flex flex-col md:flex-row gap-6 md:gap-12">
          <div>
            <h2 className="text-xl md:text-2xl">Información</h2>
            <Link href="/about">
              <p className="cursor-pointer">Sobre Nosotros</p>
            </Link>
            <Link href="#">
              <p className="cursor-pointer">Contacto</p>
            </Link>
            <p>Buscar</p>
          </div>
          <div>
            <h2 className="text-xl md:text-2xl">Contacto</h2>
            <p>decosellospampa@gmail.com</p>
          </div>
        </div>
        <div className="mt-6 md:mt-0 flex justify-center md:justify-end">
          <Image
            src="https://res.cloudinary.com/dkobjvdgn/image/upload/v1726586139/5_aldjn1.svg"
            alt="Logo"
            width={200}
            height={200}
          />
        </div>
      </div>
      <div className="flex justify-center md:justify-end gap-4 mt-6 md:mt-0 mr-0 md:mr-[8%] mb-4">
        <Image
          src="https://res.cloudinary.com/dkobjvdgn/image/upload/v1726677834/icons8-facebook_fnzvbg.svg"
          alt="Facebook Logo"
          width={30}
          height={30}
        />
        <Image
          src="https://res.cloudinary.com/dkobjvdgn/image/upload/v1726677909/icons8-instagram_agiq0v.svg"
          alt="Instagram Logo"
          width={30}
          height={30}
        />
      </div>
      <div className="border-t-2 p-6 md:p-12 flex flex-col md:flex-row justify-center md:justify-between items-center">
        <p className="mt-2 md:mt-0">
        <Link href="/">PAMPA </Link>
          &copy; 2024 - <Link href="#">Hecho por Fuaxion</Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
