'use client';
import Image from 'next/image';
import { IProduct } from '@/types';
import { useEffect, useState } from 'react';
import { getAllProducts, getDellProducts } from '@/helpers/products.helper';
import Modal from '@/components/Modal/Modal';
import CreateProducts from './CreateProducts';

const ProductList = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchProducts(); // Obtener los productos al cargar la página
  }, []);

  const fetchProducts = async () => {
    const products: IProduct[] = await getAllProducts();
    setProducts(products);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const eliminarProducto = async (id: number) => {
    try {
      await getDellProducts(id.toString());
      setProducts(prevProducts =>
        prevProducts.filter(product => product.id !== id)
      );
    } catch (error) {
      console.error('Error al eliminar el producto:', error);
    }
  };

  const handleProductAdded = () => {
    fetchProducts(); // Actualiza la lista de productos después de agregar uno
    handleCloseModal(); // Cierra el modal
  };

  return (
    <div>
      <button
        onClick={handleOpenModal}
        className="bg-red-700 rounded flex items-center justify-center text-white p-4"
      >
        Agregar productos
      </button>
      <div className="grid grid-cols-4 p-12 m-auto gap-4 my-8">
        {products.map(product => (
          <div
            key={product.id}
            className="border rounded p-4 space-y-4 cursor-pointer hover:shadow-lg transition-shadow"
          >
            <Image
              src={product.image_url}
              alt={product.name}
              width={300}
              height={200}
            />
            <div className="text-center">
              <h2 className="font-semibold">{product.name}</h2>
              <p>{product.description}</p>
              <p className="font-bold">${product.price}</p>
            </div>
            <button
              onClick={e => {
                e.stopPropagation();
                eliminarProducto(product.id);
              }}
              className="bg-red-500 text-white px-4 py-1 rounded"
            >
              Eliminar
            </button>
          </div>
        ))}
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <CreateProducts onProductAdded={handleProductAdded} />
      </Modal>
    </div>
  );
};

export default ProductList;
