import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsStrongPassword } from 'class-validator';

export class UpdatePasswordDto {
  @IsNotEmpty()
  @IsEmail(
    {},
    {
      message: 'Correo electrónico inválido',
    },
  )
  @ApiProperty({
    description: 'Debe ser un email registrado.',
    example: 'example@mail.com',
  })
  email: string;

  @IsNotEmpty()
  @ApiProperty({
    description: 'Confirma la contraseña actual.',
    example: 'Pass*123',
  })
  currentPass: string;

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
        'La nueva contraseña debe tener como mínimo 8 carácteres, incluyendo una letra mayúscula, una letra minúscula, un número y un carácter especial.',
    },
  )
  @ApiProperty({
    description:
      'La nueva contraseña debe tener como mínimo 8 carácteres, incluyendo una letra mayúscula, una letra minúscula, un número y un carácter especial.',
    example: 'Pass*123',
  })
  newPass: string;

  @IsNotEmpty()
  @ApiProperty({
    description: 'Confirma la nueva contraseña.',
    example: 'Pass*123',
  })
  confirmNewPass: string;
}
