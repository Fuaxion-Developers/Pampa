import productsToPreLoad from '@/helpers/products'; // Asegúrate de tener la ruta correcta
import ProductDetail from '@/components/Productos/ProductDetail/ProductDetail';

interface ProductPageProps {
  params: {
    productId: string;
  };
}

export async function generateStaticParams() {
  return productsToPreLoad.map(product => ({
    productId: product.id.toString(),
  }));
}

const ProductPage: React.FC<ProductPageProps> = ({ params }) => {
  const productId = parseInt(params.productId);
  const product = productsToPreLoad.find(p => p.id === productId);

  return (
    <div>
      <ProductDetail product={product} />
    </div>
  );
};

export default ProductPage;
