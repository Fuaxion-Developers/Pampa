import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { ProductsRepository } from './product.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Products } from './product.entity';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [TypeOrmModule.forFeature([Products]), CategoriesModule],
  providers: [ProductsRepository, ProductsService],
  controllers: [ProductsController],
})
export class ProductsModule {}
