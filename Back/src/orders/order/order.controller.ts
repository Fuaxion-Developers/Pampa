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
import { OrderService } from './order.service';
import { OrderDto, OrderDtoPartial } from './order.dto';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@Controller('order')
@ApiTags('Order')
export class OrderController {
  constructor(private orderService: OrderService) {}

  @ApiOperation({ summary: 'Get all orders' })
  @ApiResponse({ status: 200, type: [OrderDto] })
  @ApiBadRequestResponse({ status: 400, description: 'Bad Request' })
  @Get()
  async getAll() {
    return await this.orderService.getAll();
  }

  @ApiOperation({ summary: 'Get order by id' })
  @ApiResponse({ status: 200, type: OrderDto })
  @ApiBadRequestResponse({ status: 400, description: 'Bad Request' })
  @ApiBadRequestResponse({ status: 404, description: 'Not Found' })
  @ApiParam({ name: 'id', type: String })
  @Get(':id')
  async getById(@Param('id', ParseUUIDPipe) id: string) {
    return await this.orderService.getById(id);
  }

  @ApiOperation({ summary: 'Get orders by user id' })
  @ApiResponse({ status: 200, type: [OrderDto] })
  @ApiBadRequestResponse({ status: 400, description: 'Bad Request' })
  @ApiBadRequestResponse({ status: 404, description: 'Not Found' })
  @ApiParam({ name: 'id', type: String })
  @Get('user/:id')
  async getByUserId(@Param('id', ParseUUIDPipe) id: string) {
    return await this.orderService.getByUserId(id);
  }

  @ApiOperation({ summary: 'Create order' })
  @ApiResponse({ status: 200, type: OrderDto })
  @ApiBadRequestResponse({ status: 400, description: 'Bad Request' })
  @ApiBody({ type: OrderDto })
  @Post('create')
  async create(@Body() order: OrderDto) {
    return await this.orderService.create(order);
  }

  @ApiOperation({ summary: 'Update order' })
  @ApiResponse({ status: 200, type: OrderDto })
  @ApiBadRequestResponse({ status: 400, description: 'Bad Request' })
  @ApiBadRequestResponse({ status: 404, description: 'Not Found' })
  @ApiParam({ name: 'id', type: String })
  @ApiBody({ type: OrderDto })
  @Patch(':id')
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() order: OrderDtoPartial,
  ) {
    return await this.orderService.update(id, order);
  }

  @ApiOperation({ summary: 'Delete order' })
  @ApiResponse({ status: 200, type: OrderDto })
  @ApiBadRequestResponse({ status: 400, description: 'Bad Request' })
  @ApiBadRequestResponse({ status: 404, description: 'Not Found' })
  @ApiParam({ name: 'id', type: String })
  @Delete(':id')
  async delete(@Param('id', ParseUUIDPipe) id: string) {
    return await this.orderService.delete(id);
  }
}
