import { Controller, Get, Render } from '@nestjs/common';

import NextService from './next.service';

interface AboutProperties {
  message: string;
}

export interface IndexProperties {
  message: string;
}

@Controller('')
export default class NextController {
  readonly aboutPageMessage = 'About Page.';

  messageIndex = 'from server';

  messageAbout = 'server';

  constructor(private nextService: NextService) {}

  @Render('index')
  @Get('')
  public index(): IndexProperties {
    return { message: this.messageIndex };
  }

  @Render('about')
  @Get('about')
  public about(): AboutProperties {
    return { message: this.messageAbout };
  }
}
