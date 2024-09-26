import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { OrderRepository } from './order.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Orders } from './order.entity';
import { InfoUsersService } from 'src/infoUsers/infoUsers.service';
import { InfoUsersRepository } from 'src/infoUsers/infoUsers.repository';
import { InfoUsersModule } from 'src/infoUsers/infoUsers.module';
import { OrderDetailController } from 'src/order-detail/order-detail.controller';
import { OrderDetailModule } from 'src/order-detail/order-detail.module';
import { OrderStatusModule } from 'src/order-status/order-status.module';
import { ModeShipmentModule } from 'src/mode-shipment/mode-shipment.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Orders]),
    InfoUsersModule,
    OrderDetailModule,
    OrderStatusModule,
    ModeShipmentModule,
  ],
  providers: [OrderService, OrderRepository],
  controllers: [OrderController],
  exports: [OrderService],
})
export class OrderModule {}
