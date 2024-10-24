import { BadRequestException, Injectable } from '@nestjs/common';
import { OrderDetailRepository } from './order-detail.repository';
import {
  getAllOrderDetailsOptionsDto,
  OrderDetailDto,
  OrderDetailDtoPartial,
} from './order-detail.dto';
import { ProductsRepository } from 'src/products/product.repository';

@Injectable()
export class OrderDetailService {
  constructor(
    private orderDetailRepository: OrderDetailRepository,
    private productRepo: ProductsRepository,
  ) {}

  async getAll(options: getAllOrderDetailsOptionsDto) {
    const orderDetail = await this.orderDetailRepository.getAll(options);
    if (orderDetail.length > 0) return orderDetail;
    else return 'No order detail found';
  }

  async getById(id: string) {
    return await this.orderDetailRepository.getById(id);
  }

  async getAllByOrder(id: string) {
    return await this.orderDetailRepository.getAllByOrder(id);
  }

  async getByOrder(id: string, options: getAllOrderDetailsOptionsDto) {
    const orderDetail = await this.orderDetailRepository.getByOrder(
      id,
      options,
    );
    if (orderDetail.length > 0) return orderDetail;
    else return 'No order detail found';
  }

  async create(order: OrderDetailDto) {
    const product = await this.productRepo.getById(order.product);
    if (!product) throw new BadRequestException('Product not found');

    await this.orderDetailRepository.create(order);
    return 'Order detail created';
  }

  async update(id: string, order: OrderDetailDtoPartial) {
    await this.orderDetailRepository.update(id, order);
    return 'Order detail updated';
  }

  async delete(id: string) {
    await this.orderDetailRepository.delete(id);
    return 'Order detail deleted';
  }
}
