import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ProductsService } from './products.service';
import { v4 as uuidv4 } from 'uuid';
import { productDto, productWhitTypeDto } from './product.dto';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  async getAll() {
    return await this.productsService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: uuidv4) {
    return await this.productsService.getById(id);
  }

  @Get('name/:name')
  async getByName(@Param('name') name: string) {
    return await this.productsService.getByName(name);
  }

  @Get('category/:categoryName')
  async getByCategoryName(@Param('categoryName') categoryName: string) {
    return await this.productsService.getByCategoryName(categoryName);
  }

  @Post('create')
  async create(@Body() newProduct: productWhitTypeDto) {
    return await this.productsService.create(newProduct);
  }

  @Patch('update/:id')
  async update(
    @Param('id') id: uuidv4,
    @Body() newProduct: productWhitTypeDto,
  ) {
    return await this.productsService.update(id, newProduct);
  }

  @Get('delete/:id')
  async delete(@Param('id') id: uuidv4) {
    return await this.productsService.delete(id);
  }
}
