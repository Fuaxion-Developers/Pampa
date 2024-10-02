import { SendEmailDto } from "../dtos/sendEmail.dto";

export const fillTemplate = (body: SendEmailDto) => {
    const { sendTo, params } = body

    return`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Bienvenido</title>
        </head>
        <body>
            <div>
                <h1>Bienvenido/a a Pampa!</h1>
                <p>${params.name}, su cuenta en nuestro sitio ha sido creada exitosamente.</p>
                <p>Detalles de la cuenta:</p>
                <ul>
                    <li><strong>Usuario:</strong> ${sendTo}</li>
                    <li><strong>Contrasena:</strong> La contrasena que has proporcionado</li>
                </ul>
                <p>¡Gracias por confiar en nosotros!</p>
                <p>Atentamente,</p>
                <p>Equipo Pampa</p>
            </div>
        </body>
        </html>
    `;
}