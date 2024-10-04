import { Injectable } from '@nestjs/common';
import { Products } from './product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import {
  productWithTypePatchDto,
  productWhitTypeDto,
  getAllProductDto,
  getProductsOptions,
} from './product.dto';
import { instanceToPlain } from 'class-transformer';

@Injectable()
export class ProductsRepository {
  constructor(
    @InjectRepository(Products) private product: Repository<Products>,
  ) {}

  async getAll(options: getProductsOptions) {
    return await this.product.find({ take: options.limit, skip: options.page });
  }

  async getById(id: uuidv4) {
    return await this.product.findOneBy({ id });
  }

  async getByName(name: string) {
    return await this.product.findOneBy({ name });
  }

  async create(product: productWhitTypeDto) {
    return instanceToPlain(await this.product.save(product));
  }

  async update(id: uuidv4, product: productWithTypePatchDto) {
    return await this.product.update(id, product);
  }

  async delete(id: uuidv4) {
    return await this.product.delete(id);
  }

  async getByCategory(category: uuidv4) {
    return await this.product.find({ where: { category } });
  }
}
