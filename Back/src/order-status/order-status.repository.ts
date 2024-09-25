import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderStatus } from './order-status.entity';
import { Repository } from 'typeorm';
import { OrderStatusDto } from './order-status.dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class OrderStatusRepository {
  constructor(
    @InjectRepository(OrderStatus) private order: Repository<OrderStatus>,
  ) {}

  async getAll() {
    return await this.order.find();
  }

  async getById(id: uuid) {
    return await this.order.findOne({ where: { id } });
  }

  async getByName(name: string) {
    return await this.order.findOne({ where: { status: name } });
  }

  async create(order: OrderStatusDto) {
    return await this.order.save(order);
  }

  async update(id: string, order: OrderStatusDto) {
    return await this.order.update({ id }, order);
  }

  async delete(id: uuid) {
    return await this.order.softDelete({ id });
  }
}
