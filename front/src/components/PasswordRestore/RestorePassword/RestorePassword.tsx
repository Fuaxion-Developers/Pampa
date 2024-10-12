import { useState } from 'react';
import Modal from '../../Modal/Modal';
import Swal from 'sweetalert2';
import { requestRestorePassword } from '@/helpers/auth.helper';

type CloseFunction = () => void;

const RestorePasswordModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: CloseFunction;
}) => {
  const [emailInfo, setEmailInfo] = useState({
    email: '',
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setEmailInfo({
      email: value,
    });
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await requestRestorePassword(emailInfo);
      onClose();
      console.log(response);
      // Aquí se puede verificar el éxito de la respuesta
      if (response.success) {
        await Swal.fire({
          title: '¡Solicitud creada!',
          text: response.success,
          icon: 'warning',
          confirmButtonText: 'Aceptar',
          background: '#1D1D1D',
          customClass: {
            confirmButton:
              'hover:scale-110 bg-greenD-500 text-black font-bold py-2 px-4 rounded',
            title: 'text-greenD-500',
            popup: 'text-white',
          },
        });
      } else {
        throw new Error('Error en la solicitud');
      }
    } catch (error) {
      console.error(error);
      await Swal.fire({
        title: 'Error',
        text: 'Ocurrió un error al intentar restaurar la contraseña.',
        icon: 'error',
        confirmButtonText: 'Aceptar',
        background: '#1D1D1D',
        customClass: {
          confirmButton:
            'hover:scale-110 bg-red-500 text-black font-bold py-2 px-4 rounded',
          title: 'text-red-500',
          popup: 'text-white',
        },
      });
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className=" rounded-lg p-6 text-white space-y-4">
        <h2 className="text-center text-xl font-semibold">
          Restaurar contraseña
        </h2>
        <form className="rounded-lg p-6 space-y-4 flex flex-col justify-center items-center">
          <div className="flex flex-col w-[80%]">
            <label> Por favor ingresa tu correo electrónico:</label>
            <input
              type="text"
              id="email"
              className="text-black rounded p-2"
              name="email"
              placeholder="example@mail.com"
              value={emailInfo.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <p>Te enviaremos un mail para restaurar tu contraseña...</p>
          <button
            className="bg-brownD-200 rounded block px-4 py-2 text-l w-fit text-center  bg-greenD-500 cursor-pointer"
            type="submit"
            onClick={handleSubmit}
          >
            Restaurar contraseña
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default RestorePasswordModal;
