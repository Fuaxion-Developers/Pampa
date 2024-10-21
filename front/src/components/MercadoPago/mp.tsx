"use client";
import { processPaymentFetch } from "@/helpers/mp.helper";
import { IProduct } from "@/types";
import { Payment } from "@mercadopago/sdk-react";
import { IPaymentBrickCustomization } from "@mercadopago/sdk-react/bricks/payment/type";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export const PaymentMenu: React.FC = () => {
  const [preference, setPreference] = useState("");
  const [cartItems, setCartItems] = useState<IProduct[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [mail, setMail] = useState("");
  const router = useRouter();

  // Cargar carrito y datos de sesión solo una vez al montar el componente
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }

    const email = localStorage.getItem("email");
    if (email) {
      setMail(email);
    }

    const preferenceid = localStorage.getItem("Preference");
    if (preferenceid) {
      setPreference(preferenceid);
    }
  }, []); // Solo se ejecuta al montar

  // Calcular el precio total cuando el carrito cambie
  useEffect(() => {
    const getTotalPrice = () => {
      const total = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
      setTotalPrice(total);
    };
    getTotalPrice();
  }, [cartItems]); // Se recalcula solo cuando cartItems cambie

  const onSubmit = async ({ selectedPaymentMethod, formData }) => {
    try {
      const paymentFormData = {
        PaymentFormData: {
          payment_method_id: selectedPaymentMethod,
          formData,
        },
        AdditionalData: {
          email: mail,
        },
      };

      const response = await processPaymentFetch(paymentFormData);
      if (response) {
        localStorage.setItem("payment", response.id);
        router.push("/checkout/succes"); // Asegúrate de que esta ruta no genere un ciclo de redirecciones
      }
    } catch (error) {
      console.error("Error processing payment:", error);
    }
  };

  const initialization = {
    amount: totalPrice,
    payer: {
      email: mail,
    },
    preferenceId: preference,
  };

  const customization: IPaymentBrickCustomization = {
    visual: {
      style: {
        theme: "default",
      },
    },
    paymentMethods: {
      mercadoPago: ["wallet_purchase"],
      creditCard: "all",
      debitCard: "all",
      bankTransfer: "all",
      minInstallments: 1,
      maxInstallments: 12,
    },
  };

  return (
    <div>
      <Payment
        initialization={initialization}
        onSubmit={onSubmit}
        customization={customization}
      />
    </div>
  );
};
