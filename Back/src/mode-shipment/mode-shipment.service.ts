import { BadRequestException, Injectable } from '@nestjs/common';
import { ModeShipmentRepository } from './mode-shipment.repository';
import { v4 as uuid } from 'uuid';
import { ModeShipmentDto, ModeShipmentParcialDto } from './mode-shipment.dto';

@Injectable()
export class ModeShipmentService {
  constructor(private modeShipmentRepository: ModeShipmentRepository) {}

  async getAll() {
    const MS = await this.modeShipmentRepository.getAll();
    if (!MS || MS.length == 0)
      throw new BadRequestException('There are no mode shipment');
    else return MS;
  }

  async getById(id: uuid) {
    if (!id) throw new BadRequestException('Id must be defined');
    const MS = await this.modeShipmentRepository.getById(id);
    if (!MS) throw new BadRequestException('Mode shipment not found');
    else return MS;
  }

  async getByName(name: string) {
    if (!name || name.length == 0)
      throw new BadRequestException('Name must be defined');
    const MS = await this.modeShipmentRepository.getByName(name);
    if (!MS) throw new BadRequestException('Mode shipment not found');
    else return MS;
  }

  async getByPrice(price: number) {
    if (!price) throw new BadRequestException('Price must be defined');
    const MS = await this.modeShipmentRepository.getByPrice(price);
    if (!MS) throw new BadRequestException('Mode shipment not found');
    else return MS;
  }

  async create(modeShipment: ModeShipmentDto) {
    return await this.modeShipmentRepository.create(modeShipment);
  }

  async update(id: uuid, modeShipment: ModeShipmentParcialDto) {
    if (!id) throw new BadRequestException('Id must be defined');
    if (!this.getById(id))
      throw new BadRequestException('Mode shipment not found');
    return await this.modeShipmentRepository.update(id, modeShipment);
  }

  async delete(id: uuid) {
    if (!id) throw new BadRequestException('Id must be defined');
    if (!this.getById(id))
      throw new BadRequestException('Mode shipment not found');
    return await this.modeShipmentRepository.delete(id);
  }
}
