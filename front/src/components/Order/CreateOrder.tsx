'use client';
import { useEffect, useState } from 'react';
import Modal from '../../components/Modal/Modal';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';
import { IProduct, userSession } from '@/types';

type CloseFunction = () => void;

interface CreateOrderModalProps {
  isOpen: boolean;
  onClose: CloseFunction;
  selectedProduct: IProduct; // Recibir el producto seleccionado como prop
}

const CreateOrderModal = ({
  isOpen,
  onClose,
  selectedProduct, // Añadir el producto seleccionado aquí
}: CreateOrderModalProps) => {
  const [quantity, setQuantity] = useState<number>(1); // Cantidad inicial
  const [userData, setUserData] = useState<userSession | null>(null);
  const router = useRouter();

  // Cargar los datos del usuario desde el localStorage
  useEffect(() => {
    const userSessionData = localStorage.getItem('userSession');
    if (userSessionData) {
      setUserData(JSON.parse(userSessionData));
    }
  }, []);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value >= 1) {
      // Asegurarse de que la cantidad sea válida
      setQuantity(value); // Actualizar la cantidad
    }
  };

  const handleAddToCart = () => {
    if (!userData?.token) {
      Swal.fire({
        title: '¡Ups!',
        text: 'Debes iniciar sesión para agregar productos al carrito.',
        icon: 'error',
        confirmButtonText: 'Aceptar',
        customClass: {
          confirmButton:
            'hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded',
        },
      });
      return;
    }

    const cart = JSON.parse(localStorage.getItem('cart') || '[]') as IProduct[];

    // Comprobar si el producto ya está en el carrito
    const productExists = cart.some(
      product => product.id === selectedProduct.id
    );

    if (productExists) {
      Swal.fire({
        title: '¡Ups!',
        text: 'El producto ya existe en tu carrito.',
        icon: 'error',
        confirmButtonText: 'Aceptar',
        customClass: {
          confirmButton:
            'hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded',
        },
      });
    } else {
      const productToAdd: IProduct = {
        ...selectedProduct,
        quantity: quantity > 0 ? quantity : 1, // Asegurar que la cantidad sea al menos 1
      };
      cart.push(productToAdd);
      localStorage.setItem('cart', JSON.stringify(cart));

      Swal.fire({
        title: '¡Excelente!',
        text: 'El producto ha sido añadido al carrito.',
        icon: 'success',
        confirmButtonText: 'Aceptar',
        customClass: {
          confirmButton:
            'hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded',
        },
      });
      onClose(); // Cerrar el modal después de agregar al carrito
      router.push('/cart'); // Opcional: redirigir al carrito
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="rounded-lg p-6 text-white space-y-4">
        <h2 className="text-center text-xl font-semibold">
          Crear Orden de Compra
        </h2>
        <form
          className="rounded-lg p-6 space-y-4 flex flex-col justify-center items-center"
          onSubmit={e => {
            e.preventDefault();
            handleAddToCart();
          }} // Agregar al carrito al enviar
        >
          {/* Información del producto */}
          <div className="flex flex-col w-[80%]">
            <label htmlFor="productName">Producto:</label>
            <input
              type="text"
              id="productName"
              className="text-black rounded p-2"
              name="productName"
              value={selectedProduct.name}
              readOnly // El nombre del producto es solo de lectura
            />
          </div>

          {/* Selección de Cantidad */}
          <div className="flex flex-col w-[80%]">
            <label htmlFor="quantity">Cantidad:</label>
            <input
              type="number"
              id="quantity"
              className="text-black rounded p-2"
              name="quantity"
              value={quantity}
              onChange={handleQuantityChange}
              min="1" // Valor mínimo
              required
            />
          </div>

          <button
            className="bg-brownD-200 rounded block px-4 py-2 text-l w-fit text-center bg-greenD-500 cursor-pointer"
            type="submit"
          >
            Añadir al Carrito
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default CreateOrderModal;
