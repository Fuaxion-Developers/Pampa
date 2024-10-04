import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { ProductsRepository } from './product.repository';
import { v4 as uuidv4 } from 'uuid';
import {
  productWithTypePatchDto,
  productWhitTypeDto,
  getProductsOptions,
} from './product.dto';
import { CategoriesService } from './categories/categories.service';
import { instanceToPlain } from 'class-transformer';
import { getAllProductDto } from './product.dto';

@Injectable()
export class ProductsService {
  constructor(
    private productsRepository: ProductsRepository,
    private CategoriesService: CategoriesService,
  ) {}

  async getAll(options: getProductsOptions) {
    if (options == undefined) {
      const option = new getAllProductDto();
      option.limit = 10;
      option.page = 1;
      options = option;
    }
    options.page = options.limit * (options.page - 1);
    const products = await this.productsRepository.getAll(options);
    if (products.length === 0) return 'No products found';
    else return instanceToPlain(products);
  }

  async getById(id: uuidv4) {
    return await this.productsRepository.getById(id);
  }

  async getByName(name: string) {
    return await this.productsRepository.getByName(name);
  }

  async create(product: productWhitTypeDto) {
    if (!product.category) {
      throw new BadRequestException('Category must be defined');
    }
    const category = await this.CategoriesService.getByName(product.category);
    if (!category) {
      throw new BadRequestException('Category not found');
    }
    const existingProduct = await this.productsRepository.getByName(
      product.name,
    );
    if (existingProduct) {
      throw new ConflictException('Product already exists');
    }
    product.category = category.id;
    await this.productsRepository.create(product);
    return 'Product created';
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
