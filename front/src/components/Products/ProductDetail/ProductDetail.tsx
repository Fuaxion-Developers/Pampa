'use client';
import CreateOrderModal from '@/components/Order/CreateOrder';
import { IProduct, userSession } from '@/types'; // Asegúrate de tener el tipo `Product` definido
import Image from 'next/image';
import Link from 'next/link';
import { notFound, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

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
    if (typeof window !== 'undefined' && window.localStorage) {
      const userData = localStorage.getItem('userSession');
      setUserData(JSON.parse(userData!));
    }
  }, []);

  return (
    <div className=" border w-[60%] rounded-xl flex space-x-10 justify-center items-center m-auto mb-8 bg-black/50 backdrop-blur-sm ">
      <div className="w-[60%]">
        {product?.image_url && (
          <Image
            src={product.image_url}
            alt={product.name}
            width={300}
            height={300}
          />
        )}
      </div>
      <div className="w-[50%] bg-black space-y-4 mr-4">
        <h1 className="text-3xl font-bold ">{product?.name}</h1>
        <p className="">{product?.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, consequuntur? Optio molestiae quasi ea corrupti quis commodi molestias eum sit! Nam officiis amet excepturi quisquam et ullam voluptatum possimus ipsum.</p>
        <p className=" font-semibold">Precio: ${product?.price}</p>
        <p className="">
          Medidas: {product?.width} x {product.height}
        </p>
        <div className="p-4 flex  items-center gap-2">
          <Link href="/products">
            <button className="rounded-full w-full max-w-[150px] h-auto bg-brownD-200  text-white p-2">
              Volver atrás
            </button>
          </Link>
          <button
            id={product?.id.toString()}
            onClick={() => setIsModalOpen(true)}
            className="rounded-full w-full max-w-[150px] h-auto bg-yellowD-100 text-whiteD-100 p-2"
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
