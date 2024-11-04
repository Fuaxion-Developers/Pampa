import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { CategoriesRepository } from './categories.repository';
import { UUID } from 'crypto';
import { FilesService } from '../../files/files.service';
import { v4 as uuid } from 'uuid';
import { CategoriesDto } from './categories.dto';
import { Categories } from './categories.entity';

@Injectable()
export class CategoriesService {
  constructor(
    private CategoriesRepository: CategoriesRepository,
    private FilesService: FilesService,
  ) {}

  async getAll() {
    const categoies = await this.CategoriesRepository.getAll();
    if (!categoies || categoies.length == 0)
      throw new BadRequestException('There are no categories');
    return categoies;
  }

  async getById(id: UUID) {
    if (id == null || id.length == 0)
      throw new BadRequestException('Id must be defined');
    return await this.CategoriesRepository.getById(id);
  }

  async getByName(name: string) {
    return this.CategoriesRepository.getByName(name);
  }

  async createProductType(
    productType: CategoriesDto,
    file: Express.Multer.File,
  ) {
    const categorie = await this.CategoriesRepository.getByName(
      productType.name,
    );
    if (categorie) {
      throw new ConflictException('Category already exists');
    }

    const newCategory = new Categories();
    newCategory.name = productType.name;
    if (file) {
      const image = await this.FilesService.uploadFile({
        file,
        path: productType.path,
      });
      if (!image) {
        throw new BadRequestException('Image can not be uploaded');
      }
      productType.image = image.secure_url;
    } else {
      newCategory.image = productType.image;
    }
    await this.CategoriesRepository.create(newCategory);
    return 'Product type created';
  }

  async update(
    id: uuid,
    file: Express.Multer.File,
    productType: CategoriesDto,
  ) {
    try {
      if (file) {
        const image = await this.FilesService.uploadFile({
          file,
          path: productType.path,
        });
        if (!image) {
          throw new BadRequestException('Image can not be uploaded');
        }
        productType.image = image.secure_url;
      }
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
