// components/Sidebar.tsx
import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="h-screen bg-brownD-100 text-white w-64 flex flex-col">
      <div className="p-4 text-2xl font-bold">Admin Dashboard</div>
      <nav className="mt-4">
        <ul>
          <li className="mb-2">
            <Link href="/clientes">
              <p className="block py-2 px-4 hover:bg-gray-700 rounded">
                Clientes
              </p>
            </Link>
          </li>
          <li className="mb-2">
            <Link href="/ventas">
              <p className="block py-2 px-4 hover:bg-gray-700 rounded">
                Ventas
              </p>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
