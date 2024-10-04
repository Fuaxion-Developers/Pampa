import { IsDecimal, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';
import { URL } from 'url';

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
  @IsNumber()
  @ApiProperty({ example: 10 })
  stock: number;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'Calendario Pequeño' })
  description: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'https://example.com' })
  image_url: URL;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Calendarios' })
  category: string;
}

export class productWithTypePatchDto extends PartialType(productWhitTypeDto) {}

export class getAllProductDto {
  @IsNumber()
  @ApiProperty({ example: 1 })
  page: number;

  @IsNumber()
  @ApiProperty({ example: 10 })
  limit: number;
}

export class getProductsOptions extends PartialType(getAllProductDto) {}
