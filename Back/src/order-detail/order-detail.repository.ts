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
      skip: (options.page-1)*options.limit,
      take: options.limit,
    });
  }

  async getById(id: string) {
    return await this.order.findOne({
      where: { id },
    });
  }

  async getAllByOrderPaged(id: string, options: getAllOrderDetailsOptionsDto) {
    return await this.order.find({
      where: { order: { id } },
      skip: (options.page-1)*options.limit,
      take: options.limit,
    });
  }

  async getAllByOrder(id: string) {
    return await this.order.find({
      where: { order: { id } },
    });
  }

  async getAllByProductId(id: string) {
    return await this.order.find({
      where: { product: { id } },
    });
  }

  async getAllByDate(year: string, month: string, day: string) {
    const allByDate = this.order
      .createQueryBuilder('orders')
      .innerJoinAndSelect('orders.order', 'order-details')

    if(day) {
      allByDate.andWhere('EXTRACT(DAY FROM order-details.date) = :day', { day })
    }

    if(month) {
      allByDate.andWhere('EXTRACT(MONTH FROM order-details.date) = :month', { month })
    }

    if(year) {
      allByDate.andWhere('EXTRACT(YEAR FROM order-details.date) = :year', { year })
    }

    const results = await allByDate.innerJoinAndSelect('orders.product', 'product')
      .getMany();
    
    return results;
  }

  async getLowestSixQuantity() {
    const betterSixQuantity = await this.order
      .createQueryBuilder('order_details')
      .innerJoin('order_details.product', 'product')
      .select('product.*')
      .addSelect('SUM(order_details.quantity)', 'totalQuantity')
      .groupBy('product.id')
      .orderBy('SUM(order_details.quantity)', 'ASC')
      .limit(6)
      .getRawMany()

    return betterSixQuantity;
  }

  async getLowestSixSales() {
    const betterSixSales = await this.order
      .createQueryBuilder('order_details')
      .innerJoin('order_details.product', 'product')
      .select('product.*')
      .addSelect('SUM(product.price * order_details.quantity)', 'totalSales')
      .groupBy('product.id')
      .orderBy('SUM(product.price * order_details.quantity)', 'ASC')
      .limit(6)
      .getRawMany()

    return betterSixSales;
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
