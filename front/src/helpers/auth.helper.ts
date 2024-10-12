import { env } from '@/config/evnCon';
import {  LoginProps, RegisterProps, RestorePassProps } from '@/types';



// Función auxiliar para manejar errores de respuestas de fetch
function handleResponseError(res: Response, defaultMessage: string) {
  return res.text().then((message) => {
    throw new Error(message || defaultMessage);
  });
}

// Función para el registro de usuarios
export async function register(userData: RegisterProps) {
  try {
    const res = await fetch(`${env.backUrl}/users/signup`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'ngrok-skip-browser-warning': 'true',
      },
      body: JSON.stringify(userData),
    });

    if (!res.ok) {
      return handleResponseError(res, 'Error en el registro');
    }

    return await res.json();
  } catch (error: any) {
    throw new Error(error.message || 'Ocurrió un error inesperado durante el registro');
  }
}

// Función para el inicio de sesión
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

    if (!res.ok) {
      return handleResponseError(res, 'Error al iniciar sesión');
    }

    return await res.json();
  } catch (error: any) {
    throw new Error(error.message || 'Ocurrió un error inesperado durante el inicio de sesión');
  }
}

// Función para solicitar restauración de contraseña
export async function requestRestorePassword(email: { email: string }) {
    const res = await fetch(`${env.backUrl}/users/request-restore-password`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'ngrok-skip-browser-warning': 'true',
      },
      body: JSON.stringify(email),
    });
    return await res.json();

}

// Función para restaurar la contraseña
export async function restorePassword(newPassInfo: RestorePassProps, token: string) {
  try {
    const res = await fetch(`${env.backUrl}/users/restore-password/${token}`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'ngrok-skip-browser-warning': 'true',
      },
      body: JSON.stringify(newPassInfo),
    });

    if (!res.ok) {
      return handleResponseError(res, 'Error al restaurar la contraseña');
    }

    return await res.json();
  } catch (error: any) {
    throw new Error(error.message || 'Ocurrió un error inesperado al restaurar la contraseña');
  }
}
