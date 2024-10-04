import { env } from '@/config/evnCon';
import { IProduct, LoginProps, RegisterProps, RestorePassProps } from '@/types';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

export async function register(userData: RegisterProps) {
  try {
    console.log(env.backUrl);
    const res = await fetch(`${env.backUrl}/users/signup`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'ngrok-skip-browser-warning': 'true',
      },
      body: JSON.stringify(userData),
    });

    if (res.ok) {
      return res.json();
    } else {
      Swal.fire({
        title: '¡Upps!',
        text: 'Hubo un error en el registro.',
        icon: 'error',
        confirmButtonText: 'Aceptar',
        customClass: {
          confirmButton:
            'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded',
        },
      });
      throw new Error('Error en el registro');
    }
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function login(userData: LoginProps) {
  try {
    const res = await fetch(`${env.backUrl}/users/signin`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'ngrok-skip-browser-warning': 'true',
      },
      body: JSON.stringify(userData),
    });

    if (res.ok) {
      return res.json();
    } else {
      Swal.fire({
        title: '¡Upps!',
        text: 'Hubo un error al iniciar sesión.',
        icon: 'error',
        confirmButtonText: 'Aceptar',
        customClass: {
          confirmButton:
            'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded',
        },
      });
      throw new Error('Error al iniciar sesión');
    }
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function requestRestorePassword(email: { email: string }) {
  try {
    const res = await fetch(`${env.backUrl}/users/request-restore-password`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'ngrok-skip-browser-warning': 'true',
      },
      body: JSON.stringify(email),
    });

    if (res.ok) {
      return res.json();
    } else {
      Swal.fire({
        title: '¡Upps!',
        text: 'Hubo un error al iniciar sesión.',
        icon: 'error',
        confirmButtonText: 'Aceptar',
        customClass: {
          confirmButton:
            'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded',
        },
      });
      throw new Error('Error al iniciar sesión');
    }
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function restorePassword(
  newPassInfo: RestorePassProps,
  token: string
) {
  try {
    const res = await fetch(`${env.backUrl}/users/restore-password/${token}`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'ngrok-skip-browser-warning': 'true',
      },
      body: JSON.stringify(newPassInfo),
    });

    if (res.ok) {
      return res.json();
    } else {
      Swal.fire({
        title: '¡Upps!',
        text: 'Hubo un error al iniciar sesión.',
        icon: 'error',
        confirmButtonText: 'Aceptar',
        customClass: {
          confirmButton:
            'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded',
        },
      });
      throw new Error('Error al iniciar sesión');
    }
  } catch (error: any) {
    throw new Error(error);
  }
}
