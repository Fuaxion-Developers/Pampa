// pages/admin/categorias.tsx
'use client'
import { useState } from 'react';

interface Categoria {
  id: number;
  nombre: string;
}

const Categorias = () => {
  const [categorias, setCategorias] = useState<Categoria[]>([
    { id: 1, nombre: 'Tecnología' },
    { id: 2, nombre: 'Ropa' },
  ]);

  const [newCategoria, setNewCategoria] = useState('');

  const agregarCategoria = () => {
    const nuevaCategoria = {
      id: categorias.length + 1,
      nombre: newCategoria,
    };
    setCategorias([...categorias, nuevaCategoria]);
    setNewCategoria('');
  };

  const eliminarCategoria = (id: number) => {
    setCategorias(categorias.filter(categoria => categoria.id !== id));
  };

  return (
    <div className="bg-brownD-200 p-4 rounded">
      <h2 className="text-2xl font-bold mb-4">Categorías</h2>
      <div className="mb-4">
        <input
          type="text"
          value={newCategoria}
          onChange={e => setNewCategoria(e.target.value)}
          className="border px-2 py-1"
          placeholder="Nueva Categoría"
        />
        <button
          onClick={agregarCategoria}
          className="ml-2 bg-green-500 text-white px-4 py-1 rounded"
        >
          Agregar
        </button>
      </div>
      <ul>
        {categorias.map(categoria => (
          <li key={categoria.id} className="mb-2 flex justify-between">
            {categoria.nombre}
            <button
              onClick={() => eliminarCategoria(categoria.id)}
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

export default Categorias;
