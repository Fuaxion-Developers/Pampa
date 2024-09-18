import { Injectable } from '@nestjs/common';
import { OrderRepository } from './order.repository';
import { OrderDto } from './order.dto';

@Injectable()
export class OrderService {
  constructor(private orderDetailRepository: OrderRepository) {}

  async getAll() {
    const orders = await this.orderDetailRepository.getAll();
    if (orders.length > 0) return orders;
    else return 'No orders found';
  }

  async getById(id: string) {
    const order = await this.orderDetailRepository.getById(id);
    if (order) return order;
    else return 'Order not found';
  }

  async create(order: OrderDto) {
    const newOrder = await this.orderDetailRepository.create(order);
    if (newOrder) return newOrder;
    else return 'Error creating order';
  }

  async update(id: string, order: OrderDto) {
    const updatedOrder = await this.orderDetailRepository.update(id, order);
    if (updatedOrder) return updatedOrder;
    else return 'Error updating order';
  }

  async delete(id: string) {
    const deletedOrder = await this.orderDetailRepository.delete(id);
    if (deletedOrder) return deletedOrder;
    else return 'Error deleting order';
  }

  getByUserId(id: string) {
    try {
    } catch (error) {}
  }
}
