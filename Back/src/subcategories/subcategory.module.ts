import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubcategoriesController } from './subcategory.controller';
import { SubCategoriesService } from './subcategory.service';
import { SubcategoriesRepository } from './subcategory.repository';
import { SubCategories } from './subcategory.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SubCategories])],
  providers: [SubcategoriesRepository, SubCategoriesService],
  controllers: [SubcategoriesController],
  exports: [SubCategoriesService],
})
export class SubcategoriesModule {}
