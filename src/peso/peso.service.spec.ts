import { Test, TestingModule } from '@nestjs/testing';
import { PesoService } from './peso.service';

describe('PesoService', () => {
  let service: PesoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PesoService],
    }).compile();

    service = module.get<PesoService>(PesoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
