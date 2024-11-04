import {
  IsDecimal,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  IsUrl,
  IsUUID,
} from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';
import { v4 as uuid } from 'uuid';
import { Categories } from './categories/categories.entity';
import { FileUploadDto } from 'src/files/dtos/files.dto';

export class productWhitTypeDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Calendario Pequeño' })
  name: string;

  @IsNotEmpty()
  @IsNumber({ maxDecimalPlaces: 2, allowNaN: false, allowInfinity: false })
  @ApiProperty({ example: 10.5 })
  price: number;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'Calendario Pequeño' })
  description: string;

  @IsNotEmpty()
  @ApiProperty({ example: 'https://example.com' })
  path: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'calendarios' })
  category: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ example: 1 })
  height: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ example: 1 })
  width: number;

  @IsOptional()
  @IsUUID()
  @ApiProperty({ example: uuid() })
  subCategory?: uuid;

  @IsOptional()
  @ApiProperty({ example: 'https://example.com' })
  image_url: string;
}

export class productWithTypePatchDto extends PartialType(productWhitTypeDto) {}
export class productWhitoutTypeDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Calendario Pequeño' })
  name: string;

  @IsNotEmpty()
  @IsNumber({ maxDecimalPlaces: 2, allowNaN: false, allowInfinity: false })
  @ApiProperty({ example: 10.5 })
  price: number;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'Calendario Pequeño' })
  description: string;

  @IsNotEmpty()
  @IsString()
  @IsUrl()
  @ApiProperty({ example: 'https://example.com' })
  image_url: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'calendarios' })
  category: Categories;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ example: 1 })
  height: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ example: 1 })
  width: number;

  @IsOptional()
  @IsUUID()
  @ApiProperty({ example: uuid() })
  subCategory?: uuid;
}

export class productWhitoutTypePatchDto extends PartialType(
  productWhitoutTypeDto,
) {}

export class getAllProductDto {
  @IsNumber()
  @ApiProperty({ example: 1 })
  page: number;

  @IsNumber()
  @ApiProperty({ example: 10 })
  limit: number;
}

export class getProductsOptions extends PartialType(getAllProductDto) {}
