import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class PaymentDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: 'payment_id de mercado pago' })
  id: number;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: 'status de mercado pago' })
  status: string;
}

export class PartialPaymentDto extends PartialType(PaymentDto) {}
