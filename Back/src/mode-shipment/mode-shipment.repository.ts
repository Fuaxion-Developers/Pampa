import { Injectable } from '@nestjs/common';
import { ModeShipment } from './mode-shipment.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { v4 as uuid } from 'uuid';
import { ModeShipmentDto, ModeShipmentParcialDto } from './mode-shipment.dto';

@Injectable()
export class ModeShipmentRepository {
  constructor(
    @InjectRepository(ModeShipment)
    private readonly modeShipmentRepository: Repository<ModeShipment>,
  ) {}

  async getAll() {
    return await this.modeShipmentRepository.find();
  }

  async getById(id: uuid) {
    return await this.modeShipmentRepository.findOne({ where: { id } });
  }

  async getByName(name: string) {
    return await this.modeShipmentRepository.findOne({ where: { name } });
  }

  async getByPrice(price: number) {
    return await this.modeShipmentRepository.findOne({ where: { price } });
  }

  async create(modeShipment: ModeShipmentDto) {
    return await this.modeShipmentRepository.save(modeShipment);
  }

  async update(id: uuid, modeShipment: ModeShipmentParcialDto) {
    return await this.modeShipmentRepository.update(id, modeShipment);
  }

  async delete(id: uuid) {
    return await this.modeShipmentRepository.softDelete(id);
  }
}
