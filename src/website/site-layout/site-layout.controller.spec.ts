import { Test, TestingModule } from '@nestjs/testing';
import { SiteLayoutController } from './site-layout.controller';
import { SiteLayoutService } from './site-layout.service';

describe('SiteLayoutController', () => {
  let controller: SiteLayoutController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SiteLayoutController],
      providers: [SiteLayoutService],
    }).compile();

    controller = module.get<SiteLayoutController>(SiteLayoutController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
