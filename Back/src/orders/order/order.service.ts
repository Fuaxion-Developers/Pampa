import { BadRequestException, Injectable } from '@nestjs/common';
import { OrderRepository } from './order.repository';
import { OrderDto } from './order.dto';
import { InfoUsersService } from '../../infoUsers/infoUsers.service';

@Injectable()
export class OrderService {
  constructor(
    private orderRepository: OrderRepository,
    private InfoUsersService: InfoUsersService,
  ) {}

  async getAll() {
    const orders = await this.orderRepository.getAll();
    if (orders.length > 0) return orders;
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

      return await this.orderRepository.create(order);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async update(id: string, order: OrderDto) {
    const updatedOrder = await this.orderRepository.update(id, order);
    if (updatedOrder) return updatedOrder;
    else return 'Error updating order';
  }

  async delete(id: string) {
    const deletedOrder = await this.orderRepository.delete(id);
    if (deletedOrder) return deletedOrder;
    else return 'Error deleting order';
  }

  getByUserId(id: string) {
    try {
    } catch (error) {}
  }
}
