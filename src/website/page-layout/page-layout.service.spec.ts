import { Test, TestingModule } from '@nestjs/testing';
import { PageLayoutService } from './page-layout.service';

describe('PageLayoutService', () => {
  let service: PageLayoutService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PageLayoutService],
    }).compile();

    service = module.get<PageLayoutService>(PageLayoutService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
