import { ApiProperty, PartialType } from '@nestjs/swagger';
import { v4 as uuid } from 'uuid';
import {
  IsDateString,
  IsEmpty,
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
  @ApiProperty({
    example: new Date(),
  })
  date: Date;

  @IsEmpty()
  order_status: string;
}

export class OrderDtoPartial extends PartialType(OrderDto) {}

export class OrderWithStatusDto extends OrderDto {
  @IsUUID()
  @IsNotEmpty()
  @ApiProperty({
    example: uuid(),
  })
  order_status: uuid;
}
