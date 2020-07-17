import { Injectable, NotFoundException } from '@nestjs/common';
import { uuid } from 'uuidv4';
import { CreateTaskDto, GetTasksFilterDto } from '@app/my-library/dtos/api';
import { TaskModel, TaskStatus } from '@app/my-library/models/task.model';

@Injectable()
export default class TasksService {
  private tasks: TaskModel[] = [];

  getAllTasks(): TaskModel[] {
    return this.tasks;
  }

  getTasksWithFilters(filterDto: GetTasksFilterDto): TaskModel[] {
    const { status, search } = filterDto;

    let tasks = this.getAllTasks();

    if (status) {
      tasks = tasks.filter((t) => t.status === status);
    }

    if (search) {
      tasks = tasks.filter((t) => t.title.includes(search) || t.description.includes(search));
    }

    return tasks;
  }

  getTaskById(id: string): TaskModel {
    const found = this.tasks.find((t) => t.id === id);

    if (!found) {
      throw new NotFoundException(`Task with id: ${id} not found`);
    }

    return found;
  }

  createTask(createTaskDto: CreateTaskDto): TaskModel {
    const { title, description } = createTaskDto;
    const task: TaskModel = {
      description,
      id: uuid(),
      status: TaskStatus.OPEN,
      title,
    };

    this.tasks.push(task);

    return task;
  }

  updateTaskStatus(id: string, status: TaskStatus): TaskModel {
    const task = this.getTaskById(id);

    task.status = status;

    return task;
  }

  deleteTask(id: string): void {
    const found = this.getTaskById(id);

    this.tasks.splice(
      this.tasks.findIndex((t) => t.id === found.id),
      1,
    );
  }
}
