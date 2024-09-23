import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { env } from './config/envCon';
import * as cors from 'cors';
import { json } from 'express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

const version = require('../package.json').version;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors());
  app.use(json());
  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }),
  );

  const swaagerConfig = new DocumentBuilder()
    .setTitle('Pampa')
    .setDescription('')
    .setVersion(version)
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, swaagerConfig);

  SwaggerModule.setup('api', app, document, {
    explorer: true,
    swaggerOptions: {
      docExpansion: 'none',
    },
  });

  await app.listen(env.port);
}
bootstrap();
