import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { OrderDetailService } from './order-detail.service';
import {
  getAllOrderDetailsOptionsDto,
  OrderDetailDto,
  OrderDetailDtoPartial,
} from './order-detail.dto';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { OrderDetails } from './order-detail.entity';

@Controller('order-detail')
@ApiTags('Order Detail')
export class OrderDetailController {
  constructor(private orderDetailService: OrderDetailService) {}

  @ApiOperation({ summary: 'Get all order details' })
  @ApiResponse({ status: 200, type: OrderDetailDto })
  @ApiBadRequestResponse({ status: 400, description: 'No order detail found' })
  @Get()
  async getAll(@Query() options: getAllOrderDetailsOptionsDto) {
    if (!options.page || options.page < 0) options.page = 0;
    if (!options.limit || options.limit < 0) options.limit = 10;
    return await this.orderDetailService.getAll(options);
  }

  @ApiOperation({ summary: 'Get order detail by order id' })
  @ApiParam({ name: 'id', type: String })
  @ApiResponse({ status: 200, type: [OrderDetails] })
  @ApiBadRequestResponse({ status: 400, description: 'Order detail not found' })
  @Get('order/:id')
  async getByOrder(
    @Query() options: getAllOrderDetailsOptionsDto,
    @Param('id', ParseUUIDPipe) id: string,
  ) {
    if (!options.page || options.page < 0) options.page = 0;
    if (!options.limit || options.limit < 0) options.limit = 10;
    return await this.orderDetailService.getByOrder(id, options);
  }

  @ApiOperation({
    summary: 'Get all order details by orders, withouth pagination',
  })
  @ApiParam({ name: 'id', type: String })
  @ApiResponse({ status: 200, type: [OrderDetails] })
  @ApiBadRequestResponse({ status: 400, description: 'Order detail not found' })
  @Get('order/all/:id')
  async getByProduct(
    @Query() options: getAllOrderDetailsOptionsDto,
    @Param('id', ParseUUIDPipe) id: string,
  ) {
    return await this.orderDetailService.getAllByOrder(id);
  }

  @ApiOperation({ summary: 'Get order detail by id' })
  @ApiParam({ name: 'id', type: String })
  @ApiResponse({ status: 200, type: OrderDetails })
  @ApiBadRequestResponse({ status: 400, description: 'Order detail not found' })
  @Get(':id')
  async getById(@Param('id', ParseUUIDPipe) id: string) {
    return await this.orderDetailService.getById(id);
  }

  @ApiOperation({ summary: 'Create order detail' })
  @ApiResponse({ status: 201, type: OrderDetails })
  @ApiBadRequestResponse({
    status: 400,
    description: 'Order detail not created',
  })
  @ApiBadRequestResponse({ status: 400, description: 'Product not found' })
  @ApiBadRequestResponse({ status: 400, description: 'Order not found' })
  @ApiBadRequestResponse({ status: 400, description: 'Not enough stock' })
  @ApiBody({ type: OrderDetailDto })
  @Post('create')
  async create(@Body() order: OrderDetailDto) {
    return await this.orderDetailService.create(order);
  }

  @ApiOperation({ summary: 'Update order detail' })
  @ApiResponse({ status: 200, type: OrderDetails })
  @ApiBadRequestResponse({
    status: 400,
    description: 'Order detail not updated',
  })
  @ApiBadRequestResponse({ status: 400, description: 'Order not found' })
  @ApiBody({ type: OrderDetailDtoPartial })
  @ApiParam({ name: 'id', type: String })
  @Patch('update/:id')
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() order: OrderDetailDtoPartial,
  ) {
    return await this.orderDetailService.update(id, order);
  }
}
