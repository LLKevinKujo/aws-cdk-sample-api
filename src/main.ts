import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as bodyParser from 'body-parser';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.use(bodyParser.json({limit: '50mb'}));
  app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
  app.useGlobalPipes(new ValidationPipe({transform: true}));
  // app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('api/v1');
  await app.listen(3000);
}
bootstrap();
