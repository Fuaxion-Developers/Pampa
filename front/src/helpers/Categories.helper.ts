import { env } from '@/config/evnCon';

export async function getCategories() {
  try {
    const res = await fetch(`${env.backUrl}/categories`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'ngrok-skip-browser-warning': 'true',
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Error en la solicitud: ' + response.status);
        }
        return response.json(); // Convertir la respuesta a JSON
      })
      .then(data => {
        return data; // Aquí tienes acceso a los datos
      })
      .catch(error => {
        console.error('Hubo un problema con la solicitud:', error);
      });
    console.log(res);
    return res;
  } catch (error: any) {
    throw new Error(error);
  }
}
