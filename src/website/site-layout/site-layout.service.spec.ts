import { Test, TestingModule } from '@nestjs/testing';
import { SiteLayoutService } from './site-layout.service';

describe('SiteLayoutService', () => {
  let service: SiteLayoutService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SiteLayoutService],
    }).compile();

    service = module.get<SiteLayoutService>(SiteLayoutService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
