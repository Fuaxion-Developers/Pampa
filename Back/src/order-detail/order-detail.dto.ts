import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, IsUUID } from 'class-validator';
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
