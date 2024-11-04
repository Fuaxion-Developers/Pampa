import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SubCategories } from './subcategory.entity';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { SubcategoriesDto, SubcategoriesUpdateDto } from './subcategory.dto';

@Injectable()
export class SubcategoriesRepository {
  constructor(
    @InjectRepository(SubCategories)
    private subcategoriesRepository: Repository<SubCategories>,
  ) {}

  async getAll() {
    return await this.subcategoriesRepository.find();
  }

  async getById(id: uuidv4) {
    return await this.subcategoriesRepository.findOneBy({ id });
  }

  async getByCategorieId(id: uuidv4) {
    return await this.subcategoriesRepository.find({
      where: { category: { id } },
    });
  }

  async getByCategorieName(categoryName: string) {
    return await this.subcategoriesRepository.findOne({
      where: { category: { name: categoryName } },
    });
  }

  async getByName(categoryName: string) {
    return await this.subcategoriesRepository.findOne({
      where: { name: categoryName },
    });
  }

  async create(productType: SubcategoriesDto) {
    return await this.subcategoriesRepository.save(productType);
  }

  async update(id: uuidv4, SubCategorie: SubcategoriesUpdateDto) {
    return await this.subcategoriesRepository.update(id, SubCategorie);
  }

  async delete(id: uuidv4) {
    return await this.subcategoriesRepository.delete(id);
  }
}
