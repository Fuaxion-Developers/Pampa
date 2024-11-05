import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { ProductsRepository } from './product.repository';
import { v4 as uuidv4 } from 'uuid';
import {
  productWhitTypeDto,
  getProductsOptions,
  productWhitoutTypePatchDto,
  productWithTypePatchDto,
} from './product.dto';
import { CategoriesService } from './categories/categories.service';
import { instanceToPlain } from 'class-transformer';
import { getAllProductDto } from './product.dto';
import { Products } from './product.entity';
import { SubCategoriesService } from 'src/subcategories/subcategory.service';
import { FilesService } from 'src/files/files.service';

@Injectable()
export class ProductsService {
  constructor(
    private productsRepository: ProductsRepository,
    private CategoriesService: CategoriesService,
    private SubCategorie: SubCategoriesService,
    private filesUpload: FilesService,
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

  async getBySubCategory(subCategoryId: uuidv4) {
    const Products =
      await this.productsRepository.getBySubCategory(subCategoryId);
    if (Products.length === 0) {
      throw new BadRequestException('SubCategory not found');
    } else {
      return Products;
    }
  }

  async getById(id: uuidv4) {
    return await this.productsRepository.getById(id);
  }

  async getByName(name: string) {
    return await this.productsRepository.getByName(name);
  }

  async productsQuantity() {
    return await this.productsRepository.productsQuantity();
  }


  async create(product: productWhitTypeDto, file: Express.Multer.File) {
    console.log('entra aca');
    if (!product.category) {
      throw new BadRequestException('Category must be defined');
    }
    const newProduct = new Products();

    if (file) {
      const image = await this.filesUpload.uploadFile({
        file,
        path: product.path,
      });
      if (!image) {
        throw new BadRequestException('Image not found');
      }
      newProduct.image_url = image.secure_url;
    } else {
      newProduct.image_url = product.image_url;
    }

    newProduct.name = product.name;
    newProduct.description = product.description;
    newProduct.price = product.price;
    newProduct.height = product.height;
    newProduct.width = product.width;
    const category = await this.CategoriesService.getByName(product.category);
    if (!category) {
      throw new BadRequestException('Category not found');
    } else {
      newProduct.category = category;
    }
    const subCategory = await this.SubCategorie.getById(product.subCategory);
    if (subCategory) {
      newProduct.subCategory = subCategory;
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

  async update(
    id: uuidv4,
    product: productWithTypePatchDto,
    file: Express.Multer.File,
  ) {
    const productToUpdate = await this.productsRepository.getById(id);
    if (file) {
      const image = await this.filesUpload.uploadFile({
        file,
        path: product.path,
      });
      if (!image) {
        throw new BadRequestException('Image not found');
      }
      productToUpdate.image_url = image.secure_url;
    }
    return await this.productsRepository.update(id, productToUpdate);
  }

  async delete(id: uuidv4) {
    return await this.productsRepository.delete(id);
  }

  async getByCategoryName(categoryName: string) {
    const category = await this.CategoriesService.getByName(categoryName);
    if (!category) {
      throw new BadRequestException('Category not found');
    }
    return await this.productsRepository.getByCategory(category.name);
  }
}
