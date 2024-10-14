import { env } from '@/config/evnCon';
import { UUID } from 'crypto';

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


export async function getProductsByCategory(category: string) {
  try {
    const queryParams = new URLSearchParams({ category }); // Convertir el objeto en parámetros de consulta
    const res = await fetch(`${env.backUrl}/products/category?${queryParams}`, {
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
// Función para convertir texto a un formato de slug
const slugify = (text: string) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-') // Reemplazar espacios con guiones
    .replace(/[^\w\-]+/g, '') // Eliminar caracteres no alfanuméricos
    .replace(/\-\-+/g, '-') // Reemplazar múltiples guiones con uno solo
    .replace(/^-+/, '') // Eliminar guiones al inicio
    .replace(/-+$/, ''); // Eliminar guiones al final
};



export async function getCategoryByName(category: string) {
  try {
    if (category.includes('%20')) {
      category = category.replace('%20', ' ');
    }

    const queryParams = new URLSearchParams({ category }); // Convertir el objeto en parámetros de consulta
    const res = await fetch(`${env.backUrl}/categories/name?${queryParams}`, {
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
