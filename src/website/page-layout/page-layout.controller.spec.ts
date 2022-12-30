import { Test, TestingModule } from '@nestjs/testing';
import { PageLayoutController } from './page-layout.controller';
import { PageLayoutService } from './page-layout.service';

describe('PageLayoutController', () => {
  let controller: PageLayoutController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PageLayoutController],
      providers: [PageLayoutService],
    }).compile();

    controller = module.get<PageLayoutController>(PageLayoutController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
