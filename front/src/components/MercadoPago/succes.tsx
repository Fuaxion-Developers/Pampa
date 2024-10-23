"use client";
import { StatusScreen } from "@mercadopago/sdk-react";
import { IBrickError } from "@mercadopago/sdk-react/bricks/util/types/common";
import React, { useEffect, useState } from "react";

export const Success: React.FC = () => {
  const [payment, setPayment] = useState<string>(""); // Especificar el tipo de dato

  useEffect(() => {
    const paymentId = localStorage.getItem("payment");
    if (paymentId) {
      setPayment(paymentId);
      localStorage.removeItem("payment");
    } else {
      console.error("No se encontró el paymentId en localStorage");
    }
  }, []);

  const initialization = {
    paymentId: payment,
  };

  const onError = async (error: IBrickError) => {
    console.log(error);
  };

  const onReady = async () => {};

  return (
    <div>
      {payment ? (
        <StatusScreen
          initialization={initialization}
          onError={onError}
          onReady={onReady}
        />
      ) : (
        <p>Loading payment status...</p> // Un mensaje o spinner mientras se carga el paymentId
      )}
    </div>
  );
};
