'use client';
import { useState } from 'react';
import { getCreateCategory } from '@/helpers/categories.helper'; // Ajusta la ruta
import Swal from 'sweetalert2'; // Importa SweetAlert2
import { ICategory } from '@/types';
import { useRouter } from "next/navigation";

const CreateCategories = ({
  onCategoryAdded,
}: {
  onCategoryAdded: (category: ICategory) => void;
}) => {
  const [newCategory, setNewCategory] = useState('');
   const router = useRouter();

  const agregarCategoria = async () => {
    if (newCategory.trim() === '') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'El nombre de la categoría no puede estar vacío',
      });
      return;
    }

    try {
      const response = await getCreateCategory(newCategory); // El backend devuelve un string
      console.log(response); // Puedes ver el mensaje de éxito si es necesario

      // Llama a onCategoryAdded con la nueva categoría creada manualmente
      const newCategoryObject: ICategory = {
        id: '',
        name: newCategory,
      };
      onCategoryAdded(newCategoryObject);

      // Alerta de éxito con SweetAlert2
      Swal.fire({
        icon: 'success',
        title: 'Categoría creada',
        text: 'La categoría se ha creado correctamente',
        showConfirmButton: true,
        timer: 1500,
      }).then((result) => {
        if (result.isConfirmed) {
          setNewCategory(''); // Limpia el campo después de agregar
          router.push('/admin/categories');
        }
      })

    } catch (error) {
      console.error('Error al agregar la categoría:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Ocurrió un error al agregar la categoría',
      });
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
