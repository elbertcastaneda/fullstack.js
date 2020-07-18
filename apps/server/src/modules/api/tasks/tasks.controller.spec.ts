import { Test, TestingModule } from '@nestjs/testing';

import TasksController from './tasks.controller';
import TasksService from './tasks.service';

import { TaskStatus } from '@app/my-library/models/task.model';

describe('TasksController', () => {
  let tasksController: TasksController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TasksController],
      providers: [TasksService],
    }).compile();

    tasksController = app.get(TasksController);
  });

  describe('controller:api:tasks', () => {
    it('.getTasks - should return empty array by default', () => {
      expect(tasksController.getTasks({})).toStrictEqual([]);
    });

    it('.createTask - should return a correct created object', () => {
      const taskDraft = { description: 'world', title: 'hello' };
      const newTask = tasksController.createTask(taskDraft);

      expect(newTask.description).toBe(taskDraft.description);
      expect(newTask.title).toBe(taskDraft.title);
      expect(newTask.status).toBe(TaskStatus.OPEN);
      expect(newTask.id).toBeTruthy();
    });
  });
});
