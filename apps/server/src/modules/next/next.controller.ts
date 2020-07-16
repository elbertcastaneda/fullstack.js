import { Controller, Get, Render } from '@nestjs/common';

interface AboutProps {
  message: string;
}

export interface IndexProps {
  message: string;
}

@Controller('')
export default class NextController {
  messageIndex = 'from server';

  messageAbout = 'server';

  @Render('index')
  @Get()
  public index(): IndexProps {
    return { message: this.messageIndex };
  }

  @Render('about')
  @Get('about')
  public about(): AboutProps {
    return { message: this.messageAbout };
  }
}
