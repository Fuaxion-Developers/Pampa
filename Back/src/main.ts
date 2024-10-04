import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { env } from './config/envCon';
import * as cors from 'cors';
import { json } from 'express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { precargasOrderStatus } from './utils/precargas';

const version = require('../package.json').version;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors());
  app.use(json());
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transformOptions: {
        enableImplicitConversion: true,
      }
    }),
  );

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Pampa')
    .setDescription('Fabricación y venta por mayor de sellos decorativos stencil y texturadores.')
    .setVersion(version)
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);

  SwaggerModule.setup('api', app, document, {
    explorer: true,
    swaggerOptions: {
      docExpansion: 'none',
    },
  });

  precargasOrderStatus(app);

  await app.listen(env.port);
}
bootstrap();
