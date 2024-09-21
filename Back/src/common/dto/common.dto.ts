import { Type } from 'class-transformer';
import { IsEmail, IsInt, IsString, Length } from 'class-validator';

export class PaginationDto {
  @IsInt()
  @Type(() => Number)
  page: number = 1;

  @IsInt()
  @Type(() => Number)
  limit: number = 10;
}

export class CuitlDto {
  @IsString()
  @Type(() => String)
  @Length(11, 11, {
    message: 'El CUIT/CUIL debe tener una lóngitud de 11 caracteres numéricos.',
  })
  cuitl: string;
}

export class EmailDto {
  @IsEmail(
    {},
    {
      message: 'Debe ser un email válido.',
    },
  )
  @Type(() => String)
  email: string;
}
