import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { v4 as uuidv4 } from 'uuid';
import {
  productWithTypePatchDto,
  productWhitTypeDto,
  getProductsOptions,
  productWhitoutTypePatchDto,
} from './product.dto';
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
  async getAll(@Query() options: getProductsOptions) {
    if (options.limit == undefined || options.limit < 0) options.limit = 10;
    if (options.page == undefined || options.page < 0) options.page = 1;
    return await this.productsService.getAll(options);
  }

  @Get('name')
  @ApiOperation({ summary: 'Get product by name' })
  @ApiResponse({ status: 200, type: Products })
  @ApiBadGatewayResponse({ description: 'Can not get product' })
  @ApiParam({ name: 'name', type: 'string' })
  async getByName(@Query('name') name: string) {
    return await this.productsService.getByName(name);
  }

  @Get('category')
  @ApiOperation({ summary: 'Get product by category name' })
  @ApiResponse({ status: 200, type: Products })
  @ApiBadGatewayResponse({ description: 'Can not get product' })
  @ApiParam({ name: 'categoryName', type: 'string' })
  async getByCategoryName(@Query('categoryName') categoryName: string) {
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
    @Param('id', ParseUUIDPipe) id: uuidv4,
    @Body() newProduct: productWhitoutTypePatchDto,
  ) {
    return await this.productsService.update(id, newProduct);
  }

  @ApiOperation({ summary: 'Delete product' })
  @ApiResponse({ status: 200, type: Products })
  @ApiBadGatewayResponse({ description: 'Can not delete product' })
  @ApiParam({ name: 'id', type: 'uuid' })
  @Delete('delete/:id')
  async delete(@Param('id', ParseUUIDPipe) id: uuidv4) {
    return await this.productsService.delete(id);
  }
}
