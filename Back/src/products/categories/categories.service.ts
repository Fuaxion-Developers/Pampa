import { BadRequestException, Injectable } from '@nestjs/common';
import { CategoriesRepository } from './categories.repository';
import { UUID } from 'crypto';
import { EntityManager } from 'typeorm';
import { CategoriesDto } from './categories.dto';

@Injectable()
export class CategoriesService {
  constructor(
    private CategoriesRepository: CategoriesRepository,
    private En: EntityManager,
  ) {}

  async getAll() {
    return await this.CategoriesRepository.getAll();
  }

  async getById(id: UUID) {
    if (id == null || id.length == 0)
      throw new BadRequestException('Id must be defined');
    return await this.CategoriesRepository.getById(id);
  }

  async getByName(name: string) {
    return this.CategoriesRepository.getByName(name);
  }

  async createProductType(productType: CategoriesDto) {
    try {
      await this.CategoriesRepository.create(productType);
      return 'Product type created';
    } catch (error) {
      throw new BadRequestException("Can't create product type");
    }
  }

  async update(id: UUID, productType: CategoriesDto) {
    try {
      return await this.CategoriesRepository.update(id, productType);
    } catch (error) {
      throw new BadRequestException("Can't update product type");
    }
  }

  async delete(id: UUID) {
    try {
      return await this.CategoriesRepository.delete(id);
    } catch (error) {
      throw new BadRequestException("Can't delete product type");
    }
  }
}
