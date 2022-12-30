import { Test, TestingModule } from '@nestjs/testing';
import { LayoutBlockController } from './layout-block.controller';
import { LayoutBlockService } from './layout-block.service';

describe('LayoutBlockController', () => {
  let controller: LayoutBlockController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LayoutBlockController],
      providers: [LayoutBlockService],
    }).compile();

    controller = module.get<LayoutBlockController>(LayoutBlockController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
