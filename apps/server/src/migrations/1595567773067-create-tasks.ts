/* eslint-disable class-methods-use-this */
/* eslint-disable import/prefer-default-export */
import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTasks1595567773067 implements MigrationInterface {
  name = 'CreateTasks1595567773067';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "CREATE TYPE \"task_status_enum\" AS ENUM('OPEN', 'IN_PROGRESS', 'DONE')",
    );
    await queryRunner.query(
      // eslint-disable-next-line max-len
      'CREATE TABLE "task" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "description" character varying NOT NULL, "status" "task_status_enum" NOT NULL, CONSTRAINT "PK_fb213f79ee45060ba925ecd576e" PRIMARY KEY ("id"))',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE "task"');
    await queryRunner.query('DROP TYPE "task_status_enum"');
  }
}
