import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';

export class UserEmailDto {
  @IsEmail()
  @ApiProperty({
    description: 'It should be a valid email',
    example: 'example@mail.com',
  })
  email: string;
}