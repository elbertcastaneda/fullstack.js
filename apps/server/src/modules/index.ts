import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import ApiModule from './api';
import ReactSsrModule from './react-ssr';
import NextModule from './next';
import { typeOrmConfig } from '@server/config/typeorm.config';

const imports = [ApiModule, TypeOrmModule.forRoot(typeOrmConfig)];

if (process.env.SSR_TYPE === 'NEXT') {
  imports.push(NextModule);
} else {
  imports.push(ReactSsrModule);
}

@Module({
  imports,
})
export default class MainModule {}
