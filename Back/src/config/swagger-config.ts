import { ApiQuery } from "@nestjs/swagger";

export const PageApiQueries = {
    name: 'page',
    required: false,
    description: 'Número de página para consulta de respuesta',
    example: 1,
};

export const LimitApiQueries = {
    name: 'limit',
    required: false,
    description: 'Cantidad de resultados por página',
    example: 10,
}

export const CUITLApiQueries = {
    name: 'cuitl',
    required: true,
    description: 'Número CUIT/CUIL del usuario a consultar',
    example: '12345678901',
}

export const EmailApiQueries = {
    name: 'email',
    required: true,
    description: 'Correo electrónico del usuario a consultar',
    example: 'example@mail.com',
}