import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsStrongPassword, Length } from 'class-validator';

export class CreateUserDto {
  @Length(2, 20, {
    message: 'El nombre debe tener una longitud entre 2 y 20 carácteres.',
  })
  @ApiProperty({
    description: 'El nombre debe tener una longitud entre 2 y 20 carácteres.',
    example: 'John',
  })
  first_name: string;

  @Length(2, 20, {
    message: 'El apellido debe tener una longitud entre 2 y 20 carácteres.',
  })
  @ApiProperty({
    description: 'El apellido debe tener una longitud entre 2 y 20 carácteres.',
    example: 'Doe',
  })
  last_name: string;

  @Length(11, 11, {
    message: 'El CUIT/CUIL debe tener una lóngitud de 11 caracteres numéricos.'
  })
  @ApiProperty({
    description: 'El CUIT/CUIL debe tener una lóngitud de 11 caracteres numéricos.',
    example: '12345678901',
  })
  cuit_cuil: string;

  @Length(2, 20, {
    message: 'El nombre de la empresa debe tener una longitud entre 2 y 20 carácteres.'
  })
  @ApiProperty({
    description: 'El nombre de la empresa debe tener una longitud entre 2 y 20 carácteres.',
    example: 'Artistica Ejemplo',
  })
  company?: string;

  @Length(11, 15, {
    message: 'El número telefónico debe tener una lóngitud entre 11 y 15 carácteres.'
  })
  @ApiProperty({
    description: 'El número telefónico debe tener una lóngitud entre 11 y 15 carácteres.',
    example: '12345678901',
  })
  phone: string;

  @Length(2, 80, {
    message: 'La dirección debe tener una longitud máxima de 80 carácteres.'
  })
  @ApiProperty({
    description: 'La dirección debe tener una longitud máxima de 80 carácteres.',
    example: 'Avenida Alvarez Jonte 1234, CABA, Buenos Aires',
  })
  address: string;

  @Length(2, 80, {
    message: 'El nombre de la provincia debe tener una longitud máxima de 80 carácteres.'
  })
  @ApiProperty({
    description: 'El nombre de la provincia debe tener una longitud máxima de 80 carácteres.',
    example: 'Avenida Alvarez Jonte 1234, CABA, Buenos Aires',
  })
  city: string;

  @Length(2, 80, {
    message: 'El nombre de la localidad debe tener una longitud máxima de 80 carácteres.'
  })
  @ApiProperty({
    description: 'El nombre de la localidad debe tener una longitud máxima de 80 carácteres.',
    example: 'Avenida Alvarez Jonte 1234, CABA, Buenos Aires',
  })
  state: string;

  @Length(4, 8, {
    message: 'El código postal debe tener una longitud entre 4 y 8 carácteres.'
  })
  @ApiProperty({
    description: 'El código postal debe tener una longitud máxima de 10 carácteres.',
    example: '1234',
  })
  zipCode: string;

  @IsEmail(
    {},
    {
      message: 'Debe ser un email válido.',
    },
  )
  @ApiProperty({
    description: 'Debe ser un email válido.',
    example: 'example@mail.com',
  })
  email: string;

  @IsStrongPassword(
    {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    },
    {
      message:
        'La contraseña debe tener al menos 8 carácteres, incluyendo una letra mayúscula, una letra minúscula, un numero y un carácter especial.',
    },
  )
  @ApiProperty({
    description:
      'La contraseña debe tener al menos 8 carácteres, incluyendo una letra mayúscula, una letra minúscula, un numero y un carácter especial.',
    example: 'Pass*123',
  })
  password: string;
}