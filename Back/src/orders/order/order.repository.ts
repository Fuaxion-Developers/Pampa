import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Orders } from './order.entity';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import {
  getAllOrdersOptionsDto,
  OrderDto,
  OrderDtoPartial,
  OrderWithStatusDto,
} from './order.dto';

@Injectable()
export class OrderRepository {
  constructor(@InjectRepository(Orders) private order: Repository<Orders>) {}

  async getAll(options: getAllOrdersOptionsDto) {
    return await this.order.find({ skip: options.page, take: options.limit });
  }

  async getById(id: uuid) {
    return await this.order.findOne({ where: { id } });
  }

  async getAllByUserId(id: string) {
    return await this.order.find({ where: { user_id: id } });
  }

  async create(order: OrderWithStatusDto) {
    return await this.order.save(order);
  }

  async update(id: uuid, order: OrderDtoPartial) {
    return await this.order.update({ id }, order);
  }

  async delete(id: uuid) {
    return await this.order.softDelete({ id });
  }
}
