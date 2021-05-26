import path from 'path';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import MainModule from './modules';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(MainModule);

  await app
    .setViewEngine('hbs')
    .setBaseViewsDir(path.join(__dirname, 'views'))
    .listen(3000, () => {
      Logger.debug('> Ready on http://localhost:3000');
    });
}

bootstrap().then(
  () => {
    Logger.debug('> Running http://localhost:3000');
  },
  (error: Error) => {
    Logger.error(error.message);
  },
);
