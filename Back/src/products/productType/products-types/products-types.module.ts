import { Module } from '@nestjs/common';
import { ProductsTypesController } from './products-types.controller';
import { ProductsTypesRepository } from './products-types.repository';
import { ProductsTypesService } from './products-types.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsTypes } from './products-types.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductsTypes])],
  controllers: [ProductsTypesController],
  providers: [ProductsTypesService, ProductsTypesRepository],
})
export class ProductsTypesModule {}
