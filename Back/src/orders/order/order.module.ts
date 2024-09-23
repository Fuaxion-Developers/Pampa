import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { OrderRepository } from './order.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Orders } from './order.entity';
import { InfoUsersService } from 'src/infoUsers/infoUsers.service';
import { InfoUsersRepository } from 'src/infoUsers/infoUsers.repository';
import { InfoUsersModule } from 'src/infoUsers/infoUsers.module';

@Module({
  imports: [TypeOrmModule.forFeature([Orders]), InfoUsersModule],
  providers: [OrderService, OrderRepository],
  controllers: [OrderController],
})
export class OrderModule {}
