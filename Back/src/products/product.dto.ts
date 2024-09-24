import { IsDecimal, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class productWhitTypeDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Calendario Pequeño' })
  name: string;

  @IsNotEmpty()
  @IsDecimal({ decimal_digits: '2' })
  @ApiProperty({ example: 10.5 })
  price: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ example: 10 })
  stock: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Calendarios' })
  category: string;
}

export class productWithTypePatchDto extends PartialType(productWhitTypeDto) {}
