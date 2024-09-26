import { BadRequestException, Injectable } from '@nestjs/common';
import { OrderDetailRepository } from './order-detail.repository';
import { OrderDetailDto, OrderDetailDtoPartial } from './order-detail.dto';
import { ProductsRepository } from 'src/products/product.repository';

@Injectable()
export class OrderDetailService {
  constructor(
    private orderDetailRepository: OrderDetailRepository,
    private productRepo: ProductsRepository,
  ) {}

  async getAll() {
    const orderDetail = await this.orderDetailRepository.getAll();
    if (orderDetail.length > 0) return orderDetail;
    else return 'No order detail found';
  }

  async getById(id: string) {
    return await this.orderDetailRepository.getById(id);
  }

  async getByOrder(id: string) {
    const orderDetail = await this.orderDetailRepository.getByOrder(id);
    if (orderDetail.length > 0) return orderDetail;
    else return 'No order detail found';
  }

  async create(order: OrderDetailDto) {
    const product = await this.productRepo.getById(order.product);
    if (!product) throw new BadRequestException('Product not found');
    if (product.stock >= order.quantity) {
      await this.productRepo.update(order.product, {
        stock: product.stock - order.quantity,
      });
    } else throw new BadRequestException('Not enough stock');
    return await this.orderDetailRepository.create(order);
  }

  async update(id: string, order: OrderDetailDtoPartial) {
    return await this.orderDetailRepository.update(id, order);
  }

  async delete(id: string) {
    return await this.orderDetailRepository.delete(id);
  }
}
