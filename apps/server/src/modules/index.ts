import { Module } from '@nestjs/common';
import RootModule from './root';
import NextModule from './next';

const imports = [];

if (process.env.SSR_TYPE === 'NEXT') {
  imports.push(NextModule);
} else {
  imports.push(RootModule);
}

@Module({
  imports,
})
export default class MainModule {}
