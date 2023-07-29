import { Test, TestingModule } from '@nestjs/testing';
import { VacasService } from './vacas.service';

describe('VacasService', () => {
  let service: VacasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VacasService],
    }).compile();

    service = module.get<VacasService>(VacasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
