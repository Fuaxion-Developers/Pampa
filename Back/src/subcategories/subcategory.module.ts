import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubcategoriesController } from './subcategory.controller';
import { SubCategoriesService } from './subcategory.service';
import { SubcategoriesRepository } from './subcategory.repository';
import { SubCategories } from './subcategory.entity';
import { CategoriesModule } from 'src/products/categories/categories.module';

@Module({
  imports: [TypeOrmModule.forFeature([SubCategories]), CategoriesModule],
  providers: [SubcategoriesRepository, SubCategoriesService],
  controllers: [SubcategoriesController],
  exports: [SubCategoriesService],
})
export class SubcategoriesModule {}
