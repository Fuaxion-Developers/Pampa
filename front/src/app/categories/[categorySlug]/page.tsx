// app/categories/[categorySlug]/page.tsx
import { IProduct } from '@/types';
import productsToPreLoad from '@/helpers/products';
import ProductCategory from '@/components/Productos/Categories/productCategory';
import categories from '@/helpers/categories';

interface CategoryPageProps {
  params: {
    categorySlug: string;
  };
}

const CategoryPage: React.FC<CategoryPageProps> = ({ params }) => {
  const { categorySlug } = params;

  // Obtener la categoría correspondiente al slug
  const category = categories.find(cat => cat.slug === categorySlug);

  if (!category) {
    return <div>Categoría no encontrada</div>; // Manejo de error
  }

  const categoryId = category.id; // Usamos el ID de la categoría

  // Filtrar productos según la categoría
  const filteredProducts: IProduct[] = productsToPreLoad.filter(
    product => product.categoryId.toString() === categoryId
  );

  return (
    <div>
      <h1>Categoría: {category.name}</h1>
      <ProductCategory productos={filteredProducts} />
    </div>
  );
};

export default CategoryPage;
