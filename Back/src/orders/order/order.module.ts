import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { OrderRepository } from './order.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Orders } from './order.entity';
import { Products } from 'src/products/product.entity';
import { ProductsRepository } from 'src/products/product.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Orders])],
  providers: [OrderService, OrderRepository],
  controllers: [OrderController],
})
export class OrderModule {}
