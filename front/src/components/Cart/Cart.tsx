"use client";
import React, { useEffect, useState } from "react";
import { IProduct } from "@/types"; // Asegúrate de que IProduct esté definido en tu proyecto
import Swal from "sweetalert2";
import { createOrder, createOrderDetail } from "@/helpers/orders.helpers";
import { getModeShipment } from "@/helpers/modeShipment.helper";
import { initMercadoPago } from "@mercadopago/sdk-react";
import { env } from "@/config/evnCon";
import { createPreferenceFetch } from "@/helpers/mp.helper";
import { useRouter } from "next/navigation";

interface IModeShipement {
  id: number;
  name: string;
}

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<IProduct[]>([]);
  const [modeShipment, setModeShipment] = useState<IModeShipement[]>();
  const [selectedShipment, setSelectedShipment] = useState<string>("");
  const [UserId, setUserId] = useState<string>("");
  const [orderId, setOrderId] = useState<string>("");
  const [userSessionData, setUserSessionData] = useState("");
  const [orderProcessed, setOrderProcessed] = useState(false);
  const router = useRouter();

  // Crear detalles de la orden para cada producto en el carrito
  useEffect(() => {
    const fetchData = async () => {
      // Cargar los productos del carrito desde localStorage
      const storedCart = localStorage.getItem("cart");
      if (storedCart) {
        setCartItems(JSON.parse(storedCart));
      }

      // Obtener datos de sesión de usuario
      const userSessionData = localStorage.getItem("userSession");
      if (userSessionData) {
        const parsedSession = JSON.parse(userSessionData);
        const userInfo = parsedSession.userInfoToReturn?.info_user;
        localStorage.setItem("info_user", JSON.stringify(userInfo));
        const cuitCuil = userInfo?.cuit_cuil;
        if (cuitCuil) {
          setUserId(cuitCuil);
        } else {
          console.log("No se encontró el cuit_cuil en la sesión del usuario");
        }
      } else {
        console.log("No se encontró la sesión del usuario");
      }

      // Obtener modos de envío
      const shipmentsData = await getModeShipment();
      setModeShipment(shipmentsData);
    };

    initMercadoPago(env.MercadoPago.MP_PUBLIC_KEY, {
      frontEndStack: "react",
      locale: "es-AR",
      advancedFraudPrevention: true,
    });

    fetchData();
  }, []); // Solo se ejecuta una vez cuando se monta el componente

  useEffect(() => {
    const processOrder = async () => {
      if (
        orderProcessed ||
        !UserId ||
        !selectedShipment ||
        cartItems.length === 0
      ) {
        return; // Evitar que se ejecute nuevamente si ya se procesó la orden o faltan datos
      }

      // Crear una nueva orden si no hay errores previos
      try {
        const newOrder = await createOrder(
          UserId,
          new Date().toISOString(),
          selectedShipment
        );
        setOrderId(newOrder.id);
        localStorage.setItem("orderId", newOrder.id);

        let stockSufficient = true;

        // Crear detalles de la orden para cada producto en el carrito
        for (const item of cartItems) {
          stockSufficient = false;
          try {
            await createOrderDetail(newOrder.id, item.id, item.quantity);
          } catch (error: Error | any) {
            throw new Error(error.message);
          }
        }
        if (stockSufficient) {
          setOrderProcessed(true); // Marcar la orden como procesada para evitar loop
        }
      } catch (error: any) {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.messagge,
        });
      }
    };

    processOrder();
    console.log("pendejo inutil");
  }, [UserId, selectedShipment, cartItems, orderProcessed]); // Agregar orderProcessed como dependencia

  const MSonSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedShipment(event.target.value);
  };

  const handleOnClick = async () => {
    const session = localStorage.getItem("userSession");
    if (session) {
      const parsedSession = JSON.parse(session);
      setUserSessionData(parsedSession.userInfoToReturn.info_user.cuit_cuil);
      localStorage.setItem("email", parsedSession.userInfoToReturn.email);
    }

    if (orderId && userSessionData) {
      const res: any = await createPreferenceFetch(orderId, userSessionData);
      if (res) {
        localStorage.setItem("Preference", res.id);
        router.push(`/checkout`);
      }
    }
  };

  const handleRemoveItem = (productId: string) => {
    // Filtrar el carrito para eliminar el producto seleccionado
    const updatedCart = cartItems.filter(
      (item) => item.id !== productId.toString()
    );
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    Swal.fire({
      title: "¡Producto eliminado!",
      text: "El producto ha sido eliminado del carrito.",
      icon: "success",
      confirmButtonText: "Aceptar",
    });
  };

  const getTotalPrice = () => {
    // Calcular el precio total de los productos en el carrito
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Carrito de Compras</h1>
      {cartItems.length === 0 ? (
        <p className="text-lg">No hay productos en el carrito.</p>
      ) : (
        <div>
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center border-b pb-4"
              >
                <div className="flex items-center">
                  {item.image_url && (
                    <img
                      src={item.image_url}
                      alt={item.name}
                      className="w-20 h-20 object-cover mr-4"
                    />
                  )}
                  <div>
                    <h2 className="text-xl">{item.name}</h2>
                    <p>Cantidad: {item.quantity}</p>
                    <p>Precio: ${item.price.toFixed(2)}</p>
                  </div>
                </div>
                <button
                  className="text-red-500"
                  onClick={() => handleRemoveItem(item.id)}
                >
                  Eliminar
                </button>
              </li>
            ))}
            <div>
              <h2>Elija un modo de envio</h2>
              {modeShipment?.map((mode) => (
                <div key={mode.id}>
                  <input
                    type="radio"
                    name="mode"
                    id={mode.name}
                    value={mode.id}
                    onChange={MSonSubmit}
                  />
                  <label htmlFor={mode.name}>{mode.name}</label>
                </div>
              ))}
            </div>
          </ul>
          <div className="mt-4">
            <h2 className="text-2xl font-bold">
              Total: ${getTotalPrice().toFixed(2)}
            </h2>
          </div>
          <div className="mt-4">
            {orderId && (
              <button
                onClick={handleOnClick}
                className="rounded-xl w-full max-w-[200px] h-auto bg-green-500 text-white p-2"
              >
                Proceder a la Compra
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
