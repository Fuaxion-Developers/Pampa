// pages/admin/clientes.tsx
'use client'
import { useState } from 'react';

interface Cliente {
  id: number;
  nombre: string;
  email: string;
}

const Clientes = () => {
  const [clientes, setClientes] = useState<Cliente[]>([
    { id: 1, nombre: 'Juan Perez', email: 'juan@example.com' },
    { id: 2, nombre: 'Ana Lopez', email: 'ana@example.com' },
  ]);

  const eliminarCliente = (id: number) => {
    setClientes(clientes.filter(cliente => cliente.id !== id));
  };

  return (
    <div className="bg-brownD-200 p-4 rounded">
      <h2 className="text-2xl font-bold mb-4">Lista de Clientes</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">ID</th>
            <th className="py-2">Nombre</th>
            <th className="py-2">Email</th>
            <th className="py-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map(cliente => (
            <tr key={cliente.id}>
              <td className="border px-4 py-2">{cliente.id}</td>
              <td className="border px-4 py-2">{cliente.nombre}</td>
              <td className="border px-4 py-2">{cliente.email}</td>
              <td className="border px-4 py-2">
                <button
                  className="bg-red-500 text-white px-4 py-1 rounded"
                  onClick={() => eliminarCliente(cliente.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Clientes;
