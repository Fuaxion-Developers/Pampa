import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class OrderStatusDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'PENDING',
  })
  status: string;
}
