import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { OrderRepository } from './order.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Orders } from './order.entity';
import { OrderDetailModule } from 'src/order-detail/order-detail.module';
import { OrderStatusModule } from 'src/order-status/order-status.module';
import { ModeShipmentModule } from 'src/mode-shipment/mode-shipment.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Orders]),
    OrderDetailModule,
    UsersModule,
    OrderStatusModule,
    ModeShipmentModule,
  ],
  providers: [OrderService, OrderRepository],
  controllers: [OrderController],
  exports: [OrderService],
})
export class OrderModule {}
