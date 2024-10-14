import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UUID } from 'crypto';
import { CategoriesDto, getAllCategoriesPartialDto } from './categories.dto';
import { Categories } from './categories.entity';

@Injectable()
export class CategoriesRepository {
  constructor(
    @InjectRepository(Categories)
    private productType: Repository<Categories>,
  ) {}

  async getAll(options: getAllCategoriesPartialDto) {
    if (options == undefined) {
      return await this.productType.find();
    }
    return await this.productType.find({
      skip: options.page,
      take: options.limit,
    });
  }

  async getById(id: UUID) {
    return await this.productType.findOneBy({ id });
  }

  async getByName(name: string) {
    console.log('entra aca' + name);
    return await this.productType.findOneBy({ name });
  }

  async create(productType: CategoriesDto) {
    return await this.productType.save(productType);
  }

  async update(id: UUID, productType: CategoriesDto) {
    return await this.productType.update(id, productType);
  }

  async delete(id: UUID) {
    return await this.productType.delete(id);
  }
}
