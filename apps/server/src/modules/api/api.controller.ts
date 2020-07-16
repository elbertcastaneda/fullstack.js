import { Controller, Get } from '@nestjs/common';

interface IMessage {
  message: string;
}

@Controller('api')
export default class ApiController {
  private readonly message = 'Hello World from Api !!!';

  @Get()
  public getMessage(): IMessage {
    return {
      message: this.message,
    };
  }
}
