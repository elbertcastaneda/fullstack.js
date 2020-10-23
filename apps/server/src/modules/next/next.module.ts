import path from 'path';
import { Module } from '@nestjs/common';
import { RenderModule } from 'nest-next';
import Next from 'next';

import NextController from './next.controller';
import NextService from './next.service';

@Module({
  controllers: [NextController],
  imports: [
    RenderModule.forRootAsync(
      Next({
        dev: process.env.NODE_ENV !== 'production',
        dir: path.resolve(__dirname, '../../../apps/web.next'),
      }),
      {
        viewsDir: '',
      },
    ),
  ],
  providers: [NextService],
})
export default class NextModule {}
