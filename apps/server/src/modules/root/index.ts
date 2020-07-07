import { Module } from '@nestjs/common';

import RootController from './root.controller';
import RootService from './root.service';
import { MyLibraryModule } from '@app/my-library';

@Module({
  controllers: [RootController],
  imports: [MyLibraryModule],
  providers: [RootService],
})
export default class RootModule {}
