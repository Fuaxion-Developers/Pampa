'use client';
import { usePathname } from 'next/navigation';
import DefaultLayout from './Defaultlayout';
import RegisterLayout from '@/app/register/RegisterLayout';
import LoginLayout from './login/LoginLayout';
import '@/app/globals.css';
import BanerCategories from '@/components/Products/BanerCategories/BanerCategories';
import Categories from '@/components/Categories/Categories';
import AdminLayout from './admin/AdminLayout';

export default function ClientRouteHandler({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isRegisterLayout = pathname?.startsWith('/register');
  const isLoginLayout = pathname?.startsWith('/login');
  const isProductsLayout = pathname?.startsWith('/products');
  const isCategoriesLayout = pathname?.startsWith('/categories');
  const isAdminLayout = pathname?.startsWith('/admin');

  // Lógica para rutas de admin
  if (isAdminLayout) {
    return <AdminLayout>{children}</AdminLayout>;
  }
  // Lógica para rutas de registro
  if (isRegisterLayout) {
    return <RegisterLayout>{children}</RegisterLayout>;
  }

  // Lógica para rutas de login
  if (isLoginLayout) {
    return <LoginLayout>{children}</LoginLayout>;
  }

  // Lógica para rutas de productos y sus subrutas
  if (isProductsLayout) {
    return (
      <DefaultLayout>
        <BanerCategories />
        <Categories />
        {children}
      </DefaultLayout>
    );
  }
  if (isCategoriesLayout) {
    return (
      <DefaultLayout>
        <BanerCategories />
        <Categories />
        {children}
      </DefaultLayout>
    );
  }

  // Para todas las demás rutas, se utiliza el layout por defecto
  return <DefaultLayout>{children}</DefaultLayout>;
}
