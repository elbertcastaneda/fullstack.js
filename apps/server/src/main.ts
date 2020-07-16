import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';

import register from '@react-ssr/nestjs-express/register';
import MainModule from '@server/modules';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(MainModule);

  if (!(process.env.SSR_TYPE === 'NEXT')) {
    await register(app);
  }

  app.setViewEngine('hbs');
  await app.listen(3000, () => {
    // eslint-disable-next-line no-console
    console.log('> Ready on http://localhost:3000');
  });
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
(async () => {
  await bootstrap();
})();
