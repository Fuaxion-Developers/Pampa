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
import { CategoriesService } from './categories.service';
import { UUID } from 'crypto';
import { CategoriesDto, getCategoriesOptionsDto } from './categories.dto';
import { v4 as uuid } from 'uuid';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiConsumes,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { ValidationFile } from 'src/files/pipes/validationFiles.pipe';

@Controller('categories')
@ApiTags('Categories')
export class CategoriesController {
  constructor(private CategoriesService: CategoriesService) {}

  @ApiOperation({ summary: 'Get all categories' })
  @ApiResponse({ status: 200, type: [CategoriesDto] })
  @ApiBadRequestResponse({ description: 'There are no categories' })
  @Get()
  async getAll() {
    return await this.CategoriesService.getAll();
  }

  @Get('name')
  @ApiOperation({ summary: 'Get category by name' })
  @ApiResponse({ status: 200, type: CategoriesDto })
  @ApiBadRequestResponse({ description: 'Bad request' })
  @ApiParam({ name: 'name', type: String })
  async getByName(@Query('name') name: string) {
    return await this.CategoriesService.getByName(name);
  }

  @Get('quantity')
  @ApiOperation({ summary: 'Get categories quantity' })
  @ApiResponse({ status: 200, type: Number })
  @ApiBadRequestResponse({ description: 'Bad request' })
  async categiriesQuantity() {
    return this.CategoriesService.categoriesQuantity();
  }

  @ApiOperation({ summary: 'Get category by id' })
  @ApiResponse({ status: 200, type: CategoriesDto })
  @ApiBadRequestResponse({ description: 'Bad request' })
  @ApiParam({ name: 'id', type: uuid })
  @Get(':id')
  async getById(@Param('id', ParseUUIDPipe) id: UUID) {
    return await this.CategoriesService.getById(id);
  }

  @ApiOperation({ summary: 'Create category' })
  @ApiResponse({ status: 201, type: CategoriesDto })
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('file'))
  @ApiBadRequestResponse({ description: 'Bad request' })
  @ApiBody({ type: CategoriesDto })
  @Post('create')
  async create(
    @Body() newProductType: CategoriesDto,
    @UploadedFile(ValidationFile) file: Express.Multer.File,
  ) {
    return await this.CategoriesService.createProductType(newProductType, file);
  }

  @ApiOperation({ summary: 'Update category' })
  @ApiResponse({ status: 200, type: CategoriesDto })
  @ApiBadRequestResponse({ description: 'Bad request' })
  @ApiParam({ name: 'id', type: uuid })
  @ApiBody({ type: CategoriesDto })
  @Patch('update/:id')
  async update(
    @Body() newProductType: CategoriesDto,
    @Param('id', ParseUUIDPipe) id: UUID,
    @UploadedFile(ValidationFile) file: Express.Multer.File,
  ) {
    return await this.CategoriesService.update(id, file, newProductType);
  }

  @ApiOperation({ summary: 'Delete category' })
  @ApiResponse({ status: 200, type: CategoriesDto })
  @ApiBadRequestResponse({ description: 'Bad request' })
  @ApiParam({ name: 'id', type: uuid })
  @Delete('delete/:id')
  async delete(@Param('id', ParseUUIDPipe) id: UUID) {
    return await this.CategoriesService.delete(id);
  }
}
