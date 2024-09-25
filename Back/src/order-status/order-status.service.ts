import { Injectable } from '@nestjs/common';
import { OrderStatusRepository } from './order-status.repository';
import { OrderStatusDto } from './order-status.dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class OrderStatusService {
  constructor(private orderStatusRepository: OrderStatusRepository) {}

  async getAll() {
    return await this.orderStatusRepository.getAll();
  }

  async getById(id: uuid) {
    return await this.orderStatusRepository.getById(id);
  }

  async getStatusByName(name: string) {
    return await this.orderStatusRepository.getByName(name);
  }

  async create(order: OrderStatusDto) {
    return await this.orderStatusRepository.create(order);
  }

  async update(id: uuid, order: OrderStatusDto) {
    return await this.orderStatusRepository.update(id, order);
  }

  async delete(id: uuid) {
    return await this.orderStatusRepository.delete(id);
  }
}
