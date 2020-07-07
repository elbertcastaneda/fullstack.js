import { Module } from '@nestjs/common';
import RootModule from './root';

@Module({
  imports: [RootModule],
})
export default class MainModule {}
