import Image from 'next/image';
import Link from 'next/link';
import { IProduct } from '@/types';

interface ProductListProps {
  products: IProduct[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-4 p-12 m-auto gap-4 my-8">
      {products.map(product => (
        <Link key={product.id} href={`/products/${product.name}`}>
          <div className="border rounded p-4 space-y-4 cursor-pointer hover:shadow-lg transition-shadow">
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={200}
            />
            <div className="text-center">
              <h2 className="font-semibold">{product.name}</h2>
              <p>{product.description}</p>
              <p className="font-bold">${product.price}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
