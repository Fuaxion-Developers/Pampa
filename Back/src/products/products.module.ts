import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { ProductsRepository } from './product.repository';
import { ProductsTypesRepository } from './productType/products-types/products-types.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Products } from './product.entity';
import { ProductsTypes } from './productType/products-types/products-types.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Products, ProductsTypes])],
  providers: [ProductsRepository, ProductsService, ProductsTypesRepository],
  controllers: [ProductsController],
})
export class ProductsModule {}
