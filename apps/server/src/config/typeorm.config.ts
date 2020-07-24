import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import Task from '@server/modules/api/tasks/task.entity';

// eslint-disable-next-line import/prefer-default-export
export const typeOrmConfig: TypeOrmModuleOptions = {
  database: 'taskmanagement',
  // entities: [`${__dirname}../**/*.entity.ts`],
  entities: [Task],
  host: 'localhost',
  keepConnectionAlive: true,
  password: 'changeme',
  port: 5432,
  synchronize: true,
  type: 'postgres',
  username: 'postgres',
};
