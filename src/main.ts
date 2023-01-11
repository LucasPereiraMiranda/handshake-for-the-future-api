import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  Logger.warn(
    'NODE_ENV',
    process.env.NODE_ENV,
    'TYPEORM_HOST',
    process.env.TYPEORM_HOST,
    'TYPEORM_PASSWORD',
    process.env.TYPEORM_PASSWORD,
    'TYPEORM_DATABASE',
    process.env.TYPEORM_DATABASE,
    'TYPEORM_PORT',
    process.env.TYPEORM_PORT,
    'TYPEORM_LOGGING',
    process.env.TYPEORM_LOGGING,
  );
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
