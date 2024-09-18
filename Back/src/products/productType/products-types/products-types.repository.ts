import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductsTypes } from './products-types.entity';
import { Repository } from 'typeorm';
import { UUID } from 'crypto';
import { productTypeDto } from './products-types.dto';

@Injectable()
export class ProductsTypesRepository {
  constructor(
    @InjectRepository(ProductsTypes)
    private productType: Repository<ProductsTypes>,
  ) {}

  async getAll() {
    return await this.productType.find();
  }

  async getById(id: UUID) {
    return await this.productType.findOneBy({ id });
  }

  async getByName(name: string) {
    return await this.productType.findOneBy({ name });
  }

  async create(productType: productTypeDto) {
    return await this.productType.save(productType);
  }

  async update(id: UUID, productType: productTypeDto) {
    return await this.productType.update(id, productType);
  }

  async delete(id: UUID) {
    return await this.productType.delete(id);
  }
}
