'use client';
import { useEffect, useState } from 'react';
import { IProduct } from '@/types'; // Asegúrate de tener esta interfaz
import { getCreateProducts } from '@/helpers/products.helper'; // Importamos la función de creación
import { getCategories } from '@/helpers/categories.helper';
import { ICategory } from '@/types';

const CreateProducts = ({ onProductAdded }: { onProductAdded: () => void }) => {
  const [newProducto, setNewProducto] = useState<IProduct | null>(null); // Uso correcto del tipado
  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    const getCategory = async () => {
      const categories: ICategory[] = await getCategories();
      setCategories(categories);
    };

    getCategory();
  }, []);

  const agregarProducto = async () => {
    if (
      !newProducto || // Aseguramos que el producto no sea nulo
      !newProducto.name ||
      newProducto.price <= 0 ||
      !newProducto.image_url
    ) {
      alert('Por favor completa todos los campos correctamente.');
      return;
    }

    try {
      console.log(newProducto);
      await getCreateProducts(newProducto); // `newProducto` en lugar de `nuevoProducto`
      onProductAdded(); // Notifica que se ha agregado un producto
      // Resetea el formulario con nombres de propiedades correctas
      setNewProducto({
        id: '', // Agrega un ID si es necesario
        name: '',
        description: '',
        price: 0,
        image_url: '',
        category: '',
        height: 0,
        width: 0, // Establece un valor por defecto o cambia esto según tus necesidades
      });
    } catch (error) {
      console.error('Error al agregar producto:', error);
      alert('Hubo un error al agregar el producto.');
    }
  };

  return (
    <div className="bg-brownD-200 p-4 rounded">
      <h2 className="text-2xl font-bold mb-4">Agregar Nuevo Producto</h2>
      <div className="mb-4">
        <input
          type="text"
          value={newProducto?.name || ''}
          onChange={e =>
            setNewProducto({ ...newProducto!, name: e.target.value })
          }
          className="border px-2 py-1 w-full mb-2"
          placeholder="Nombre del Producto"
        />
        <input
          type="number"
          value={newProducto?.price || 0}
          onChange={e =>
            setNewProducto({ ...newProducto!, price: Number(e.target.value) })
          }
          className="border px-2 py-1 w-full mb-2"
          placeholder="Precio"
        />
        <input
          type="text"
          value={newProducto?.description || ''}
          onChange={e =>
            setNewProducto({ ...newProducto!, description: e.target.value })
          }
          className="border px-2 py-1 w-full mb-2"
          placeholder="Descripción"
        />
        <input
          type="text"
          value={newProducto?.image_url || ''}
          onChange={e =>
            setNewProducto({ ...newProducto!, image_url: e.target.value })
          }
          className="border px-2 py-1 w-full mb-2"
          placeholder="URL de la imagen"
        />
        {/* Agregamos el campo select para las categorías */}
        <select
          value={newProducto?.category || ''} // Aseguramos que el valor por defecto sea una cadena vacía
          onChange={e =>
            setNewProducto({
              ...newProducto!,
              category: e.target.value,
            })
          }
          className="border px-2 py-1 w-full mb-4"
        >
          <option value="" disabled>
            {' '}
            {/* Usamos value="" para que sea la opción por defecto */}
            Selecciona una categoría
          </option>
          {categories.map(category => (
            <option key={category.id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>

        {/* Inputs para heigt y width con una 'x' entre ellos */}
        <div className="flex items-center mb-4">
          <input
            type="number"
            value={newProducto?.height || 0}
            onChange={e =>
              setNewProducto({
                ...newProducto!,
                height: Number(e.target.value),
              })
            }
            className="border px-2 py-1 w-1/3"
            placeholder="Alto"
          />
          <span className="mx-2">x</span>
          <input
            type="number"
            value={newProducto?.width || 0}
            onChange={e =>
              setNewProducto({ ...newProducto!, width: Number(e.target.value) })
            }
            className="border px-2 py-1 w-1/3"
            placeholder="Ancho"
          />
        </div>
        <button
          onClick={agregarProducto}
          className="bg-green-500 text-white px-4 py-1 rounded"
        >
          Agregar Producto
        </button>
      </div>
    </div>
  );
};

export default CreateProducts;
