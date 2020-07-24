import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import TasksController from './tasks.controller';
import TasksService from './tasks.service';
import TaskRepository from './task.repository';

@Module({
  controllers: [TasksController],
  imports: [TypeOrmModule.forFeature([TaskRepository])],
  providers: [TasksService],
})
export default class TasksModule {}
