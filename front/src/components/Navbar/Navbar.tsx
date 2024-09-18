'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import styles from '@/components/Navbar/Navbar.module.css'; // Cambia la forma de importar los estilos.

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="space-y-4">
      <div className="bg-brownD-100 text-whiteD-100 p-4">
        <p className="text-center">
          Sellos decorativos-Plantillas-Accesorios | Compra mayorista a partir
          de $80.000
        </p>
      </div>
      <div className="flex justify-center items-center">
        <Image
          src="https://res.cloudinary.com/dkobjvdgn/image/upload/v1726586140/7_ynd5ia.svg"
          alt="Logo-Pampa"
          width={200}
          height={200}
        />
      </div>
      <div className="flex justify-center items-center gap-8 text-2xl">
        <Link
          href="/"
          className={`${styles.navLink} ${
            pathname === '/' ? styles.active : ''
          }`}
        >
          <p>Inicio</p>
        </Link>
        <Link
          href="/productos"
          className={`${styles.navLink} ${
            pathname === '/productos' ? styles.active : ''
          }`}
        >
          <p>Productos</p>
        </Link>
        <Link
          href="/about"
          className={`${styles.navLink} ${
            pathname === '/about' ? styles.active : ''
          }`}
        >
          <p>Nosotros</p>
        </Link>
      </div>
      <div className="flex gap-4 justify-center items-center">
        <div className="w-[10%]">
          <Link href="#">
            <div className="bg-brownD-100 text-whiteD-100 text-center p-4 rounded-[10px]">
              Iniciar sesión
            </div>
          </Link>
        </div>
        <div className="w-[10%]">
          <Link href="#">
            <div className="bg-brownD-100 text-whiteD-100 text-center p-4 rounded-[10px]">
              Registrarse
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
