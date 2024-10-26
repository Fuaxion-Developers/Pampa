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
    <div className="space-y-4">
      {/* Mensaje superior */}
      <div className="bg-black/50 text-whiteD-100 p-2">
        <p className="text-center">
          Sellos decorativos-Plantillas-Accesorios | Compra mayorista a partir
          de $80.000
        </p>
      </div>

      <div className="justify-between backdrop-blur-sm flex items-center text-[20px] m-4 py-2 px-8 bg-black/50 rounded-xl border">
        <div className="">
          <Image
            src="https://res.cloudinary.com/dkobjvdgn/image/upload/v1726763595/Pampa_chico_2_a64puq.svg"
            alt="Logo-Pampa"
            width={150}
            height={150}
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
                <div className="bg-yellowD-100 text-black text-center p-2 rounded-full">
                  Iniciar sesión
                </div>
              </Link>
            </div>
            <div className="">
              <Link href="/register">
                <div className="bg-yellowD-100 text-black text-center p-2 rounded-full">
                  Registrarse
                </div>
              </Link>
            </div>
          </div>
        )}
        <div className="mb-20 absolute right-4">
          <PopupButton />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
