import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { SubCategoriesService } from './subcategory.service';
import { SubcategoriesDto, SubcategoriesUpdateDto } from './subcategory.dto';

@Controller('subcategories')
export class SubcategoriesController {
  constructor(private readonly SubCategoriesService: SubCategoriesService) {}

  @Get()
  async getAll() {
    return await this.SubCategoriesService.getAll();
  }

  @Get('/categories/:id')
  async getByCategorie(@Param('id') id: string) {
    return await this.SubCategoriesService.getByCategorie(id);
  }

  @Get('/:id')
  async getById(id: string) {
    return await this.SubCategoriesService.getById(id);
  }

  @Post('/')
  async create(@Body() subCategorie: SubcategoriesDto) {
    return await this.SubCategoriesService.create(subCategorie);
  }

  @Patch('/:id')
  async update(
    @Param('id') id: string,
    @Body() subCategorie: SubcategoriesUpdateDto,
  ) {
    return await this.SubCategoriesService.update(id, subCategorie);
  }

  @Delete('/:id')
  async delete(@Param('id') id: string) {
    return await this.SubCategoriesService.delete(id);
  }
}
