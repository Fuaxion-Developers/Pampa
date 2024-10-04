import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsDecimal, IsNotEmpty, IsNumber, IsString } from 'class-validator';

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
  @IsNumber({ maxDecimalPlaces: 2, allowNaN: false, allowInfinity: false })
  @ApiProperty({ example: 10.5 })
  price: number;
}

export class ModeShipmentParcialDto extends PartialType(ModeShipmentDto) {}
