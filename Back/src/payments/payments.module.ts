import { Module } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { PaymentsController } from './payments.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Payments } from './payments.entity';
import { PaymentRepository } from './payment.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Payments])],
  providers: [PaymentsService, PaymentRepository],
  controllers: [PaymentsController],
  exports: [PaymentsService],
})
export class PaymentsModule {}
