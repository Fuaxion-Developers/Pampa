import { BadRequestException, Injectable } from '@nestjs/common';
import { OrderRepository } from './order.repository';
import { getAllOrdersOptionsDto, OrderDto, OrderDtoPartial } from './order.dto';
import { OrderStatusService } from '../../order-status/order-status.service';
import { instanceToPlain } from 'class-transformer';
import { EnumOrderStatus } from 'src/users/enums/order-status.enum';
import { ModeShipmentService } from 'src/mode-shipment/mode-shipment.service';
import { UsersService } from 'src/users/users.service';
import { v4 as uuid } from 'uuid';
import { Payments } from 'src/payments/payments.entity';

@Injectable()
export class OrderService {
  constructor(
    private orderRepository: OrderRepository,
    private usersService: UsersService,
    private OrderStatusService: OrderStatusService,
    private ModeShipmentService: ModeShipmentService,
  ) {}

  async getAll(options: getAllOrdersOptionsDto) {
    const orders = await this.orderRepository.getAll(options);
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
      const user = await this.usersService.getUserByCuitl(order.user_id);
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

      order.payment_status = new Payments().id;

      return instanceToPlain(await this.orderRepository.create(order));
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async update(id: string, order: OrderDtoPartial) {
    const updatedOrder = await this.orderRepository.update(id, order);
    if (updatedOrder) return 'actualizado';
    else return 'Error updating order';
  }

  async delete(id: string) {
    const deletedOrder = await this.orderRepository.delete(id);
    if (deletedOrder) return deletedOrder;
    else return 'Error deleting order';
  }

  async getByUserId(id: string) {
    const user = await this.usersService.getUserByCuitl(id);
    if (!user) throw new BadRequestException('User not found');
    return await this.orderRepository.getAllByUserId(id);
  }
}
