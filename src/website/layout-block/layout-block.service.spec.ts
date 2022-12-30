import { Test, TestingModule } from '@nestjs/testing';
import { LayoutBlockService } from './layout-block.service';

describe('LayoutBlockService', () => {
  let service: LayoutBlockService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LayoutBlockService],
    }).compile();

    service = module.get<LayoutBlockService>(LayoutBlockService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
