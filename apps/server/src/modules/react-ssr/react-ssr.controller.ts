import { Controller, Get, Render } from '@nestjs/common';

import RootService from './react-ssr.service';
import { MyLibraryService } from '@app/my-library';

interface IMessage {
  message: string;
}

@Controller('')
export default class RootController {
  readonly aboutPageMessage = 'About Page.';

  readonly showHomeMessage = 'Hello NestJS.';

  constructor(private libraryService: MyLibraryService, private rootService: RootService) {}

  @Get()
  @Render('home/index.tsx')
  public showHomePage(): IMessage {
    return {
      message: this.showHomeMessage,
    };
  }

  @Get('hello')
  getHello(): string {
    return this.rootService.getHello();
  }

  @Get('message')
  getMessage(): string {
    return this.libraryService.getMessage();
  }

  @Get('library')
  @Render('home/index.tsx')
  public showLibraryMessage(): IMessage {
    const message = this.libraryService.getMessage();

    return {
      message,
    };
  }

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
