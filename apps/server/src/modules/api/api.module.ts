import { Module } from '@nestjs/common';

import ApiController from './api.controller';
import TasksModule from './tasks';

@Module({
  controllers: [ApiController],
  imports: [TasksModule],
})
export default class ApiModule {}
