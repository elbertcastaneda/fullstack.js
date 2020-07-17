import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import TasksService from './tasks.service';
import TaskStatusValidationPipe from './pipes/task-status-validation.pipe';
import { CreateTaskDto, GetTasksFilterDto } from '@app/my-library/dtos/api';
import { TaskModel, TaskStatus } from '@app/my-library/models/task.model';

@Controller('api/tasks')
export default class TasksController {
  constructor(private taskService: TasksService) {}

  @Get()
  getTasks(@Query(ValidationPipe) filterDto: GetTasksFilterDto): TaskModel[] {
    if (Object.keys(filterDto).length > 0) {
      return this.taskService.getTasksWithFilters(filterDto);
    }

    return this.taskService.getAllTasks();
  }

  @Get('/:id')
  getTaskById(@Param('id') id: string): TaskModel {
    return this.taskService.getTaskById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createTask(@Body() createTaskDto: CreateTaskDto): TaskModel {
    return this.taskService.createTask(createTaskDto);
  }

  @Patch('/:id/status')
  updateTaskStatus(
    @Param('id') id: string,
    @Body('status', TaskStatusValidationPipe) status: TaskStatus,
  ): TaskModel {
    return this.taskService.updateTaskStatus(id, status);
  }

  @Delete('/:id')
  deleteTask(@Param('id') id: string): void {
    this.taskService.deleteTask(id);
  }
}
