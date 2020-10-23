import { Injectable } from '@nestjs/common';

@Injectable()
export default class HbsService {
  readonly helloMessage = 'Hello World!';

  getHello(): string {
    return this.helloMessage;
  }
}
