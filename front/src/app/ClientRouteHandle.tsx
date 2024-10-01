'use client';
import { usePathname } from 'next/navigation';
import DefaultLayout from './Defaultlayout';
import RegisterLayout from '@/app/register/RegisterLayout';
import LoginLayout from './login/LoginLayout';
import '@/app/globals.css';
import BanerCategories from '@/components/Productos/BanerCategories/BanerCategories';
import Categories from '@/components/Productos/Categories/Categories';

export default function ClientRouteHandler({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isRegisterLayout = pathname?.startsWith('/register');
  const isLoginLayout = pathname?.startsWith('/login');
  const isProductsLayout = pathname?.startsWith('/products');

 

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

  // Para todas las demás rutas, se utiliza el layout por defecto
  return <DefaultLayout>{children}</DefaultLayout>;
}
