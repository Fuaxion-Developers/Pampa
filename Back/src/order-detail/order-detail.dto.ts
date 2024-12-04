import { ApiProperty, PartialType } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
import { v4 as uuidv4 } from 'uuid';
export class OrderDetailDto {
  @IsUUID()
  @IsNotEmpty()
  @ApiProperty({
    example: uuidv4(),
  })
  order: string;

  @IsUUID()
  @IsNotEmpty()
  @ApiProperty({
    example: uuidv4(),
  })
  product: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    example: 2,
  })
  quantity: number;
}

export class OrderDetailDtoPartial extends PartialType(OrderDetailDto) {}

export class getAllOrderDetailsOptionsDto {
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

export class getAllOrderDetailsByDateDto {
  @IsString()
  @IsOptional()
  @ApiProperty({
    example: '2024',
  })
  year?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    example: '08',
  })
  month?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    example: '24',
  })
  day?: string;
}
