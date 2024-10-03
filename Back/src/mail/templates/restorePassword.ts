import { SendEmailDto } from "../dtos/sendEmail.dto";

export const fillTemplate = (body: SendEmailDto) => {
    const { sendTo, params } = body

    return`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Restablecer contraseña</title>
        </head>
        <body>
            <div>
                <h1>Restaurar contraseña</h1>
                <p>La cuenta asociada a este correo ha solicitado restaurar contraseña.</p>
                <p></p>
                <p>Use el siguiente enlace para restablecer su contraseña:</p>
                <p>${params.resetUrl}</p>
                <p></p>
                <p>Si usted no hizo la solicitud por favor ignore este correo.</p>
                <p></p>
                <p>¡Gracias por confiar en nosotros!</p>
                <p>Atentamente,</p>
                <p>Equipo Pampa</p>
            </div>
        </body>
        </html>
    `;
}