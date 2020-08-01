import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { TaskStatus } from '@app/common/models/task.model';

@Entity()
export default class Task extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column()
  title?: string;

  @Column()
  description?: string;

  @Column({ enum: ['OPEN', 'IN_PROGRESS', 'DONE'], name: 'status', type: 'enum' })
  status?: TaskStatus;
}
