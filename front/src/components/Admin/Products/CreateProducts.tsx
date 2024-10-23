'use client';
import { useState } from 'react';
import { IProduct } from '@/types'; // Asegúrate de tener esta interfaz
import { getCreateProducts } from '@/helpers/products.helper'; // Importamos la función de creación

const CreateProducts = ({ onProductAdded }: { onProductAdded: () => void }) => {
  const [newProducto, setNewProducto] = useState({
    nombre: '',
    precio: 0,
    descripcion: '',
    imageUrl: '',
  });

  const agregarProducto = async () => {
    if (
      !newProducto.nombre ||
      newProducto.precio <= 0 ||
      !newProducto.imageUrl
    ) {
      alert('Por favor completa todos los campos correctamente.');
      return;
    }

    const nuevoProducto = {
      id: 0, // Este valor lo manejará el backend al crearlo
      name: newProducto.nombre,
      price: newProducto.precio,
      description: newProducto.descripcion || 'Sin descripción',
      stock: 10, // Valor por defecto
      image_url: newProducto.imageUrl,
      categoryId: 1, // Puedes ajustarlo según tus categorías
      quantity: 1, // Valor por defecto
    };

    try {
      await getCreateProducts(nuevoProducto);
      onProductAdded(); // Notifica que se ha agregado un producto
      setNewProducto({ nombre: '', precio: 0, descripcion: '', imageUrl: '' }); // Resetea el formulario
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
          value={newProducto.nombre}
          onChange={e =>
            setNewProducto({ ...newProducto, nombre: e.target.value })
          }
          className="border px-2 py-1 w-full mb-2"
          placeholder="Nombre del Producto"
        />
        <input
          type="number"
          value={newProducto.precio}
          onChange={e =>
            setNewProducto({ ...newProducto, precio: Number(e.target.value) })
          }
          className="border px-2 py-1 w-full mb-2"
          placeholder="Precio"
        />
        <input
          type="text"
          value={newProducto.descripcion}
          onChange={e =>
            setNewProducto({ ...newProducto, descripcion: e.target.value })
          }
          className="border px-2 py-1 w-full mb-2"
          placeholder="Descripción"
        />
        <input
          type="text"
          value={newProducto.imageUrl}
          onChange={e =>
            setNewProducto({ ...newProducto, imageUrl: e.target.value })
          }
          className="border px-2 py-1 w-full mb-2"
          placeholder="URL de la imagen"
        />
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
