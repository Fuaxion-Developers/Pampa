'use client';
import React, { useState, useEffect } from 'react';
import { getCategories } from '@/helpers/categories.helper';
import { getDellCategories } from '@/helpers/categories.helper'; // Importa la función de eliminar
import { ICategory } from '@/types';
import Modal from '../../../components/Modal/Modal'; // Importa el componente Modal
import CreateCategories from '@/components/Admin/categories/CreateCategories';
const CategoriesList = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      const categoriesData = await getCategories();
      setCategories(categoriesData);
    };

    fetchCategories();
  }, []);

  const eliminarCategoria = async (id: string) => {
    try {
      await getDellCategories(id);
      setCategories(categories.filter(category => category.id !== id));
    } catch (error) {
      console.error('Error al eliminar la categoría:', error);
    }
  };

  const agregarCategoria = (nuevaCategoria: ICategory) => {
    setCategories([...categories, nuevaCategoria]);
    setIsModalOpen(false); // Cierra el modal después de agregar una categoría
  };

  return (
    <div>
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-red-700 rounded flex items-center justify-center text-white p-4"
      >
        Agregar categoría
      </button>

      <div className="bg-brownD-100 p-4 w-[50%] h-[20%]">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex justify-center items-center bg-brownD-200 text-whiteD-100 m-8 p-4"
          >
            <p className="text-center font-semibold">{category.name}</p>
            <button
              onClick={() => eliminarCategoria(category.id)}
              className="bg-red-500 text-white px-4 py-1 rounded"
            >
              Eliminar
            </button>
          </div>
        ))}
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <CreateCategories onCategoryAdded={agregarCategoria} />
      </Modal>
    </div>
  );
};


export default CategoriesList;
