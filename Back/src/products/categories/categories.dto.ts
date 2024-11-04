import { ApiProperty, PartialType } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  IsUrl,
} from 'class-validator';

export class CategoriesDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'Calendarios',
  })
  name: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    example: 'https://example.com',
  })
  path: any;

  @IsOptional()
  @IsUrl()
  @ApiProperty({
    example: 'https://example.com',
  })
  image: string;
}

export class CategoriesWhitoutPathDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'Calendarios',
  })
  name: string;

  @IsOptional()
  @IsUrl()
  @ApiProperty({
    example: 'https://example.com',
  })
  image: string;
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
