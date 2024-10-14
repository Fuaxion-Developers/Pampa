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
import { CategoriesService } from './categories.service';
import { UUID } from 'crypto';
import { CategoriesDto, getCategoriesOptionsDto } from './categories.dto';
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
  async getAll(@Query() options: getCategoriesOptionsDto) {
    if (!options.limit) options.limit = 10;
    if (!options.page) options.page = 1;
    return await this.CategoriesService.getAll(options);
  }

  @Get('name')
  @ApiOperation({ summary: 'Get category by name' })
  @ApiResponse({ status: 200, type: CategoriesDto })
  @ApiBadRequestResponse({ description: 'Bad request' })
  @ApiParam({ name: 'name', type: String })
  async getByName(@Query('name') name: string) {
    return await this.CategoriesService.getByName(name);
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
