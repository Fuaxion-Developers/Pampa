import { Controller, Injectable, NotFoundException } from '@nestjs/common';
import { SubcategoriesRepository } from './subcategory.repository';
import { v4 as uuidv4 } from 'uuid';
import { SubcategoriesDto, SubcategoriesUpdateDto } from './subcategory.dto';
import { CategoriesService } from 'src/products/categories/categories.service';

@Injectable()
export class SubCategoriesService {
  constructor(
    private readonly subcategoriesRepository: SubcategoriesRepository,
    private readonly cate: CategoriesService,
  ) {}

  async getAll() {
    const subCategories = await this.subcategoriesRepository.getAll();
    if (subCategories.length === 0) {
      throw new NotFoundException('There are no subcategories');
    }
    return subCategories;
  }

  async getById(id: uuidv4) {
    const subCategorie = await this.subcategoriesRepository.getById(id);
    if (!subCategorie) {
      throw new NotFoundException('There is no subcategory with this id');
    }
    return subCategorie;
  }

  async getByCategorieId(id: uuidv4) {
    const subCategories =
      await this.subcategoriesRepository.getByCategorieId(id);
    if (subCategories.length === 0) {
      throw new NotFoundException('There are no subcategories');
    }
    return subCategories;
  }

  async getByCategorieName(categoryName: string) {
    const category = await this.subcategoriesRepository.getByName(categoryName);
    if (!category) {
      throw new NotFoundException('There are no subcategories');
    }
    return category;
  }

  async create(subcategory: SubcategoriesDto) {
    const subcategorie = await this.subcategoriesRepository.getByCategorieName(
      subcategory.name,
    );
    if (subcategorie) {
      throw new NotFoundException(
        `There is already a subcategory with the name of ${subcategorie.name}`,
      );
    }
    const category = await this.cate.getById(subcategory.category);
    if (!category) {
      throw new NotFoundException('Category not found');
    } else {
      subcategory.category = category.id;
    }
    return await this.subcategoriesRepository.create(subcategory);
  }

  async update(id: uuidv4, subcategorie: SubcategoriesUpdateDto) {
    return await this.subcategoriesRepository.update(id, subcategorie);
  }

  async delete(id: uuidv4) {
    return await this.subcategoriesRepository.delete(id);
  }
}
