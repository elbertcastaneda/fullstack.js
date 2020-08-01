import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import Task from '@server/modules/api/tasks/task.entity';

const {
  TYPEORM_DATABASE = 'taskmanagement',
  TYPEORM_HOST = 'localhost',
  TYPEORM_LOGGING = false,
  TYPEORM_PASSWORD = 'changeme',
  TYPEORM_PORT = 5432,
  TYPEORM_SYNCHRONIZE = false,
  TYPEORM_USERNAME = 'postgres',
} = process.env;

// eslint-disable-next-line import/prefer-default-export
export const typeOrmConfig: TypeOrmModuleOptions = {
  database: TYPEORM_DATABASE,
  // entities: [`${__dirname}../**/*.entity.ts`],
  entities: [Task],
  host: TYPEORM_HOST,
  keepConnectionAlive: true,
  logging: Boolean(TYPEORM_LOGGING),
  migrations: [],
  password: TYPEORM_PASSWORD,
  port: Number(TYPEORM_PORT),
  synchronize: Boolean(TYPEORM_SYNCHRONIZE),
  type: 'postgres',
  username: TYPEORM_USERNAME,
};
