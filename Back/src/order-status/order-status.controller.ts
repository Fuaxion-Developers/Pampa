import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { OrderStatusService } from './order-status.service';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { OrderStatusDto } from './order-status.dto';
import { v4 as uuid } from 'uuid';

@Controller('order-status')
@ApiTags('order-status')
export class OrderStatusController {
  constructor(private orderStatusService: OrderStatusService) {}

  @ApiOperation({ summary: 'Get all order status' })
  @ApiResponse({ status: 200, type: [OrderStatusDto] })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  @Get()
  async getAll() {
    return await this.orderStatusService.getAll();
  }

  @ApiOperation({ summary: 'Get order status by id' })
  @ApiResponse({ status: 200, type: OrderStatusDto })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  @Get(':id')
  async getById(@Param('id') id: uuid) {
    return await this.orderStatusService.getById(id);
  }

  @ApiOperation({ summary: 'Create order status' })
  @ApiResponse({ status: 201, type: OrderStatusDto })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  @ApiBody({ type: OrderStatusDto })
  @Post()
  async create(@Body() order: OrderStatusDto) {
    return await this.orderStatusService.create(order);
  }

  @ApiOperation({ summary: 'Update order status' })
  @ApiResponse({ status: 200, type: OrderStatusDto })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  @ApiBody({ type: OrderStatusDto })
  @Patch(':id')
  async update(@Param('id') id: uuid, @Body() order: OrderStatusDto) {
    return await this.orderStatusService.update(id, order);
  }

  @ApiOperation({ summary: 'Delete order status' })
  @ApiResponse({ status: 200, type: OrderStatusDto })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  @Delete(':id')
  async delete(@Param('id') id: uuid) {
    return await this.orderStatusService.delete(id);
  }
}
