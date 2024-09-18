import { BadRequestException, Injectable } from '@nestjs/common';
import { ProductsTypesRepository } from './products-types.repository';
import { UUID } from 'crypto';
import { EntityManager } from 'typeorm';
import { productTypeDto } from './products-types.dto';

@Injectable()
export class ProductsTypesService {
  constructor(
    private ProductsTypesRepository: ProductsTypesRepository,
    private En: EntityManager,
  ) {}

  async getAll() {
    return await this.ProductsTypesRepository.getAll();
  }

  async getById(id: UUID) {
    if (id == null || id.length == 0)
      throw new BadRequestException('Id must be defined');
    return await this.ProductsTypesRepository.getById(id);
  }

  async getByName(name: string) {
    return this.ProductsTypesRepository.getByName(name);
  }

  async createProductType(productType: productTypeDto) {
    try {
      await this.ProductsTypesRepository.create(productType);
      return 'Product type created';
    } catch (error) {
      throw new BadRequestException("Can't create product type");
    }
  }

  async update(id: UUID, productType: productTypeDto) {
    try {
      return await this.ProductsTypesRepository.update(id, productType);
    } catch (error) {
      throw new BadRequestException("Can't update product type");
    }
  }

  async delete(id: UUID) {
    try {
      return await this.ProductsTypesRepository.delete(id);
    } catch (error) {
      throw new BadRequestException("Can't delete product type");
    }
  }
}
