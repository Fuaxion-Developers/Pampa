import { useRouter } from 'next/navigation';
import { FC, useEffect, useState } from 'react';

interface LogoutButtonProps {
  className?: string; // Permite personalización adicional con Tailwind si es necesario
}

const LogoutButton: FC<LogoutButtonProps> = ({ className }) => {
  const router = useRouter();


  const handleLogout = async () => {
    // Lógica de logout
    localStorage.removeItem('userSession');
    try {
      // Simulación de un delay (opcional)
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Redirige al usuario a la página de inicio de sesión o al inicio después del logout
      router.push('/login');
    } catch (error) {
      console.error('Error al hacer logout:', error);
    }
  };

  return (
    <button
      className="w-full text-left px-4 py-2 text-gray-700 hover:bg-red-500 hover:text-gray-100"
      onClick={handleLogout}
    >
      Cerrar Sesión
    </button>
  );
};

export default LogoutButton;
