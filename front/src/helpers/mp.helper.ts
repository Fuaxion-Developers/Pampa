import { env } from "@/config/evnCon";
import { proccessPaymentFormData } from "@/types/mp.types";

export const createPreferenceFetch = async (
  order_id: string | null,
  user_id: string | undefined
) => {
  try {
    const response = await fetch(
      `${env.backUrl}/mp/create-preference?order_id=${order_id}&user_id=${user_id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((response) => response);
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

export const succesPaymentFetch = async (id: number) => {
  try {
    const response = await fetch(`${env.backUrl}/mp/success-payment?id=${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response);
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

export const processPaymentFetch = async (
  paymentFormData: proccessPaymentFormData
) => {
  try {
    const response = await fetch(`${env.backUrl}/mp/process-payment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(paymentFormData), // Convierte el objeto a JSON
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    return await response.json(); // Devuelve la respuesta JSON
  } catch (error) {
    console.error("Error processing payment:", error);
    throw error; // Lanza el error para que pueda ser manejado por quien llama
  }
};

export const getPaymentData = async (id: string) => {
  try {
    const response = await fetch(
      `https://api.mercadopago.com/v1/payments/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((response) => response);
    return response.json();
  } catch (error) {
    console.log(error);
  }
};
