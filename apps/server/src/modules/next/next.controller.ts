import { Controller, Get, Render } from '@nestjs/common';

interface AboutProperties {
  message: string;
}

export interface IndexProperties {
  message: string;
}

@Controller('')
export default class NextController {
  messageIndex = 'from server';

  messageAbout = 'server';

  @Render('index')
  @Get()
  public index(): IndexProperties {
    return { message: this.messageIndex };
  }

  @Render('about')
  @Get('about')
  public about(): AboutProperties {
    return { message: this.messageAbout };
  }
}
