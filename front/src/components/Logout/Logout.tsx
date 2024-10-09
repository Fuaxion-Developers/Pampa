import { useRouter } from 'next/navigation';
import { FC, useEffect, useState } from 'react';

interface LogoutButtonProps {
  className?: string; // Permite personalización adicional con Tailwind si es necesario
}

const LogoutButton: FC<LogoutButtonProps> = ({ className }) => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Verificar si el usuario está autenticado (comprobar el localStorage)
    const userSession = localStorage.getItem('userSession');
    if (userSession) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

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

  // Solo mostrar el botón si el usuario está autenticado
  if (!isAuthenticated) return null;

  return (
    <button
      onClick={handleLogout}
      className={`px-4 py-2 bg-brownD-200 text-white rounded hover:bg-brownD-100 transition-colors duration-300 ${className}`}
    >
      Logout
    </button>
  );
};

export default LogoutButton;
