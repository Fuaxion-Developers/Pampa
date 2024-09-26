import { BadRequestException, Injectable } from '@nestjs/common';
import { OrderRepository } from './order.repository';
import { OrderDto, OrderDtoPartial } from './order.dto';
import { InfoUsersService } from '../../infoUsers/infoUsers.service';
import { OrderDetailService } from 'src/order-detail/order-detail.service';
import { OrderStatusService } from '../../order-status/order-status.service';
import { instanceToPlain } from 'class-transformer';
import { EnumOrderStatus } from 'src/users/enums/order-status.enum';
import { ModeShipmentService } from 'src/mode-shipment/mode-shipment.service';

@Injectable()
export class OrderService {
  constructor(
    private orderRepository: OrderRepository,
    private InfoUsersService: InfoUsersService,
    private OrderStatusService: OrderStatusService,
    private ModeShipmentService: ModeShipmentService,
  ) {}

  async getAll() {
    const orders = await this.orderRepository.getAll();
    if (orders.length > 0) return instanceToPlain(orders);
    else return 'No orders found';
  }

  async getById(id: string) {
    const order = await this.orderRepository.getById(id);
    if (order) return order;
    else return 'Order not found';
  }

  async create(order: OrderDto) {
    try {
      const user = await this.InfoUsersService.getInfoUserByCUITL(
        order.user_id,
      );
      if (!user) throw new BadRequestException('User not found');

      const orderStatus = await this.OrderStatusService.getStatusByName(
        EnumOrderStatus.PENDING,
      );
      if (!orderStatus) throw new BadRequestException('Order status not found');

      order.order_status = orderStatus.id;

      const modeShipment = await this.ModeShipmentService.getById(
        order.mode_shipment,
      );
      if (!modeShipment)
        throw new BadRequestException('Mode shipment not found');

      return instanceToPlain(await this.orderRepository.create(order));
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async update(id: string, order: OrderDtoPartial) {
    const updatedOrder = await this.orderRepository.update(id, order);
    if (updatedOrder) return updatedOrder;
    else return 'Error updating order';
  }

  async delete(id: string) {
    const deletedOrder = await this.orderRepository.delete(id);
    if (deletedOrder) return deletedOrder;
    else return 'Error deleting order';
  }

  async getByUserId(id: string) {
    const user = await this.InfoUsersService.getInfoUserByCUITL(id);
    if (!user) throw new BadRequestException('User not found');
    return await this.orderRepository.getAllByUserId(id);
  }
}
