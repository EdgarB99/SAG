import { Test, TestingModule } from '@nestjs/testing';
import { AlimentacionService } from './alimentacion.service';

describe('AlimentacionService', () => {
  let service: AlimentacionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AlimentacionService],
    }).compile();

    service = module.get<AlimentacionService>(AlimentacionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
