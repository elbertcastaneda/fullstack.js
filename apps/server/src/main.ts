import path from 'path';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import MainModule from './modules';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(MainModule);

  app.setViewEngine('hbs');
  app.setBaseViewsDir(path.join(__dirname, 'views'));

  await app.listen(3000, () => {
    Logger.debug('> Ready on http://localhost:3000');
  });
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
(async () => {
  await bootstrap();
})();
