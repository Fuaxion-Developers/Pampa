import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { UUID } from 'crypto';
import { CategoriesDto } from './categories.dto';
import { v4 as uuid } from 'uuid';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@Controller('categories')
@ApiTags('Categories')
export class CategoriesController {
  constructor(private CategoriesService: CategoriesService) {}

  @ApiOperation({ summary: 'Get all categories' })
  @ApiResponse({ status: 200, type: [CategoriesDto] })
  @ApiBadRequestResponse({ description: 'Bad request' })
  @Get()
  async getAll() {
    return await this.CategoriesService.getAll();
  }

  @ApiOperation({ summary: 'Get category by id' })
  @ApiResponse({ status: 200, type: CategoriesDto })
  @ApiBadRequestResponse({ description: 'Bad request' })
  @ApiParam({ name: 'id', type: uuid })
  @Get(':id')
  async getById(@Param('id', ParseUUIDPipe) id: UUID) {
    return await this.CategoriesService.getById(id);
  }

  @ApiOperation({ summary: 'Get category by name' })
  @ApiResponse({ status: 200, type: CategoriesDto })
  @ApiBadRequestResponse({ description: 'Bad request' })
  @ApiParam({ name: 'name', type: String })
  @Get('name/:name')
  async getByName(@Param('name') name: string) {
    return await this.CategoriesService.getByName(name);
  }

  @ApiOperation({ summary: 'Create category' })
  @ApiResponse({ status: 201, type: CategoriesDto })
  @ApiBadRequestResponse({ description: 'Bad request' })
  @ApiBody({ type: CategoriesDto })
  @Post('create')
  async create(@Body() newProductType: CategoriesDto) {
    return await this.CategoriesService.createProductType(newProductType);
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
  ) {
    return await this.CategoriesService.update(id, newProductType);
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
