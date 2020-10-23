import { INestApplication } from '@nestjs/common';
import request from 'supertest';

import createTestingModule from './utils/create-testing-module';
import TasksModule from '@server/modules/api/tasks';
import { TaskModel, TaskStatus } from '@app/common/models/task.model';

describe('api:TasksController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture = await createTestingModule({ imports: [TasksModule] });

    app = moduleFixture.createNestApplication();

    await app.init();
  });

  afterEach(async () => {
    await app.close();
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
