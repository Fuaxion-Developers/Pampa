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
import { OrderDto } from './order.dto';

@Controller('order')
export class OrderController {
  constructor(private orderService: OrderService) {}

  @Get()
  async getAll() {
    return await this.orderService.getAll();
  }

  @Get(':id')
  async getById(@Param('id', ParseUUIDPipe) id: string) {
    return await this.orderService.getById(id);
  }

  // @Get('user/:id')
  // async getByUserId(@Param('id') id: string) {
  //   return await this.orderService.getByUserId(id);
  // }

  @Post('create')
  async create(@Body() order: OrderDto) {
    return await this.orderService.create(order);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() order: OrderDto) {
    return await this.orderService.update(id, order);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.orderService.delete(id);
  }
}
