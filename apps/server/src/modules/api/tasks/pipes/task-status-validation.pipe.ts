import { PipeTransform, BadRequestException } from '@nestjs/common';
// import { TaskStatus } from '@app/common/models/task.model';

export default class TaskStatusValidationPipe implements PipeTransform {
  readonly allowedStatuses = [] as string[];

  transform(value: string): string {
    const value2Transform = value.toUpperCase();

    if (!this.isStatusValid(value2Transform)) {
      throw new BadRequestException(`'${value2Transform}' is an invalid status`);
    }

    return value2Transform;
  }

  private isStatusValid(status: string) {
    const index = this.allowedStatuses.indexOf(status);

    return index !== -1;
  }
}
