'use client'
import CreateOrderModal from '@/components/Order/CreateOrder';
import { IProduct, userSession } from '@/types'; // Asegúrate de tener el tipo `Product` definido
import Image from 'next/image';
import Link from 'next/link';
import { notFound, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

interface ProductDetailProps {
  product: IProduct | undefined; // Puede ser `undefined` si no se encuentra el producto
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  if (!product) {
    notFound(); // Si el producto no se encuentra, redirige a 404
  }

  const router = useRouter();
//   const [product, setProduct] = useState<IProduct>();
  const [userData, setUserData] = useState<userSession>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const userData = localStorage.getItem("userSession");
      setUserData(JSON.parse(userData!));
    }

  }, []);


  return (
    <div className="p-8 flex gap-8 justify-center ">
      <div>
        {product?.image_url && (
          <Image
            src={product.image_url}
            alt={product.name}
            width={300}
            height={300}
          />
        )}
      </div>
      <div>
        <h1 className="text-3xl font-bold mb-4">{product?.name}</h1>
        <p className="mt-4">{product?.description}</p>
        <p className="mt-2 font-semibold">Precio: ${product?.price}</p>
        <p className="mt-2">Stock disponible: {product?.stock}</p>
        <div className="p-4 flex flex-col items-center gap-2">
          <Link href="/products">
            <button className="rounded-xl w-full max-w-[150px] h-auto bg-brownD-200  text-white p-2">
              Volver atrás
            </button>
          </Link>
          <button
            id={product?.id.toString()}
            onClick={() => setIsModalOpen(true)}
            className="rounded-xl w-full max-w-[150px] h-auto bg-brownD-100 text-whiteD-100 p-2"
          >
            Crear Orden
          </button>
          <CreateOrderModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            selectedProduct={product}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
