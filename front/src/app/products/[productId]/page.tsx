// app/products/[productId]/page.tsx
import ProductDetail from '@/components/Productos/ProductDetail/ProductDetail'; // Asegúrate de que esta ruta es correcta
import { getProductById } from '@/helpers/products.helper';
import { UUID } from 'crypto';

interface ProductPageProps {
  params: {
    productId: UUID;
  };
}

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
  const product = await getProductById(params.productId);

  return (
    <div>
      <ProductDetail product={product} />
    </div>
  );
};

export default ProductPage;
