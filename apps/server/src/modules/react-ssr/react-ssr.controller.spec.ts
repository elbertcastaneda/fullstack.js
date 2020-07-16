import { Test, TestingModule } from '@nestjs/testing';

import ReactSsrController from './react-ssr.controller';
import RootService from './react-ssr.service';
import { MyLibraryService } from '@app/my-library';

describe('ReactSsrController', () => {
  let reactSsrController: ReactSsrController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ReactSsrController],
      providers: [RootService, MyLibraryService],
    }).compile();

    reactSsrController = app.get<ReactSsrController>(ReactSsrController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(reactSsrController.getHello()).toBe('Hello World!');
    });
  });
});
