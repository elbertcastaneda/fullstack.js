import { Module } from '@nestjs/common';

import RootController from './react-ssr.controller';
import RootService from './react-ssr.service';
import { MyLibraryModule } from '@app/my-library';

@Module({
  controllers: [RootController],
  imports: [MyLibraryModule],
  providers: [RootService],
})
export default class ReactSsrModule {}
