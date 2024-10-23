import { env } from '@/config/evnCon';
import { IProduct } from '@/types';
import { UUID } from 'crypto';


export async function getAllProducts() {
  try {
    const res = await fetch(`${env.backUrl}/products?page=1&limit=10`, {
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
export async function getProductById(id: UUID) {
  try {
    const res = await fetch(`${env.backUrl}/products/${id}`, {
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





export async function getCreateProducts(product: IProduct) {
  try {
    const res = await fetch(`${env.backUrl}/products/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': 'true',
      },
      body: JSON.stringify(product), // Enviar el producto en el cuerpo
    });

    if (!res.ok) {
      throw new Error('Error en la solicitud: ' + res.status);
    }

    const data = await res.json(); // Convertir la respuesta a JSON
    return data; // Retorna los datos recibidos del servidor
  } catch (error: any) {
    console.error('Hubo un problema con la solicitud:', error);
    throw new Error(error);
  }
}


export async function getDellProducts(id: string) {
  try {
    const res = await fetch(`${env.backUrl}/products/delete/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': 'true',
      },
    });

    if (!res.ok) {
      throw new Error('Error en la solicitud: ' + res.status);
    }

    const data = await res.json();
    return data; // Aquí retornamos la respuesta
  } catch (error: any) {
    console.error('Hubo un problema con la solicitud:', error);
    throw new Error(error);
  }
}