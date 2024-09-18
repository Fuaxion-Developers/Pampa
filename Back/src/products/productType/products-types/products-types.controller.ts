import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ProductsTypesService } from './products-types.service';
import { UUID } from 'crypto';
import { productTypeDto } from './products-types.dto';

@Controller('products-types')
export class ProductsTypesController {
  constructor(private productsTypesService: ProductsTypesService) {}

  @Get()
  async getAll() {
    return await this.productsTypesService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: UUID) {
    return await this.productsTypesService.getById(id);
  }

  @Get('name/:name')
  async getByName(@Param('name') name: string) {
    return await this.productsTypesService.getByName(name);
  }

  @Post('create')
  async create(@Body() newProductType: productTypeDto) {
    return await this.productsTypesService.createProductType(newProductType);
  }

  @Patch('update/:id')
  async update(@Body() newProductType: productTypeDto, @Param('id') id: UUID) {
    return await this.productsTypesService.update(id, newProductType);
  }

  @Delete('delete/:id')
  async delete(@Param('id') id: UUID) {
    return await this.productsTypesService.delete(id);
  }
}
