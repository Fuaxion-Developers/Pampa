'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { validateLoginForm } from '@/helpers/formValidation';
import { LoginErrorProps, LoginProps } from '@/types';
import { login } from '@/helpers/auth.helper';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import PasswordInput from '../Password/PasswordImput';
import { decodeJWT } from '../../helpers/decodeJwt';
// import { useUser } from '@auth0/nextjs-auth0/client';
import Link from 'next/link';

const Login = () => {
  const router = useRouter();
  const [dataUser, setDataUser] = useState<LoginProps>({
    email: '',
    password: '',
  });
  // const { user, error, isLoading } = useUser();

  const [errorUser, setErrorUser] = useState<LoginErrorProps>({
    email: '',
    password: '',
  });

  useEffect(() => {
    const userSession = localStorage.getItem('userSession');
    if (userSession) {
      
    }
  }, [router]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDataUser({
      ...dataUser,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const errors = validateLoginForm(dataUser);
    setErrorUser(errors);

    if (Object.keys(errors).length === 0) {
      try {
        const response = await login(dataUser);
        const { token, userData } = response;
        localStorage.setItem(
          'userSession',
          JSON.stringify({ token: token, userData })
        );
        await Swal.fire({
          title: '¡Excelente!',
          text: `${userData.first_name}, has iniciado sesión correctamente.`,
          icon: 'success',
          confirmButtonText: 'Aceptar',
          background: '#1D1D1D', // Cambia este valor al color de fondo que prefieras
          customClass: {
            confirmButton:
              'hover:scale-110 bg-greenD-500 text-black font-bold py-2 px-4 rounded',
            title: 'text-greenD-500', // Cambia el color del texto del título
            popup: 'text-white', // Cambia el color del texto del contenido
          },
        });
       
      } catch (error: any) {
        Swal.fire({
          title: 'Error',
          text: 'Hubo un problema al iniciar sesión. Por favor, intente de nuevo.',
          icon: 'error',
          confirmButtonText: 'Aceptar',
          background: '#1D1D1D', // Cambia este valor al color de fondo que prefieras
          customClass: {
            confirmButton:
              'hover:scale-110 bg-greenD-500 text-black font-bold py-2 px-4 rounded',
            title: 'text-red-500', // Cambia el color del texto del título
            popup: 'text-white', // Cambia el color del texto del contenido
          },
        });
      }
    }
  };

 const inputClass =
   'h-[28px] p-5 items-center gap-[10px] self-stretch border border-gray-300 w-full';
 const labelClass = ' text-[15px] font-medium leading-normal';

  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="flex w-full h-full max-h-[1024px]">
        <a
          href="/"
          className="flex flex-row justify-center items-center absolute top-4 left-4  gap-2"
        >
          <Image
            className="" // Ajusta el tamaño según tus necesidades
            src="https://res.cloudinary.com/dkobjvdgn/image/upload/v1727295377/arrow_back_24dp_927363_FILL0_wght400_GRAD0_opsz24_qepr5l.svg"
            alt="Volver"
            width={30}
            height={30}
          />
        </a>

        <div className="w-[50%] flex flex-col items-center justify-center bg-whiteD-200  p-12">
            <Image
              className=" flex justify-center items-center" // Ajusta el tamaño según tus necesidades
              src="https://res.cloudinary.com/dkobjvdgn/image/upload/v1726763511/Pampa_chico_1_bwdcha.svg"
              alt="Volver"
              width={300}
              height={300}
            />
          <div className="flex flex-col items-start justify-start mb-8">
            <h2 className=" text-[20px] font-semibold leading-normal mb-4">
              INICIA SESIÓN EN PAMPA
            </h2>
          </div>
          <div className="w-full max-w-[72%] flex flex-col gap-4">
            <form onSubmit={handleSubmit}>
              <div className="w-full">
                <label className={labelClass}>EMAIL</label>
                <input
                  className={inputClass}
                  placeholder="mail@mail.com"
                  value={dataUser.email}
                  type="text"
                  id="email-address"
                  name="email"
                  required
                  onChange={handleChange}
                />
                {errorUser.email && (
                  <p className="text-red-500">{errorUser.email}</p>
                )}
              </div>

              <div className="w-full">
                <label className={labelClass}>CONTRASEÑA</label>
                <PasswordInput
                  id="password"
                  name="password"
                  value={dataUser.password}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />
                {errorUser.password && (
                  <p className="text-red-500">{errorUser.password}</p>
                )}
              </div>
              <div className="w-full max-w-[100%] mt-2 flex justify-end">
                <a href="#" className=" text-[15px] text-brownD-100">
                  Olvidé mi contraseña
                </a>
              </div>
              <div className="w-full  mt-4 flex justify-center">
                <button
                  type="submit"
                  className="flex w-full h-[38px] px-[25px] py-[11px] justify-center items-center gap-[10px] rounded-[5px] bg-brownD-100"
                >
                  <span className="text-whiteD-200 font-maven-pro text-[16px] font-semibold leading-normal">
                    Iniciar Sesión
                  </span>
                </button>
              </div>
            </form>
          </div>

          <div className="w-full max-w-[80%]  mt-8 flex flex-row items-center justify-center gap-4">
            <p className="">No tienes cuenta?</p>
            <a href="/register" className='text-brownD-100'>Regístrate</a>
          </div>
        </div>
        <div className="w-[50%] h-full relative">
          <Image
            className="hidden md:block"
            src="https://res.cloudinary.com/dkobjvdgn/image/upload/v1727297153/pexels-cottonbro-3838325_1_1_t2s6tu.png"
            alt="Login Image"
            layout="fill"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
