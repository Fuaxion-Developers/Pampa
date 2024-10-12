'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import styles from '@/components/Home/Navbar/Navbar.module.css';
import LogoutButton from '@/components/Logout/Logout';
import PopupButton from '../popup/Popup';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado para el menú hamburguesa
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Estado para el usuario autenticado
  const pathname = usePathname();

  useEffect(() => {
    // Comprobar si el usuario está autenticado
    const user = localStorage.getItem('userSession');
    if (user) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

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

        <div className="mb-20 absolute right-4">
          <PopupButton />
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

        {/* Mostrar botones de autenticación solo si el usuario NO está autenticado */}
        {!isAuthenticated && (
          <div className="flex justify-center items-center gap-4 w-full">
            <Link href="/login">
              <div className="bg-brownD-100 text-whiteD-100 text-center p-2 rounded-md w-full">
                Iniciar sesión
              </div>
            </Link>
            <Link href="/register">
              <div className="bg-brownD-100 text-whiteD-100 text-center p-2 rounded-md w-full">
                Registrarse
              </div>
            </Link>
          </div>
        )}
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

      {/* Mostrar botones de autenticación solo si el usuario NO está autenticado */}
      {!isAuthenticated && (
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
      )}
    </div>
  );
};

export default Navbar;
