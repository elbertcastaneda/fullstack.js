import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { TaskModel, TaskStatus } from '@app/common/models/task.model';

@Entity()
export default class Task extends BaseEntity implements TaskModel {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({ enum: ['OPEN', 'IN_PROGRESS', 'DONE'], name: 'status', type: 'enum' })
  status: TaskStatus;

  constructor(id = uuid().toUpperCase(), title = '', description = '', status = TaskStatus.OPEN) {
    super();

    this.id = id;
    this.title = title;
    this.description = description;
    this.status = status;
  }
}
