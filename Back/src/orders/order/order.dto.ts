import { ApiProperty, PartialType } from '@nestjs/swagger';
import { v4 as uuid } from 'uuid';
import {
  IsDateString,
  IsEmpty,
  IsNotEmpty,
  IsNumber,
  IsNumberString,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class OrderDto {
  @IsNumberString({ no_symbols: true })
  @IsNotEmpty()
  @ApiProperty({
    example: "12345678901",
  })
  user_id: string;

  @IsDateString()
  @IsNotEmpty()
  @ApiProperty({
    example: new Date(),
  })
  date: string;

  @IsEmpty()
  order_status: string;

  @IsUUID()
  @IsNotEmpty()
  @ApiProperty({
    example: uuid(),
  })
  mode_shipment: string;

  @IsEmpty()
  payment_status: number;
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

export class getAllOrdersOptionsDto {
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
