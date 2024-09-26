import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsDecimal, IsNotEmpty, IsString } from 'class-validator';

export class ModeShipmentDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'DHL' })
  name: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'DHL' })
  description: string;

  @IsNotEmpty()
  @IsDecimal({ decimal_digits: '2' })
  @ApiProperty({ example: 10.5 })
  price: number;
}

export class ModeShipmentParcialDto extends PartialType(ModeShipmentDto) {}
