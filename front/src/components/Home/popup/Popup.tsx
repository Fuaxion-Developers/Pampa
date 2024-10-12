import LogoutButton from '@/components/Logout/Logout';
import RestorePasswordModal from '@/components/PasswordRestore/RestorePassword/RestorePassword';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

const PopupButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // Verificar si el usuario está autenticado (comprobar el localStorage)
    const userSession = localStorage.getItem('userSession');
    if (userSession) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  // Cerrar el menú si se hace clic fuera de él
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Solo mostrar el botón si el usuario está autenticado
  if (!isAuthenticated) return null;

  return (
    <div className="relative inline-block">
      {/* Botón principal */}
      <button
        ref={buttonRef}
        onClick={toggleMenu}
        className="px-4 py-2 bg-brownD-200 text-white rounded hover:bg-brownD-100 focus:outline-none"
      >
        Abrir Menú
      </button>

      {/* Menú desplegable */}
      {isOpen && (
        <div
          ref={menuRef}
          className="absolute right-0 mt-2 w-[200%] bg-white border border-gray-200 rounded-lg shadow-lg z-10"
        >
          <ul className="py-2">
            <li>
              <button
                className="w-full gap-1 flex text-left px-4 py-2 text-gray-700 hover:bg-gray-300"
                onClick={() => alert('Carrito de Compras')}
              >
                <Image
                  src="https://res.cloudinary.com/dkobjvdgn/image/upload/v1727981367/shopping_bag_24dp_6B432E_FILL0_wght400_GRAD0_opsz24_1_mdej5y.svg"
                  alt="Cart"
                  width={20}
                  height={20}
                />
                Carrito de Compras
              </button>
            </li>
            <li>
              <button
                className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-300"
                onClick={() => setIsModalOpen(true)}
              >
                Cambiar Contraseña
              </button>
              <RestorePasswordModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
              />
            </li>
            <li>
              <button
                className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-300 "
                onClick={() => alert('Ver Órdenes')}
              >
                Ver Órdenes
              </button>
            </li>
            <li>
              <LogoutButton />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default PopupButton;
