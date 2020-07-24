import { Repository, EntityRepository } from 'typeorm';
import Task from './task.entity';

@EntityRepository(Task)
export default class TaskRepository extends Repository<Task> {}
