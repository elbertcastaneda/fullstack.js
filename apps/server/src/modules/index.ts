import { Module } from '@nestjs/common';
import ApiModule from './api';
import ReactSsrModule from './react-ssr';
import NextModule from './next';

const imports = [ApiModule];

if (process.env.SSR_TYPE === 'NEXT') {
  imports.push(NextModule);
} else {
  imports.push(ReactSsrModule);
}

@Module({
  imports,
})
export default class MainModule {}
