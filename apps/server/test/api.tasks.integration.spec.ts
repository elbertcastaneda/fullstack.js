import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';

import request from 'supertest';

import TaskModule from '@server/modules/api/tasks';
import { TaskModel, TaskStatus } from '@app/my-library/models/task.model';

describe('api:TasksController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [TaskModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/api/tasks (GET) - Empty collection', async () => {
    const response = await request(app.getHttpServer()).get('/api/tasks');
    const { status } = response;

    expect(status).toBe(200);
    expect(response.body).toStrictEqual([]);
  });

  it('/api/tasks (POST) - Default status', async () => {
    const task = {
      description: 'React is the best library in the world',
      title: 'React is the best',
    };

    const response = await request(app.getHttpServer()).post('/api/tasks').send(task);
    const { status } = response;
    const newTask = response.body as TaskModel;

    expect(status).toBe(201);
    expect(newTask.description).toBe(task.description);
    expect(newTask.title).toBe(task.title);
    expect(newTask.status).toBe(TaskStatus.OPEN);
    expect(newTask.id).toBeTruthy();
  });
});
