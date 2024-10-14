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
  productWhitoutTypeDto,
  productWhitoutTypePatchDto,
} from './product.dto';
import { CategoriesService } from './categories/categories.service';
import { instanceToPlain } from 'class-transformer';
import { getAllProductDto } from './product.dto';
import { Products } from './product.entity';

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
    const newProduct = new Products();
    newProduct.name = product.name;
    newProduct.image_url = product.image_url;
    newProduct.description = product.description;
    newProduct.price = product.price;
    newProduct.stock = product.stock;
    const category = await this.CategoriesService.getByName(product.category);
    if (!category) {
      throw new BadRequestException('Category not found');
    } else {
      newProduct.category = category;
    }
    const existingProduct = await this.productsRepository.getByName(
      product.name,
    );
    if (existingProduct) {
      throw new ConflictException('Product already exists');
    }
    await this.productsRepository.create(newProduct);
    return 'Product created';
  }

  async update(id: uuidv4, product: productWhitoutTypePatchDto) {
    return await this.productsRepository.update(id, product);
  }

  async delete(id: uuidv4) {
    return await this.productsRepository.delete(id);
  }

  async getByCategoryName(categoryName: uuidv4) {
    console.log('entra aca');
    const category = await this.CategoriesService.getById(categoryName);
    if (!category) {
      throw new BadRequestException('Category not found');
    }
    console.log('entra aca2');
    console.log(category);
    return await this.productsRepository.getByCategory(category.name);
  }
}
