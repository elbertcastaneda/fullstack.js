import { Module } from '@nestjs/common';
import MyLibraryService from './my-library.service';

@Module({
  exports: [MyLibraryService],
  providers: [MyLibraryService],
})
export default class MyLibraryModule {}
