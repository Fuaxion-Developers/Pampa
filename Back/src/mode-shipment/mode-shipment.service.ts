import { Injectable } from '@nestjs/common';
import { ModeShipmentRepository } from './mode-shipment.repository';
import { v4 as uuid } from 'uuid';
import { ModeShipmentDto, ModeShipmentParcialDto } from './mode-shipment.dto';

@Injectable()
export class ModeShipmentService {
  constructor(private modeShipmentRepository: ModeShipmentRepository) {}

  async getAll() {
    const MS = await this.modeShipmentRepository.getAll();
    return MS;
  }

  async getById(id: uuid) {
    const MS = await this.modeShipmentRepository.getById(id);
    return MS;
  }

  async getByName(name: string) {
    const MS = await this.modeShipmentRepository.getByName(name);
    return MS;
  }

  async getByPrice(price: number) {
    const MS = await this.modeShipmentRepository.getByPrice(price);
    return MS;
  }

  async create(modeShipment: ModeShipmentDto) {
    return await this.modeShipmentRepository.create(modeShipment);
  }

  async update(id: uuid, modeShipment: ModeShipmentParcialDto) {
    return await this.modeShipmentRepository.update(id, modeShipment);
  }

  async delete(id: uuid) {
    return await this.modeShipmentRepository.delete(id);
  }
}
