import { Injectable, Body, Res } from '@nestjs/common';
import { env } from 'src/config/envCon';
import { MPDto, AdditionalData, paymentFormData, paymentData } from './mp.dto';
import { OrderDetailService } from 'src/order-detail/order-detail.service';
import { OrderDetails } from 'src/order-detail/order-detail.entity';
import { UsersService } from 'src/users/users.service';
import { InfoUsersService } from 'src/infoUsers/infoUsers.service';
import { payment, preference } from 'src/config/MPConfig';
import { Items } from 'mercadopago/dist/clients/commonTypes';
import { OrderService } from 'src/orders/order/order.service';
import { Orders } from 'src/orders/order/order.entity';
import { EnumOrderStatus } from 'src/users/enums/order-status.enum';
import { PaymentsService } from 'src/payments/payments.service';
import { v4 as uuid } from 'uuid';
@Injectable()
export class MpService {
  constructor(
    private readonly ordersService: OrderDetailService,
    private readonly orderService: OrderService,
    private readonly InfoUserService: InfoUsersService,
    private readonly userService: UsersService,
    private readonly paymentService: PaymentsService,
  ) {}

  async createPreference(preferencia: MPDto) {
    try {
      const order = await this.orderService.getById(preferencia.order);
      if (typeof order === 'string') {
        return 'La orden no existe';
      }
      console.log('order', order);
      const orderDetails: OrderDetails[] | string =
        await this.ordersService.getAllByOrder(order.id);

      console.log(orderDetails);
      const user = await this.InfoUserService.getInfoUserByCUITL(
        preferencia.user_id,
      );
      if (typeof orderDetails === 'string') {
        return orderDetails;
      }

      const userEmail = await this.userService
        .getUserByCuitl(preferencia.user_id)
        .then((user) => user.email);

      const items: Items[] = orderDetails.map((item) => {
        console.log('item pendejo');
        console.log(item);
        return {
          id: item.id,
          title: item.product.name,
          description: item.product.description,
          quantity: item.quantity,
          unit_price: item.product.price,
        };
      });
      const fechaExpiracion = new Date();
      fechaExpiracion.setMinutes(fechaExpiracion.getMinutes() + 10);
      const date_of_expiration = fechaExpiracion.toISOString();

      console.log('idiota');
      const preferenceID = await preference.create({
        body: {
          items: items,
          purpose: 'wallet_purchase',
          back_urls: {
            success: `${env.frontUrl}products`,
            failure: `${env.frontUrl}about`,
            pending: `${env.frontUrl}`,
          },
          expires: true,
          date_of_expiration,
          auto_return: 'all',
          binary_mode: true,
          payer: {
            name: user.first_name,
            surname: user.last_name,
            email: userEmail,
            phone: {
              area_code: user.phone.slice(0, 2),
              number: user.phone.slice(2),
            },
          },
        },
        requestOptions: { idempotencyKey: uuid(), timeout: 10000 },
      });
      console.log('pendejo');
      console.log(preferenceID);
      return { id: preferenceID.id, url: preferenceID.back_urls.success };
    } catch (error) {
      console.log(error);
    }
  }

  async successPayment(body) {
    const pago = await payment.get({
      id: body.data.id,
      requestOptions: { idempotencyKey: uuid() },
    });
    if (pago.status) {
      const nuevoPago = await this.paymentService.create({
        id: pago.id,
        status: pago.status,
      });
      const order: Orders | string = await this.orderService.getById(
        pago.external_reference,
      );
      if (order && typeof order !== 'string') {
        const pendejo = await this.orderService.update(order.id, {
          payment_status: nuevoPago.id,
        });
      }
    }
    return 'ok';
  }

  async processPayment(paymentData: paymentData) {
    const { PaymentFormData, AdditionalData } = paymentData;

    try {
      if ('token' in PaymentFormData.formData) {
        const response = await payment
          .create({
            body: {
              token: PaymentFormData.formData.token,
              binary_mode: true,
              notification_url:
                'https://r2ktcg2k-3001.brs.devtunnels.ms/mp/success-payment',
              transaction_amount: PaymentFormData.formData.transaction_amount, // Ajusta el monto dinámicamente
              payment_method_id: PaymentFormData.formData.payment_method_id,
              installments: PaymentFormData.formData.installments || 1, // Cuotas dinámicas, 1 por defecto
              payer: {
                email: AdditionalData.email,
                identification: {
                  type: AdditionalData.identification_type || 'DNI', // Asegúrate de enviar el tipo de identificación
                  number: AdditionalData.identification_type || '', // Número de identificación del pagador
                },
              },
              payment_method: {
                type: PaymentFormData.formData.payment_method_type,
              },
            },
            requestOptions: {
              idempotencyKey: uuid(),
              timeout: 10000,
            },
          })
          .then((response) => response);
        return response;
      }
    } catch (error) {
      console.error('Error processing payment:', error);
      throw error;
    }
  }

  async webhook(id: number) {}
}
