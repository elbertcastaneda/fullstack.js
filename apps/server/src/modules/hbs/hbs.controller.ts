import { Controller, Get, Render } from '@nestjs/common';

import HbsService from './hbs.service';
import { CommonService } from '@app/common';

interface IMessage {
  defaultCounter?: number;
  message: string;
}

@Controller()
export default class HbsController {
  readonly aboutPageMessage = 'About Page.';

  messageIndex = 'from server';

  messageAbout = 'server';

  constructor(private libraryService: CommonService, private rootService: HbsService) {}

  @Get('library/about')
  @Render('about/index.hbs')
  public showAboutFromLibraryMessage(): IMessage {
    return {
      message: this.libraryService.getMessage(),
    };
  }

  @Get('about')
  @Render('about/index.hbs')
  public showAboutPage(): IMessage {
    return {
      message: this.aboutPageMessage,
    };
  }
}
