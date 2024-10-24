import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderDetails } from './order-detail.entity';
import { Repository } from 'typeorm';
import {
  getAllOrderDetailsOptionsDto,
  OrderDetailDto,
  OrderDetailDtoPartial,
} from './order-detail.dto';

@Injectable()
export class OrderDetailRepository {
  constructor(
    @InjectRepository(OrderDetails) private order: Repository<OrderDetails>,
  ) {}

  async getAll(options: getAllOrderDetailsOptionsDto) {
    return await this.order.find({
      skip: options.page,
      take: options.limit,
    });
  }

  async getById(id: string) {
    return await this.order.findOne({
      where: { id },
    });
  }

  async getByOrder(id: string, options: getAllOrderDetailsOptionsDto) {
    return await this.order.find({
      where: { order: { id } },
      skip: options.page,
      take: options.limit,
    });
  }

  async getAllByOrder(id: string) {
    return await this.order.find({
      where: { order: { id } },
    });
  }

  async create(order: OrderDetailDto) {
    return await this.order.save(order);
  }

  async update(id: string, order: OrderDetailDtoPartial) {
    return await this.order.update({ id }, order);
  }

  async delete(id: string) {
    return await this.order.delete({ id });
  }
}
