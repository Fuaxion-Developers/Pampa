import { Module } from '@nestjs/common';
import { OrderStatusController } from './order-status.controller';
import { OrderStatusService } from './order-status.service';
import { OrderStatusRepository } from './order-status.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderStatus } from './order-status.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OrderStatus])],
  controllers: [OrderStatusController],
  providers: [OrderStatusService, OrderStatusRepository],
  exports: [OrderStatusService],
})
export class OrderStatusModule {}
