import { Test, TestingModule } from '@nestjs/testing';
import { DosificacionService } from './dosificacion.service';

describe('DosificacionService', () => {
  let service: DosificacionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DosificacionService],
    }).compile();

    service = module.get<DosificacionService>(DosificacionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
