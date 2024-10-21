import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Payments } from './payments.entity';
import { PartialPaymentDto, PaymentDto } from './payments.dto';
import { PaymentRepository } from './payment.repository';

@Injectable()
export class PaymentsService {
  constructor(private readonly paymentsRepository: PaymentRepository) {}

  async getAll(): Promise<Payments[]> {
    return await this.paymentsRepository.getAll();
  }

  async getById(id: number): Promise<Payments> {
    return await this.paymentsRepository.getById(id);
  }

  async create(payments: PaymentDto): Promise<Payments> {
    return await this.paymentsRepository.create(payments);
  }

  async update(id: number, payments: PartialPaymentDto): Promise<Payments> {
    await this.paymentsRepository.update(id, payments);
    return await this.paymentsRepository.getById(id);
  }

  async delete(id: number): Promise<void> {
    await this.paymentsRepository.delete(id);
  }
}
