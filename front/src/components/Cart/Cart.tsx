'use client'
import { useEffect, useState } from 'react';
import { IProduct } from '@/types'; // Asegúrate de que IProduct esté definido en tu proyecto
import Swal from 'sweetalert2';
import Link from 'next/link';

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<IProduct[]>([]);

  useEffect(() => {
    // Cargar los productos del carrito desde localStorage
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  const handleRemoveItem = (productId: number) => {
    // Filtrar el carrito para eliminar el producto seleccionado
    const updatedCart = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));

    Swal.fire({
      title: '¡Producto eliminado!',
      text: 'El producto ha sido eliminado del carrito.',
      icon: 'success',
      confirmButtonText: 'Aceptar',
    });
  };

  const getTotalPrice = () => {
    // Calcular el precio total de los productos en el carrito
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Carrito de Compras</h1>
      {cartItems.length === 0 ? (
        <p className="text-lg">No hay productos en el carrito.</p>
      ) : (
        <div>
          <ul className="space-y-4">
            {cartItems.map(item => (
              <li
                key={item.id}
                className="flex justify-between items-center border-b pb-4"
              >
                <div className="flex items-center">
                  {item.image_url && (
                    <img
                      src={item.image_url}
                      alt={item.name}
                      className="w-20 h-20 object-cover mr-4"
                    />
                  )}
                  <div>
                    <h2 className="text-xl">{item.name}</h2>
                    <p>Cantidad: {item.quantity}</p>
                    <p>Precio: ${item.price.toFixed(2)}</p>
                  </div>
                </div>
                <button
                  className="text-red-500"
                  onClick={() => handleRemoveItem(item.id)}
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <h2 className="text-2xl font-bold">
              Total: ${getTotalPrice().toFixed(2)}
            </h2>
          </div>
          <div className="mt-4">
            <Link href="/checkout">
              <button className="rounded-xl w-full max-w-[200px] h-auto bg-green-500 text-white p-2">
                Proceder a la Compra
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
