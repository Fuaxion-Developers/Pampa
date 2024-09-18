import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div className="bg-brownD-100 text-whiteD-100">
      <div className="p-12 flex justify-between">
        <div className="flex gap-12">
          <div>
            <h2 className="text-2xl">Información</h2>
            <Link href="/about">
              {' '}
              <p>Sobre Nosotros</p>
            </Link>
            <Link href="#">
              {' '}
              <p>Contacto</p>
            </Link>
            <p>Buscar</p>
          </div>
          <div>
            <h2 className="text-2xl">Contacto</h2>
            <p>decosellospampa@gmail.com</p>
          </div>
        </div>
        <div>
          <Image
            src="https://res.cloudinary.com/dkobjvdgn/image/upload/v1726586139/5_aldjn1.svg"
            alt="Logo"
            width={200}
            height={200}
          />
        </div>
      </div>
      <div className="border-t-2 p-12">
        <Link href="/"> PAMPA </Link>
        &copy; 2024 -<Link href="#"> Hecho por Fuaxion </Link>
      </div>
    </div>
  );
};

export default Footer;
