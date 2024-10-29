'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import styles from '@/components/Navbar/Navbar.module.css';
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
    <div className="relative z-0 border mt-2 rounded-full w-[60%] m-auto justify-between backdrop-blur-md flex items-center   py-2 px-8 bg-black/20  ">
      <div className="">
        <Image
          src="https://res.cloudinary.com/dkobjvdgn/image/upload/v1730231246/Pampa_chico_2_a64puq_ymhtnf.png"
          alt="Logo-Pampa"
          width={80}
          height={80}
        />
      </div>
      <div className="flex gap-4">
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
        <div className="flex gap-4 ">
          <div className="">
            <Link href="/login">
              <div className="border text-center px-2 py-1 rounded-full">
                Iniciar sesión
              </div>
            </Link>
          </div>
          <div className="">
            <Link href="/register">
              <div className="bg-yellowD-100 text-black text-center px-2 py-1 rounded-full">
                Registrarse
              </div>
            </Link>
          </div>
        </div>
      )}
      <div >
        <PopupButton />
      </div>
    </div>
  );
};

export default Navbar;
