import { ApiProperty, PartialType } from '@nestjs/swagger';
import { v4 as uuid } from 'uuid';
import {
  IsDateString,
  IsNotEmpty,
  IsNumberString,
  IsString,
  IsUUID,
} from 'class-validator';

export class OrderDto {
  @IsNumberString({ no_symbols: true })
  @IsNotEmpty()
  @ApiProperty({
    example: uuid(),
  })
  user_id: string;

  @IsDateString()
  @IsNotEmpty()
  date: Date;
}

export class OrderDtoPartial extends PartialType(OrderDto) {}
