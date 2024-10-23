import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Payments } from './payments.entity';
import { Repository } from 'typeorm';
import { PartialPaymentDto, PaymentDto } from './payments.dto';

@Injectable()
export class PaymentRepository {
  constructor(
    @InjectRepository(Payments)
    private paymentsRepository: Repository<Payments>,
  ) {}

  async getAll(): Promise<Payments[]> {
    return await this.paymentsRepository.find();
  }

  async getById(id: number): Promise<Payments> {
    return await this.paymentsRepository.findOne({ where: { id } });
  }

  async create(payments: PaymentDto): Promise<Payments> {
    return await this.paymentsRepository.save(payments);
  }

  async update(id: number, payments: PartialPaymentDto): Promise<Payments> {
    await this.paymentsRepository.update(id, payments);
    return await this.paymentsRepository.findOne({ where: { id } });
  }

  async delete(id: number): Promise<void> {
    await this.paymentsRepository.delete(id);
  }
}
