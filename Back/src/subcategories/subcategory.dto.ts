import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { v4 as uuid } from 'uuid';
export class SubcategoriesDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'Linea Roja(RJ)' })
  name: string;

  @IsNotEmpty()
  @IsUUID()
  @ApiProperty({ example: uuid() })
  category: uuid;
}

export class SubcategoriesUpdateDto extends PartialType(SubcategoriesDto) {}
