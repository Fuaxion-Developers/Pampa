// pages/admin/productos.tsx
'use client'
import { useState } from 'react';

interface Producto {
  id: number;
  nombre: string;
  precio: number;
}

const Productos = () => {
  const [productos, setProductos] = useState<Producto[]>([
    { id: 1, nombre: 'Laptop', precio: 1000 },
    { id: 2, nombre: 'Camiseta', precio: 20 },
  ]);

  const [newProducto, setNewProducto] = useState({ nombre: '', precio: 0 });

  const agregarProducto = () => {
    const nuevoProducto = {
      id: productos.length + 1,
      nombre: newProducto.nombre,
      precio: newProducto.precio,
    };
    setProductos([...productos, nuevoProducto]);
    setNewProducto({ nombre: '', precio: 0 });
  };

  const eliminarProducto = (id: number) => {
    setProductos(productos.filter(producto => producto.id !== id));
  };

  return (
    <div className="bg-brownD-200 p-4 rounded">
      <h2 className="text-2xl font-bold mb-4">Productos</h2>
      <div className="mb-4">
        <input
          type="text"
          value={newProducto.nombre}
          onChange={e =>
            setNewProducto({ ...newProducto, nombre: e.target.value })
          }
          className="border px-2 py-1"
          placeholder="Nuevo Producto"
        />
        <input
          type="number"
          value={newProducto.precio}
          onChange={e =>
            setNewProducto({ ...newProducto, precio: Number(e.target.value) })
          }
          className="border px-2 py-1 ml-2"
          placeholder="Precio"
        />
        <button
          onClick={agregarProducto}
          className="ml-2 bg-green-500 text-white px-4 py-1 rounded"
        >
          Agregar
        </button>
      </div>
      <ul>
        {productos.map(producto => (
          <li key={producto.id} className="mb-2 flex justify-between">
            {producto.nombre} - ${producto.precio}
            <button
              onClick={() => eliminarProducto(producto.id)}
              className="bg-red-500 text-white px-4 py-1 rounded"
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Productos;
