import { ApiProperty, PartialType } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';

export class CategoriesDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'Calendarios',
  })
  name: string;
}

export class getCategoriesOptionsDto {
  @IsNumber()
  @IsOptional()
  @ApiProperty({
    example: 10,
  })
  limit: number;

  @IsNumber()
  @IsOptional()
  @ApiProperty({
    example: 1,
  })
  page: number;
}

export class getAllCategoriesPartialDto extends PartialType(
  getCategoriesOptionsDto,
) {}
