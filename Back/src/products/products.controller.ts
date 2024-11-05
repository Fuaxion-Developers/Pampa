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
  UploadedFile,
  UseInterceptors,
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
  ApiConsumes,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Products } from './product.entity';
import { FileUploadDto } from 'src/files/dtos/files.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { ValidationFile } from 'src/files/pipes/validationFiles.pipe';

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

  @Get('category/:categoryName')
  @ApiOperation({ summary: 'Get product by category name' })
  @ApiResponse({ status: 200, type: Products })
  @ApiBadGatewayResponse({ description: 'Can not get product' })
  @ApiParam({ name: 'categoryName', type: 'string' })
  async getByCategoryName(@Param('categoryName') categoryName: string) {
    return await this.productsService.getByCategoryName(categoryName);
  }

  @Get('category/subCategory/:id')
  @ApiOperation({ summary: 'Get product by subCategory name' })
  @ApiResponse({ status: 200, type: Products })
  @ApiBadGatewayResponse({ description: 'Can not get product' })
  @ApiParam({ name: 'subCategoryName', type: 'string' })
  async getBySubCategoryName(@Param('id') id: uuidv4) {
    return await this.productsService.getBySubCategory(id);
  }

  @Get('quantity')
  @ApiOperation({ summary: 'Get quantity products' })
  @ApiResponse({ status: 200, type: Number })
  @ApiBadGatewayResponse({ description: 'Can not get the quantity products' })
  async productsQuantity() {
    return await this.productsService.productsQuantity();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get product by id' })
  @ApiResponse({ status: 200, type: Products })
  @ApiBadGatewayResponse({ description: 'Can not get product' })
  @ApiParam({ name: 'id', type: 'uuid' })
  async getById(@Param('id', ParseUUIDPipe) id: uuidv4) {
    return await this.productsService.getById(id);
  }

  @ApiOperation({ summary: 'Create new product' })
  @ApiResponse({ status: 200, type: Products })
  @ApiBadGatewayResponse({ description: 'Can not create product' })
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('file'))
  @ApiBody({ type: productWhitTypeDto })
  @Post('create')
  async create(
    @Body() newProduct: productWhitTypeDto,
    @UploadedFile(ValidationFile) file: Express.Multer.File,
  ) {
    return await this.productsService.create(newProduct, file);
  }

  @ApiOperation({ summary: 'Update product' })
  @ApiResponse({ status: 200, type: Products })
  @ApiBadGatewayResponse({ description: 'Can not update product' })
  @ApiParam({ name: 'id', type: 'uuid' })
  @ApiBody({ type: productWithTypePatchDto })
  @Patch('update/:id')
  async update(
    @Param('id', ParseUUIDPipe) id: uuidv4,
    @Body() newProduct: productWithTypePatchDto,
    @UploadedFile(ValidationFile) file: Express.Multer.File,
  ) {
    return await this.productsService.update(id, newProduct, file);
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
