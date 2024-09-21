import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class SignInDto {
  @IsNotEmpty()
  @ApiProperty({
    description: 'Debe ser un correo electrónico válido',
    example: 'example@mail.com',
  })
  email: string;

  @IsNotEmpty()
  @ApiProperty({
    description: 'Ingrese su contraseña',
    example: 'Pass*123'
  })
  password: string;
}
