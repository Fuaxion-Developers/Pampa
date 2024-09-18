import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { OrderDetailService } from './order-detail.service';
import { OrderDetailDto } from './order-detail.dto';

@Controller('order-detail')
export class OrderDetailController {
  constructor(private orderDetailService: OrderDetailService) {}

  @Get()
  async getAll() {
    return await this.orderDetailService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return await this.orderDetailService.getById(id);
  }

  @Get('order/:id')
  async getByOrder(@Param('id') id: string) {
    return await this.orderDetailService.getByOrder(id);
  }

  @Post('create')
  async create(@Body() order: OrderDetailDto) {
    return await this.orderDetailService.create(order);
  }

  @Patch('update/:id')
  async update(@Param('id') id: string, @Body() order: OrderDetailDto) {
    return await this.orderDetailService.update(id, order);
  }
}
