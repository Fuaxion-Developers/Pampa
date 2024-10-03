'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { validateRegisterForm } from '@/helpers/formValidation';
import { RegisterErrorProps, RegisterProps } from '@/types';
import { register } from '@/helpers/auth.helper';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import PasswordInput from '../../components/Password/PasswordImput';


const Register = () => {
  const router = useRouter();
  const [dataUser, setDataUser] = useState<RegisterProps>({
    first_name: '',
    last_name: '',
    cuit_cuil: '',
    email: '',
    company: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    password: '',
    confirmPass: '',
  });

  const [errorUser, setErrorUser] = useState<RegisterErrorProps>({
    first_name: '',
    last_name: '',
    cuit_cuil: '',
    email: '',
    company: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    password: '',
    confirmPass: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDataUser({
      ...dataUser,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const errors = validateRegisterForm(dataUser);
    setErrorUser(errors);
    
    if (Object.keys(errors).length === 0) {
      
      try {
        const response = await register(dataUser);
        Swal.fire({
          title: '¡Excelente!',
          text: 'Cuenta creada correctamente.',
          icon: 'success',
          confirmButtonText: 'Aceptar',
          background: '#1D1D1D',
          customClass: {
            confirmButton:
              'hover:scale-110 bg-greenD-500 text-black font-bold py-2 px-4 rounded',
            title: 'text-greenD-500',
            popup: 'text-white',
          },
        });
        router.push('/login');
      } catch (error: any) {
        Swal.fire({
          title: 'Error',
          text: error.response.data.message,
          icon: 'error',
          confirmButtonText: 'Aceptar',
          background: '#1D1D1D',
          customClass: {
            confirmButton:
              'hover:scale-110 bg-greenD-500 text-black font-bold py-2 px-4 rounded',
            title: 'text-red-500',
            popup: 'text-white',
          },
        });
      }
    }
  };

  const inputClass =
    'h-[28px] p-5 items-center gap-[10px] self-stretch border border-gray-300 w-full ';
  const labelClass = ' text-[15px] font-medium leading-normal';

  return (
    <div className="h-screen flex justify-center items-center bg-whiteD-200 relative">
      <div className="flex w-full h-full ">
        <a
          href="/"
          className="flex  justify-center items-center absolute top-4 left-4  gap-2"
        >
          <Image
            src="https://res.cloudinary.com/dkobjvdgn/image/upload/v1727295377/arrow_back_24dp_927363_FILL0_wght400_GRAD0_opsz24_qepr5l.svg"
            alt="Volver"
            width={30}
            height={30}
          />
        </a>
        <div className="w-[50%] flex flex-col items-center justify-center bg-whiteD-200  p-12">
          <div className="flex flex-col items-start justify-start mb-8">
            <h2 className="text-[20px] font-semibold leading-normal  ">
              REGISTRARSE EN PAMPA
            </h2>
          </div>
          <div className="w-[80%] flex flex-col gap-4">
            <form onSubmit={handleSubmit}>
              <div className="w-full flex gap-4">
                <div className="w-1/2">
                  <label className={labelClass}>Nombre/s</label>
                  <input
                    className={inputClass}
                    placeholder="Juan"
                    value={dataUser.first_name}
                    type="text"
                    id="first_name"
                    name="first_name"
                    required
                    onChange={handleChange}
                  />
                  {errorUser.first_name && (
                    <p className="text-red-500">{errorUser.first_name}</p>
                  )}
                </div>
                <div className="w-1/2">
                  <label className={labelClass}>Apellido/s</label>
                  <input
                    className={inputClass}
                    placeholder="Perez"
                    value={dataUser.last_name}
                    type="text"
                    id="last_name"
                    name="last_name"
                    required
                    onChange={handleChange}
                  />
                  {errorUser.last_name && (
                    <p className="text-red-600">{errorUser.last_name}</p>
                  )}
                </div>
              </div>
              <div className="w-full flex gap-4">
                <div className="w-1/2">
                  <label className={labelClass}>CUIL/CUIT</label>
                  <input
                    className={inputClass}
                    placeholder="0-12345678-5"
                    value={dataUser.cuit_cuil}
                    type="text"
                    id="cuit_cuil"
                    name="cuit_cuil"
                    required
                    onChange={handleChange}
                  />
                  {errorUser.cuit_cuil && (
                    <p className="text-red-500">{errorUser.cuit_cuil}</p>
                  )}
                </div>
                <div className="w-1/2">
                  <label className={labelClass}>Teléfono</label>
                  <input
                    className={inputClass}
                    placeholder="+540123456789"
                    value={dataUser.phone}
                    type="text"
                    id="phone"
                    name="phone"
                    required
                    onChange={handleChange}
                  />
                  {errorUser.phone && (
                    <p className="text-red-500">{errorUser.phone}</p>
                  )}
                </div>
              </div>
              <div className="w-full">
                <label className={labelClass}>Correo electrónico</label>
                <input
                  className={inputClass}
                  placeholder="mail@mail.com"
                  value={dataUser.email}
                  type="email"
                  id="email"
                  name="email"
                  required
                  onChange={handleChange}
                />
                {errorUser.email && (
                  <p className="text-red-500">{errorUser.email}</p>
                )}
              </div>
              <div className="w-full">
                <label className={labelClass}>Empresa</label>
                <input
                  className={inputClass}
                  placeholder="Nombre de la empresa S.A"
                  value={dataUser.company}
                  type="text"
                  id="company"
                  name="company"
                  required
                  onChange={handleChange}
                />
                {errorUser.company && (
                  <p className="text-red-500">{errorUser.company}</p>
                )}
              </div>
              <div className="w-full flex gap-4">
                <div className="w-full">
                  <label className={labelClass}>Dirección</label>
                  <input
                    className={inputClass}
                    placeholder="Calle Falsa 123"
                    value={dataUser.address}
                    type="text"
                    id="address"
                    name="address"
                    required
                    onChange={handleChange}
                  />
                  {errorUser.address && (
                    <p className="text-red-500">{errorUser.address}</p>
                  )}
                </div>

                <div className="w-full">
                  <label className={labelClass}>Código de área</label>
                  <input
                    className={inputClass}
                    placeholder="Código de área"
                    value={dataUser.zipCode}
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    required
                    onChange={handleChange}
                  />
                  {errorUser.zipCode && (
                    <p className="text-red-500">{errorUser.zipCode}</p>
                  )}
                </div>
              </div>

              <div className="w-full flex gap-4">
                <div className="w-full">
                  <label className={labelClass}>Localidad</label>
                  <input
                    className={inputClass}
                    placeholder="Lugar falso"
                    value={dataUser.state}
                    type="text"
                    id="state"
                    name="state"
                    required
                    onChange={handleChange}
                  />
                  {errorUser.state && (
                    <p className="text-red-500">{errorUser.state}</p>
                  )}
                </div>
                <div className="w-full">
                  <label className={labelClass}>Ciudad</label>
                  <input
                    className={inputClass}
                    placeholder="País de origen"
                    value={dataUser.city}
                    type="text"
                    id="city"
                    name="city"
                    required
                    onChange={handleChange}
                  />
                  {errorUser.city && (
                    <p className="text-red-500">{errorUser.city}</p>
                  )}
                </div>
              </div>
              <div className="w-full flex gap-4">
                <div className="w-1/2">
                  <label className={labelClass}>Contraseña</label>
                  <PasswordInput
                    value={dataUser.password}
                    onChange={handleChange}
                    id="password"
                    name="password"
                    required
                    className={inputClass}
                  />
                  {errorUser.password && (
                    <p className="text-red-500">{errorUser.password}</p>
                  )}
                </div>
                <div className="w-1/2">
                  <label className={labelClass}>Repetir contraseña</label>
                  <PasswordInput
                    value={dataUser.confirmPass}
                    onChange={handleChange}
                    id="confirmPass"
                    name="confirmPass"
                    required
                    className={inputClass}
                  />
                  {errorUser.confirmPass && (
                    <p className="text-red-500">{errorUser.confirmPass}</p>
                  )}
                </div>
              </div>
              <div className="w-full mt-4 flex justify-center">
                <button
                  type="submit"
                  className="flex w-full h-[38px] px-[25px] py-[11px] justify-center items-center gap-[10px] bg-brownD-100 rounded-[5px]"
                >
                  <span className="text-whiteD-200 font-maven-pro text-[16px] font-semibold leading-normal">
                    Crear cuenta
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="w-[50%] h-full relative">
          <Image
            src="https://res.cloudinary.com/dkobjvdgn/image/upload/v1727294568/pexels-cottonbro-3838325_1_gwfks9.png"
            alt="Register Image"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
