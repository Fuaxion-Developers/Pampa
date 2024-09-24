import { Module } from '@nestjs/common';
import { OrderDetailRepository } from './order-detail.repository';
import { OrderDetailService } from './order-detail.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderDetails } from './order-detail.entity';
import { OrderDetailController } from './order-detail.controller';
import { Products } from 'src/products/product.entity';
import { ProductsRepository } from 'src/products/product.repository';

@Module({
  imports: [TypeOrmModule.forFeature([OrderDetails, Products])],
  controllers: [OrderDetailController],
  providers: [OrderDetailRepository, OrderDetailService, ProductsRepository],
  exports: [OrderDetailService],
})
export class OrderDetailModule {}
