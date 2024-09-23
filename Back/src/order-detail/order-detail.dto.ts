import { IsNotEmpty, IsNumber, IsString, IsUUID } from 'class-validator';
import { v4 as uuidv4 } from 'uuid';
export class OrderDetailDto {
  @IsUUID()
  @IsNotEmpty()
  order: uuidv4;

  @IsUUID()
  @IsNotEmpty()
  product: string;

  @IsNumber()
  @IsNotEmpty()
  quantity: number;
}
