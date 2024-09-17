import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div className='p-8 space-y-4'>
      <div className="flex justify-center items-center">
        <Image
          src="https://res.cloudinary.com/dkobjvdgn/image/upload/v1726586138/1_dosvy7.svg"
          alt="Logo-Pampa"
          width={200}
          height={200}
        />
      </div>
      <div className="flex justify-center items-center gap-4">
        <Link href="/">
          {' '}
          <p>Inicio</p>
        </Link>
        <Link href="/about">
          {' '}
          <p>Sobre Nosotros</p>
        </Link>
        <Link href="#">
          {' '}
          <p>Contacto</p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
