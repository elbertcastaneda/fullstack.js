/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { resolve } from 'path';
import { Module } from '@nestjs/common';
import { RenderModule } from 'nest-next';
import Next from 'next';
import NextController from './next.controller';

const imports = [];

if (process.env.SSR_TYPE === 'NEXT') {
  imports.push(
    RenderModule.forRootAsync(
      Next({
        dev: process.env.NODE_ENV !== 'production',
        dir: resolve(__dirname, '../../../apps/next.views'),
      }),
      {
        viewsDir: '',
      },
    ),
  );
}

@Module({
  controllers: [NextController],
  imports,
})
export default class NextModule {}
