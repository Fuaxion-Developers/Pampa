import { Controller, Injectable, NotFoundException } from '@nestjs/common';
import { SubcategoriesRepository } from './subcategory.repository';
import { v4 as uuidv4 } from 'uuid';
import { SubcategoriesDto, SubcategoriesUpdateDto } from './subcategory.dto';

@Injectable()
export class SubCategoriesService {
  constructor(
    private readonly subcategoriesRepository: SubcategoriesRepository,
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

  async getByCategorie(id: uuidv4) {
    console.log(id);

    const subCategories = await this.subcategoriesRepository.getByCategorie(id);
    if (subCategories.length === 0) {
      throw new NotFoundException('There are no subcategories');
    }
    return subCategories;
  }

  async create(subcategory: SubcategoriesDto) {
    console.log(subcategory);
    return await this.subcategoriesRepository.create(subcategory);
  }

  async update(id: uuidv4, subcategorie: SubcategoriesUpdateDto) {
    return await this.subcategoriesRepository.update(id, subcategorie);
  }

  async delete(id: uuidv4) {
    return await this.subcategoriesRepository.delete(id);
  }
}
