import { IsDecimal, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class productDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsDecimal({ decimal_digits: '2' })
  price: number;

  @IsNotEmpty()
  @IsNumber()
  stock: number;
}

export class productWhitTypeDto extends productDto {
  @IsString()
  @IsNotEmpty()
  category: string;
}
