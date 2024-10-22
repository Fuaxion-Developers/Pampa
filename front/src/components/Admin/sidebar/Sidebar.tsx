// components/Sidebar.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Sidebar = () => {
  return (
    <div className="h-screen bg-brownD-100 text-white w-64 flex flex-col">
      <div className="justify-center items-center flex mt-4">
        <Image
          src="https://res.cloudinary.com/dkobjvdgn/image/upload/v1726763595/Pampa_chico_2_a64puq.svg"
          alt="Logo"
          width={200}
          height={200}
        />
      </div>
      <div className="p-4 text-2xl font-bold text-whiteD-200 text-center">
        Admin Dashboard
      </div>
      <nav className="mt-4">
        <ul>
          <li className="m-2">
            <Link href="/clientes">
              <p className="block py-2 px-4 hover:bg-brownD-200 rounded">
                Clientes
              </p>
            </Link>
          </li>
          <li className="m-2">
            <Link href="/ventas">
              <p className="block py-2 px-4 hover:bg-brownD-200 rounded">
                Ventas
              </p>
            </Link>
          </li>
          <li className="m-2">
            <Link href="/ventas">
              <p className="block py-2 px-4 hover:bg-brownD-200 rounded">
                Productos
              </p>
            </Link>
          </li>
          <li className="m-2">
            <Link href="/ventas">
              <p className="block py-2 px-4 hover:bg-brownD-200 rounded">
               Categorias
              </p>
            </Link>
          </li>
          <li className="m-2">
            <Link href="/ventas">
              <p className="block py-2 px-4 hover:bg-brownD-200 rounded">
                Cerrar Sesión
              </p>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
