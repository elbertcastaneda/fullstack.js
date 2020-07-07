import { Test, TestingModule } from '@nestjs/testing';

import RootController from './root.controller';
import RootService from './root.service';
import { MyLibraryService } from '@app/my-library';

describe('RootController', () => {
  let rootController: RootController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [RootController],
      providers: [RootService, MyLibraryService],
    }).compile();

    rootController = app.get<RootController>(RootController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(rootController.getHello()).toBe('Hello World!');
    });
  });
});
