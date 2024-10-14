// app/components/ProductCategory.tsx

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image_url: string;
}

interface ProductListProps {
  productos: Product[];
}

const ProductCategory: React.FC<ProductListProps> = ({ productos }) => {
  return (
    <div className="grid grid-cols-4 p-12 m-auto gap-4 my-8">
      {productos.map(producto => (
        <Link key={producto.id} href={`/products/${producto.id}`}>
          <div className="border rounded p-4 space-y-4 cursor-pointer hover:shadow-lg transition-shadow">
            <Image
              src={producto.image_url}
              alt={producto.name}
              width={300}
              height={200}
            />
            <div className="text-center">
              <h2 className="font-semibold">{producto.name}</h2>
              <p>{producto.description}</p>
              <p className="font-bold">${producto.price}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductCategory;
