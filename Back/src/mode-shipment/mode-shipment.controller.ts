import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseFloatPipe,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { ModeShipmentService } from './mode-shipment.service';
import {
  ApiBadRequestResponse,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';
import { ModeShipmentDto, ModeShipmentParcialDto } from './mode-shipment.dto';
import { v4 as uuid } from 'uuid';

@Controller('mode-shipment')
export class ModeShipmentController {
  constructor(private modeShipmentService: ModeShipmentService) {}

  @ApiOperation({ summary: 'Get all mode shipment' })
  @ApiResponse({ status: 200, type: [ModeShipmentDto] })
  @ApiBadRequestResponse({ description: 'There are no mode shipment' })
  @Get()
  async getAll() {
    return await this.modeShipmentService.getAll();
  }

  @ApiOperation({ summary: 'Get mode shipment by id' })
  @ApiResponse({ status: 200, type: ModeShipmentDto })
  @ApiBadRequestResponse({ description: 'Id must be defined' })
  @ApiBadRequestResponse({ description: 'Mode shipment not found' })
  @Get(':id')
  async getById(@Param('id', ParseUUIDPipe) id: uuid) {
    return await this.modeShipmentService.getById(id);
  }

  @ApiOperation({ summary: 'Get mode shipment by name' })
  @ApiResponse({ status: 200, type: ModeShipmentDto })
  @ApiBadRequestResponse({ description: 'Name must be defined' })
  @ApiBadRequestResponse({ description: 'Mode shipment not found' })
  @Get('name/:name')
  async getByName(@Param('name') name: string) {
    return await this.modeShipmentService.getByName(name);
  }

  @ApiOperation({ summary: 'Get mode shipment by price' })
  @ApiResponse({ status: 200, type: ModeShipmentDto })
  @ApiBadRequestResponse({ description: 'Price must be defined' })
  @ApiBadRequestResponse({ description: 'Mode shipment not found' })
  @Get('price/:price')
  async getByPrice(@Param('price', ParseFloatPipe) price: number) {
    return await this.modeShipmentService.getByPrice(price);
  }

  @ApiOperation({ summary: 'Create mode shipment' })
  @ApiResponse({ status: 201, type: ModeShipmentDto })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  @Post()
  async create(@Body() modeShipment: ModeShipmentDto) {
    return await this.modeShipmentService.create(modeShipment);
  }

  @ApiOperation({ summary: 'Update mode shipment' })
  @ApiResponse({ status: 200, type: ModeShipmentDto })
  @ApiBadRequestResponse({ description: 'Id must be defined' })
  @ApiBadRequestResponse({ description: 'Mode shipment not found' })
  @Patch(':id')
  async update(
    @Param('id', ParseUUIDPipe) id: uuid,
    @Body() modeShipment: ModeShipmentParcialDto,
  ) {
    return await this.modeShipmentService.update(id, modeShipment);
  }

  @ApiOperation({ summary: 'Delete mode shipment' })
  @ApiResponse({ status: 200, type: ModeShipmentDto })
  @ApiBadRequestResponse({ description: 'Id must be defined' })
  @ApiBadRequestResponse({ description: 'Mode shipment not found' })
  @Delete(':id')
  async delete(@Param('id', ParseUUIDPipe) id: uuid) {
    return await this.modeShipmentService.delete(id);
  }
}
