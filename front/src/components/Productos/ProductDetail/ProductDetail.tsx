'use client'
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
  
  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const userData = localStorage.getItem("userSession");
      setUserData(JSON.parse(userData!));
    }

    // const fetchData = async () => {
    //   const product = await getProductById(params.productId);
    //   setProduct(product);
    // };
    // fetchData();
  }, []);

  const handleAddToCart = (e: any) => {
    if (!userData?.token) {
          Swal.fire({
            title: "¡Ups!",
            text: "Debes iniciar sesíon para agregar productos al carrito.",
            icon: "error",
            confirmButtonText: "Aceptar",
            customClass: {
              confirmButton:
                "hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded",
            },
          });
    } else {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      const productExist = cart.some((product: IProduct) => {
        if (product.id === Number(e?.target?.id)) return true;
        return false;
      });
      if (productExist) {
          Swal.fire({
            title: "¡Ups!",
            text: "El producto ya existe en tu carrito.",
            icon: "error",
            confirmButtonText: "Aceptar",
            customClass: {
              confirmButton:
                "hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded",
            },
          });
        // router.push("/cart");
      } else {
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));
            Swal.fire({
              title: "¡Excelente!",
              text: "El producto ha sido añadido al carrito.",
              icon: "success",
              confirmButtonText: "Aceptar",
              customClass: {
                confirmButton:
                  "hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded",
              },
            });
        router.push("/cart");
      }
    }
  };

  const handleAddToFavorites = (e: any) => {
    if (!userData?.token) {
        Swal.fire({
          title: "¡Ups!",
          text: "Debes iniciar sesíon para agregar productos a favoritos.",
          icon: "error",
          confirmButtonText: "Aceptar",
          customClass: {
            confirmButton:
              "hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded",
          },
        });
    } else {
      const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
      const productExist = favorites.some((product: IProduct) => {
        if (product.id === Number(e?.target?.id)) return true;
        return false;
      });
      if (productExist) {
          Swal.fire({
            title: "¡Ups!",
            text: "El producto ya existe en favoritos.",
            icon: "error",
            confirmButtonText: "Aceptar",
            customClass: {
              confirmButton:
                "hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded",
              
            },
          });
      } else {
        favorites.push(product);
        localStorage.setItem("favorites", JSON.stringify(favorites));
        Swal.fire({
          title: "¡Excelente!",
          text: "El producto ha sido añadido a favoritos.",
          icon: "success",
          confirmButtonText: "Aceptar",
          customClass: {
            confirmButton:
              "hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded",
          },
        });
        router.push("/dashboard/favorites");
      }
    }
  };

  return (
    <div className="p-8 flex gap-8 justify-center ">
      <div>
        {product?.image && (
          <Image
            src={product.image}
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
            onClick={handleAddToCart}
            className="rounded-xl w-full max-w-[150px] h-auto bg-brownD-100 text-whiteD-100 p-2"
          >
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
