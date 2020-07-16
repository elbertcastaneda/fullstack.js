import { Injectable } from '@nestjs/common';

@Injectable()
export default class ReactSsrService {
  readonly helloMessage = 'Hello World!';

  getHello(): string {
    return this.helloMessage;
  }
}
