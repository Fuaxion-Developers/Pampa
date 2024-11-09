// 'use client';
// import Image from 'next/image';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import React, { useState, useEffect } from 'react';
// import styles from '@/components/Navbar/Navbar.module.css';
// import PopupButton from '../popup/Popup';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false); // Estado para el menú hamburguesa
//   const [isAuthenticated, setIsAuthenticated] = useState(false); // Estado para el usuario autenticado
//   const pathname = usePathname();

//   useEffect(() => {
//     // Comprobar si el usuario está autenticado
//     const user = localStorage.getItem('userSession');
//     if (user) {
//       setIsAuthenticated(true);
//     } else {
//       setIsAuthenticated(false);
//     }
//   }, []);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="relative z-0 border mt-2 rounded-full w-[60%] m-auto justify-between backdrop-blur-md flex items-center   py-2 px-8 bg-black/20  ">
//       <div className="">
//         <Image
//           src="https://res.cloudinary.com/dkobjvdgn/image/upload/v1730231246/Pampa_chico_2_a64puq_ymhtnf.png"
//           alt="Logo-Pampa"
//           width={80}
//           height={80}
//         />
//       </div>
//       <div className="flex gap-4">
//         <Link
//           href="/"
//           className={`${styles.navLink} ${
//             pathname === '/' ? styles.active : ''
//           }`}
//         >
//           <p>Inicio</p>
//         </Link>
//         <Link
//           href="/products"
//           className={`${styles.navLink} ${
//             pathname.startsWith('/products') ? styles.active : ''
//           }`}
//         >
//           <p>Productos</p>
//         </Link>
//         <Link
//           href="/about"
//           className={`${styles.navLink} ${
//             pathname === '/about' ? styles.active : ''
//           }`}
//         >
//           <p>Nosotros</p>
//         </Link>
//       </div>
//       {/* Mostrar botones de autenticación solo si el usuario NO está autenticado */}
//       {!isAuthenticated && (
//         <div className="flex gap-4 ">
//           <div className="">
//             <Link href="/login">
//               <div className="border text-center px-2 py-1 rounded-full">
//                 Iniciar sesión
//               </div>
//             </Link>
//           </div>
//           <div className="">
//             <Link href="/register">
//               <div className="bg-yellowD-100 text-black text-center px-2 py-1 rounded-full">
//                 Registrarse
//               </div>
//             </Link>
//           </div>
//         </div>
//       )}
//       <div >
//         <PopupButton />
//       </div>
//     </div>
//   );
// };

// export default Navbar;


'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 z-50 w-full border-b bg-black/90 backdrop-blur-sm">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image 
              src="https://res.cloudinary.com/dkobjvdgn/image/upload/v1730998773/logopampasinsello_md72oo.svg"
              alt="Logo de Pampa"
              width={48}
              height={48}
              className="h-24 w-24"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden space-x-6 lg:flex">
            <Link href="/" className="text-white font-normal text-base hover:text-[#B39B8E] transition-colors">
              Inicio
            </Link>
            <Link href="/products" className="text-white font-normal text-base hover:text-[#B39B8E] transition-colors">
              Productos
            </Link>
            <Link href="/sobre-nosotros" className="text-white font-normal text-base hover:text-[#B39B8E] transition-colors">
              Nosotros
            </Link>
          </nav>

          {/* Right Side Icons and Buttons */}
          <div className="flex items-center gap-4">
            {/* Shopping Cart Icon */}
            <button className="text-white hover:text-[#B39B8E] transition-colors">
              <span className="sr-only">Carrito de compras</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </button>

            {/* Login and Register Buttons */}
            <div className="hidden lg:flex items-center space-x-2">
              <Link href="/login" className="px-3 py-2 text-sm text-[#B39B8E] hover:bg-[#B39B8E]/10 rounded-md transition-colors">
                Iniciar sesión
              </Link>
              <Link href="/register" className="px-3 py-2 text-sm bg-[#B39B8E] text-white hover:bg-[#B39B8E]/90 rounded-md transition-colors">
                Registrarse
              </Link>
            </div>

            {/* Hamburger Menu Icon for Mobile */}
            <button
              className="text-white lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Abrir menú</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 bg-black/80 p-4 rounded-md">
            <nav className="space-y-4 pb-4">
              <Link href="/" className="block text-white text-center text-lg hover:text-[#B39B8E] transition-colors">
                Inicio
              </Link>
              <Link href="/products" className="block text-white text-center text-lg hover:text-[#B39B8E] transition-colors">
                Productos
              </Link>
              <Link href="/sobre-nosotros" className="block text-white text-center text-lg hover:text-[#B39B8E] transition-colors">
                Nosotros
              </Link>
              
              <div className="flex flex-col mt-4 space-y-2">
                <Link href="/login" className="block text-center px-4 py-2 text-sm text-[#B39B8E] hover:bg-[#B39B8E]/10 rounded-md transition-colors">
                  Iniciar sesión
                </Link>
                <Link href="/register" className="block text-center px-4 py-2 text-sm bg-[#B39B8E] text-white rounded-md hover:bg-[#B39B8E]/90 transition-colors">
                  Registrarse
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
