// app/components/ProductCategory.tsx

import Link from 'next/link';
import React from 'react';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

interface ProductListProps {
  productos: Product[];
}

const ProductCategory: React.FC<ProductListProps> = ({ productos }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {productos.map(producto => (
        <div key={producto.id} className="border p-4 rounded">
          <h2 className="font-semibold">{producto.name}</h2>
          <p>{producto.description}</p>
          <p className="font-bold">${producto.price}</p>
          <Link href={`/products/${producto.id}`} className="text-blue-500">
            Ver Detalles
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductCategory;
