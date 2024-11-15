// app/categories/[categorySlug]/page.tsx
import ProductCategory from '@/components/Categories/productCategory';
import {
  getCategoryByName,
  getProductsByCategory,
} from '@/helpers/categories.helper';

interface CategoryPageProps {
  params: {
    categorySlug: string;
  };
}

const CategoryPage: React.FC<CategoryPageProps> = async ({ params }) => {
  const { categorySlug } = params;

  // Obtener la categoría correspondiente al slug
  const category = await getCategoryByName(categorySlug);
  console.log(category);

  if (!category) {
    return <div>Categoría no encontrada</div>; // Manejo de error
  }

  const products = await getProductsByCategory(category.name);
  return (
    <div>
      <h1>Categoría: {category.name}</h1>
      <ProductCategory productos={products} />
    </div>
  );
};

export default CategoryPage;
