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
  user_id: string;

  @IsDateString()
  @IsNotEmpty()
  date: Date;
}
