import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { env } from './config/envCon';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(env.port);
}
bootstrap();
