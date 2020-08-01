import { IsNotEmpty } from 'class-validator';

export default class CreateTaskDto {
  @IsNotEmpty()
  title = '';

  @IsNotEmpty()
  description = '';
}
