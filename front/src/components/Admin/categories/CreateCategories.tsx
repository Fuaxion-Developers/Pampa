'use client';
import { useState } from 'react';
import { getCreateCategory } from '@/helpers/categories.helper'; // Ajusta la ruta
import { ICategory } from '@/types';

const CreateCategories = ({
  onCategoryAdded,
}: {
  onCategoryAdded: (category: ICategory) => void;
}) => {
  const [newCategory, setNewCategory] = useState('');

  const agregarCategoria = async () => {
    if (newCategory.trim() === '') {
      alert('El nombre de la categoría no puede estar vacío');
      return;
    }

    try {
      const nuevaCategoria = await getCreateCategory(newCategory);

      // Ejecuta el callback para añadir la nueva categoría a la lista en CategoriesList
      onCategoryAdded(nuevaCategoria);
      setNewCategory('');
    } catch (error) {
      console.error('Error al agregar la categoría:', error);
      alert('Ocurrió un error al agregar la categoría.');
    }
  };

  return (
    <div className="bg-brownD-200 p-4 rounded">
      <h2 className="text-2xl font-bold mb-4">Categorías</h2>
      <div className="mb-4">
        <input
          type="text"
          value={newCategory}
          onChange={e => setNewCategory(e.target.value)}
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
    </div>
  );
};

export default CreateCategories;
