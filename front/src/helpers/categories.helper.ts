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

export async function getCreateCategory(newCategoryName: string) {
  try {
    const response = await fetch(
      `${env.backUrl}/categories/create`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'ngrok-skip-browser-warning': 'true',
        },
        body: JSON.stringify({ name: newCategoryName }),
      }
    );

    if (!response.ok) {
      throw new Error('Error en la solicitud: ' + response.status);
    }

    
    return response; // Retornar la categoría creada
  } catch (error: any) {
    console.error('Hubo un problema con la solicitud:', error);
    throw new Error(error);
  }
}


export async function getDellCategories(id: string) {
  try {
    const res = await fetch(`${env.backUrl}/categories/delete/${id}`, {
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

