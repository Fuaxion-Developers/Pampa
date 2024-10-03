'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import styles from '@/components/Home/Navbar/Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado para el menú hamburguesa
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="space-y-4">
      {/* Mensaje superior */}
      <div className="bg-brownD-100 text-whiteD-100 p-2">
        <p className="text-center">
          Sellos decorativos-Plantillas-Accesorios | Compra mayorista a partir
          de $80.000
        </p>
      </div>

      {/* Logo y Menú hamburguesa */}
      <div className="flex justify-between items-center px-4">
        {/* Menú hamburguesa */}
        <button onClick={toggleMenu} className="text-2xl md:hidden">
          ☰
        </button>

        {/* Logo */}
        <div className="flex justify-center items-center m-auto">
          <Image
            src="https://res.cloudinary.com/dkobjvdgn/image/upload/v1726763511/Pampa_chico_1_bwdcha.svg"
            alt="Logo-Pampa"
            width={200}
            height={200}
          />
        </div>
        <div className="mb-20">
          <Link href="/cart">
            <Image
              src="https://res.cloudinary.com/dkobjvdgn/image/upload/v1727981367/shopping_bag_24dp_6B432E_FILL0_wght400_GRAD0_opsz24_1_mdej5y.svg"
              alt="Cart"
              width={30}
              height={30}
            />
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#6B432E"
          >
            <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
          </svg>
        </div>
      </div>

      {/* Menú de navegación (visible en móvil solo si el menú está abierto) */}
      <div
        className={`md:hidden flex flex-col items-center space-y-4 ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <Link
          href="/"
          className={`${styles.navLink} ${
            pathname === '/' ? styles.active : ''
          }`}
          onClick={toggleMenu}
        >
          <p>Inicio</p>
        </Link>
        <Link
          href="/products"
          className={`${styles.navLink} ${
            pathname.startsWith('/products') ? styles.active : ''
          }`}
          onClick={toggleMenu}
        >
          <p>Productos</p>
        </Link>
        <Link
          href="/about"
          className={`${styles.navLink} ${
            pathname === '/about' ? styles.active : ''
          }`}
          onClick={toggleMenu}
        >
          <p>Nosotros</p>
        </Link>

        {/* Botones de iniciar sesión y registrarse en móvil */}
        <div className="flex justify-center items-center gap-4 w-full">
          <Link href="#">
            <div className="bg-brownD-100 text-whiteD-100 text-center p-2 rounded-md w-full">
              Iniciar sesión
            </div>
          </Link>
          <Link href="#">
            <div className="bg-brownD-100 text-whiteD-100 text-center p-2 rounded-md w-full">
              Registrarse
            </div>
          </Link>
        </div>
      </div>

      {/* Menú de navegación para escritorio */}
      <div className="hidden md:flex justify-center items-center gap-8 text-2xl">
        <Link
          href="/"
          className={`${styles.navLink} ${
            pathname === '/' ? styles.active : ''
          }`}
        >
          <p>Inicio</p>
        </Link>
        <Link
          href="/products"
          className={`${styles.navLink} ${
            pathname.startsWith('/products') ? styles.active : ''
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

      {/* Botones de sesión y registro para escritorio */}
      <div className="hidden md:flex gap-4 justify-center items-center">
        <div className="w-[10%]">
          <Link href="/login">
            <div className="bg-brownD-100 text-whiteD-100 text-center p-4 rounded-[10px]">
              Iniciar sesión
            </div>
          </Link>
        </div>
        <div className="w-[10%]">
          <Link href="/register">
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
