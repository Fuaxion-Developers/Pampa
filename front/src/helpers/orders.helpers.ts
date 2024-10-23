import { env } from "@/config/evnCon";
import { IProduct } from "../types/index";
import { json } from "express";

export async function getOrders(category: string) {
  try {
    const res = await fetch(`${env.backUrl}/order/create`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        "ngrok-skip-browser-warning": "true",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error en la solicitud: " + response.status);
        }
        return response.json(); // Convertir la respuesta a JSON
      })
      .then((data) => {
        return data; // Aquí tienes acceso a los datos
      })
      .catch((error) => {
        console.error("Hubo un problema con la solicitud:", error);
      });
    console.log(res);
    return res;
  } catch (error: any) {
    throw new Error(error);
  }
}
export async function getOrdersDetail(category: string) {
  try {
    const res = await fetch(`${env.backUrl}/order-detail`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        "ngrok-skip-browser-warning": "true",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error en la solicitud: " + response.status);
        }
        return response.json(); // Convertir la respuesta a JSON
      })
      .then((data) => {
        return data; // Aquí tienes acceso a los datos
      })
      .catch((error) => {
        console.error("Hubo un problema con la solicitud:", error);
      });
    console.log(res);
    return res;
  } catch (error: any) {
    throw new Error(error);
  }
}
export const createOrder = async (
  user_id: string,
  date: string,
  mode_shipment: string
) => {
  try {
    console.log(
      `user_id: ${user_id}, date: ${date}, mode_shipment: ${mode_shipment}`
    );
    const res = await fetch(`${env.backUrl}/order/create`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ user_id, date, mode_shipment }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error en la solicitud: " + response.status);
        }
        return response.json(); // Convertir la respuesta a JSON
      })
      .then((data) => {
        return data; // Aquí tienes acceso a los datos
      });
    return res;
  } catch (error: any) {
    console.log(error);
  }
};

export const createOrderDetail = async (
  order: string,
  product: string,
  quantity: number
) => {
  try {
    const res = await fetch(`${env.backUrl}/order-detail/create`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ order, product, quantity }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error en la solicitud: " + response.status);
        }
        return response; // Convertir la respuesta a JSON
      })
      .then((data) => {
        return data; // Aquí tienes acceso a los datos
      });
    return res;
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
};

export const getOrderById = async (id: string) => {
  try {
    const res = await fetch(`${env.backUrl}/order/${id}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error en la solicitud: " + response.status);
        }
        return response.json(); // Convertir la respuesta a JSON
      })
      .then((data) => {
        return data; // Aquí tienes acceso a los datos
      });
    return res;
  } catch (error: any) {
    console.log(error);
  }
};

export const getOrderDetailByOrder = async (id: string) => {
  try {
    const res = await fetch(`${env.backUrl}/order-detail/order/${id}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error en la solicitud: " + response.status);
        }
        return response.json(); // Convertir la respuesta a JSON
      })
      .then((data) => {
        return data; // Aquí tienes acceso a los datos
      });
    return res;
  } catch (error: any) {
    console.log(error);
  }
};
