import { Injectable } from '@nestjs/common';

@Injectable()
export default class RootService {
  readonly helloMessage = 'Hello World!';

  getHello(): string {
    return this.helloMessage;
  }
}
