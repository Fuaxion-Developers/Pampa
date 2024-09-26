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
import { ModeShipmentDto, ModeShipmentParcialDto } from './mode-shipment.dto';
import { v4 as uuid } from 'uuid';

@Controller('mode-shipment')
export class ModeShipmentController {
  constructor(private modeShipmentService: ModeShipmentService) {}

  @Get()
  async getAll() {
    return await this.modeShipmentService.getAll();
  }

  @Get(':id')
  async getById(@Param('id', ParseUUIDPipe) id: uuid) {
    return await this.modeShipmentService.getById(id);
  }

  @Get('name/:name')
  async getByName(@Param('name') name: string) {
    return await this.modeShipmentService.getByName(name);
  }

  @Get('price/:price')
  async getByPrice(@Param('price', ParseFloatPipe) price: number) {
    return await this.modeShipmentService.getByPrice(price);
  }

  @Post()
  async create(@Body() modeShipment: ModeShipmentDto) {
    return await this.modeShipmentService.create(modeShipment);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseUUIDPipe) id: uuid,
    @Body() modeShipment: ModeShipmentParcialDto,
  ) {
    return await this.modeShipmentService.update(id, modeShipment);
  }

  @Delete(':id')
  async delete(@Param('id', ParseUUIDPipe) id: uuid) {
    return await this.modeShipmentService.delete(id);
  }
}
