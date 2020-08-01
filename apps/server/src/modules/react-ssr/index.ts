import { Module } from '@nestjs/common';

import RootController from './react-ssr.controller';
import RootService from './react-ssr.service';
import { CommonModule } from '@app/common';

@Module({
  controllers: [RootController],
  imports: [CommonModule],
  providers: [RootService],
})
export default class ReactSsrModule {}
