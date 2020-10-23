import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import ApiModule from './api';
import NextModule from './next';
import HbsModule from './hbs/hbs.module';
import { typeOrmConfig } from '@server/config/typeorm.config';

@Module({
  imports: [ApiModule, HbsModule, TypeOrmModule.forRoot(typeOrmConfig), NextModule],
})
export default class MainModule {}
