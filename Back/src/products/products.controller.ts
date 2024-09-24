import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ProductsService } from './products.service';
import { v4 as uuidv4 } from 'uuid';
import { productWithTypePatchDto, productWhitTypeDto } from './product.dto';
import {
  ApiBadGatewayResponse,
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Products } from './product.entity';

@ApiTags('Products')
@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @ApiOperation({ summary: 'Get all products' })
  @ApiResponse({ status: 200, type: [Products] })
  @ApiBadGatewayResponse({ description: 'Can not get products' })
  @Get()
  async getAll() {
    return await this.productsService.getAll();
  }

  @ApiOperation({ summary: 'Get product by id' })
  @ApiResponse({ status: 200, type: Products })
  @ApiBadGatewayResponse({ description: 'Can not get product' })
  @ApiParam({ name: 'id', type: 'uuid' })
  @Get(':id')
  async getById(@Param('id') id: uuidv4) {
    return await this.productsService.getById(id);
  }
  @ApiOperation({ summary: 'Get product by name' })
  @ApiResponse({ status: 200, type: Products })
  @ApiBadGatewayResponse({ description: 'Can not get product' })
  @ApiParam({ name: 'name', type: 'string' })
  @Get('name/:name')
  async getByName(@Param('name') name: string) {
    return await this.productsService.getByName(name);
  }

  @ApiOperation({ summary: 'Get product by category name' })
  @ApiResponse({ status: 200, type: Products })
  @ApiBadGatewayResponse({ description: 'Can not get product' })
  @ApiParam({ name: 'categoryName', type: 'string' })
  @Get('category/:categoryName')
  async getByCategoryName(@Param('categoryName') categoryName: string) {
    return await this.productsService.getByCategoryName(categoryName);
  }

  @ApiOperation({ summary: 'Create new product' })
  @ApiResponse({ status: 200, type: Products })
  @ApiBadGatewayResponse({ description: 'Can not create product' })
  @ApiBody({ type: productWhitTypeDto })
  @Post('create')
  async create(@Body() newProduct: productWhitTypeDto) {
    return await this.productsService.create(newProduct);
  }

  @ApiOperation({ summary: 'Update product' })
  @ApiResponse({ status: 200, type: Products })
  @ApiBadGatewayResponse({ description: 'Can not update product' })
  @ApiParam({ name: 'id', type: 'uuid' })
  @ApiBody({ type: productWithTypePatchDto })
  @Patch('update/:id')
  async update(
    @Param('id') id: uuidv4,
    @Body() newProduct: productWithTypePatchDto,
  ) {
    return await this.productsService.update(id, newProduct);
  }

  @ApiOperation({ summary: 'Delete product' })
  @ApiResponse({ status: 200, type: Products })
  @ApiBadGatewayResponse({ description: 'Can not delete product' })
  @ApiParam({ name: 'id', type: 'uuid' })
  @Get('delete/:id')
  async delete(@Param('id') id: uuidv4) {
    return await this.productsService.delete(id);
  }
}
