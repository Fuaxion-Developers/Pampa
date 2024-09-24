import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CategoriesDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'Calendarios',
  })
  name: string;
}
