import { Logger } from '@nestjs/common';
import { OrderStatusService } from 'src/order-status/order-status.service';
import { EnumOrderStatus } from 'src/users/enums/order-status.enum';

export const precargasOrderStatus = async (app) => {
  const orderStatusService = app.get(OrderStatusService);
  if ((await orderStatusService.getAll()).length === 0) {
    for (const status of Object.values(EnumOrderStatus)) {
      await orderStatusService.create({ status });
    }
    Logger.verbose('Order Status created');
  } else {
    Logger.warn('Order Status already created');
  }
};
