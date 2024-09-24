import { BadRequestException, Injectable } from '@nestjs/common';
import { ProductsRepository } from './product.repository';
import { v4 as uuidv4 } from 'uuid';
import { productWithTypePatchDto, productWhitTypeDto } from './product.dto';
import { EntityManager } from 'typeorm';
import { Products } from './product.entity';
import { CategoriesService } from './categories/categories.service';

@Injectable()
export class ProductsService {
  constructor(
    private productsRepository: ProductsRepository,
    private CategoriesService: CategoriesService,
  ) {}

  async getAll() {
    const products = await this.productsRepository.getAll();
    if (products.length === 0) return 'No products found';
    else return products;
  }

  async getById(id: uuidv4) {
    return await this.productsRepository.getById(id);
  }

  async getByName(name: string) {
    return await this.productsRepository.getByName(name);
  }

  async create(product: productWhitTypeDto) {
    const category = await this.CategoriesService.getByName(product.category);
    if (!category) {
      throw new BadRequestException('Category not found');
    }
    return await this.productsRepository.create({
      name: product.name,
      price: product.price,
      stock: product.stock,
      category: category.id,
    });
  }

  async update(id: uuidv4, product: productWithTypePatchDto) {
    return await this.productsRepository.update(id, product);
  }

  async delete(id: uuidv4) {
    return await this.productsRepository.delete(id);
  }

  async getByCategoryName(categoryName: string) {
    const category = await this.CategoriesService.getByName(categoryName);
    if (!category) {
      throw new BadRequestException('Category not found');
    }

    return await this.productsRepository.getByCategory(categoryName);
  }
}
