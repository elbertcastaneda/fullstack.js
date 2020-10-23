import { Injectable } from '@nestjs/common';

@Injectable()
export default class NextService {
  readonly helloMessage = 'Hello World!';

  getHello(): string {
    return this.helloMessage;
  }
}
