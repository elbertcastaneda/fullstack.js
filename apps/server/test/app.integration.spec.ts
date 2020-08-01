import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';

import request from 'supertest';

import MainModule from '../src/modules';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [MainModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterEach(async () => {
    await app.close();
  });

  it('/ (GET)', async () => {
    const { status, text } = await request(app.getHttpServer()).get('/hello');

    expect(status).toBe(200);
    expect(text).toBe('Hello World!');
  });

  it('/message (GET)', async () => {
    const { status, text } = await request(app.getHttpServer()).get('/message');

    expect(status).toBe(200);
    expect(text).toBe('Hello from library');
  });
});
