import { IsNotEmpty, IsString } from 'class-validator';

export class productTypeDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}
