import { Injectable } from '@nestjs/common';

@Injectable()
export default class CommonService {
  private message = 'Hello from library';

  /**
   * getMessage
   */
  public getMessage(): string {
    return this.message;
  }
}
