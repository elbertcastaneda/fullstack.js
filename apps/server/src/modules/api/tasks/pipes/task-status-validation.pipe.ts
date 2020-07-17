import { PipeTransform, BadRequestException } from '@nestjs/common';
// import { TaskStatus } from '@app/my-library/models/task.model';

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
    const idx = this.allowedStatuses.indexOf(status);

    return idx !== -1;
  }
}
