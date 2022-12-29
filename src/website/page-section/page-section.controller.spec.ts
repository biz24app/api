import { Test, TestingModule } from '@nestjs/testing';
import { PageSectionController } from './page-section.controller';
import { PageSectionService } from './page-section.service';

describe('PageSectionController', () => {
  let controller: PageSectionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PageSectionController],
      providers: [PageSectionService],
    }).compile();

    controller = module.get<PageSectionController>(PageSectionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
