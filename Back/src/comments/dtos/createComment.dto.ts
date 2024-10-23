import { ApiProperty } from '@nestjs/swagger';
import {
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  Max,
  Min,
} from 'class-validator';

export class CreateCommentDto {
  @IsUUID()
  @ApiProperty({
    description: 'Debe ser un UUID de usuario válido.',
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  userId: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'Comentario relacionado con el(los) producto(s) adquirido(s).',
  })
  comment: string;

  @IsNumber(
    {
      maxDecimalPlaces: 1,
    },
    {
      message:
        'El valor debe ser un número decimal con hasta una cifra decimal.',
    },
  )
  @Min(1, {
    message: 'La calificación mínima es 1.',
  })
  @Max(5, {
    message: 'La calificación máxima es 5.',
  })
  @ApiProperty({
    description:
      'Debe ser una calificación entre 1 y 5, se aceptan valores decimales.',
    example: 4.8,
  })
  rate: number;
}
